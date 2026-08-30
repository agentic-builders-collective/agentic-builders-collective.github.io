export type PersonRef = string | {
  personId?: string;
  name?: string;
};

export type PersonEntry = {
  data: {
    id: string;
    name: string;
    aliases?: string[];
  };
};

export type EventEntry = {
  id: string;
  data: {
    title: string;
    date: Date | string;
    time?: string;
  };
};

export type ResolvedPersonRef = {
  id?: string;
  name: string;
  href?: string;
};

export function buildPeopleIndex(people: PersonEntry[]) {
  const peopleById = new Map<string, PersonEntry>();

  for (const person of people) {
    const id = person.data.id;
    if (!id) {
      throw new Error(`Person entry "${person.data.name}" is missing an id.`);
    }

    if (peopleById.has(id)) {
      throw new Error(`Duplicate person id "${id}" found in members/organisers.`);
    }

    peopleById.set(id, person);
  }

  return peopleById;
}

export function buildEventIndex(events: EventEntry[]) {
  const eventsById = new Map<string, EventEntry>();

  for (const event of events) {
    if (eventsById.has(event.id)) {
      throw new Error(`Duplicate event id "${event.id}" found.`);
    }

    eventsById.set(event.id, event);
  }

  return eventsById;
}

export function getLinkedEvent(
  eventId: string,
  eventsById: Map<string, EventEntry>,
  context: string,
) {
  const event = eventsById.get(eventId);
  if (!event) {
    throw new Error(`${context} references missing eventId "${eventId}".`);
  }

  return event;
}

export function resolvePersonRefs(
  refs: PersonRef[] | undefined,
  peopleById: Map<string, PersonEntry>,
  context: string,
): ResolvedPersonRef[] {
  return (refs ?? []).map((ref, index) => {
    if (typeof ref === "string") {
      return { name: ref };
    }

    if (ref.personId) {
      const person = peopleById.get(ref.personId);
      if (!person) {
        throw new Error(`${context} reference ${index + 1} uses missing personId "${ref.personId}".`);
      }

      return {
        id: ref.personId,
        name: ref.name?.trim() || person.data.name,
        href: `/community/#${ref.personId}`,
      };
    }

    if (ref.name?.trim()) {
      return { name: ref.name.trim() };
    }

    throw new Error(`${context} reference ${index + 1} must include personId or name.`);
  });
}

export function refsIncludePerson(refs: PersonRef[] | undefined, personId: string) {
  return (refs ?? []).some((ref) => typeof ref !== "string" && ref.personId === personId);
}

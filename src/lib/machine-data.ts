import { getCollection } from "astro:content";
import { buildPeopleIndex, resolvePersonRefs } from "./relations";

const toIsoDate = (value: Date | string) => new Date(value).toISOString();

export const toAbsoluteUrl = (path: string) => new URL(path, "https://www.agenticbuilders.sg").toString();

export async function getPeopleIndex() {
  const [members, organisers] = await Promise.all([
    getCollection("members"),
    getCollection("organisers"),
  ]);

  return buildPeopleIndex([...organisers, ...members]);
}

export async function getEventsData() {
  const events = await getCollection("events");
  return events
    .map((event) => ({
      id: event.id,
      title: event.data.title,
      status: event.data.status,
      kind: event.data.kind,
      date: toIsoDate(event.data.date),
      time: event.data.time,
      venue: event.data.venue,
      venueUrl: event.data.venueUrl,
      registrationUrl: event.data.registrationUrl,
      sponsorName: event.data.sponsorName,
      sponsorUrl: event.data.sponsorUrl,
      tags: event.data.tags,
      speakers: event.data.speakers,
      hosts: event.data.hosts,
      description: event.body,
      url: `/events/#${event.id}`,
    }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export async function getMembersData() {
  const [members, organisers] = await Promise.all([
    getCollection("members"),
    getCollection("organisers"),
  ]);

  return {
    organisers: organisers
      .map((person) => ({
        ...person.data,
        url: `/community/#${person.data.id}`,
      }))
      .sort((a, b) => a.name.localeCompare(b.name)),
    members: members
      .map((person) => ({
        ...person.data,
        url: `/community/#${person.data.id}`,
      }))
      .sort((a, b) => a.name.localeCompare(b.name)),
  };
}

export async function getShowcaseData() {
  const [projects, presentations, events, peopleById] = await Promise.all([
    getCollection("projects"),
    getCollection("presentations"),
    getCollection("events"),
    getPeopleIndex(),
  ]);

  const eventById = new Map(events.map((event) => [event.id, event]));

  return {
    projects: projects
      .map((project) => ({
        id: project.id,
        title: project.data.title,
        summary: project.data.summary,
        date: toIsoDate(project.data.date),
        makers: resolvePersonRefs(project.data.makers, peopleById, `project "${project.id}" makers`),
        builtWith: project.data.builtWith,
        screenshot: project.data.screenshot,
        url: project.data.url,
        github: project.data.github,
        pageUrl: `/showcase/#${project.id}`,
      }))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    presentations: presentations
      .map((presentation) => {
        const event = eventById.get(presentation.data.eventId);
        if (!event) {
          throw new Error(`presentation "${presentation.data.id}" references missing eventId "${presentation.data.eventId}".`);
        }

        return {
          id: presentation.data.id,
          title: presentation.data.title,
          summary: presentation.data.summary,
          speakers: resolvePersonRefs(presentation.data.speakers, peopleById, `presentation "${presentation.data.id}" speakers`),
          eventId: event.id,
          eventTitle: event.data.title,
          eventDate: toIsoDate(event.data.date),
          tags: presentation.data.tags,
          url: presentation.data.url,
          slidesUrl: presentation.data.slidesUrl,
          videoUrl: presentation.data.videoUrl,
          pageUrl: `/showcase/#${presentation.data.id}`,
        };
      })
      .sort((a, b) => new Date(b.eventDate).getTime() - new Date(a.eventDate).getTime()),
  };
}

export async function getFaqData() {
  const faq = await getCollection("faq");
  return faq
    .map((item) => item.data)
    .sort((a, b) => a.order - b.order);
}

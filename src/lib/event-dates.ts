type EventDate = Date | string;

export const toUtcDate = (value: EventDate) => {
  const date = value instanceof Date ? value : new Date(value);
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
};

export const todayUtc = (now = new Date()) =>
  new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));

export const isOnOrAfterToday = (value: EventDate, now = new Date()) =>
  toUtcDate(value).getTime() >= todayUtc(now).getTime();

export const isBeforeToday = (value: EventDate, now = new Date()) =>
  toUtcDate(value).getTime() < todayUtc(now).getTime();

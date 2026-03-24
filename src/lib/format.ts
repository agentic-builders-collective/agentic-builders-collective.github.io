const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "long"
});

const dateTimeFormatter = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "medium",
  timeStyle: "short"
});

export function formatDate(date?: Date) {
  return date ? dateFormatter.format(date) : null;
}

export function formatDateTime(date?: Date) {
  return date ? dateTimeFormatter.format(date) : null;
}

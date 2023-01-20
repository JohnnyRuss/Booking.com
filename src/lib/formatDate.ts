export default function formatDate(date: Date | undefined): string {
  if (!date) return "";
  
  return new Intl.DateTimeFormat("en-us", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(date);
}

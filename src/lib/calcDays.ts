export default function calcDays(startDate: Date, endDate: Date): number {
  const msPerDay = 1000 * 60 * 60 * 24;
  const timeDiff = Math.abs(
    new Date(endDate).getTime() - new Date(startDate).getTime()
  );

  const daysDiff = Math.ceil(timeDiff / msPerDay);

  return daysDiff;
}

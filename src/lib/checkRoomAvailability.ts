export default function checkRoomAvailability(
  userDateRange: Date[],
  roomReservedDates: { start: Date | string; end: Date | string }[]
) {
  const userRangeStart = userDateRange[0]
    ? new Date(userDateRange[0]).getTime()
    : new Date().getTime();
    
  const userRangeEnd = userDateRange[1]
    ? new Date(userDateRange[1]).getTime()
    : new Date().getTime();

  const isAvailable = roomReservedDates
    .map(({ start, end }) => {
      const rStart = new Date(start).getTime();
      const rEnd = new Date(end).getTime();

      if (userRangeStart <= rStart && userRangeEnd >= rStart)
        return true; // reservation between userRange
      else if (userRangeStart <= rEnd && userRangeEnd >= rEnd)
        return true; // user range overlaps reservation
      else if (userRangeStart > rStart && userRangeEnd < rEnd)
        return true; // user ranges between reservation
      else return false; // is not overlap
    })
    .every((availability) => availability === false);

  return isAvailable;
}

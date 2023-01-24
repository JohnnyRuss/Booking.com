interface GeneratorPropT {
  maxPrice: number;
  minPrice: number;
  destination: string;
  type: string;
  city: string;
  country: string;
}

export default function generateHotelQuery({
  city,
  country,
  destination,
  type,
  maxPrice,
  minPrice,
}: GeneratorPropT): string {
  const queries = [];

  city && queries.push(`city=${city}`);
  country && queries.push(`country=${country}`);
  destination && queries.push(`destination=${destination}`);
  type && queries.push(`type=${type}`);
  minPrice && queries.push(`minPrice[gte]=${minPrice}`);
  maxPrice && queries.push(`minPrice[lte]=${maxPrice}`);

  return queries[0] ? `?${queries.join("&")}` : "";
}

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useHotelsQuery } from "../hooks";

import Hotel from "../components/Hotel/Hotel";

const HotelPage: React.FC = () => {
  const { hotelId } = useParams();

  const { getHotelQuery } = useHotelsQuery();

  useEffect(() => {
    hotelId && getHotelQuery(hotelId);
  }, [hotelId]);

  return <Hotel />;
};

export default HotelPage;

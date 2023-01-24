import React from "react";
import { useLocation } from "react-router-dom";

import styles from "./footer.module.scss";
import { Button } from "../Layouts";

const Footer: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <>
      {!["/register", "/login"].includes(pathname) && (
        <footer className={styles.footer}>
          <div className={styles.footerHead}>
            <div className={styles.footerHeadWrapper}>
              <Button type="tertiary">List your property</Button>
              <ul className={styles.footerHeadList}>
                <li>Mobile version</li>
                <li>Your account</li>
                <li>Make changes online to your booking</li>
                <li>Customer Service Help</li>
                <li>Become an affilate</li>
                <li>Booking.com for business</li>
              </ul>
            </div>
          </div>
          <div className={styles.footerWrapper}>
            <ul className={styles.listFragment}>
              <li>Countries</li>
              <li>Regions</li>
              <li>Cities</li>
              <li>Districts</li>
              <li>Airports</li>
              <li>Hotels</li>
              <li>Place of interests</li>
            </ul>
            <ul className={styles.listFragment}>
              <li>Homes</li>
              <li>Apartments</li>
              <li>Resorts</li>
              <li>Villas</li>
              <li>Hostels</li>
              <li>B&Bs</li>
              <li>Guest houses</li>
            </ul>
            <ul className={styles.listFragment}>
              <li>Unique places to stay</li>
              <li>Reviews</li>
              <li>Travel communities</li>
              <li>Seasonal and holiday deals</li>
            </ul>
            <ul className={styles.listFragment}>
              <li>Booking.com for Travel Agents</li>
            </ul>
            <ul className={styles.listFragment}>
              <li>About Booking.com</li>
              <li>Customer Service Help</li>
              <li>Partner Help</li>
              <li>Careers</li>
              <li>Sustainability</li>
              <li>Press Center</li>
              <li>Safety Resource Center</li>
              <li>Investor relations</li>
              <li>Terms & Conditions</li>
              <li>Partner dispute</li>
              <li>How We Work</li>
              <li>Privacy & cookie statement</li>
              <li>MSA statement</li>
              <li>Corporate contact</li>
            </ul>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;

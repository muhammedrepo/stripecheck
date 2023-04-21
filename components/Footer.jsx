import React, { useEffect, useState } from 'react';
import {
  AiFillAmazonSquare,
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div className="footer-container">
      <p>&copy; {currentYear} StripeCheck. All rights reserved.</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiFillFacebook />
        <AiFillAmazonSquare />
      </p>
    </div>
  );
};

export default Footer;

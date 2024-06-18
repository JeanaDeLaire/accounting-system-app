import React, { Dispatch, SetStateAction } from "react";
import { OKAY, ALERT } from "../../shared/constants";
import "./Banner.css";

interface Props {
  message: string;
  setIsBannerOpen: Dispatch<SetStateAction<boolean>>;
  isAlert: boolean;
}

const Banner: React.FC<Props> = ({ message, setIsBannerOpen, isAlert }) => {
  return (
    <div
      className="banner"
      style={isAlert ? { backgroundColor: ALERT } : { backgroundColor: OKAY }}
    >
      <p>{message}</p>
      <button onClick={() => setIsBannerOpen(false)}>Close</button>
    </div>
  );
};

export default Banner;

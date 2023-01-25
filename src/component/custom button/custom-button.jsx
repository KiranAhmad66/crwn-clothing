import React from "react";
import "./custom-button.styles.scss";
export const CustomButton = ({ children, isGoogleSignIn, ...otherprops }) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    {...otherprops}
  >
    {children}
  </button>
);

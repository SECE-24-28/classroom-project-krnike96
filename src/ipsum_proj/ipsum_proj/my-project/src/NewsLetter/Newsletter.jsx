import React from "react";
import {
  NewsletterContainer,
  EmailBox,
  EmailInput,
  EmailBtn,
} from "./NewsletterStyle";

const Newsletter = () => {
  return (
    <div
      className="parent"
      style={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <NewsletterContainer>
        <h1>Subscribe to our newsletter</h1>
        <p>Lorem Ipsum is simply dummy text of the printing.</p>

        <EmailBox>
          <EmailInput placeholder="Email Address" />
          <EmailBtn>Sign in</EmailBtn>
        </EmailBox>
      </NewsletterContainer>
    </div>
  );
};

export default Newsletter;

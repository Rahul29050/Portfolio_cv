import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="section contact center" id="contact">
      <h2 className="section__title">Contact</h2>
      <a href="mailto:pariharrahul298@gmail.com ">
        <span type="button" className="btn btn--outline">Email me</span>
      </a>
    </section>
  );
};

export default Contact;

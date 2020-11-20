import React from "react";

const ContactUs = () => {
  return (
    <>
      <h1>Contact Us</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        {/* "pattern" is a regex validation check that the number matches the pattern we entered */}
        <input
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="Phone Number"
        />
        <textarea
          type="text"
          rows="10"
          cols="80"
          placeholder="Description of Service Needed"
        />
      </form>
    </>
  );
};

export default ContactUs;

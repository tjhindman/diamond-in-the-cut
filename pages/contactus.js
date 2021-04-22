import emailjs from "emailjs-com";
import Head from "next/head";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { NavBar } from "../components";

const styles = {
  formWrap: {
    width: "50vw",
    margin: "0 auto",
  },
};

const ContactUs = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "diamond_cut_service",
        "diamond_cut_template",
        e.target,
        "user_7OS5Lw8Fs2kCclAtHVjUv"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div
      style={{
        height: "100vh",
        paddingTop: "10vh",
        backgroundColor: "lightgray",
      }}
    >
      <Head>
        <title>Contact Us | Diamond in the Cut</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <h1
        style={{
          width: "50vw",
          margin: "0 auto",
          paddingTop: "2%",
          fontFamily: "'Crimson Text', serif",
        }}
      >
        Contact Us
      </h1>
      <hr style={{ width: "40vw" }} />
      <Form style={styles.formWrap} onSubmit={sendEmail}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="Name" name="name" />
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" name="email" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="Phone Number"
              name="number"
            />
          </Form.Group>
        </Form.Row>
        {/* "pattern" is a regex validation check that the number matches the pattern we entered */}
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows="10"
            placeholder="Description of Service Needed"
            name="description"
          />
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.File />
          </Form.Group>
          <Form.Group
            as={Col}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Button type="submit" style={{ backgroundColor: "darkblue" }}>
              Submit
            </Button>
          </Form.Group>
        </Form.Row>
      </Form>
    </div>
  );
};

export default ContactUs;

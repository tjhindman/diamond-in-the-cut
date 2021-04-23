import emailjs from "emailjs-com";
import Head from "next/head";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { NavBar } from "../components";

import styles from "../styles/ContactUs.module.css";

const ContactUs = (props) => {
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
    <div className={styles.contactWrap}>
      <Head>
        <title>Contact Us | Diamond in the Cut</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <h1 className={styles.contactHeader}>Contact Us</h1>
      <hr style={{ width: "40vw" }} />
      <Form className={styles.formWrap} onSubmit={sendEmail}>
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

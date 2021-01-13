import Head from 'next/head'

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
  return (
    <div style={{ paddingTop: "10vh" }}>
    <Head>
      <title>Contact Us | Diamond in the Cut</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <NavBar />
      <h1 style={{ width: "50vw", margin: "0 auto" }}>Contact Us</h1>
      <Form style={styles.formWrap}>
        <hr />
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="Name" />
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="Phone Number"
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
            <Button type="submit">Submit</Button>
          </Form.Group>
        </Form.Row>
      </Form>
    </div>
  );
};

export default ContactUs;

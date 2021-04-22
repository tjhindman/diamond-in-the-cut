import React from "react";
import Card from "react-bootstrap/Card";

import styles from "./ProjectCard.module.css";

export const ProjectCard = (props) => {
  return (
    <>
      <Card className={styles.cardWrap}>
        <Card.Img
          className={styles.card}
          src={props.image}
          title={props.project}
        />
        <Card.Body>
          <Card.Text variant="body2" color="textSecondary" component="p">
            {props.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

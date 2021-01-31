import React from "react";
import Card from "react-bootstrap/Card";

import styles from "./ProjectCard.module.css";

export const ProjectCard = () => {
  return (
    <>
      <Card className={styles.cardWrap}>
        <Card.Img className={styles.card} image="" title="Project example" />
        <Card.Body>
          {/* <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography> */}
          <Card.Text variant="body2" color="textSecondary" component="p">
            Short one line project description
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import styles from "./ProjectCard.module.css";

export const ProjectCard = () => {
  return (
    <>
      <Card className={styles.cardWrap}>
        <CardActionArea>
          <CardMedia className={styles.card} image="" title="Project example" />
          <CardContent>
            {/* <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography> */}
            <Typography variant="body2" color="textSecondary" component="p">
              Short one line project description
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

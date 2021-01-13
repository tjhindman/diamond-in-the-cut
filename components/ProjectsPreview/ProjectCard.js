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
          <CardMedia className={styles.card} image="" title="Contemplative TJ" />
          <CardContent>
            {/* <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography> */}
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

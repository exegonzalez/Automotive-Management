import React from 'react';

//************************************ Components Material-UI **************************************
import { 
  makeStyles, 
  Card, 
  CardActionArea, 
  CardContent, 
  CardMedia, 
  ButtonBase,
  Typography,
  Box
} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        backgroundColor: "snow",
      },
    media: {
      height: 140,
      width: 425,
    },
  });

export default function CardHome(props) {
    const classes = useStyles();

    return (
      <Box boxShadow={3}>
        <Card className={classes.root}>
          <ButtonBase href={props.href}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={props.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {props.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </ButtonBase>
        </Card>
      </Box>
    );
}

import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 180,
  },
  root2: {
    flexGrow: 1,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  const theme = React.useMemo(() =>
    createMuiTheme({
      palette: {
        type: "dark",
      },
    })
  );

  return (
    <section id="portfolio">
      <div className="portfolio-cards">
        <ThemeProvider theme={theme}>
          <Grid container spacing={3}>
            <Grid item xs>
              <Card className={classes.root}>
                <CardActionArea>
                  <a
                    href="https://github.com/DinuWije/EZventory"
                    target="_blank"
                  >
                    <CardMedia
                      className={classes.media}
                      image="/images/portfolio/EZventoryPic.jpg"
                      title="EZventory App"
                    />
                  </a>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h2"
                      component="h2"
                      color="textPrimary"
                    >
                      EZventory App
                    </Typography>
                    <Typography
                      variant="h5"
                      color="textSecondary"
                      component="p"
                    >
                      Frontend of inventory management app for small
                      organizations. Keeps track of user input and makes HTTP
                      requests to save data on the backend.
                    </Typography>
                    <br></br>
                    <Typography variant="h6" color="textPrimary">
                      Kotlin | Android Studio | HTTP Requests
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="large"
                    href="https://play.google.com/store/apps/details?id=com.dinuw.firstapp"
                    target="_blank"
                    color="secondary"
                  >
                    Google Play
                  </Button>
                  <Button
                    size="large"
                    href="https://github.com/DinuWije/EZventory"
                    target="_blank"
                    color="secondary"
                  >
                    GitHub
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs>
              <Card className={classes.root}>
                <CardActionArea>
                  <a
                    href="https://github.com/DinuWije/InventoryAppBackend"
                    target="_blank"
                  >
                    <CardMedia
                      className={classes.media}
                      image="/images/portfolio/appBackend.jpg"
                      title="App Backend"
                    />
                  </a>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h2"
                      component="h2"
                      color="textPrimary"
                    >
                      App Backend
                    </Typography>
                    <Typography
                      variant="h5"
                      color="textSecondary"
                      component="p"
                    >
                      Handles user authentication tokens, HTTP requests, and a
                      MySQL database. The backend was deployed onto an AWS EC2
                      Instance with the help of Docker.
                    </Typography>
                    <br></br>
                    <Typography variant="h6" color="textPrimary">
                      Python | Flask | REST API | SQLAlchemy | MySQL | Docker |
                      AWS
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="large"
                    href="https://github.com/DinuWije/InventoryAppBackend"
                    target="_blank"
                    color="secondary"
                  >
                    GitHub
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs>
              <Card className={classes.root}>
                <CardActionArea>
                  <a
                    href="https://github.com/DinuWije/DungeonDash"
                    target="_blank"
                  >
                    <CardMedia
                      className={classes.media}
                      image="/images/portfolio/dungeonDash.jpg"
                      title="Dungeon Dash"
                    />
                  </a>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h2"
                      component="h2"
                      color="textPrimary"
                    >
                      Dungeon Dash
                    </Typography>
                    <Typography
                      variant="h5"
                      color="textSecondary"
                      component="p"
                    >
                      An infinite, arcade-style java game. Heavy focus on object
                      oriented programming principles (encapsulation,
                      abstraction, inheritance).
                    </Typography>
                    <br></br>
                    <Typography variant="h6" color="textPrimary">
                      Java | OOP
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="large"
                    href="https://github.com/DinuWije/DungeonDash"
                    target="_blank"
                    color="secondary"
                  >
                    GitHub
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs>
              <Card className={classes.root}>
                <CardActionArea>
                  <a
                    href="https://github.com/DinuWije/EZventory"
                    target="_blank"
                  >
                    <CardMedia
                      className={classes.media}
                      image="/images/portfolio/personalWeb.jpg"
                      title="Personal Website"
                    />
                  </a>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h2"
                      component="h2"
                      color="textPrimary"
                    >
                      Personal Website
                    </Typography>
                    <Typography
                      variant="h5"
                      color="textSecondary"
                      component="p"
                    >
                      Frontend of inventory management app for small
                      organizations. Keeps track of user input and makes HTTP
                      requests to save data on the backend.
                    </Typography>
                    <br></br>
                    <Typography variant="h6" color="textPrimary">
                      Kotlin | Android Studio | HTTP Requests
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    disabled
                    size="large"
                    href=""
                    target="_blank"
                    color="secondary"
                  >
                    You're already here!
                  </Button>
                  <Button
                    size="large"
                    href="https://github.com/DinuWije/EZventory"
                    target="_blank"
                    color="secondary"
                  >
                    GitHub
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </ThemeProvider>
      </div>
    </section>
  );
}

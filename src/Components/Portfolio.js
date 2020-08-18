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
    minWidth: 300,
    maxHeight: 455,
    minHeight: 455,
  },
  media: {
    height: 180,
  },
  smallArea: {
    maxHeight: 230,
    minHeight: 230,
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
      <br />
      <h1>Check out my programming projects!</h1>
      <div className="portfolio-cards">
        <ThemeProvider theme={theme}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Card className={classes.root}>
                <a href="https://github.com/DinuWije/EZventory" target="_blank">
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="/images/portfolio/EZventoryPic.jpg"
                      title="EZventory App"
                    />

                    <CardContent className={classes.smallArea}>
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
                        requests to save data on the backend. Try out the app on
                        the Google Play Store!
                      </Typography>
                      <br></br>
                      <Typography variant="h6" color="textPrimary">
                        Kotlin | Android Studio | HTTP Requests
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </a>
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
            <Grid item xs={3}>
              <Card className={classes.root}>
                <a
                  href="https://github.com/DinuWije/InventoryAppBackend"
                  target="_blank"
                >
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="/images/portfolio/appBackend.jpg"
                      title="EZventory Backend"
                    />

                    <CardContent className={classes.smallArea}>
                      <Typography
                        gutterBottom
                        variant="h2"
                        component="h2"
                        color="textPrimary"
                      >
                        EZventory Backend
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
                        Python | Flask | REST API | SQLAlchemy | MySQL | Docker
                        | AWS
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </a>
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
            <Grid item xs={3}>
              <Card className={classes.root}>
                <a
                  href="https://github.com/DinuWije/DungeonDash"
                  target="_blank"
                >
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="/images/portfolio/dungeonDash.jpg"
                      title="Dungeon Dash"
                    />

                    <CardContent className={classes.smallArea}>
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
                        An infinite, arcade-style java game. Heavy focus on
                        object oriented programming principles (encapsulation,
                        abstraction, inheritance).
                      </Typography>
                      <br></br>
                      <Typography variant="h6" color="textPrimary">
                        Java | OOP
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </a>
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
            <Grid item xs={3}>
              <Card className={classes.root}>
                <a
                  href="https://github.com/DinuWije/DinuWije.github.io"
                  target="_blank"
                >
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="/images/portfolio/personalWeb.jpg"
                      title="Personal Website"
                    />

                    <CardContent className={classes.smallArea}>
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
                        My react-based personal website, forked from an existing
                        template.
                      </Typography>
                      <br></br>
                      <br></br>
                      <Typography variant="h6" color="textPrimary">
                        Javascript | React | CSS
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </a>
                <CardActions>
                  <Button
                    size="large"
                    href="https://github.com/DinuWije/DinuWije.github.io"
                    target="_blank"
                    color="secondary"
                  >
                    GitHub
                  </Button>
                  <Button
                    disabled
                    size="large"
                    href=""
                    target="_blank"
                    color="secondary"
                  >
                    You're already here!
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            {/* Second Row */}
            <Grid item xs={3}>
              <Card className={classes.root}>
                <a href="https://github.com/DinuWije/sPCtrum" target="_blank">
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="/images/portfolio/sPCtrum.jpg"
                      title="sPCtrum App"
                    />

                    <CardContent className={classes.smallArea}>
                      <Typography
                        gutterBottom
                        variant="h2"
                        component="h2"
                        color="textPrimary"
                      >
                        sPCtrum
                      </Typography>
                      <Typography
                        variant="h5"
                        color="textSecondary"
                        component="p"
                      >
                        Group of four developed an app that adjusts colors of
                        photos to improve visibility for people with
                        colorblindness. Winner of the ‘Best First-Time Hacker
                        Award’ at the PChacks hackathon, 2019.
                      </Typography>
                      <br></br>
                      <Typography variant="h6" color="textPrimary">
                        Java | Android Studio
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </a>
                <CardActions>
                  <Button
                    size="large"
                    href="https://github.com/DinuWije/sPCtrum"
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

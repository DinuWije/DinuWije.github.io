import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Chip from "@material-ui/core/Chip";
import GitHubIcon from "@material-ui/icons/GitHub";
import ShopIcon from "@material-ui/icons/Shop";
import LinkIcon from "@material-ui/icons/Link";
import LanguageIcon from "@material-ui/icons/Language";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";

const StyledChip = styled(Chip)`
  color: "#2da6ce";
  bord .MuiChip-root {
    color: "#2da6ce";
  }
  .MuiChip-label {
    font-size: 13px;
    line-height: 24px;
    color: "#2da6ce";
  }
`;

const useStyles = makeStyles((theme) => ({
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
  chip: {
    marginTop: "16px",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

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
      <h1>Check out my programming projects!</h1>
      <div className="portfolio-cards">
        <ThemeProvider theme={theme}>
          <Grid container spacing={3}>
            <Grid item xs>
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
                        Inventory management app, available on the Google Play
                        Store! Features: CRUD operations on inventory items, JWT
                        auth tokens, MySQL DB; Dockerized/deployed on AWS EC2.
                      </Typography>

                      <div className={classes.chip}>
                        <StyledChip
                          label="Kotlin"
                          size="small"
                          variant="outlined"
                          style={{ backgroundColor: "#2da6ce" }}
                        />
                        <StyledChip
                          label="Android Studio"
                          size="small"
                          variant="outlined"
                          style={{ backgroundColor: "#2da6ce" }}
                        />
                        <StyledChip
                          label="REST API"
                          size="small"
                          variant="outlined"
                          style={{ backgroundColor: "#2da6ce" }}
                        />
                        <StyledChip
                          label="AWS"
                          size="small"
                          variant="outlined"
                          style={{ backgroundColor: "#2da6ce" }}
                        />
                        <StyledChip
                          label="Python"
                          size="small"
                          variant="outlined"
                          style={{ backgroundColor: "#2da6ce" }}
                        />
                        <StyledChip
                          label="Flask"
                          size="small"
                          variant="outlined"
                          style={{ backgroundColor: "#2da6ce" }}
                        />
                        <StyledChip
                          label="SQLAlchemy"
                          size="small"
                          variant="outlined"
                          style={{ backgroundColor: "#2da6ce" }}
                        />
                        <StyledChip
                          label="Docker"
                          size="small"
                          variant="outlined"
                          style={{ backgroundColor: "#2da6ce" }}
                        />
                        <br />
                      </div>
                    </CardContent>
                  </CardActionArea>
                </a>
                <CardActions>
                  <Button
                    href="https://github.com/DinuWije/EZventory"
                    target="_blank"
                    style={{ height: "40px", color: "#2da6ce" }}
                    startIcon={
                      <GitHubIcon
                        style={{ height: "40px", color: "#2da6ce" }}
                      />
                    }
                  />
                  <Button
                    href="https://play.google.com/store/apps/details?id=com.dinuw.firstapp"
                    target="_blank"
                    style={{ height: "40px", color: "#2da6ce" }}
                    startIcon={
                      <ShopIcon style={{ height: "40px", color: "#2da6ce" }} />
                    }
                  >
                    Google Play
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            {/* <Grid item xs>
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
                      <div className={classes.chip}>
                        <StyledChip
                          label="Python"
                          size="small"
                          variant="outlined"
                          style={{ backgroundColor: "#2da6ce" }}
                        />
                        <StyledChip
                          label="Flask"
                          size="small"
                          variant="outlined"
                          style={{ backgroundColor: "#2da6ce" }}
                        />
                        <StyledChip
                          label="REST API"
                          size="small"
                          variant="outlined"
                          style={{ backgroundColor: "#2da6ce" }}
                        />
                        <StyledChip
                          label="SQLAlchemy"
                          size="small"
                          variant="outlined"
                          style={{ backgroundColor: "#2da6ce" }}
                        />
                        <StyledChip
                          label="MySQL"
                          size="small"
                          variant="outlined"
                          style={{ backgroundColor: "#2da6ce" }}
                        />
                        <StyledChip
                          label="Docker"
                          size="small"
                          variant="outlined"
                          style={{ backgroundColor: "#2da6ce" }}
                        />
                        <StyledChip
                          label="AWS"
                          size="small"
                          variant="outlined"
                          style={{ backgroundColor: "#2da6ce" }}
                        />
                        <StyledChip
                          label="Postman"
                          size="small"
                          variant="outlined"
                          style={{ backgroundColor: "#2da6ce" }}
                        />
                      </div>
                    </CardContent>
                  </CardActionArea>
                </a>
                <CardActions>
                  <br />
                  <IconButton
                    minHeight="30px"
                    style={{ width: "30px", height: "30px", color: "#2da6ce" }}
                    href="https://github.com/DinuWije/InventoryAppBackend"
                    target="_blank"
                  >
                    <GitHubIcon
                      style={{
                        width: "30px",
                        height: "30px",
                        padding: "3px",
                        color: "#2da6ce",
                      }}
                    />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid> */}
            <Grid item xs>
              <Card className={classes.root}>
                <a
                  href="https://github.com/uwblueprint/shoe-project"
                  target="_blank"
                >
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="/images/portfolio/shoeProject.jpg"
                      title="Shoe Project"
                    />

                    <CardContent className={classes.smallArea}>
                      <Typography
                        gutterBottom
                        variant="h2"
                        component="h2"
                        color="textPrimary"
                      >
                        The Shoe Project
                      </Typography>
                      <Typography
                        variant="h5"
                        color="textSecondary"
                        component="p"
                      >
                        Web App developed for a non-profit organization.
                        Frontend: MaterialUI & Mapbox API. Backend: HTTP
                        requests & authentication. With Heroku, Postgres & AWS
                        S3.
                      </Typography>
                      <div className={classes.chip}>
                        <StyledChip
                          label="Typescript"
                          size="small"
                          variant="outlined"
                          style={{ backgroundColor: "#2da6ce" }}
                        />
                        <StyledChip
                          label="Golang"
                          size="small"
                          variant="outlined"
                          style={{ backgroundColor: "#2da6ce" }}
                        />
                        <StyledChip
                          label="React"
                          size="small"
                          variant="outlined"
                          style={{ backgroundColor: "#2da6ce" }}
                        />
                        <StyledChip
                          label="Git"
                          size="small"
                          variant="outlined"
                          style={{ backgroundColor: "#2da6ce" }}
                        />
                        <StyledChip
                          label="Heroku"
                          size="small"
                          variant="outlined"
                          style={{ backgroundColor: "#2da6ce" }}
                        />
                        <StyledChip
                          label="AWS"
                          size="small"
                          variant="outlined"
                          style={{ backgroundColor: "#2da6ce" }}
                        />
                        <StyledChip
                          label="UX/UI"
                          size="small"
                          variant="outlined"
                          style={{ backgroundColor: "#2da6ce" }}
                        />
                        <StyledChip
                          label="Docker"
                          size="small"
                          variant="outlined"
                          style={{ backgroundColor: "#2da6ce" }}
                        />
                      </div>
                    </CardContent>
                  </CardActionArea>
                </a>
                <CardActions>
                  <Button
                    href="https://github.com/uwblueprint/shoe-project"
                    target="_blank"
                    style={{ height: "40px", color: "#2da6ce" }}
                    startIcon={
                      <GitHubIcon
                        style={{ height: "40px", color: "#2da6ce" }}
                      />
                    }
                  />
                  <Button
                    href="http://map.theshoeproject.online/"
                    target="_blank"
                    style={{ height: "40px", color: "#2da6ce" }}
                    startIcon={
                      <LinkIcon style={{ height: "40px", color: "#2da6ce" }} />
                    }
                  >
                    Live Demo
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs>
              <Card className={classes.root}>
                <a
                  href="https://github.com/DinuWije/FlickPicker"
                  target="_blank"
                >
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="/images/portfolio/flickPicker.jpg"
                      title="FlickPicker"
                    />

                    <CardContent className={classes.smallArea}>
                      <Typography
                        gutterBottom
                        variant="h2"
                        component="h2"
                        color="textPrimary"
                      >
                        FlickPicker
                      </Typography>
                      <Typography
                        variant="h5"
                        color="textSecondary"
                        component="p"
                      >
                        A tool to help you and your indecisive friends pick a
                        movie or show to watch! Typescript frontend with React
                        Native for cross-device compatibility. Hosted on an AWS
                        S3 bucket.
                      </Typography>
                      <div className={classes.chip}>
                        <StyledChip
                          label="Typescript"
                          size="small"
                          variant="outlined"
                          style={{ backgroundColor: "#2da6ce" }}
                        />
                        <StyledChip
                          label="React Native"
                          size="small"
                          variant="outlined"
                          style={{ backgroundColor: "#2da6ce" }}
                        />
                        <StyledChip
                          label="Redux"
                          size="small"
                          variant="outlined"
                          style={{ backgroundColor: "#2da6ce" }}
                        />
                        <StyledChip
                          label="AWS S3"
                          size="small"
                          variant="outlined"
                          style={{ backgroundColor: "#2da6ce" }}
                        />
                      </div>
                    </CardContent>
                  </CardActionArea>
                </a>
                <CardActions>
                  <Button
                    href="https://github.com/DinuWije/FlickPicker"
                    target="_blank"
                    style={{ height: "40px", color: "#2da6ce" }}
                    startIcon={
                      <GitHubIcon
                        style={{ height: "40px", color: "#2da6ce" }}
                      />
                    }
                  />
                  <Button
                    href="http://flick-picker.s3-website.us-east-2.amazonaws.com/"
                    target="_blank"
                    style={{ height: "40px", color: "#2da6ce" }}
                    startIcon={
                      <LinkIcon style={{ height: "40px", color: "#2da6ce" }} />
                    }
                  >
                    Live Demo
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs>
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
                        My react-based personal website with MaterialUI
                        Components and CSS Styling.
                      </Typography>
                      <br></br>
                      <div className={classes.chip}>
                        <StyledChip
                          label="Javascript"
                          size="small"
                          variant="outlined"
                          style={{ backgroundColor: "#2da6ce" }}
                        />
                        <StyledChip
                          label="React"
                          size="small"
                          variant="outlined"
                          style={{ backgroundColor: "#2da6ce" }}
                        />
                        <StyledChip
                          label="CSS"
                          size="small"
                          variant="outlined"
                          style={{ backgroundColor: "#2da6ce" }}
                        />
                      </div>
                    </CardContent>
                  </CardActionArea>
                </a>
                <CardActions>
                  <br />
                  <IconButton
                    minHeight="30px"
                    style={{ width: "30px", height: "30px", color: "#2da6ce" }}
                    href="https://github.com/DinuWije/DinuWije.github.io"
                    target="_blank"
                  >
                    <GitHubIcon
                      style={{
                        width: "30px",
                        height: "30px",
                        padding: "3px",
                        color: "#2da6ce",
                      }}
                    />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
            {/* Second Row */}
            <Grid item xs>
              <Card className={classes.root}>
                <a href="https://github.com/DinuWije/tracyZ" target="_blank">
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="/images/portfolio/tracyZ.jpg"
                      title="tracyZ"
                    />

                    <CardContent className={classes.smallArea}>
                      <Typography
                        gutterBottom
                        variant="h2"
                        component="h2"
                        color="textPrimary"
                      >
                        tracyZ
                      </Typography>
                      <Typography
                        variant="h5"
                        color="textSecondary"
                        component="p"
                      >
                        A WebApp tracking user hand movements with Tensorflow to
                        draw on imported PDFs. Intended to give educators a
                        whiteboard-like experience using a webcam.
                      </Typography>
                      <div className={classes.chip}>
                        <StyledChip
                          label="RamHacks 2020"
                          size="small"
                          variant="outlined"
                          style={{ backgroundColor: "#2da6ce" }}
                        />
                        <StyledChip
                          label="Tensorflow"
                          size="small"
                          variant="outlined"
                          style={{ backgroundColor: "#2da6ce" }}
                        />
                        <StyledChip
                          label="React"
                          size="small"
                          variant="outlined"
                          style={{ backgroundColor: "#2da6ce" }}
                        />
                        <StyledChip
                          label="Javascript"
                          size="small"
                          variant="outlined"
                          style={{ backgroundColor: "#2da6ce" }}
                        />
                      </div>
                    </CardContent>
                  </CardActionArea>
                </a>
                <CardActions>
                  <br />
                  <IconButton
                    minHeight="30px"
                    style={{ width: "30px", height: "30px", color: "#2da6ce" }}
                    href="https://github.com/DinuWije/tracyZ"
                    target="_blank"
                  >
                    <GitHubIcon
                      style={{
                        width: "30px",
                        height: "30px",
                        padding: "3px",
                        color: "#2da6ce",
                      }}
                    />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs>
              <Card className={classes.root}>
                <a
                  href="https://github.com/DinuWije/SentiJournal"
                  target="_blank"
                >
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="/images/portfolio/sentiJournal.jpg"
                      title="SentiJournal"
                    />

                    <CardContent className={classes.smallArea}>
                      <Typography
                        gutterBottom
                        variant="h2"
                        component="h2"
                        color="textPrimary"
                      >
                        SentiJournal
                      </Typography>
                      <Typography
                        variant="h5"
                        color="textSecondary"
                        component="p"
                      >
                        Android app using Google NLP Sentiment Analysis to gauge
                        emotions from user journal entries. Provides a dashboard
                        of mental health data to users’ caretakers.
                      </Typography>
                      <div className={classes.chip}>
                        <StyledChip
                          label="MedHacks 2020"
                          size="small"
                          variant="outlined"
                          style={{ backgroundColor: "#2da6ce" }}
                        />
                        <StyledChip
                          label="NLP"
                          size="small"
                          variant="outlined"
                          style={{ backgroundColor: "#2da6ce" }}
                        />
                        <StyledChip
                          label="Python"
                          size="small"
                          variant="outlined"
                          style={{ backgroundColor: "#2da6ce" }}
                        />
                        <StyledChip
                          label="Kotlin"
                          size="small"
                          variant="outlined"
                          style={{ backgroundColor: "#2da6ce" }}
                        />
                        <StyledChip
                          label="Android"
                          size="small"
                          variant="outlined"
                          style={{ backgroundColor: "#2da6ce" }}
                        />
                      </div>
                    </CardContent>
                  </CardActionArea>
                </a>
                <CardActions>
                  <br />
                  <IconButton
                    minHeight="30px"
                    style={{ width: "30px", height: "30px", color: "#2da6ce" }}
                    href="https://github.com/DinuWije/SentiJournal"
                    target="_blank"
                  >
                    <GitHubIcon
                      style={{
                        width: "30px",
                        height: "30px",
                        padding: "3px",
                        color: "#2da6ce",
                      }}
                    />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs>
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
                      <div className={classes.chip}>
                        <StyledChip
                          label="Java"
                          size="small"
                          variant="outlined"
                          style={{ backgroundColor: "#2da6ce" }}
                        />
                        <StyledChip
                          label="Android Studio"
                          size="small"
                          variant="outlined"
                          style={{ backgroundColor: "#2da6ce" }}
                        />
                      </div>
                    </CardContent>
                  </CardActionArea>
                </a>
                <CardActions>
                  <br />
                  <IconButton
                    minHeight="30px"
                    style={{ width: "30px", height: "30px", color: "#2da6ce" }}
                    href="https://github.com/DinuWije/sPCtrum"
                    target="_blank"
                  >
                    <GitHubIcon
                      style={{
                        width: "30px",
                        height: "30px",
                        padding: "3px",
                        color: "#2da6ce",
                      }}
                    />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs>
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
                      <div className={classes.chip}>
                        <StyledChip
                          label="Java"
                          size="small"
                          variant="outlined"
                          style={{ backgroundColor: "#2da6ce" }}
                        />
                        <StyledChip
                          label="OOP"
                          size="small"
                          variant="outlined"
                          style={{ backgroundColor: "#2da6ce" }}
                        />
                      </div>
                    </CardContent>
                  </CardActionArea>
                </a>
                <CardActions>
                  <br />
                  <IconButton
                    minHeight="30px"
                    style={{ width: "30px", height: "30px", color: "#2da6ce" }}
                    href="https://github.com/DinuWije/DungeonDash"
                    target="_blank"
                  >
                    <GitHubIcon
                      style={{
                        width: "30px",
                        height: "30px",
                        padding: "3px",
                        color: "#2da6ce",
                      }}
                    />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </ThemeProvider>
      </div>
    </section>
  );
}

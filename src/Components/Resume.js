import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import StarIcon from "@material-ui/icons/Star";
import PanToolIcon from "@material-ui/icons/PanTool";
import WorkIcon from "@material-ui/icons/Work";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import SimpleModal from "@material-ui/core/Modal";
import Modal from "@material-ui/core/Modal";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import SimpleReactLightbox from "simple-react-lightbox";
import LanguageIcon from '@material-ui/icons/Language';
import { SRLWrapper } from "simple-react-lightbox";
import { IconButton } from "@material-ui/core";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    "aria-controls": `wrapped-tabpanel-${index}`,
  };
}

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 345,
    maxHeight: 420,
    minHeight: 420,
  },
  media: {
    height: 180,
  },
  smallArea: {
    maxHeight: 195,
    minHeight: 195,
  },
  root2: {
    flexGrow: 1,
  },
  root3: {
    maxWidth: 345,
    minWidth: 345,
    maxHeight: 350,
    minHeight: 350,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //Awards
  const DOE = (
    <Grid item xs>
      <SimpleReactLightbox>
        <Card className={classes.root} variant="outlined" onClick={handleOpen}>
          <SRLWrapper>
            <a
              href="https://www.dukeofed.org/"
              target="_blank"
            >
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/images/ECs/DOE1.jpg"
                title="Duke of Ed"
              />

              <CardContent className={classes.smallArea}>
                <Typography
                  gutterBottom
                  variant="h2"
                  component="h2"
                  color="textPrimary"
                >
                  Duke of Edinburgh Award
                </Typography>
                <Typography component="h4">
                  Gold, Silver & Bronze Levels
                </Typography>
                <Typography variant="h5" color="textSecondary" component="p">
                  Achieved all three levels of the Duke of Ed Award through
                  continuous community involvement throughout high school and
                  participation in several adventurous journeys, including dog
                  sledding and canoeing.
                </Typography>
                <br />
                <br />
                <br />
                <br />
              </CardContent>
            </CardActionArea>
            </a>
          </SRLWrapper>
          <CardActions>
            <br/>
            <IconButton 
              minHeight='30px'
              style={{width:'30px', height:'30px', color:'#2da6ce'}}
              href="https://www.dukeofed.org/"
              target="_blank"
            >
              <LanguageIcon style={{width:'30px', height:'30px', padding:'3px', color:'#2da6ce'}}/>
            </IconButton>
          </CardActions>
        </Card>
      </SimpleReactLightbox>
    </Grid>
  );
  const Principal = (
    <Grid item xs>
      <SimpleReactLightbox>
        <Card className={classes.root} variant="outlined">
          <SRLWrapper>
            <CardActionArea disabled={true}>
              <CardMedia
                className={classes.media}
                image="/images/ECs/principal.jpg"
                title="PrincipalAward"
              />

              <CardContent>
                <Typography
                  gutterBottom
                  variant="h2"
                  component="h2"
                  color="textPrimary"
                >
                  Principal’s Award for Student Leadership
                </Typography>
                <Typography component="h4">
                  Stephen Lewis Secondary School
                </Typography>
                <Typography variant="h5" color="textSecondary" component="p">
                Awarded to a graduating student who demonstrates outstanding leadership skills and community involvement throughout their high school career. 
                </Typography>
                <br />
                <br />
                <br />
                <br />
              </CardContent>
            </CardActionArea>
          </SRLWrapper>
        </Card>
      </SimpleReactLightbox>
    </Grid>
  );
  const Govener = (
    <Grid item xs>
      <SimpleReactLightbox>
        <Card className={classes.root} variant="outlined" onClick={handleOpen}>
          <SRLWrapper>
            <CardActionArea disabled={true}>
              <CardMedia
                className={classes.media}
                image="/images/ECs/govGen.jpg"
                title="GovGen"
              />

              <CardContent>
                <Typography
                  gutterBottom
                  variant="h2"
                  component="h2"
                  color="textPrimary"
                >
                  Governor General’s Bronze Award
                </Typography>
                <Typography component="h4">
                  Stephen Lewis Secondary School
                </Typography>
                <Typography variant="h5" color="textSecondary" component="p">
                  Awarded to the student with the highest combined Grade 11/12 average in a Canadian High School.
                </Typography>
                <br />
                <br />
                <br />
                <br />
              </CardContent>
            </CardActionArea>
          </SRLWrapper>
        </Card>
      </SimpleReactLightbox>
    </Grid>
  );
  const Suzuki = (
    <Grid item xs>
      <Card className={classes.root} variant="outlined" onClick={handleOpen}>
        <CardActionArea disabled={true}>
          <CardMedia
            className={classes.media}
            image="/images/ECs/Suzuki1.jpg"
            title="Suzuki Award"
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h2"
              component="h2"
              color="textPrimary"
            >
              David Suzuki Humanitarian Award
            </Typography>
            <Typography component="h4">Stephen Lewis SS</Typography>
            <Typography variant="h5" color="textSecondary" component="p">
              Presented by high school principal to one grade 10/11 student who
              demonstrates outstanding leadership skills and community
              involvement.
            </Typography>
            <br />
            <br />
            <br />
            <br />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
  const Schulich = (
    <Grid item xs>
      <Card className={classes.root} variant="outlined" onClick={handleOpen}>
        <CardActionArea disabled={true}>
          <CardMedia
            className={classes.media}
            image="/images/ECs/Schulich.jpg"
            title="Schulich Leader"
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h2"
              component="h2"
              color="textPrimary"
            >
              Schulich Leader 2020
            </Typography>
            <Typography component="h4">McGill University</Typography>
            <Typography variant="h5" color="textSecondary" component="p">
              Offered Canada’s most prestigious STEM scholarship to study
              Engineering at McGill (I declined the offer).
            </Typography>
            <br />
            <br />
            <br />
            <br />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
  const NLS = (
    <Grid item xs>
      <Card className={classes.root} variant="outlined">
        <CardActionArea disabled={true}>
          <CardMedia
            className={classes.media}
            image="/images/ECs/NLS.jpg"
            title="NLS"
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h2"
              component="h2"
              color="textPrimary"
            >
              National Lifeguard
            </Typography>
            <Typography component="h4">Lifesaving Society</Typography>
            <Typography variant="h5" color="textSecondary" component="p">
              Certified Canadian Lifeguard with First Aid and CPR C
              qualifications.
            </Typography>
            <br />
            <br />
            <br />
            <br />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );

  //Leadership
  const SAC = (
    <Grid item xs>
      <Card className={classes.root} variant="outlined" onClick={handleOpen}>
        <CardActionArea disabled={true}>
          <CardMedia
            className={classes.media}
            image="/images/ECs/SAC1.jpg"
            title="SAC"
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h2"
              component="h2"
              color="textPrimary"
            >
              Student Activity Council
            </Typography>
            <Typography component="h4">President & Former Vice</Typography>
            <Typography variant="h5" color="textSecondary" component="p">
              Led organization of several large-scale events at school, such as
              a charity carnival and semi-formal dance. Raised over $45 000 for
              various charitable organizations as an Executive of Student
              Council.
            </Typography>
            <br />
            <br />
            <br />
            <br />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
  const PSPC = (
    <Grid item xs>
      <Card className={classes.root} variant="outlined" onClick={handleOpen}>
        <CardActionArea disabled={true}>
          <CardMedia
            className={classes.media}
            image="/images/ECs/PSPC1.jpg"
            title="PSPC"
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h2"
              component="h2"
              color="textPrimary"
            >
              Peel Student Presidents’ Council
            </Typography>
            <Typography component="h4">Elected Executive</Typography>
            <Typography variant="h5" color="textSecondary" component="p">
              Worked with the Peel School Board to represent 40 000+ high school
              students. My role was leading the organization of a 2-night/3-day
              leadership conference for 200 people, with a budget of $60 000.
            </Typography>
            <br />
            <br />
            <br />
            <br />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
  const SHAD = (
    <Grid item xs>
      <Card className={classes.root} variant="outlined" onClick={handleOpen}>
        <CardActionArea disabled={true}>
          <CardMedia
            className={classes.media}
            image="/images/ECs/SHAD1.jpg"
            title="SHAD"
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h2"
              component="h2"
              color="textPrimary"
            >
              SHAD 2019
            </Typography>
            <Typography component="h4">Ryerson University</Typography>
            <Typography variant="h5" color="textSecondary" component="p">
              Participated in the month-long SHAD summer program, featuring
              engaging lectures and seminars. Developed a business plan and
              rough prototype for an app that helps users keep track of the
              garbage they produce through groceries purchased.
            </Typography>
            <br />
            <br />
            <br />
            <br />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
  const Swim = (
    <Grid item xs>
      <Card className={classes.root} variant="outlined" onClick={handleOpen}>
        <CardActionArea disabled={true}>
          <CardMedia
            className={classes.media}
            image="/images/ECs/Swim1.jpg"
            title="Swim Team"
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h2"
              component="h2"
              color="textPrimary"
            >
              Swim Team
            </Typography>
            <Typography component="h4">Stephen Lewis SS</Typography>
            <Typography variant="h5" color="textSecondary" component="p">
              Member of high school swim team; participated in several regional
              competitions. My main events were the 100m breaststroke and 50m
              front crawl swims.
            </Typography>
            <br />
            <br />
            <br />
            <br />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );

  //Volunteering
  const Tanzania = (
    <Grid item xs>
      <Card className={classes.root} variant="outlined" onClick={handleOpen}>
        <CardActionArea disabled={true}>
          <CardMedia
            className={classes.media}
            image="/images/ECs/Tanzania1.jpg"
            title="Tanzania"
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h2"
              component="h2"
              color="textPrimary"
            >
              International Volunteer
            </Typography>
            <Typography component="h4">MEtoWE Tanzania</Typography>
            <Typography variant="h5" color="textSecondary" component="p">
              Helped lay the foundations of a schoolhouse in a rural village.
              Also repaired local homes and gained an in-depth view into
              Tanzanian lifestyles.
            </Typography>
            <br />
            <br />
            <br />
            <br />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
  const Aspire = (
    <Grid item xs>
      <Card className={classes.root} variant="outlined" onClick={handleOpen}>
        <CardActionArea disabled={true}>
          <CardMedia
            className={classes.media}
            image="/images/ECs/Aspire1.jpg"
            title="Aspire"
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h2"
              component="h2"
              color="textPrimary"
            >
              Aspire Tutor
            </Typography>
            <Typography component="h4">SafeCity Mississauga</Typography>
            <Typography variant="h5" color="textSecondary" component="p">
              Taught math, science, English, and French to students in Grades
              2-6 coming from at-risk communities.
            </Typography>
            <br />
            <br />
            <br />
            <br />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
  const EOK = (
    <Grid item xs>
      <Card className={classes.root} variant="outlined" onClick={handleOpen}>
        <CardActionArea disabled={true}>
          <CardMedia
            className={classes.media}
            image="/images/ECs/EOK1.jpg"
            title="EOK"
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h2"
              component="h2"
              color="textPrimary"
            >
              Program Assistant
            </Typography>
            <Typography component="h4">
              ErinoakKids Centre for Development
            </Typography>
            <Typography variant="h5" color="textSecondary" component="p">
              Assisted children with mental and physical disabilities gain
              greater independence through engaging summer camps and programs.
            </Typography>
            <br />
            <br />
            <br />
            <br />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
  const volSwim = (
    <Grid item xs>
      <Card className={classes.root} variant="outlined" onClick={handleOpen}>
        <CardActionArea disabled={true}>
          <CardMedia
            className={classes.media}
            image="/images/ECs/volswim1.jpg"
            title="Swimming"
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h2"
              component="h2"
              color="textPrimary"
            >
              Assistant Swim Instructor
            </Typography>
            <Typography component="h4">City of Mississauga</Typography>
            <Typography variant="h5" color="textSecondary" component="p">
              Helped Swim Instructors in planning/delivering swimming lessons to
              children aged 2-12.
            </Typography>
            <br />
            <br />
            <br />
            <br />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );

  //Work
  const blueprint = (
    <Grid item xs>
      <Card className={classes.root} variant="outlined" onClick={handleOpen}>
        <a
        href="https://uwblueprint.org/"
        target="_blank"
        >
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/images/ECs/blueprint.jpg"
              title="Blueprint"
            />

            <CardContent className={classes.smallArea}>
              <Typography
                gutterBottom
                variant="h2"
                component="h2"
                color="textPrimary"
              >
                Blueprint
              </Typography>
              <Typography component="h4">
                University of Waterloo
              </Typography>
              <Typography variant="h5" color="textSecondary" component="p">
              Blueprint is a student-run consulting club which develops software for non-profit organizations in the Waterloo Region. As a Developer on a Blueprint project, I’ve worked with a team of 10 devs/designers to create an interactive webapp from scratch in 4 months.    
              </Typography>
              <br />
              <br />
              <br />
              <br />
            </CardContent>
          </CardActionArea>
        </a>
        <CardActions>
          <br/>
          <IconButton 
            minHeight='30px'
            style={{width:'30px', height:'30px', color:'#2da6ce'}}
            href="https://uwblueprint.org/"
            target="_blank"
          >
            <LanguageIcon style={{width:'30px', height:'30px', padding:'3px', color:'#2da6ce'}}/>
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
  const lifeguard = (
    <Grid item xs>
      <Card className={classes.root} variant="outlined" onClick={handleOpen}>
        <CardActionArea disabled={true}>
          <CardMedia
            className={classes.media}
            image="/images/ECs/lifeguard1.jpg"
            title="Lifeguarding"
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h2"
              component="h2"
              color="textPrimary"
            >
              Lifeguard & Swim Instructor
            </Typography>
            <Typography component="h4">City of Mississauga</Typography>
            <Typography variant="h5" color="textSecondary" component="p">
            Delivered swimming and water safety lessons to children aged 1-16 and hosted regular meetings to discuss progress with parents. Also guarded community swims. 
            </Typography>
            <br />
            <br />
            <br />
            <br />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
  const createv = (
    <Grid item xs>
      <Card className={classes.root} variant="outlined" onClick={handleOpen}>
        <CardActionArea disabled={true}>
          <CardMedia
            className={classes.media}
            image="/images/ECs/createv1.jpg"
            title="CreatEV"
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h2"
              component="h2"
              color="textPrimary"
            >
              Software Engineering Intern
            </Typography>
            <Typography component="h4">
              CreatEV Aerospace Team, RyersonU
            </Typography>
            <Typography variant="h5" color="textSecondary" component="p">
            Helped the Ryerson Solar Aircraft team collect and analyze solar panel data using MATLAB. Also helped with some designing/testing of the aircraft’s motor and fuselage components.  
            </Typography>
            <br />
            <br />
            <br />
            <br />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );

  const cloudspark = (
    <Grid item xs>
      <Card className={classes.root} variant="outlined" onClick={handleOpen}>
        <CardActionArea disabled={true}>
          <CardMedia
            className={classes.media}
            image="/images/ECs/cloudspark.jpg"
            title="Cloudspark"
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h2"
              component="h2"
              color="textPrimary"
            >
              Backend Software Engineering Intern
            </Typography>
            <Typography component="h4">
              Cloudspark Labs
            </Typography>
            <Typography variant="h5" color="textSecondary" component="p">
             Worked on all aspects of the backend including REST API development in NestJS, Graph Queries with Gremlin, SQL Queries within Cosmos' non-relationl DB, and CI/CD in Azure piplelines.     
            </Typography>
            <br />
            <br />
            <br />
            <br />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section id="resume">
      <h1>Take a look at my Experience!</h1>
      <div>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="white"
            centered
          >
            <Tab icon={<FavoriteIcon />} label="Highlights" {...a11yProps(0)} />
            <Tab icon={<WorkIcon />} label="Work" {...a11yProps(1)} />
            <Tab icon={<StarIcon />} label="Awards" {...a11yProps(2)} />
            <Tab
              icon={<SupervisorAccountIcon />}
              label="Leadership"
              {...a11yProps(3)}
            />
            <Tab
              icon={<PanToolIcon />}
              label="Volunteering"
              {...a11yProps(4)}
            />
          </Tabs>
          <TabPanel value={value} index={0}>
          <Grid container spacing={3}>
              {cloudspark}
              {blueprint}
              {DOE}
              {Tanzania}
              {Schulich}
              {lifeguard}
              {SAC}
              {createv}
            </Grid>
            <Grid container spacing={3}></Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
          <Grid container spacing={3}>
              {cloudspark}
              {blueprint}
              {lifeguard}
              {createv}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Grid container spacing={3}>
              {DOE}
              {Principal}
              {Govener}
              {Schulich}
              {Suzuki}
              {NLS}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Grid container spacing={3}>
              {SAC}
              {PSPC}
              {SHAD}
              {Swim}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <h2>480 Volunteer Hours Total</h2>
            <br />
            <Grid container spacing={3}>
              {Tanzania}
              {Aspire}
              {EOK}
              {volSwim}
            </Grid>
          </TabPanel>
          <br />
      </div>
    </section>
  );
}

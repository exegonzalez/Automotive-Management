import React, { Fragment } from 'react'

//************************************** Props Material-UI ***************************************
import PropTypes from 'prop-types'

//************************************ Components Material-UI ************************************
import {
  AppBar,
  Toolbar,
  CssBaseline,
  useScrollTrigger,
  Slide,
  makeStyles,
  IconButton,
  Typography
} from '@material-ui/core'

//************************************** Icons Material-UI ***************************************
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import HomeIcon from '@material-ui/icons/Home';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import DescriptionIcon from '@material-ui/icons/Description';
import LanguageIcon from '@material-ui/icons/Language';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import EqualizerIcon from '@material-ui/icons/Equalizer';

//****************************************** Styles **********************************************
HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));

//**************************************** Components *******************************************
function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

//********************************************* Components *********************************************
export default function HideAppBar(props) {
  const classes = useStyles();

  return (
    <Fragment >
      <CssBaseline />
      <HideOnScroll {...props}>
        <div className={classes.root}>
          <AppBar>
            <Toolbar>

              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" href='/home'>
                <HomeIcon/>
              </IconButton>

              <Typography variant="h6" className={classes.title}>
                Gestoría del automotor
              </Typography>

              <IconButton className={classes.menuButton} color="inherit" aria-label="transferencias" href='/transferencias'>
                <DescriptionIcon/>
              </IconButton>

              <IconButton className={classes.menuButton} color="inherit" aria-label="vehiculos" href='/vehiculos'>
                <DriveEtaIcon/>
              </IconButton>

              <IconButton className={classes.menuButton} color="inherit" aria-label="clientes" href='/clientes'>
                <PeopleAltIcon/>
              </IconButton>

              <IconButton className={classes.menuButton} color="inherit" aria-label="sitios web" href='/sitios-web'>
                <LanguageIcon/>
              </IconButton>

              <IconButton className={classes.menuButton} color="inherit" aria-label="presupuestos" href='/presupuestos'>
                <MonetizationOnIcon/>
              </IconButton>

              <IconButton className={classes.menuButton} color="inherit" aria-label="estadisticas" href='/estadisticas'>
                <EqualizerIcon/>
              </IconButton>

            </Toolbar>
          </AppBar>
        </div>
      </HideOnScroll>
      <Toolbar />
    </Fragment>
  );
}
import React from 'react'

//************************************ Components Material-UI ************************************
import { makeStyles, AppBar, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      top: 'auto',
      bottom: 0,
      alignItems: 'center',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));

export default function Footer() {
    const classes = useStyles();

    return (
        <div>
        <AppBar position="fixed" className={classes.root}>
            <Toolbar variant="dense">
                <Typography variant="body2" color="inherit">
                    Gestor del automotor - XXX
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    );
}

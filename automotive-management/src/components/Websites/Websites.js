import React from 'react';

//************************************ Components Material-UI **************************************
import { makeStyles, Grid } from '@material-ui/core';

//************************************** React Components ******************************************
import CardWebsite from './CardWebsite'

//******************************************* Images ************************************************
import cmygper from '../../utils/images/logos/cmygper.png'
import infraccionesba from '../../utils/images/logos/infraccionesba.jpg'
import dnrpa1 from '../../utils/images/logos/dnrpa1.jpg'
import ater from '../../utils/images/logos/ater.jpeg'
import afip from '../../utils/images/logos/afip.png'
import baciudad from '../../utils/images/logos/baciudad.png'
import dnrpa2 from '../../utils/images/logos/dnrpa2.png'
import dnrpa3 from '../../utils/images/logos/dnrpa3.png'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop:24,
      marginLeft:24,
      marginRight:24,
    },
    grid: {
      marginBottom:12,
    },
  }));

export default function Websites() {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Grid container spacing={3} className={classes.grid}>
            <Grid item xs={3}>
                <CardWebsite title={"Registros de la Propiedad Automotor"} image={dnrpa1}
                href={"https://www.dnrpa.gov.ar/portal_dnrpa/"}/>
            </Grid>
            <Grid item xs={3}>
                <CardWebsite title={"Administradora Tributaria de Entre Ríos"} image={ater}
                href={"https://www.ater.gob.ar/ater2/home.asp"}/>
            </Grid>
            <Grid item xs={3}>
                <CardWebsite title={"Administración Federal de Ingresos Públicos"} image={afip}
                href={"https://auth.afip.gob.ar/contribuyente_/login.xhtml"}/>
            </Grid>
            <Grid item xs={3}>
                <CardWebsite title={"Colegio de Mandatarios y Gestores de Entre Ríos"} image={cmygper}
                href={"http://www.cmygper.com.ar/"}/>
            </Grid>
            <Grid item xs={3}>
                <CardWebsite title={"Buenos Aires Ciudad: Consulta de Infracciones"} image={baciudad}
                href={"https://www.buenosaires.gob.ar/consulta-de-infracciones"}/>
            </Grid>
            <Grid item xs={3}>
                <CardWebsite title={"Buenos Aires Provincia: Consulta de Infracciones"} image={infraccionesba}
                href={"https://infraccionesba.gba.gob.ar/consulta-infraccion"}/>
            </Grid>
            <Grid item xs={3}>
                <CardWebsite title={"DNRPA: Estimador de costos"} image={dnrpa2}
                href={"https://www2.jus.gov.ar/dnrpa-site/#!/estimador"}/>
            </Grid>
            <Grid item xs={3}>
                <CardWebsite title={"DNRPA: Sistema Integral de Trámites Electrónicos"} image={dnrpa3}
                href={"https://www2.jus.gov.ar/dnrpa-site/#!/"}/>
            </Grid>
        </Grid>      
      </div>
    )
}
import React from 'react';

//************************************ Components Material-UI **************************************
import { makeStyles, Grid } from '@material-ui/core';

//************************************** React Components ******************************************
import CardHome from './CardHome'

//***************************************** Banners ************************************************
import bannerTransferencias from '../../utils/images/banners/bannerTransferencias.jpeg'
import bannerAutomoviles from '../../utils/images/banners/bannerAutomoviles.jpeg'
import bannerClientes from '../../utils/images/banners/bannerClientes.jpeg'
import bannerSitiosWeb from '../../utils/images/banners/bannerSitiosWeb.jpg'
import bannerPresupuestos from '../../utils/images/banners/bannerPresupuestos.jpg'
import bannerEstadisticas from '../../utils/images/banners/bannerEstadisticas.jpg'

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

export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3} className={classes.grid}>
                <Grid item xs={4}>
                    <CardHome title={"Transferencias"} image={bannerTransferencias}
                    href={"/transferencias"}/>
                </Grid>
                <Grid item xs={4}>
                    <CardHome title={"Vehículos"} image={bannerAutomoviles}
                    href={"/vehiculos"}/>
                </Grid>
                <Grid item xs={4}>
                    <CardHome title={"Clientes"} image={bannerClientes}
                    href={"/clientes"}/>
                </Grid>
            </Grid>
            <Grid container spacing={3} className={classes.grid}>
                <Grid item xs={4}>
                    <CardHome title={"Sitios Web"} image={bannerSitiosWeb}
                    href={"/sitios-web"}/>
                </Grid>
                <Grid item xs={4}>
                    <CardHome title={"Presupuestos"} image={bannerPresupuestos}
                    href={"/presupuestos"}/>
                </Grid>
                <Grid item xs={4}>
                    <CardHome title={"Estadísticas"} image={bannerEstadisticas}
                    href={"/estadisticas"}/>
                </Grid>
            </Grid>            
        </div>
    )
}
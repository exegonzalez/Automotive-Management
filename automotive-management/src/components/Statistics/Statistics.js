import React, {useState, useEffect } from 'react';

//************************************ Components React-Chart ************************************
import { Pie, HorizontalBar, Line } from '@reactchartjs/react-chart.js'

//************************************ Components Material-UI ************************************
import { Grid, Paper, makeStyles, CircularProgress, Typography, Divider} from '@material-ui/core';
import { Alert } from '@material-ui/lab';

//******************************************** API *********************************************
import { getTransfers } from '../../utils/functionsdb'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: 50,
    },
    paper: {
        flexGrow: 1,
        margin: 20,
        color: theme.palette.text.secondary,
        paddingLeft:10,
        paddingRight:10,
        paddingTop:3,
        paddingBottom:15
    },
    h6: {
        marginTop: 8,
    },
    item: {
        paddingLeft: 30,
        paddingRight: 30,
    },
    item2: {
        paddingLeft: 120,
    },
    divider: {
        marginTop: 10
    }
  }));

export default function Statistics() {
    const classes = useStyles()
    const [transfers, setTransfers] = useState('')
    const handleTransfers = trans => setTransfers(trans)

    const [transfersMonth] = useState([0,0,0,0,0,0,0,0,0,0,0,0])
    const [transfersIncome] = useState([0,0,0,0,0,0,0,0,0,0,0,0])
    const [transfersVehicles] = useState([0,0])

    const [status, setStatus] = useState({showMessage: false, type: '', message:''})
    const handleStatus = (showMessage, type='', message='') => setStatus({showMessage: showMessage, type: type, message: message})

    const dataPie = {
        labels: ['Automotores', 'Motovehículos'],
        datasets: [
          {
            label: ' # de Vehiculos Transferidos',
            data: transfersVehicles,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
          },
        ],
      }

    const dataBar = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 
        'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [
          {
            label: ' # de Transferencias',
            data: transfersMonth,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(27, 255, 0, 0.2)',
              'rgba(203, 49, 0, 0.2)',
              'rgba(0, 0, 0, 0.2)',
              'rgba(255, 255, 101, 0.2)',
              'rgba(255, 0, 255, 0.2)',
              'rgba(0, 0, 255, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(27, 255, 0, 1)',
              'rgba(203, 49, 0, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(255, 255, 101, 1)',
              'rgba(255, 0, 255, 1)',
              'rgba(0, 0, 255, 1)',
            ],
            borderWidth: 1,
          },
        ],
    }

    const dataLine = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 
        'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [
          {
            label: 'Ingresos',
            data: transfersIncome,
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
        ],
      }
      
    const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                responsive: true,
                beginAtZero: true,
                maintainAspectRatio: false,
              },
            },
          ],
        },
    }

    useEffect(() => {
        const fetchTransfers = async () => {
            try{
                const transfersFetched = await getTransfers()
                const anio = String(new Date().getFullYear())
                transfersFetched.forEach(element => {
                    if(element.transfer.date.substr(0,4) === anio){
                        transfersMonth[Number(element.transfer.date.substr(5,2))-1] = transfersMonth[Number(element.transfer.date.substr(5,2))-1] + 1;
                        transfersIncome[Number(element.transfer.date.substr(5,2))-1] = transfersIncome[Number(element.transfer.date.substr(5,2))-1] + Number(element.transfer.total);
                        (element.transfer.vehicle.category === "Automotor" 
                        ? transfersVehicles[0] = transfersVehicles[0] + 1
                        : transfersVehicles[1] = transfersVehicles[1] + 1);
                    }
                });
                return transfersFetched
                    ? handleTransfers(transfersFetched) 
                    : handleStatus(true, 'error', 'No hay clientes para mostrar')
            } catch (error) {
                handleStatus(true, 'error' ,'Ooops! Ha ocurrido un error :(')
            }
        }
        fetchTransfers()
      }, [transfersMonth, transfersVehicles, transfersIncome]);

    return (
        <div className={classes.root}>
            <div className="p-grid p-justify-center m10">
                {
                    status.showMessage
                    ? <Alert variant="filled" severity={status.type}>{status.message}</Alert>
                    : null
                }
            </div>
            <Grid container alignItems="center" justify="center">
                <Paper elevation={5} className={classes.paper}>
                    {   
                    transfers 
                    ?
                    <Grid container>
                        <Grid item xs={5}>
                            <Typography className={classes.h6} color="textSecondary" align="center" variant="h6">Cantidad de Vehículos Transferidos</Typography>
                            <Pie data={dataPie}/>
                        </Grid>
                        <Divider className={classes.divider} orientation="vertical" flexItem />
                        <Grid item xs={6} className={classes.item2}>
                            <Typography className={classes.h6} color="textSecondary" align="center" variant="h6">Ingresos Mensuales</Typography>
                            <Line data={dataLine} options={options} />
                        </Grid>
                        <Grid item xs={12} className={classes.item}>
                            <Divider className={classes.divider}/>
                            <Typography className={classes.h6} color="textSecondary" align="center" variant="h6">Cantidad de Tranferencias Mensuales</Typography>
                            <HorizontalBar data={dataBar} options={options} />
                        </Grid>
                    </Grid>
                    :<CircularProgress style={{marginLeft: '50%', marginTop: '2%'}} color="inherit"/>
                    }
                </Paper>
            </Grid>
        </div>
    )
}

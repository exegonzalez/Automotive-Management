import React, {useState, useEffect} from 'react';

//************************************ Components Material-UI ************************************
import { DataGrid } from '@material-ui/data-grid';
import { Paper, makeStyles, CircularProgress} from '@material-ui/core';
import { Alert } from '@material-ui/lab';

//******************************************** API *********************************************
import { getTransfers } from '../../utils/functionsdb'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: 50,
    },
    paper: {
      margin: 20,
      height: 490,
      color: theme.palette.text.secondary,
      paddingLeft:10,
      paddingRight:10,
      paddingTop:3
    },
    h3: {
        textAlign: "center",
      },
  }));

const columns = [
  { field: 'category', headerName: 'Categoría', width: 120 },
  { field: 'domain', headerName: 'Dominio', width: 120 },
  { field: 'mark', headerName: 'Marca', width: 130 },
  { field: 'type', headerName: 'Tipo', width: 130 },
  { field: 'model', headerName: 'Modelo', width: 130 },
  { field: 'engine_mark', headerName: 'Marca Motor', width: 130 },
  { field: 'engine_number', headerName: 'N° Motor', width: 130 },
  { field: 'chart_mark', headerName: 'Marca Cuadro', width: 130 },
  { field: 'chart_number', headerName: 'N° Cuadro', width: 130 },
  { field: 'use', headerName: 'Uso', width: 100 },
];

export default function Vehicles() {

  const [rows, setRows] = useState('')
  const handleRows = row => setRows(row)

  const [status, setStatus] = useState({showMessage: false, type: '', message:''})
  const handleStatus = (showMessage, type='', message='') => setStatus({showMessage: showMessage, type: type, message: message})

  useEffect(() => {
    const fetchVehicles = async () => {
        try{
            const transfersFetched = await getTransfers()
            const arrayTransfers = transfersFetched.map(doc => doc.transfer)
            const arraysVehicles = arrayTransfers.map(trans => trans.vehicle)
            const arrayId = arraysVehicles.map((item, id) => Object.assign(item, { id }))
            return arrayId
                ? handleRows(arrayId) 
                : handleStatus(true, 'error', 'No hay clientes para mostrar')
        } catch (error) {
            handleStatus(true, 'error' ,'Ooops! Ha ocurrido un error :(')
        }
    }
    fetchVehicles()
  }, []);

    const classes = useStyles()
  
    return (
        <div style={{ height: 400, width: '100%' }}>
            <div className="p-grid p-justify-center m10">
                {
                    status.showMessage
                    ? <Alert variant="filled" severity={status.type}>{status.message}</Alert>
                    : null
                }
            </div>
            <Paper elevation={5} className={classes.paper}>
                <h3 className={classes.h3}> &bull; LISTADO DE VEHICULOS &bull;</h3>
                {
                  rows
                    ?<DataGrid 
                    autoHeight="true" rows={rows} columns={columns} pageSize={6} checkboxSelection />
                    : <CircularProgress style={{marginLeft: '50%'}} color="inherit"/>
                }   
            </Paper>
        </div>
      );
}


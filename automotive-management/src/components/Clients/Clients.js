import React, {useState, useEffect} from 'react';

//************************************ Components Materia-UI ************************************
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
  { field: 'cuil', headerName: 'CUIL', width: 130 },
  { field: 'last_name', headerName: 'Apellido', width: 140 },
  { field: 'name', headerName: 'Nombres', width: 190 },
  { field: 'birth_date', headerName: 'Fecha Nacimiento', width: 120, type: "date" },
  { field: 'address', headerName: 'Dirección', width: 280 },
  { field: 'email', headerName: 'Email', width: 230 },
  { field: 'telephone', headerName: 'Teléfono', width: 130 },
];
  
export default function Clients() {

  const [rows, setRows] = useState('')
  const handleRows = row => setRows(row)

  const [status, setStatus] = useState({showMessage: false, type: '', message:''})
  const handleStatus = (showMessage, type='', message='') => setStatus({showMessage: showMessage, type: type, message: message})

  useEffect(() => {
    const fetchClients = async () => {
        try{
            const transfersFetched = await getTransfers()
            const arrayTransfers = transfersFetched.map(doc => doc.transfer)
            const arraysClients = arrayTransfers.map(trans => trans.clients)
            const arrayRows = []
            arraysClients.map(a => console.log(a.map(x => arrayRows.push(x))))
            const arrayId = arrayRows.map((item, id) => Object.assign(item, { id }))
            return arrayId
                ? handleRows(arrayId) 
                : handleStatus(true, 'error', 'No hay clientes para mostrar')
        } catch (error) {
            handleStatus(true, 'error' ,'Ooops! Ha ocurrido un error :(')
        }
    }
    fetchClients()
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
                <h3 className={classes.h3}> &bull; LISTADO DE CLIENTES &bull;</h3>
                {
                  rows
                    ?<DataGrid autoHeight="true" rows={rows} columns={columns} pageSize={6} checkboxSelection />
                    : <CircularProgress style={{marginLeft: '50%'}} color="inherit"/>
                }   
            </Paper>
        </div>
      );
}

import React, {useState, useEffect } from 'react';
import { useHistory } from 'react-router'

//************************************ Components Material-UI ************************************
import { DataGrid } from '@material-ui/data-grid';
import { Paper, makeStyles, IconButton, Grid, CircularProgress, Backdrop, Button, TextField, Switch } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

//******************************************** API *********************************************
import { getTransfers, deleteTransfer } from '../../../utils/functionsdb'

//************************************** Icons Material-UI ***************************************
import DeleteIcon from '@material-ui/icons/Delete';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import CancelIcon from '@material-ui/icons/Cancel';
import PostAddIcon from '@material-ui/icons/PostAdd';
import EditIcon from '@material-ui/icons/Edit';

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
    datagrid: {
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
    margin: {
        margin: theme.spacing(1),
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
    progress: {
      display: 'inline-block',
      position: 'relative',
    },
  }));

const columns = [
  { field: 'control_number', headerName: 'N° Control', width: 130 },
  { field: 'domain', headerName: 'Dominio', width: 120 },
  { field: 'full_model', headerName: 'Modelo', width: 140 },
  { field: 'full_name', headerName: 'Cliente', width: 150 },
  { field: 'registry', headerName: 'Registro', width: 130},
  { field: 'process_number', headerName: 'N° Trámite', width: 130},
  { field: 'web_control_number', headerName: 'N° Control Web', width: 130},
  { field: 'date', headerName: 'Fecha', width: 130, type: "date" },
  { field: 'total', headerName: 'Importe', width: 130 },
];
  
export default function ListTransfer() {
  const history = useHistory()

  const [openDelete, setOpenDelete] = useState(false);
  const handleCloseDelete = () => setOpenDelete(false)
  const handleToggleDelete = () => setOpenDelete(!openDelete)

  const [openDetail, setOpenDetail] = useState(false);
  const handleCloseDetail = () => setOpenDetail(false)
  const handleToggleDetail = () => setOpenDetail(!openDetail)

  const [checked, setChecked] = useState(0)
  const handleChecked = check => setChecked(check)

  const [selectRow, setSelectRow] = useState([])
  const handleSelectRow = selectRow => setSelectRow(selectRow)

  const [transferFound, setTransferFound] = useState('')
  const handleTransferFound = transFound => setTransferFound(transFound)

  const [transferToDelete, setTransferToDelete] = useState('')
  const handleTransferToDelete = transferToDelete => setTransferToDelete(transferToDelete)

  const [rows, setRows] = useState('')
  const handleRows = row => setRows(row)

  const [status, setStatus] = useState({showMessage: false, type: '', message:''})
  const handleStatus = (showMessage, type='', message='') => setStatus({showMessage: showMessage, type: type, message: message})

  useEffect(() => {
    const fetchTransfers = async () => {
        try{
            const transfersFetched = await getTransfers()
            const arrayTransfers = transfersFetched.map(doc => doc.transfer).map((item, id) => Object.assign(item, { id }))
            return arrayTransfers
                ? handleRows(arrayTransfers) 
                : handleStatus(true, 'error', 'No hay clientes para mostrar')
        } catch (error) {
            handleStatus(true, 'error' ,'Ooops! Ha ocurrido un error :(')
        }
    }
    fetchTransfers()
  }, []);

  const handleDelete = async e => {
    e.preventDefault()
    if (selectRow.length === 1){
      const found = rows.find(element => element.id === Number(selectRow[0]));
      await handleTransferFound(found)
      return handleToggleDelete()
    } else {
      handleStatus(true, 'error', 'Solo se puede borrar una transferencia a la vez.')
      setInterval(() => handleStatus(false), 5000)
      return
    }
  }

  const handleDetail = async e => {
    e.preventDefault()
    if (selectRow.length === 1){
      const found = rows.find(element => element.id === Number(selectRow[0]));
      await handleTransferFound(found)
      return handleToggleDetail()
    } else {
      handleStatus(true, 'error', 'Solo se puede ver una transferencia a la vez.')
      setInterval(() => handleStatus(false), 5000)
      return
    }
  }

  const handleEdit = async e => {
    e.preventDefault()
    if (selectRow.length === 1){
      const found = rows.find(element => element.id === Number(selectRow[0]));
      return history.push(`/transferencias/editar/${found.control_number}`)
    } else {
      handleStatus(true, 'error', 'Solo se puede ver una transferencia a la vez.')
      setInterval(() => handleStatus(false), 5000)
      return
    }
  }

  const handleDeleteTransfer = async control_number => {
    try {
        await deleteTransfer(control_number)
        return handleStatus(true, 'Success', '¡La transferencia ha sido eliminada! :)')
    } catch (error) {
        return handleStatus(true, 'Error', '¡Ooops! Ha ocurrido un inesperado :/')
    }
}

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

            <Backdrop className={classes.backdrop} open={openDelete}>
              <Grid container direction="column" justify="space-around" alignItems="center" spacing={3}>
                <Paper elevation={5}>
                    <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                        <Grid item xs={10}>
                            <h4 style={{color: '#735c0f', backgroundColor: '#fffbdd', textAlign: 'center'}}>
                                ¡Cosas inesperadas sucederán si no lees esto!
                            </h4>
                            <hr/>
                            <p align="justify" style={{textAlign: 'center'}}>
                              Esta acción no se puede deshacer. Esto eliminará permanentemente la transferencia <b>{transferFound.control_number}</b>, 
                              del titular: <b>{transferFound.full_name}</b>, del vehículo: <b>{transferFound.full_model}</b>.
                              Por favor, escriba <b>{transferFound.control_number}</b> para confirmar.
                            </p>
                            <hr/>
                        </Grid>
                        <Grid item xs={10}>
                            <TextField required id="standard-basic" label="Número control" onChange={e => handleTransferToDelete(e.target.value)}/>
                        </Grid>
                        <Grid item xs={10}>
                            <Button 
                                variant="contained" 
                                size="small" 
                                color="secondary" 
                                startIcon={<DeleteIcon fontSize="small"/>} 
                                className={classes.margin}
                                disabled={transferToDelete !== transferFound.control_number || status.showMessage ? true : false}
                                onClick={() => handleDeleteTransfer(transferFound.control_number)}
                            >Borrar</Button>

                            <Button 
                                variant="contained" 
                                size="small" 
                                color="primary" 
                                startIcon={<CancelIcon fontSize="small"/>} 
                                className={classes.margin}
                                disabled={status.showMessage ? true : false}
                                onClick={() => handleCloseDelete()}
                            >Cancelar</Button>
                        </Grid>
                    </Grid>
                </Paper>
                {
                    status.showMessage 
                    ? <Alert severity={status.type} onClick={() => history.go(0)} style={{marginTop: '5px'}}><AlertTitle>{status.type}</AlertTitle> - {status.message}</Alert>
                    : ''
                }
              </Grid>
            </Backdrop>

            <Backdrop className={classes.backdrop} open={openDetail}>
              <Grid container alignItems="center" justify="center">
                <Paper elevation={5} className={classes.paper}>
                  {
                    transferFound
                    ?
                    <Grid container justify="center" alignItems="center">
                        <Grid item xs={12}>
                          <h4>DATOS DE LA TRANSFERENCIA</h4>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={2}>
                                <TextField
                                    disabled
                                    type="text"
                                    id="control_number"
                                    name="control_number"
                                    label="Número control"
                                    size="small"
                                    value={transferFound.control_number}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <TextField
                                    disabled
                                    size="small"
                                    type="number"
                                    id="registry"
                                    name="registry"
                                    label="Registro"
                                    value={transferFound.registry}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <TextField
                                    disabled
                                    size="small"
                                    type="number"
                                    id="process_number"
                                    name="process_number"
                                    label="Número trámite"
                                    value={transferFound.process_number}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <TextField
                                    disabled
                                    type="text"
                                    id="web_control_number"
                                    name="web_control_number"
                                    label="Número control web"
                                    size="small"
                                    value={transferFound.web_control_number}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <TextField
                                    disabled
                                    id="date"
                                    size="small"
                                    name="date"
                                    label="Fecha"
                                    type="date"
                                    value={transferFound.date}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <TextField
                                    disabled
                                    type="number"
                                    id="total"
                                    name="total"
                                    label="Importe total"
                                    size="small"
                                    value={transferFound.total}
                                />
                            </Grid>
                          </Grid>  
                          <Grid item xs={12}>
                            <h4>DATOS DEL TITULAR
                              <Switch
                                disabled={transferFound.clients.length !== 1 ? false : true}
                                checked={checked}
                                onChange={() => checked === 0 ? handleChecked(1) : handleChecked(0)}
                                size="small"
                                color="inherit"
                              />
                            </h4>
                          </Grid>
                          <Grid container spacing={3}>
                            <Grid item xs={3}>
                                  <TextField
                                      disabled
                                      type="text"
                                      id="last_name"
                                      name="last_name"
                                      label="Apellido"
                                      size="small"
                                      value={transferFound.clients[checked].last_name}
                                  />
                              </Grid>
                              <Grid item xs={4}>
                                  <TextField
                                      disabled
                                      type="text"
                                      id="name"
                                      name="name"
                                      label="Nombres"
                                      size="small"
                                      value={transferFound.clients[checked].name}
                                  />
                              </Grid>
                              <Grid item xs={3}>
                                  <TextField
                                      disabled
                                      type="text"
                                      id="cuil"
                                      name="cuil"
                                      label="CUIL"
                                      value={transferFound.clients[checked].cuil}
                                      size="small"
                                  />
                              </Grid>
                              <Grid item xs={2}>
                                  <TextField
                                      disabled
                                      id="birth_date"
                                      name="birth_date"
                                      label="Fecha nacimiento"
                                      type="date"
                                      size="small"
                                      value={transferFound.clients[checked].birth_date}
                                      InputLabelProps={{
                                          shrink: true,
                                      }}
                                  />
                              </Grid>
                              <Grid item xs={5}>
                                  <TextField
                                      disabled
                                      type="text"
                                      id="address"
                                      name="address"
                                      label="Domicilio"
                                      value={transferFound.clients[checked].address}
                                  />
                              </Grid>
                              <Grid item xs={3}>
                                  <TextField
                                      disabled
                                      size="small"
                                      type="number"
                                      id="telephone"
                                      name="telephone"
                                      label="Teléfono"
                                      value={transferFound.clients[checked].telephone}
                                  />
                              </Grid>
                              <Grid item xs={4}>
                                  <TextField
                                      disabled
                                      type="email"
                                      id="email"
                                      name="email"
                                      label="Email"
                                      value={transferFound.clients[checked].email}
                                  />
                              </Grid>
                          </Grid>
                          <Grid item xs={12}>
                            <h4>DATOS DEL VEHICULO</h4>
                          </Grid>
                          <Grid container spacing={3}>
                            <Grid item xs={2}>
                                <TextField
                                    disabled
                                    size="small"
                                    id="standard-select-currency"
                                    label="Categoría"
                                    value={transferFound.vehicle.category}
                                    >
                                </TextField>
                            </Grid>
                            <Grid item xs={2}>
                                <TextField
                                    disabled
                                    type="text"
                                    size="small"
                                    id="domain"
                                    name="domain"
                                    label="Dominio"
                                    value={transferFound.vehicle.domain}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <TextField
                                    disabled
                                    type="text"
                                    size="small"
                                    id="mark"
                                    name="mark"
                                    label="Marca"
                                    value={transferFound.vehicle.mark}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    disabled
                                    type="text"
                                    id="type"
                                    name="type"
                                    label="Tipo"
                                    size="small"
                                    value={transferFound.vehicle.type}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    disabled
                                    type="text"
                                    size="small"
                                    id="model"
                                    name="model"
                                    label="Modelo"
                                    value={transferFound.vehicle.model}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <TextField
                                    disabled
                                    type="text"
                                    size="small"
                                    id="engine_mark"
                                    name="engine_mark"
                                    label="Marca motor"
                                    value={transferFound.vehicle.engine_mark}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <TextField
                                    disabled
                                    type="text"
                                    id="engine_number"
                                    name="engine_number"
                                    label="Número motor"
                                    size="small"
                                    value={transferFound.vehicle.engine_number}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <TextField
                                    disabled
                                    type="text"
                                    size="small"
                                    id="chart_mark"
                                    name="chart_mark"
                                    label="Marca cuadro"
                                    value={transferFound.vehicle.chart_mark}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <TextField
                                    disabled
                                    type="text"
                                    size="small"
                                    id="chart_number"
                                    name="chart_number"
                                    label="Número cuadro"
                                    value={transferFound.vehicle.chart_number}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <TextField
                                    disabled
                                    type="text"
                                    id="use"
                                    name="use"
                                    label="Uso"
                                    value={transferFound.vehicle.use}
                                />
                            </Grid>
                            <Grid item xs={2}>
                              <Button 
                                    variant="contained" 
                                    size="small" 
                                    color="primary" 
                                    startIcon={<CancelIcon fontSize="small"/>} 
                                    className={classes.margin}
                                    disabled={status.showMessage ? true : false}
                                    onClick={() => {handleChecked(0); handleCloseDetail()}}
                              >Cerrar</Button>
                            </Grid>
                          </Grid>
                      </Grid>
                  : null 
                  }
                </Paper>
              </Grid>
            </Backdrop>

            <Paper elevation={5} className={classes.datagrid}>
              <Grid container alignItems="center" justify="center">
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                  <h3 className={classes.h3}> &bull; LISTADO DE TRANSFERENCIAS &bull; </h3>
                </Grid>
                <Grid item xs={2}>
                  <IconButton onClick={() => history.push('/transferencias/crear')} size="medium" aria-label="add" color="primary">
                    <PostAddIcon />
                  </IconButton>
                  <IconButton disabled={selectRow.length === 0 ? true : false} onClick={e => handleEdit(e)} size="medium" aria-label="detail" color="action">
                    <EditIcon />
                  </IconButton>
                  <IconButton disabled={selectRow.length === 0 ? true : false} onClick={e => handleDelete(e)} size="medium" aria-label="delete" color="secondary">
                    <DeleteIcon />
                  </IconButton>
                  <IconButton disabled={selectRow.length === 0 ? true : false} onClick={e => handleDetail(e)} size="medium" aria-label="detail" color="inherit">
                    <OpenInNewIcon />
                  </IconButton>
                </Grid>
              </Grid>
              {
              rows
                ?<DataGrid 
                  onSelectionChange={newSelection => handleSelectRow(newSelection.rowIds)}
                  autoHeight="true" rows={rows} columns={columns} pageSize={6} checkboxSelection />
                : <CircularProgress style={{marginLeft: '50%'}} color="inherit"/>
              }   
            </Paper>
        </div>
      );
}

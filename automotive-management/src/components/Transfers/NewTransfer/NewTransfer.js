import React,{useState} from 'react';

//************************************ Components Material-UI ************************************
import { Grid, Paper, makeStyles, TextField, Button, MenuItem, Divider, Switch} from '@material-ui/core';
import { Alert } from '@material-ui/lab';

//************************************** Icons Material-UI ***************************************
import DescriptionIcon from '@material-ui/icons/Description';
import PostAddIcon from '@material-ui/icons/PostAdd';

//******************************************** API *********************************************
import capitalize from '../../../utils/capitalize'
import { addTransfer } from '../../../utils/functionsdb'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: 50,
    },
    paper: {
      margin: 30,
      color: theme.palette.text.secondary,
      padding:16,
      paddingBottom:40,
    },
    h1: {
      textAlign: "center",
    },
    h2: {
        marginTop:35,
    }
  }));

export default function NewTransfer() {
    const classes = useStyles()
    let transferDefault = {
        control_number: '',
        full_name: '',
        domain: '',
        full_model: '',
        registry: '',
        process_number: '',
        web_control_number: '',
        date: '',
        total: '',
        vehicle: {},
        clients: []
    }

    let clientDefault = {
        last_name: '',
        name: '',
        cuil: '',
        telephone: '',
        birth_date: '',
        address: '',
        email: ''
    }

    let vehicleDefault = {
        category: 'Automotor',
        domain: '',
        mark: '',
        type: '',
        model: '',
        engine_mark: '',
        engine_number: '',
        chart_mark: '',
        chart_number: '',
        use: ''
    }

    const [checked, setChecked] = useState(false)
    const handleChecked = check => setChecked(check)

    const [transfer, setTransfer] = useState(transferDefault)
    const handleTransferDefault = trans => setTransfer(trans)
    const handleControl_number = control_number => setTransfer({...transfer, control_number:control_number})
    const handleDomain = domain => setTransfer({...transfer, domain: domain})
    const handleTotal = total => setTransfer({...transfer, total: total})
    const handleRegistry = registry => setTransfer({...transfer, registry: registry})
    const handleProcess_number = process_number => setTransfer({...transfer, process_number: process_number})
    const handleWeb_control_number = web_control_number => setTransfer({...transfer, web_control_number: web_control_number})
    const handleDate = date => setTransfer({...transfer, date: date})

    const [client, setClient] = useState(clientDefault)
    const handleClientDefault = clien => {setClient(clien); setClient2(clien)}
    const handleLast_name = last_name => setClient({...client, last_name:last_name})
    const handleName = name => setClient({...client, name: name})
    const handleCuil = cuil => setClient({...client, cuil: cuil})
    const handleTelephone = telephone => setClient({...client, telephone: telephone})
    const handleBirth_date = birth_date => setClient({...client, birth_date: birth_date})
    const handleAddress = address => setClient({...client, address: address})
    const handleEmail = email => setClient({...client, email: email})

    const [client2, setClient2] = useState(clientDefault)
    const handleLast_name2 = last_name => setClient2({...client2, last_name:last_name})
    const handleName2 = name => setClient2({...client2, name: name})
    const handleCuil2 = cuil => setClient2({...client2, cuil: cuil})
    const handleTelephone2 = telephone => setClient2({...client2, telephone: telephone})
    const handleBirth_date2 = birth_date => setClient2({...client2, birth_date: birth_date})
    const handleAddress2 = address => setClient2({...client2, address: address})
    const handleEmail2 = email => setClient2({...client2, email: email})

    const [vehicle, setVehicle] = useState(vehicleDefault)
    const handleVehicleDefault = vehic => setVehicle(vehic)
    const handleCategory = category => setVehicle({...vehicle, category:category})
    const handleDomainVehicle = domain => setVehicle({...vehicle, domain: domain})
    const handleMark = mark => setVehicle({...vehicle, mark: mark})
    const handleType = type => setVehicle({...vehicle, type: type})
    const handleModel = model => setVehicle({...vehicle, model: model})
    const handleEngine_mark = engine_mark => setVehicle({...vehicle, engine_mark: engine_mark})
    const handleEngine_number = engine_number => setVehicle({...vehicle, engine_number: engine_number})
    const handleChart_mark = chart_mark => setVehicle({...vehicle, chart_mark: chart_mark})
    const handleChart_number = chart_number => setVehicle({...vehicle, chart_number: chart_number})
    const handleUse = use => setVehicle({...vehicle, use: use})

    const [status, setStatus] = useState({showMessage: false, type: '', message:''})
    const handleStatus = (showMessage, type='', message='') => setStatus({showMessage: showMessage, type: type, message: message})

    const handleSubmit = async e => {
        try {
            e.preventDefault()

            transfer.vehicle = vehicle
            transfer.full_model = `${vehicle.mark} ${vehicle.model}`

            if(checked){
                transfer.clients = [client,client2]
                transfer.full_name = `${client.last_name} ${client.name} / ${client2.last_name} ${client2.name}`
                
                if (
                    transfer.control_number === '' ||
                    transfer.domain === '' ||
                    transfer.total === '' ||
                    transfer.registry === '' ||
                    transfer.process_number === '' ||
                    transfer.date === '' ||
                    transfer.web_control_number === '' ||
                    client.last_name === '' ||
                    client.cuil === '' ||
                    client.name === '' ||
                    client.birth_date === '' ||
                    client.address === '' ||
                    client2.last_name === '' ||
                    client2.cuil === '' ||
                    client2.name === '' ||
                    client2.birth_date === '' ||
                    client2.address === '' ||
                    vehicle.mark === '' ||
                    vehicle.model === '' ||
                    vehicle.type === '' ||
                    vehicle.use === '' ||
                    vehicle.chart_mark === '' ||
                    vehicle.chart_number === '' ||
                    vehicle.engine_mark === '' ||
                    vehicle.engine_number === ''
    
                ) 
                    return handleStatus(true, 'info', 'Debe tener en cuenta que no se permiten campos vacios.') 
            
            }else{
                transfer.clients = [client]
                transfer.full_name = `${client.last_name} ${client.name}`

                if (
                    transfer.control_number === '' ||
                    transfer.domain === '' ||
                    transfer.total === '' ||
                    transfer.registry === '' ||
                    transfer.process_number === '' ||
                    transfer.date === '' ||
                    transfer.web_control_number === '' ||
                    client.last_name === '' ||
                    client.cuil === '' ||
                    client.name === '' ||
                    client.birth_date === '' ||
                    client.address === '' ||
                    vehicle.mark === '' ||
                    vehicle.model === '' ||
                    vehicle.type === '' ||
                    vehicle.use === '' ||
                    vehicle.chart_mark === '' ||
                    vehicle.chart_number === '' ||
                    vehicle.engine_mark === '' ||
                    vehicle.engine_number === ''
    
                ) 
                return handleStatus(true, 'info', 'Debe tener en cuenta que no se permiten campos vacios.') 
            }   
            
            return await addTransfer(transfer)
                .then(handleStatus(true, 'success', '¡Transferencia crada exitosamente! :)'))
                .then(setInterval(() => handleStatus(false), 5000))
                .then(handleTransferDefault(transferDefault))
                .then(handleClientDefault(clientDefault))
                .then(handleVehicleDefault(vehicleDefault)) 
    
        } catch (error) {
            handleStatus(true, 'error', '¡Ooops, ha ocurrido un error!')
        }
    }
    

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
                    <h1 className={classes.h1}> <DescriptionIcon/> &bull; CREAR TRANSFERENCIA &bull; <DescriptionIcon/> </h1>
                    <Divider/>
                    <form onSubmit={handleSubmit}>
                        <Grid item xs={12}>
                            <h2>DATOS DE LA TRANSFERENCIA</h2>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={2}>
                                <TextField
                                    required
                                    type="text"
                                    id="control_number"
                                    name="control_number"
                                    label="Número control"
                                    value={transfer.control_number}
                                    fullWidth
                                    onChange={e => handleControl_number(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <TextField
                                    required
                                    type="number"
                                    id="registry"
                                    name="registry"
                                    label="Registro"
                                    value={transfer.registry}
                                    fullWidth
                                    onChange={e => handleRegistry(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <TextField
                                    required
                                    type="number"
                                    id="process_number"
                                    name="process_number"
                                    label="Número trámite"
                                    value={transfer.process_number}
                                    fullWidth
                                    onChange={e => handleProcess_number(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <TextField
                                    required
                                    type="text"
                                    id="web_control_number"
                                    name="web_control_number"
                                    label="Número control web"
                                    value={transfer.web_control_number}
                                    fullWidth
                                    onChange={e => handleWeb_control_number(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <TextField
                                    required
                                    id="date"
                                    name="date"
                                    label="Fecha"
                                    type="date"
                                    value={transfer.date}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={e => handleDate(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <TextField
                                    required
                                    type="number"
                                    id="total"
                                    name="total"
                                    label="Importe total"
                                    value={transfer.total}
                                    fullWidth
                                    min="0"
                                    onChange={e => handleTotal(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <h2 className={classes.h2}>DATOS DEL TITULAR
                            <Switch
                                checked={checked}
                                onChange={e => handleChecked(e.target.checked)}
                                name="checked"
                                color="primary"
                            />
                            </h2>
                        </Grid>

                        {
                         checked
                         ?

                         <div>
                            <Grid item xs={12}>
                                <h4>- PRIMER TITULAR</h4>
                            </Grid>
                            <Grid container spacing={3}>
                                <Grid item xs={3}>
                                    <TextField
                                        required
                                        type="text"
                                        id="last_name"
                                        name="last_name"
                                        label="Apellido"
                                        value={client.last_name}
                                        fullWidth
                                        onChange={e => handleLast_name(capitalize(e.target.value))}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        required
                                        type="text"
                                        id="name"
                                        name="name"
                                        label="Nombres"
                                        value={client.name}
                                        fullWidth
                                        onChange={e => handleName(capitalize(e.target.value))}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField
                                        required
                                        type="text"
                                        id="cuil"
                                        name="cuil"
                                        label="CUIL"
                                        value={client.cuil}
                                        fullWidth
                                        onChange={e => handleCuil(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <TextField
                                        required
                                        id="birth_date"
                                        name="birth_date"
                                        label="Fecha nacimiento"
                                        type="date"
                                        value={client.birth_date}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={e => handleBirth_date(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={5}>
                                    <TextField
                                        required
                                        type="text"
                                        id="address"
                                        name="address"
                                        label="Domicilio"
                                        value={client.address}
                                        fullWidth
                                        onChange={e => handleAddress(capitalize(e.target.value))}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField
                                        type="number"
                                        id="telephone"
                                        name="telephone"
                                        label="Teléfono"
                                        value={client.telephone}
                                        fullWidth
                                        onChange={e => handleTelephone(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        type="email"
                                        id="email"
                                        name="email"
                                        label="Email"
                                        value={client.email}
                                        fullWidth
                                        onChange={e => handleEmail(e.target.value)}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <h4 className={classes.h2}>- SEGUNDO TITULAR</h4>
                            </Grid>
                            <Grid container spacing={3}>
                                <Grid item xs={3}>
                                    <TextField
                                        required
                                        type="text"
                                        id="last_name"
                                        name="last_name"
                                        label="Apellido"
                                        value={client2.last_name}
                                        fullWidth
                                        onChange={e => handleLast_name2(capitalize(e.target.value))}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        required
                                        type="text"
                                        id="name"
                                        name="name"
                                        label="Nombres"
                                        value={client2.name}
                                        fullWidth
                                        onChange={e => handleName2(capitalize(e.target.value))}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField
                                        required
                                        type="text"
                                        id="cuil"
                                        name="cuil"
                                        label="CUIL"
                                        value={client2.cuil}
                                        fullWidth
                                        onChange={e => handleCuil2(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <TextField
                                        required
                                        id="birth_date"
                                        name="birth_date"
                                        label="Fecha nacimiento"
                                        type="date"
                                        value={client2.birth_date}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={e => handleBirth_date2(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={5}>
                                    <TextField
                                        required
                                        type="text"
                                        id="address"
                                        name="address"
                                        label="Domicilio"
                                        value={client2.address}
                                        fullWidth
                                        onChange={e => handleAddress2(capitalize(e.target.value))}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField
                                        type="number"
                                        id="telephone"
                                        name="telephone"
                                        label="Teléfono"
                                        value={client2.telephone}
                                        fullWidth
                                        onChange={e => handleTelephone2(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        type="email"
                                        id="email"
                                        name="email"
                                        label="Email"
                                        value={client2.email}
                                        fullWidth
                                        onChange={e => handleEmail2(e.target.value)}
                                    />
                                </Grid>
                            </Grid>
                        </div>

                         :   

                         <Grid container spacing={3}>
                            <Grid item xs={3}>
                                <TextField
                                    required
                                    type="text"
                                    id="last_name"
                                    name="last_name"
                                    label="Apellido"
                                    value={client.last_name}
                                    fullWidth
                                    onChange={e => handleLast_name(capitalize(e.target.value))}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    required
                                    type="text"
                                    id="name"
                                    name="name"
                                    label="Nombres"
                                    value={client.name}
                                    fullWidth
                                    onChange={e => handleName(capitalize(e.target.value))}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    required
                                    type="text"
                                    id="cuil"
                                    name="cuil"
                                    label="CUIL"
                                    value={client.cuil}
                                    fullWidth
                                    onChange={e => handleCuil(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <TextField
                                    required
                                    id="birth_date"
                                    name="birth_date"
                                    label="Fecha nacimiento"
                                    type="date"
                                    value={client.birth_date}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={e => handleBirth_date(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={5}>
                                <TextField
                                    required
                                    type="text"
                                    id="address"
                                    name="address"
                                    label="Domicilio"
                                    value={client.address}
                                    fullWidth
                                    onChange={e => handleAddress(capitalize(e.target.value))}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    type="number"
                                    id="telephone"
                                    name="telephone"
                                    label="Teléfono"
                                    value={client.telephone}
                                    fullWidth
                                    onChange={e => handleTelephone(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    type="email"
                                    id="email"
                                    name="email"
                                    label="Email"
                                    value={client.email}
                                    fullWidth
                                    onChange={e => handleEmail(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                        }
                        
                        <Grid item xs={12}>
                            <h2 className={classes.h2}>DATOS DEL VEHICULO</h2>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={2}>
                                <TextField
                                    required
                                    id="standard-select-currency"
                                    select
                                    label="Categoría"
                                    value={vehicle.category}
                                    onChange={e => handleCategory(capitalize(e.target.value))}
                                    >
                                    <MenuItem key="Automotor" value="Automotor">Automotor</MenuItem>
                                    <MenuItem key="Motovehículo" value="Motovehículo">Motovehículo</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={2}>
                                <TextField
                                    required
                                    type="text"
                                    id="domain"
                                    name="domain"
                                    label="Dominio"
                                    value={vehicle.domain}
                                    fullWidth
                                    onChange={e => {handleDomain(e.target.value.toUpperCase()); handleDomainVehicle(e.target.value.toUpperCase())}}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <TextField
                                    required
                                    type="text"
                                    id="mark"
                                    name="mark"
                                    label="Marca"
                                    value={vehicle.mark}
                                    fullWidth
                                    onChange={e => handleMark(capitalize(e.target.value))}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    required
                                    type="text"
                                    id="type"
                                    name="type"
                                    label="Tipo"
                                    value={vehicle.type}
                                    fullWidth
                                    onChange={e => handleType(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    required
                                    type="text"
                                    id="model"
                                    name="model"
                                    label="Modelo"
                                    value={vehicle.model}
                                    fullWidth
                                    onChange={e => handleModel(capitalize(e.target.value))}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <TextField
                                    required
                                    type="text"
                                    id="engine_mark"
                                    name="engine_mark"
                                    label="Marca motor"
                                    value={vehicle.engine_mark}
                                    fullWidth
                                    onChange={e => handleEngine_mark(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <TextField
                                    required
                                    type="text"
                                    id="engine_number"
                                    name="engine_number"
                                    label="Número motor"
                                    value={vehicle.engine_number}
                                    fullWidth
                                    onChange={e => handleEngine_number(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <TextField
                                    required
                                    type="text"
                                    id="chart_mark"
                                    name="chart_mark"
                                    label="Marca cuadro"
                                    value={vehicle.chart_mark}
                                    fullWidth
                                    onChange={e => handleChart_mark(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <TextField
                                    required
                                    type="text"
                                    id="chart_number"
                                    name="chart_number"
                                    label="Número cuadro"
                                    value={vehicle.chart_number}
                                    fullWidth
                                    onChange={e => handleChart_number(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <TextField
                                    required
                                    type="text"
                                    id="use"
                                    name="use"
                                    label="Uso"
                                    value={vehicle.use}
                                    fullWidth
                                    onChange={e => handleUse(capitalize(e.target.value))}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <Button type="submit" size="large" fullWidth="true" variant="contained" color="primary" startIcon={<PostAddIcon />}>
                                    Crear 
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Grid>
      </div>
    )
}

import React, { useState } from 'react'

//******************************************** API *********************************************
import capitalize from '../../utils/capitalize'

//************************************ Components Material-UI ************************************
import { Button, ButtonGroup, Grid, Paper, makeStyles, TextField, Typography, InputAdornment, Divider } from '@material-ui/core';

//************************************* Colors Material-UI ***************************************
import blueGrey from "@material-ui/core/colors/blueGrey";

//************************************** Icons Material-UI ***************************************
import GetAppIcon from '@material-ui/icons/GetApp';

//******************************************* jsPDF **********************************************
import jsPDF from "jspdf";
import "jspdf-autotable";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: 50,
    },
    paper: {
        flexGrow: 1,
        margin: 20,
        color: theme.palette.text.primary,
        paddingLeft:15,
        paddingRight:15,
        paddingTop:15,
        paddingBottom:15
    },
    grid: {
        marginBottom:5,
    },
    grid2: {
        marginLeft:5,
    },
    dividerVertical: {
        marginRight: 15,
    },
    dividerHorizontal: {
        marginBottom: 5,
    },
    textField:{
        paddingRight: 15,
    },
    backgroundPaper: {
        flexGrow: 1,
        margin: 20,
        color: theme.palette.text.primary,
        paddingLeft:15,
        paddingRight:15,
        paddingTop:15,
        paddingBottom:15,
        backgroundColor: blueGrey[200]
      },
      buttonGroup:{
        marginBottom: 10
      },
}));

export default function Budgets() {
    const classes = useStyles()

    const [buttonClicked, setButtonClicked] = useState(true)
    const handleButtonClicked = bc => setButtonClicked(bc)

    const [dominio, setDominio] = useState("")
    const handleDominio = dom => setDominio(dom)

    const [marca, setMarca] = useState("")
    const handleMarca = mar => setMarca(mar)

    const [modelo, setModelo] = useState("")
    const handleModelo = mod => setModelo(mod)

    const [titular, setTitular] = useState("")
    const handleTitular = titu => setTitular(titu)

    const [valuacionDeTabla, setValuacionDeTabla] = useState(0)
    const handleValuacionDeTabla = vdt => setValuacionDeTabla(vdt)

    const [valuacionImpositiva, setValuacionImpositiva] = useState(0)
    const handleValuacionImpositiva = vi => setValuacionImpositiva(vi)

    const [valorDeclarado, setValorDeclarado] = useState(0)
    const handleValorDeclarado = vd => setValorDeclarado(vd)

    const [honorarios, setHonorarios] = useState(0)
    const handleHonorarios = hon => setHonorarios(hon)

    const [nacional, setNacional] = useState(1.5)
    const handleNacional = nac => setNacional(nac)

    const [importado, setImportado] = useState(2)
    const handleImportado = imp => setImportado(imp)

    const [valorTransferenciaImportado, setValorTransferenciaImportado] = useState(0)
    const handleValorTransferenciaImportado = vti => setValorTransferenciaImportado(vti)

    const [valorTransferenciaNacional, setValorTransferenciaNacional] = useState(0)
    const handleValorTransferenciaNacional = vtn => setValorTransferenciaNacional(vtn)

    const [arancelTranferenciaImportado, setArancelTransferenciaImportado] = useState(0)
    const handleArancelTransferenciaImportado = ati => setArancelTransferenciaImportado(ati)

    const [arancelTranferenciaNacional, setArancelTransferenciaNacional] = useState(0)
    const handleArancelTransferenciaNacional = atn => setArancelTransferenciaNacional(atn)

    const [sellado, setSellado] = useState(3)
    const handleSellado = sel => setSellado(sel)

    const [selladoImportado, setSelladoImportado] = useState(0)
    const handleSelladoImportado = si => setSelladoImportado(si)

    const [selladoNacional, setSelladoNacional] = useState(0)
    const handleSelladoNacional = sn => setSelladoNacional(sn)

    const [cedula, setCedula] = useState(0)
    const handleCedula = ced => setCedula(ced)

    const [cedulaUnitario, setCedulaUnitario] = useState(0)
    const handleCedulaUnitario = cedUn => setCedulaUnitario(cedUn)

    const [cedulaImportadoNacional, setCedulaImportadoNacional] = useState(0)
    const handleCedulaImportadoNacional = cedImpNac => setCedulaImportadoNacional(cedImpNac)

    const [titulo, setTitulo] = useState(0)
    const handleTitulo = tit => setTitulo(tit)

    const [tituloUnitario, setTituloUnitario] = useState(0)
    const handleTituloUnitario = titUn => setTituloUnitario(titUn)

    const [tituloImportadoNacional, setTituloImportadoNacional] = useState(0)
    const handleTituloImportadoNacional = titImpNac => setTituloImportadoNacional(titImpNac)

    const [infracciones, setInfracciones] = useState(0)
    const handleInfracciones = inf => setInfracciones(inf)

    const [infraccionesUnitario, setInfraccionesUnitario] = useState(0)
    const handleInfraccionesUnitario = infUn => setInfraccionesUnitario(infUn)

    const [infraccionesImportadoNacional, setInfraccionesImportadoNacional] = useState(0)
    const handleInfraccionesImportadoNacional = infImpNac => setInfraccionesImportadoNacional(infImpNac)

    const [formulario13D, setFormulario13D] = useState(0)
    const handleFormulario13D = f13D => setFormulario13D(f13D)

    const [formulario13DUnitario, setFormulario13DUnitario] = useState(0)
    const handleFormulario13DUnitario = f13DUn => setFormulario13DUnitario(f13DUn)

    const [formulario13DImportadoNacional, setFormulario13DImportadoNacional] = useState(0)
    const handleFormulario13DImportadoNacional = f13DImpNac => setFormulario13DImportadoNacional(f13DImpNac)

    const [certificacionFirma, setCertificacionFirma] = useState(0)
    const handleCertificacionFirma = cf => setCertificacionFirma(cf)

    const [certificacionFirmaUnitario, setCertificacionFirmaUnitario] = useState(0)
    const handleCertificacionFirmaUnitario = cfUn => setCertificacionFirmaUnitario(cfUn)

    const [certificacionFirmaImportadoNacional, setCertificacionFirmaImportadoNacional] = useState(0)
    const handleCertificacionFirmaImportadoNacional = cfImpNac => setCertificacionFirmaImportadoNacional(cfImpNac)

    const [actualizacionDNRPA, setActualizacionDNRPA] = useState(0)
    const handleActualizacionDNRPA = act => setActualizacionDNRPA(act)

    const [actualizacionDNRPAUnitario, setActualizacionDNRPAUnitario] = useState(0)
    const handleActualizacionDNRPAUnitario = actUn => setActualizacionDNRPAUnitario(actUn)

    const [actualizacionDNRPAImportadoNacional, setActualizacionDNRPAImportadoNacional] = useState(0)
    const handleActualizacionDNRPAImportadoNacional = actImpNac => setActualizacionDNRPAImportadoNacional(actImpNac)

    const [pedidoEnvioLegajo, setPedidoEnvioLegajo] = useState(0)
    const handlePedidoEnvioLegajo = pel => setPedidoEnvioLegajo(pel)

    const [pedidoEnvioLegajoUnitario, setPedidoEnvioLegajoUnitario] = useState(0)
    const handlePedidoEnvioLegajoUnitario = pelUn => setPedidoEnvioLegajoUnitario(pelUn)

    const [pedidoEnvioLegajoImportadoNacional, setPedidoEnvioLegajoImportadoNacional] = useState(0)
    const handlePedidoEnvioLegajoImportadoNacional = pelImpNac => setPedidoEnvioLegajoImportadoNacional(pelImpNac)

    const [bajaImpositiva, setBajaImpositiva] = useState(0)
    const handleBajaImpositiva = bajIm => setBajaImpositiva(bajIm)

    const [bajaImpositivaUnitario, setBajaImpositivaUnitario] = useState(0)
    const handleBajaImpositivaUnitario = bajImUn => setBajaImpositivaUnitario(bajImUn)

    const [bajaImpositivaImportadoNacional, setBajaImpositivaImportadoNacional] = useState(0)
    const handleBajaImpositivaImportadoNacional = bajImImpNac => setBajaImpositivaImportadoNacional(bajImImpNac)

    const [formulario04, setFormulario04] = useState(0)
    const handleFormulario04 = f04 => setFormulario04(f04)

    const [formulario04Unitario, setFormulario04Unitario] = useState(0)
    const handleFormulario04Unitario = f04Un => setFormulario04Unitario(f04Un)

    const [formulario04ImportadoNacional, setFormulario04ImportadoNacional] = useState(0)
    const handleFormulario04ImportadoNacional = f04ImpNac => setFormulario04ImportadoNacional(f04ImpNac)

    const [formulario08, setFormulario08] = useState(0)
    const handleFormulario08 = f08 => setFormulario08(f08)

    const [formulario08Unitario, setFormulario08Unitario] = useState(0)
    const handleFormulario08Unitario = f08Un => setFormulario08Unitario(f08Un)

    const [formulario08ImportadoNacional, setFormulario08ImportadoNacional] = useState(0)
    const handleFormulario08ImportadoNacional = f08ImpNac => setFormulario08ImportadoNacional(f08ImpNac)

    const [mora08, setMora08] = useState(0)
    const handleMora08 = mor08 => setMora08(mor08)

    const [mora08Unitario, setMora08Unitario] = useState(0)
    const handleMora08Unitario = mor08Un => setMora08Unitario(mor08Un)

    const [mora08ImportadoNacional, setMora08ImportadoNacional] = useState(0)
    const handleMora08ImportadoNacional = mor08ImpNac => setMora08ImportadoNacional(mor08ImpNac)

    const [formulario12, setFormulario12] = useState(0)
    const handleFormulario12 = f12 => setFormulario12(f12)

    const [formulario12Unitario, setFormulario12Unitario] = useState(0)
    const handleFormulario12Unitario = f12Un => setFormulario12Unitario(f12Un)

    const [formulario12ImportadoNacional, setFormulario12ImportadoNacional] = useState(0)
    const handleFormulario12ImportadoNacional = f12ImpNac => setFormulario12ImportadoNacional(f12ImpNac)

    const [formulario13, setFormulario13] = useState(0)
    const handleFormulario13 = f13 => setFormulario13(f13)

    const [formulario13Unitario, setFormulario13Unitario] = useState(0)
    const handleFormulario13Unitario = f13Un => setFormulario13Unitario(f13Un)

    const [formulario13ImportadoNacional, setFormulario13ImportadoNacional] = useState(0)
    const handleFormulario13ImportadoNacional = f13ImpNac => setFormulario13ImportadoNacional(f13ImpNac)

    const [cedulaAutorizado, setCedulaAutorizado] = useState(0)
    const handleCedulaAutorizado = cedAut => setCedulaAutorizado(cedAut)

    const [cedulaAutorizadoUnitario, setCedulaAutorizadoUnitario] = useState(0)
    const handleCedulaAutorizadoUnitario = cedAutUn => setCedulaAutorizadoUnitario(cedAutUn)

    const [cedulaAutorizadoImportadoNacional, setCedulaAutorizadoImportadoNacional] = useState(0)
    const handleCedulaAutorizadoImportadoNacional = cedAutImpNac => setCedulaAutorizadoImportadoNacional(cedAutImpNac)

    const [altaBajaMotor, setAltaBajaMotor] = useState(0)
    const handleAltaBajaMotor = abm => setAltaBajaMotor(abm)

    const [altaBajaMotorUnitario, setAltaBajaMotorUnitario] = useState(0)
    const handleAltaBajaMotorUnitario = abmUn => setAltaBajaMotorUnitario(abmUn)

    const [altaBajaMotorImportadoNacional, setAltaBajaMotorImportadoNacional] = useState(0)
    const handleAltaBajaMotorImportadoNacional = abmImpNac => setAltaBajaMotorImportadoNacional(abmImpNac)

    const [bajaAutoMoto, setBajaAutoMoto] = useState(0)
    const handleBajaAutoMoto = bam => setBajaAutoMoto(bam)

    const [bajaAutoMotoUnitario, setBajaAutoMotoUnitario] = useState(0)
    const handleBajaAutoMotoUnitario = bamUn => setBajaAutoMotoUnitario(bamUn)

    const [bajaAutoMotoImportadoNacional, setBajaAutoMotoImportadoNacional] = useState(0)
    const handleBajaAutoMotoImportadoNacional = bamImpNac => setBajaAutoMotoImportadoNacional(bamImpNac)

    const [formulario59, setFormulario59] = useState(0)
    const handleFormulario59 = f59 => setFormulario59(f59)

    const [formulario59Unitario, setFormulario59Unitario] = useState(0)
    const handleFormulario59Unitario = f59Un => setFormulario59Unitario(f59Un)

    const [formulario59ImportadoNacional, setFormulario59ImportadoNacional] = useState(0)
    const handleFormulario59ImportadoNacional = f59ImpNac => setFormulario59ImportadoNacional(f59ImpNac)

    const handleReport = () => {
        let id = 1;
        const doc = new jsPDF();
        const tableColumn = ["N°", "Descripción", "Cantidad", "Valor Unitario", "Valor Total"];
        const tableRows = [];

        if(buttonClicked){
            tableRows.push([id++,"Arancel Transferencia"," - "," - ", `$${arancelTranferenciaImportado}`])
            tableRows.push([id++,"Sellado"," - "," - ", `$${selladoImportado}`])
        } else {
            tableRows.push([id++,"Arancel Transferencia"," - "," - ", `$${arancelTranferenciaNacional}`])
            tableRows.push([id++,"Sellado"," - "," - ", `$${selladoNacional}`])
        }
        if(cedula!==0 && cedulaUnitario!==0) tableRows.push([id++,"Cédula",cedula,`$${cedulaUnitario}`,`$${cedulaImportadoNacional}`])
        if(titulo!==0 && tituloUnitario!==0) tableRows.push([id++,"Título",titulo,`$${tituloUnitario}`,`$${tituloImportadoNacional}`])
        if(infracciones!==0 && infraccionesUnitario!==0) tableRows.push([id++,"Infracciones",infracciones,`$${infraccionesUnitario}`,`$${infraccionesImportadoNacional}`])
        if(formulario13D!==0 && formulario13DUnitario!==0) tableRows.push([id++,"Formulario 13D",formulario13D,`$${formulario13DUnitario}`,`$${formulario13DImportadoNacional}`])
        if(certificacionFirma!==0 && certificacionFirmaUnitario!==0) tableRows.push([id++,"Certificación Firma",certificacionFirma,`$${certificacionFirmaUnitario}`,`$${certificacionFirmaImportadoNacional}`])
        if(actualizacionDNRPA!==0 && actualizacionDNRPAUnitario!==0) tableRows.push([id++,"Actualización DNRPA",actualizacionDNRPA,`$${actualizacionDNRPAUnitario}`,`$${actualizacionDNRPAImportadoNacional}`])
        if(pedidoEnvioLegajo!==0 && pedidoEnvioLegajoUnitario!==0) tableRows.push([id++,"Pedido/Envío Legajo",pedidoEnvioLegajo,`$${pedidoEnvioLegajoUnitario}`,`$${pedidoEnvioLegajoImportadoNacional}`])
        if(bajaImpositiva!==0 && bajaImpositivaUnitario!==0) tableRows.push([id++,"Baja Impositiva",bajaImpositiva,`$${bajaImpositivaUnitario}`,`$${bajaImpositivaImportadoNacional}`])
        if(formulario04!==0 && formulario04Unitario!==0) tableRows.push([id++,"Formulario 04",formulario04,`$${formulario04Unitario}`,`$${formulario04ImportadoNacional}`])
        if(formulario08!==0 && formulario08Unitario!==0) tableRows.push([id++,"Formulario 08",formulario08,`$${formulario08Unitario}`,`$${formulario08ImportadoNacional}`])
        if(mora08!==0 && mora08Unitario!==0) tableRows.push([id++,"Mora 08",mora08,`$${mora08Unitario}`,`$${mora08ImportadoNacional}`])
        if(formulario12!==0 && formulario12Unitario!==0) tableRows.push([id++,"Formulario 12",formulario12,`$${formulario12Unitario}`,`$${formulario12ImportadoNacional}`])
        if(formulario13!==0 && formulario13Unitario!==0) tableRows.push([id++,"Formulario 13",formulario13,`$${formulario13Unitario}`,`$${formulario13ImportadoNacional}`])
        if(cedulaAutorizado!==0 && cedulaAutorizadoUnitario!==0) tableRows.push([id++,"Cédula Autorizado",cedulaAutorizado,`$${cedulaAutorizadoUnitario}`,`$${cedulaAutorizadoImportadoNacional}`])
        if(altaBajaMotor!==0 && altaBajaMotorUnitario!==0) tableRows.push([id++,"Alta/Baja Motor",altaBajaMotor,`$${altaBajaMotorUnitario}`,`$${altaBajaMotorImportadoNacional}`])
        if(bajaAutoMoto!==0 && bajaAutoMotoUnitario!==0) tableRows.push([id++,"Baja Auto/Moto",bajaAutoMoto,`$${bajaAutoMotoUnitario}`,`$${bajaAutoMotoImportadoNacional}`])
        if(formulario59!==0 && formulario59Unitario!==0) tableRows.push([id++,"Formulario 59",formulario59,`$${formulario59Unitario}`,`$${formulario59ImportadoNacional}`])
        tableRows.push(["----","--------------------------------------------","----","----------","----------"])
        if(buttonClicked 
            ? tableRows.push([id++,"Subtotal Costo Transferencia"," - "," - ",`$${arancelTranferenciaImportado+selladoImportado+cedulaImportadoNacional
                +tituloImportadoNacional+infraccionesImportadoNacional+formulario13DImportadoNacional
                +certificacionFirmaImportadoNacional+actualizacionDNRPAImportadoNacional+pedidoEnvioLegajoImportadoNacional
                +bajaImpositivaImportadoNacional+formulario04ImportadoNacional+formulario08ImportadoNacional
                +mora08ImportadoNacional+formulario12ImportadoNacional+formulario13ImportadoNacional
                +cedulaAutorizadoImportadoNacional+altaBajaMotorImportadoNacional+bajaAutoMotoImportadoNacional
                +formulario59ImportadoNacional}`])
            : tableRows.push([id++,"Subtotal Costo Transferencia"," - "," - ",`$${arancelTranferenciaNacional+selladoNacional+cedulaImportadoNacional
                +tituloImportadoNacional+infraccionesImportadoNacional+formulario13DImportadoNacional
                +certificacionFirmaImportadoNacional+actualizacionDNRPAImportadoNacional+pedidoEnvioLegajoImportadoNacional
                +bajaImpositivaImportadoNacional+formulario04ImportadoNacional+formulario08ImportadoNacional
                +mora08ImportadoNacional+formulario12ImportadoNacional+formulario13ImportadoNacional
                +cedulaAutorizadoImportadoNacional+altaBajaMotorImportadoNacional+bajaAutoMotoImportadoNacional
                +formulario59ImportadoNacional}`]))
        tableRows.push([id++,"Honorarios"," - "," - ",`$${honorarios}`])
        tableRows.push(["----","--------------------------------------------","----","----------","----------"])
        if(buttonClicked 
            ? tableRows.push([id++,"Total Costo Transferencia"," - "," - ",`$${arancelTranferenciaImportado+selladoImportado+cedulaImportadoNacional
                +tituloImportadoNacional+infraccionesImportadoNacional+formulario13DImportadoNacional
                +certificacionFirmaImportadoNacional+actualizacionDNRPAImportadoNacional+pedidoEnvioLegajoImportadoNacional
                +bajaImpositivaImportadoNacional+formulario04ImportadoNacional+formulario08ImportadoNacional
                +mora08ImportadoNacional+formulario12ImportadoNacional+formulario13ImportadoNacional
                +cedulaAutorizadoImportadoNacional+altaBajaMotorImportadoNacional+bajaAutoMotoImportadoNacional
                +formulario59ImportadoNacional+honorarios}`])
            : tableRows.push([id++,"Total Costo Transferencia"," - "," - ",`$${arancelTranferenciaNacional+selladoNacional+cedulaImportadoNacional
                +tituloImportadoNacional+infraccionesImportadoNacional+formulario13DImportadoNacional
                +certificacionFirmaImportadoNacional+actualizacionDNRPAImportadoNacional+pedidoEnvioLegajoImportadoNacional
                +bajaImpositivaImportadoNacional+formulario04ImportadoNacional+formulario08ImportadoNacional
                +mora08ImportadoNacional+formulario12ImportadoNacional+formulario13ImportadoNacional
                +cedulaAutorizadoImportadoNacional+altaBajaMotorImportadoNacional+bajaAutoMotoImportadoNacional
                +formulario59ImportadoNacional+honorarios}`]))

        var finalY = doc.lastAutoTable.finalY || 15;
        doc.text(100, 15, `Comprobante Transferencia` , 'center')
        const date = Date().split(" ");
        const titularSplit = titular.split(" ");
        doc.setFontSize(9);
        doc.text(163, 15, `${date[2]} ${date[1]} ${date[3]} - ${date[4]}`)
        doc.setFontSize(11);
        doc.text(100, finalY+8, `Dominio: ${dominio}   -   Vehículo: ${marca} ${modelo}   -   Titular: ${titular}`, 'center')
        doc.autoTable(tableColumn, tableRows, {headStyles:{halign : 'center', fillColor: "#5968BF"}, theme: 'grid', startY: finalY+12,}, {columnStyles: { 0: { halign: 'center' } } } );
        const dateStr = date[2] + date[1] + date[3];
        const titularStr = titularSplit[0]+titularSplit[1]+titularSplit[2];
        doc.save(`ticket${titularStr}${dateStr}.pdf`)
    }

    return (
        <div className={classes.root}>
            <Grid container justify="center">
                <Grid item xs={8}>
                    <Paper elevation={5} className={classes.paper}>
                        <Grid container alignItems="flex-end" className={classes.grid}>
                            <Grid item xs={4}>
                                <Typography variant="subtitle1">Costo de Transferencia Automotor</Typography>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={1}></Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <Typography variant="subtitle1">Unitario</Typography>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <Typography variant="subtitle1">Importado</Typography>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <Typography variant="subtitle1">Nacional</Typography>
                            </Grid>
                        </Grid>

                        <Divider className={classes.dividerHorizontal}/>

                        <Grid container alignItems="flex-end" className={classes.grid}>
                            <Grid item xs={4}>
                                <Typography variant="subtitle1">Valor Transferencia</Typography>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={1}></Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}></Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}
                                    type="number"
                                    value={valorTransferenciaImportado}
                                    size="small"
                                    InputProps={{readOnly: true}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}
                                    type="number"
                                    value={valorTransferenciaNacional}
                                    size="small"
                                    InputProps={{readOnly: true}}/>
                            </Grid>
                        </Grid>

                        <Grid container alignItems="flex-end" className={classes.grid}>
                            <Grid item xs={4}>
                                <Typography variant="subtitle1">Arancel Transferencia</Typography>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={1}></Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}></Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}
                                    type="number"
                                    value={arancelTranferenciaImportado}
                                    size="small"
                                    onChange={e => handleArancelTransferenciaImportado(Number(e.target.value))}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}
                                    type="number"
                                    value={arancelTranferenciaNacional}
                                    size="small"
                                    onChange={e => handleArancelTransferenciaNacional(Number(e.target.value))}/>
                            </Grid>
                        </Grid>

                        <Grid container alignItems="flex-end" className={classes.grid}>
                            <Grid item xs={4}>
                                <Typography variant="subtitle1">Sellado</Typography>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={1}>
                                <TextField 
                                    className={classes.textField}
                                    type="number"
                                    fullWidth 
                                    size="small"
                                    value={sellado}
                                    onChange={e => {handleSellado(Number(e.target.value));
                                        handleSelladoImportado((valuacionDeTabla*Number(e.target.value))/100);
                                        handleSelladoNacional((valuacionDeTabla*Number(e.target.value))/100)}}
                                    InputProps={{endAdornment: <InputAdornment position="start">%</InputAdornment>}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}></Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}
                                    type="number"
                                    value={selladoImportado}
                                    size="small"
                                    InputProps={{readOnly: true}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}
                                    type="number"
                                    value={selladoNacional}
                                    size="small"
                                    InputProps={{readOnly: true}}/>
                            </Grid>
                        </Grid>

                        <Grid container alignItems="flex-end" className={classes.grid}>
                            <Grid item xs={4}>
                                <Typography variant="subtitle1">Cédula</Typography>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={1}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    type="number"
                                    value={cedula}
                                    onChange={e => {handleCedula(Number(e.target.value));
                                        handleCedulaImportadoNacional(Number(e.target.value)*cedulaUnitario)}}
                                    size="small"/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    type="number"
                                    value={cedulaUnitario}
                                    onChange={e => {handleCedulaUnitario(Number(e.target.value));
                                        handleCedulaImportadoNacional(cedula*Number(e.target.value))}}
                                    size="small"/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={cedulaImportadoNacional}
                                    InputProps={{readOnly: true}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}       
                                    size="small"
                                    type="number"
                                    value={cedulaImportadoNacional}
                                    InputProps={{readOnly: true}}/>
                            </Grid>
                        </Grid>

                        <Grid container alignItems="flex-end" className={classes.grid}>
                            <Grid item xs={4}>
                                <Typography variant="subtitle1">Título</Typography>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={1}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={titulo}
                                    onChange={e => {handleTitulo(Number(e.target.value));
                                        handleTituloImportadoNacional(Number(e.target.value)*tituloUnitario)}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth
                                    type="number"
                                    value={tituloUnitario}
                                    onChange={e => {handleTituloUnitario(Number(e.target.value));
                                        handleTituloImportadoNacional(titulo*Number(e.target.value))}}
                                    size="small"/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth
                                    size="small"
                                    type="number"
                                    value={tituloImportadoNacional}
                                    InputProps={{readOnly: true}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}       
                                    size="small"
                                    type="number"
                                    value={tituloImportadoNacional}
                                    InputProps={{readOnly: true}}/>
                            </Grid>
                        </Grid>

                        <Grid container alignItems="flex-end" className={classes.grid}>
                            <Grid item xs={4}>
                                <Typography variant="subtitle1">Infracciones</Typography>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={1}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={infracciones}
                                    onChange={e => {handleInfracciones(Number(e.target.value));
                                        handleInfraccionesImportadoNacional(Number(e.target.value)*infraccionesUnitario)}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={infraccionesUnitario}
                                    onChange={e => {handleInfraccionesUnitario(Number(e.target.value));
                                        handleInfraccionesImportadoNacional(infracciones*Number(e.target.value))}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={infraccionesImportadoNacional}
                                    InputProps={{readOnly: true}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}       
                                    size="small"
                                    type="number"
                                    value={infraccionesImportadoNacional}
                                    InputProps={{readOnly: true}}/>
                            </Grid>
                        </Grid>

                        <Grid container alignItems="flex-end" className={classes.grid}>
                            <Grid item xs={4}>
                                <Typography variant="subtitle1">Formulario 13D</Typography>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={1}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={formulario13D}
                                    onChange={e => {handleFormulario13D(Number(e.target.value));
                                        handleFormulario13DImportadoNacional(Number(e.target.value)*formulario13DUnitario)}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={formulario13DUnitario}
                                    onChange={e => {handleFormulario13DUnitario(Number(e.target.value));
                                        handleFormulario13DImportadoNacional(formulario13D*Number(e.target.value))}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={formulario13DImportadoNacional}
                                    InputProps={{readOnly: true}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}       
                                    size="small"
                                    type="number"
                                    value={formulario13DImportadoNacional}
                                    InputProps={{readOnly: true}}/>
                            </Grid>
                        </Grid>

                        <Grid container alignItems="flex-end" className={classes.grid}>
                            <Grid item xs={4}>
                                <Typography variant="subtitle1">Certificación Firma</Typography>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={1}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={certificacionFirma}
                                    onChange={e => {handleCertificacionFirma(Number(e.target.value));
                                        handleCertificacionFirmaImportadoNacional(Number(e.target.value)*certificacionFirmaUnitario)}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={certificacionFirmaUnitario}
                                    onChange={e => {handleCertificacionFirmaUnitario(Number(e.target.value));
                                        handleCertificacionFirmaImportadoNacional(certificacionFirma*Number(e.target.value))}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={certificacionFirmaImportadoNacional}
                                    InputProps={{readOnly: true}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}       
                                    size="small"
                                    type="number"
                                    value={certificacionFirmaImportadoNacional}
                                    InputProps={{readOnly: true}}/>
                            </Grid>
                        </Grid>

                        <Grid container alignItems="flex-end" className={classes.grid}>
                            <Grid item xs={4}>
                                <Typography variant="subtitle1">Actualización DNRPA</Typography>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={1}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={actualizacionDNRPA}
                                    onChange={e => {handleActualizacionDNRPA(Number(e.target.value));
                                        handleActualizacionDNRPAImportadoNacional(Number(e.target.value)*actualizacionDNRPAUnitario)}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={actualizacionDNRPAUnitario}
                                    onChange={e => {handleActualizacionDNRPAUnitario(Number(e.target.value));
                                        handleActualizacionDNRPAImportadoNacional(actualizacionDNRPA*Number(e.target.value))}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={actualizacionDNRPAImportadoNacional}
                                    InputProps={{readOnly: true}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}       
                                    size="small"
                                    type="number"
                                    value={actualizacionDNRPAImportadoNacional}
                                    InputProps={{readOnly: true}}/>
                            </Grid>
                        </Grid>

                        <Grid container alignItems="flex-end" className={classes.grid}>
                            <Grid item xs={4}>
                                <Typography variant="subtitle1">Pedido/Envío Legajo</Typography>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={1}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={pedidoEnvioLegajo}
                                    onChange={e => {handlePedidoEnvioLegajo(Number(e.target.value));
                                        handlePedidoEnvioLegajoImportadoNacional(Number(e.target.value)*pedidoEnvioLegajoUnitario)}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={pedidoEnvioLegajoUnitario}
                                    onChange={e => {handlePedidoEnvioLegajoUnitario(Number(e.target.value));
                                        handlePedidoEnvioLegajoImportadoNacional(pedidoEnvioLegajo*Number(e.target.value))}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={pedidoEnvioLegajoImportadoNacional}
                                    InputProps={{readOnly: true}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}       
                                    size="small"
                                    type="number"
                                    value={pedidoEnvioLegajoImportadoNacional}
                                    InputProps={{readOnly: true}}/>
                            </Grid>
                        </Grid>

                        <Grid container alignItems="flex-end" className={classes.grid}>
                            <Grid item xs={4}>
                                <Typography variant="subtitle1">Baja Impositiva</Typography>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={1}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={bajaImpositiva}
                                    onChange={e => {handleBajaImpositiva(Number(e.target.value));
                                        handleBajaImpositivaImportadoNacional(Number(e.target.value)*bajaImpositivaUnitario)}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={bajaImpositivaUnitario}
                                    onChange={e => {handleBajaImpositivaUnitario(Number(e.target.value));
                                        handleBajaImpositivaImportadoNacional(bajaImpositiva*Number(e.target.value))}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={bajaImpositivaImportadoNacional}
                                    InputProps={{readOnly: true}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}       
                                    size="small"
                                    type="number"
                                    value={bajaImpositivaImportadoNacional}
                                    InputProps={{readOnly: true}}/>
                            </Grid>
                        </Grid>

                        <Grid container alignItems="flex-end" className={classes.grid}>
                            <Grid item xs={4}>
                                <Typography variant="subtitle1">Formulario 04</Typography>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={1}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={formulario04}
                                    onChange={e => {handleFormulario04(Number(e.target.value));
                                        handleFormulario04ImportadoNacional(Number(e.target.value)*formulario04Unitario)}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={formulario04Unitario}
                                    onChange={e => {handleFormulario04Unitario(Number(e.target.value));
                                        handleFormulario04ImportadoNacional(formulario04*Number(e.target.value))}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={formulario04ImportadoNacional}
                                    InputProps={{readOnly: true}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}       
                                    size="small"
                                    type="number"
                                    value={formulario04ImportadoNacional}
                                    InputProps={{readOnly: true}}/>
                            </Grid>
                        </Grid>

                        <Grid container alignItems="flex-end" className={classes.grid}>
                            <Grid item xs={4}>
                                <Typography variant="subtitle1">Formulario 08</Typography>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={1}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={formulario08}
                                    onChange={e => {handleFormulario08(Number(e.target.value));
                                        handleFormulario08ImportadoNacional(Number(e.target.value)*formulario08Unitario)}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={formulario08Unitario}
                                    onChange={e => {handleFormulario08Unitario(Number(e.target.value));
                                        handleFormulario08ImportadoNacional(formulario08*Number(e.target.value))}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={formulario08ImportadoNacional}
                                    InputProps={{readOnly: true}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}       
                                    size="small"
                                    type="number"
                                    value={formulario08ImportadoNacional}
                                    InputProps={{readOnly: true}}/>
                            </Grid>
                        </Grid>

                        <Grid container alignItems="flex-end" className={classes.grid}>
                            <Grid item xs={4}>
                                <Typography variant="subtitle1">Mora 08</Typography>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={1}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={mora08}
                                    onChange={e => {handleMora08(Number(e.target.value));
                                        handleMora08ImportadoNacional(Number(e.target.value)*mora08Unitario)}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={mora08Unitario}
                                    onChange={e => {handleMora08Unitario(Number(e.target.value));
                                        handleMora08ImportadoNacional(mora08*Number(e.target.value))}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={mora08ImportadoNacional}
                                    InputProps={{readOnly: true}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}       
                                    size="small"
                                    type="number"
                                    value={mora08ImportadoNacional}
                                    InputProps={{readOnly: true}}/>
                            </Grid>
                        </Grid>

                        <Grid container alignItems="flex-end" className={classes.grid}>
                            <Grid item xs={4}>
                                <Typography variant="subtitle1">Formulario 12 (Verificación)</Typography>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={1}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={formulario12}
                                    onChange={e => {handleFormulario12(Number(e.target.value));
                                        handleFormulario12ImportadoNacional(Number(e.target.value)*formulario12Unitario)}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={formulario12Unitario}
                                    onChange={e => {handleFormulario12Unitario(Number(e.target.value));
                                        handleFormulario12ImportadoNacional(formulario12*Number(e.target.value))}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={formulario12ImportadoNacional}
                                    InputProps={{readOnly: true}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}       
                                    size="small"
                                    type="number"
                                    value={formulario12ImportadoNacional}
                                    InputProps={{readOnly: true}}/>
                            </Grid>
                        </Grid>

                        <Grid container alignItems="flex-end" className={classes.grid}>
                            <Grid item xs={4}>
                                <Typography variant="subtitle1">Formulario 13</Typography>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={1}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={formulario13}
                                    onChange={e => {handleFormulario13(Number(e.target.value));
                                        handleFormulario13ImportadoNacional(Number(e.target.value)*formulario13Unitario)}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={formulario13Unitario}
                                    onChange={e => {handleFormulario13Unitario(Number(e.target.value));
                                        handleFormulario13ImportadoNacional(formulario13*Number(e.target.value))}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={formulario13ImportadoNacional}
                                    InputProps={{readOnly: true}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}       
                                    size="small"
                                    type="number"
                                    value={formulario13ImportadoNacional}
                                    InputProps={{readOnly: true}}/>
                            </Grid>
                        </Grid>

                        <Grid container alignItems="flex-end" className={classes.grid}>
                            <Grid item xs={4}>
                                <Typography variant="subtitle1">Cédula Autorizado</Typography>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={1}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={cedulaAutorizado}
                                    onChange={e => {handleCedulaAutorizado(Number(e.target.value));
                                        handleCedulaAutorizadoImportadoNacional(Number(e.target.value)*cedulaAutorizadoUnitario)}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={cedulaAutorizadoUnitario}
                                    onChange={e => {handleCedulaAutorizadoUnitario(Number(e.target.value));
                                        handleCedulaAutorizadoImportadoNacional(cedulaAutorizado*Number(e.target.value))}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={cedulaAutorizadoImportadoNacional}
                                    InputProps={{readOnly: true}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}       
                                    size="small"
                                    type="number"
                                    value={cedulaAutorizadoImportadoNacional}
                                    InputProps={{readOnly: true}}/>
                            </Grid>
                        </Grid>

                        <Grid container alignItems="flex-end" className={classes.grid}>
                            <Grid item xs={4}>
                                <Typography variant="subtitle1">Alta/Baja Motor</Typography>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={1}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={altaBajaMotor}
                                    onChange={e => {handleAltaBajaMotor(Number(e.target.value));
                                        handleAltaBajaMotorImportadoNacional(Number(e.target.value)*altaBajaMotorUnitario)}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={altaBajaMotorUnitario}
                                    onChange={e => {handleAltaBajaMotorUnitario(Number(e.target.value));
                                        handleAltaBajaMotorImportadoNacional(altaBajaMotor*Number(e.target.value))}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={altaBajaMotorImportadoNacional}
                                    InputProps={{readOnly: true}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}       
                                    size="small"
                                    type="number"
                                    value={altaBajaMotorImportadoNacional}
                                    InputProps={{readOnly: true}}/>
                            </Grid>
                        </Grid>

                        <Grid container alignItems="flex-end" className={classes.grid}>
                            <Grid item xs={4}>
                                <Typography variant="subtitle1">Baja Auto/Moto</Typography>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={1}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={bajaAutoMoto}
                                    onChange={e => {handleBajaAutoMoto(Number(e.target.value));
                                        handleBajaAutoMotoImportadoNacional(Number(e.target.value)*bajaAutoMotoUnitario)}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={bajaAutoMotoUnitario}
                                    onChange={e => {handleBajaAutoMotoUnitario(Number(e.target.value));
                                        handleBajaAutoMotoImportadoNacional(bajaAutoMoto*Number(e.target.value))}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={bajaAutoMotoImportadoNacional}
                                    InputProps={{readOnly: true}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}       
                                    size="small"
                                    type="number"
                                    value={bajaAutoMotoImportadoNacional}
                                    InputProps={{readOnly: true}}/>
                            </Grid>
                        </Grid>

                        <Grid container alignItems="flex-end" className={classes.grid}>
                            <Grid item xs={4}>
                                <Typography variant="subtitle1">Formulario 59</Typography>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={1}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={formulario59}
                                    onChange={e => {handleFormulario59(Number(e.target.value));
                                        handleFormulario59ImportadoNacional(Number(e.target.value)*formulario59Unitario)}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={formulario59Unitario}
                                    onChange={e => {handleFormulario59Unitario(Number(e.target.value));
                                        handleFormulario59ImportadoNacional(formulario59*Number(e.target.value))}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={formulario59ImportadoNacional}
                                    InputProps={{readOnly: true}}/>
                            </Grid>
                            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
                            <Grid item xs={2}>
                                <TextField 
                                    className={classes.textField}       
                                    size="small"
                                    type="number"
                                    value={formulario59ImportadoNacional}
                                    InputProps={{readOnly: true}}/>
                            </Grid>
                        </Grid>

                    </Paper>
                </Grid>



                <Grid item xs={4}>
                    <Paper elevation={5} className={classes.paper}>
                        <Grid container spacing={1} alignItems="flex-end" className={classes.grid}>
                            <Grid item>
                                <Typography variant="subtitle1">Valuación de Tabla:</Typography>
                            </Grid>
                            <Grid item xs>
                                <TextField 
                                    fullWidth 
                                    type="number"
                                    value={valuacionDeTabla}
                                    size="small"
                                    onChange={e => {handleValuacionDeTabla(Number(e.target.value));
                                        handleValorTransferenciaImportado((Number(e.target.value)*importado)/100);
                                        handleValorTransferenciaNacional((Number(e.target.value)*nacional)/100);
                                        handleSelladoImportado((Number(e.target.value)*sellado)/100);
                                        handleSelladoNacional((Number(e.target.value)*sellado)/100)}}/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end" className={classes.grid}>
                            <Grid item>
                                <Typography variant="subtitle1">Valuación Impositiva:</Typography>
                            </Grid>
                            <Grid item xs>
                                <TextField 
                                    fullWidth 
                                    type="number"
                                    value={valuacionImpositiva}
                                    size="small"
                                    onChange={e => handleValuacionImpositiva(Number(e.target.value))}/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <Typography variant="subtitle1">Valor Declarado:</Typography>
                            </Grid>
                            <Grid item xs>
                                <TextField 
                                    fullWidth 
                                    type="number"
                                    value={valorDeclarado}
                                    size="small"
                                    onChange={e => handleValorDeclarado(Number(e.target.value))}/>
                            </Grid>
                        </Grid>
                    </Paper>
                    <Paper elevation={5} className={classes.paper}>
                        <Grid container justify="center" alignItems="center" className={classes.grid}>
                            <Typography variant="subtitle1">Mínimos (actualizar cuando corresponda)</Typography>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end" className={classes.grid}>
                            <Grid item>
                                <Typography variant="subtitle1">Nacional:</Typography>
                            </Grid>
                            <Grid item xs>
                                <TextField 
                                    fullWidth 
                                    type="number"
                                    value={nacional}
                                    size="small"
                                    onChange={e => {handleNacional(Number(e.target.value));
                                        handleValorTransferenciaNacional(valuacionDeTabla*(Number(e.target.value))/100)}}
                                    InputProps={{endAdornment: <InputAdornment position="start">%</InputAdornment>}}/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <Typography variant="subtitle1">Importado:</Typography>
                            </Grid>
                            <Grid item xs>
                                <TextField 
                                    fullWidth 
                                    type="number"
                                    value={importado}
                                    size="small"
                                    onChange={e => {handleImportado(Number(e.target.value));
                                        handleValorTransferenciaImportado(valuacionDeTabla*(Number(e.target.value))/100)}}
                                    InputProps={{endAdornment: <InputAdornment position="start">%</InputAdornment>}}/>
                            </Grid>
                        </Grid>
                    </Paper>
                    <Paper elevation={5} className={classes.backgroundPaper}>
                        <ButtonGroup className={classes.buttonGroup}fullWidth size="small" disableElevation variant="contained" color="default">
                            <Button color={buttonClicked ? "primary" : "inherit"} fullWidth onClick={ () => handleButtonClicked(true)}>Importado</Button>
                            <Button color={buttonClicked ? "inherit" : "primary"} fullWidth onClick={ () => handleButtonClicked(false)}>Nacional</Button>
                        </ButtonGroup>
                        <Grid container spacing={1} alignItems="flex-end" className={classes.grid}>
                            <Grid item>
                                <Typography variant="subtitle1">Subtotal Costo Transf:</Typography>
                            </Grid>
                            <Grid item xs>
                                <TextField 
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={buttonClicked 
                                        ? (arancelTranferenciaImportado+selladoImportado+cedulaImportadoNacional
                                            +tituloImportadoNacional+infraccionesImportadoNacional+formulario13DImportadoNacional
                                            +certificacionFirmaImportadoNacional+actualizacionDNRPAImportadoNacional+pedidoEnvioLegajoImportadoNacional
                                            +bajaImpositivaImportadoNacional+formulario04ImportadoNacional+formulario08ImportadoNacional
                                            +mora08ImportadoNacional+formulario12ImportadoNacional+formulario13ImportadoNacional
                                            +cedulaAutorizadoImportadoNacional+altaBajaMotorImportadoNacional+bajaAutoMotoImportadoNacional
                                            +formulario59ImportadoNacional) 
                                        : (arancelTranferenciaNacional+selladoNacional+cedulaImportadoNacional
                                            +tituloImportadoNacional+infraccionesImportadoNacional+formulario13DImportadoNacional
                                            +certificacionFirmaImportadoNacional+actualizacionDNRPAImportadoNacional+pedidoEnvioLegajoImportadoNacional
                                            +bajaImpositivaImportadoNacional+formulario04ImportadoNacional+formulario08ImportadoNacional
                                            +mora08ImportadoNacional+formulario12ImportadoNacional+formulario13ImportadoNacional
                                            +cedulaAutorizadoImportadoNacional+altaBajaMotorImportadoNacional+bajaAutoMotoImportadoNacional
                                            +formulario59ImportadoNacional)}
                                    InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>, readOnly: true}}/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end" className={classes.grid}>
                            <Grid item>
                                <Typography variant="subtitle1">Honorarios:</Typography>
                            </Grid>
                            <Grid item xs>
                                <TextField 
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={honorarios}
                                    onChange={e => handleHonorarios(Number(e.target.value))}
                                    InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>}}/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <Typography variant="subtitle1">Total Costo Transf:</Typography>
                            </Grid>
                            <Grid item xs>
                                <TextField 
                                    fullWidth 
                                    size="small"
                                    type="number"
                                    value={buttonClicked 
                                        ? (arancelTranferenciaImportado+selladoImportado+cedulaImportadoNacional
                                            +tituloImportadoNacional+infraccionesImportadoNacional+formulario13DImportadoNacional
                                            +certificacionFirmaImportadoNacional+actualizacionDNRPAImportadoNacional+pedidoEnvioLegajoImportadoNacional
                                            +bajaImpositivaImportadoNacional+formulario04ImportadoNacional+formulario08ImportadoNacional
                                            +mora08ImportadoNacional+formulario12ImportadoNacional+formulario13ImportadoNacional
                                            +cedulaAutorizadoImportadoNacional+altaBajaMotorImportadoNacional+bajaAutoMotoImportadoNacional
                                            +formulario59ImportadoNacional+honorarios) 
                                        : (arancelTranferenciaNacional+selladoNacional+cedulaImportadoNacional
                                            +tituloImportadoNacional+infraccionesImportadoNacional+formulario13DImportadoNacional
                                            +certificacionFirmaImportadoNacional+actualizacionDNRPAImportadoNacional+pedidoEnvioLegajoImportadoNacional
                                            +bajaImpositivaImportadoNacional+formulario04ImportadoNacional+formulario08ImportadoNacional
                                            +mora08ImportadoNacional+formulario12ImportadoNacional+formulario13ImportadoNacional
                                            +cedulaAutorizadoImportadoNacional+altaBajaMotorImportadoNacional+bajaAutoMotoImportadoNacional
                                            +formulario59ImportadoNacional+honorarios)}
                                    InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>, readOnly: true}}/>
                            </Grid>
                        </Grid>
                    </Paper>
                    <Paper elevation={5} className={classes.backgroundPaper}>
                        <Grid container spacing={1} alignItems="flex-end" className={classes.grid}>
                            <Grid item>
                                <Typography variant="subtitle1">Dominio:</Typography>
                            </Grid>
                            <Grid item xs>
                            <TextField 
                                    fullWidth 
                                    size="small"
                                    type="text"
                                    value={dominio}
                                    onChange={e => handleDominio(e.target.value.toUpperCase())}/>
                            </Grid>
                            <Grid item className={classes.grid2}>
                                <Typography variant="subtitle1">Marca:</Typography>
                            </Grid>
                            <Grid item xs>
                                <TextField 
                                    fullWidth 
                                    size="small"
                                    type="text"
                                    value={marca}
                                    onChange={e => handleMarca(capitalize(e.target.value))}/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end" className={classes.grid}>
                            <Grid item>
                                <Typography variant="subtitle1">Modelo:</Typography>
                            </Grid>
                            <Grid item xs>
                                <TextField 
                                    fullWidth 
                                    size="small"
                                    type="text"
                                    value={modelo}
                                    onChange={e => handleModelo(capitalize(e.target.value))}/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end" className={classes.buttonGroup}>
                            <Grid item>
                                <Typography variant="subtitle1">TItular:</Typography>
                            </Grid>
                            <Grid item xs>
                                <TextField 
                                        fullWidth 
                                        size="small"
                                        type="text"
                                        value={titular}
                                        onChange={e => handleTitular(capitalize(e.target.value))}/>
                            </Grid>
                        </Grid>
                        <Grid container justify="center">
                            <Button fullWidth variant="contained" size="small" color="secondary" startIcon={<GetAppIcon/>} onClick={ () => handleReport()}>
                                Descargar comprobante
                            </Button>
                        </Grid>
                    </Paper>

                </Grid>
            </Grid>
        </div>
    )
}

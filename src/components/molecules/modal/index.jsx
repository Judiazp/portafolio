import React, {useState, useEffect} from 'react';
import {Modal, TextField, Button, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    modal: {
        position: 'absolute',
        minWidth: '600px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,3), //Es equivalente a padding: "16px 32px 24px 32px",
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: "#fff",
        borderRadius: 10,
    },
    textField : {
        width: '100%',
        marginBottom: "20px",
        backgoundColor: theme.palette.primary,
        fontSize: 16,
    },
    container: {
        textAlign: 'center',
    },
    btn: {
        backgroundColor: '#17d0d5',
        padding: '10px',
        marginTop: "20px",
        width: '40%',
        color: '#fff'
    },
}))

const WindowModal = () => {

    const [modal, setModal] = useState(false);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setModal(!modal)
    //     }, 1000)
    // }, [])
    
    const abrirModal = () => {
        setModal(!modal);
    }

    const classes = useStyles();

    const popup = (
        <div align="center" className={classes.modal}>
            <div align="center">
                <Typography variant="h4" gutterBottom>
                    Buen día, ¿Cual es su nombre?
                </Typography>
            </div>
            <TextField 
            color="primary"
            label="nombre" 
            variant="standard" 
            autoFocus
            size="normal" 
            className={classes.textField} />
            <div align="center" >
                <Button color="primary" className={classes.btn} onClick={() => abrirModal()}>Continuar</Button>
            </div>
        </div>
    )

    return (
        <div className={classes.container}>
            {/* <Button color="primary" onClick={() => abrirModal()}> 
                Abrir modal
            </Button> */}
            <Modal 
                open={modal} 
                onClose={abrirModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={modal}>
                    {popup}
                </Fade>
            </Modal>
        </div>
    )
}

export default WindowModal
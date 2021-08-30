import React, {useEffect, useState} from 'react';
import {useForm, Controller} from "react-hook-form";
import {makeStyles} from '@material-ui/core/styles';
import {
    TextField,
    CssBaseline,
    Button,
    Typography,
    Container,
    Grid,
    FormControl, InputLabel, Select, MenuItem
} from "@material-ui/core";
import Error from "./Error/Error";
import getMedicos from "./API/getMedicos";
import cadastraAgendamento from "./API/cadastraAgendamento";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const AgendamentoConsulta = props => {
    const {errors, control, handleSubmit} = useForm({
        mode: "onSubmit",
        reValidateMode: "onBlur"
    });

    const [listaMedicos, setListaMedicos] = useState([]);

    const onSubmit = values => {
        const retorno = cadastraAgendamento(values);
        console.log(retorno);
        alert("Agendamento realizado com sucesso!");
    }

    useEffect(() => {
        setListaMedicos(getMedicos());
        /*getMedicos().then(response => {
            setListaMedicos(response);
        }).catch(e => {
            console.log(e);
        });
         */
    }, []);

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Agendamento
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Controller
                                as={<TextField type="date" label="Data do agendamento" fullWidth/>}
                                control={control}
                                rules={{
                                    required: "Obrigatório",
                                }}
                                name="data"
                                InputLabelProps={{shrink: true}}
                            />
                            <Error message={errors.data && errors.data?.message} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Controller
                                as={<TextField type="time" label="Hora do agendamento" fullWidth/>}
                                control={control}
                                rules={{
                                    required: "Obrigatório",
                                }}
                                name="hora"
                                InputLabelProps={{shrink: true}}
                                inputProps={{
                                    step: 300,
                                }}
                            />
                            <Error message={errors.hora && errors.hora?.message} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <FormControl fullWidth>
                                <InputLabel htmlFor="medicos">Medicos</InputLabel>
                                <Controller
                                    as={
                                        <Select inputProps={{id: "medicos"}} fullWidth>
                                            <MenuItem value="">Selecione uma opção</MenuItem>
                                            {listaMedicos.map((medico, key) => (
                                                <MenuItem key={key} value={medico.codigo}>{medico.nome}</MenuItem>
                                            ))}
                                        </Select>
                                    }
                                    control={control}
                                    rules={{required: "Obrigatório"}}
                                    name="medicos"
                                />
                                <Error message={errors.medicos && errors.medicos?.message} />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Agendar
                    </Button>
                </form>
            </div>
        </Container>
    );
}

export default (AgendamentoConsulta);
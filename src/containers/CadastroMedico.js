import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
    RadioGroup,
    Radio,
    Checkbox,
    FormControlLabel,
    TextField,
    CssBaseline,
    Button,
    FormLabel,
    Typography,
    Container,
    Grid,
    Link
} from "@material-ui/core";

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

export default function CadastroMedico() {
    const classes = useStyles();
    return (
        <Container component="main">
            <CssBaseline/>
            <div className={classes.paper}>

                <Typography component="h1" variant="h5">
                    Cadastro Médico
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="Nome"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Sobrenome"
                                name="lastName"
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <FormLabel component="legend">Sexo</FormLabel>
                            <RadioGroup
                                aria-label="Sexo"
                                row
                            >
                                <FormControlLabel
                                    value="F" label="Feminino"
                                    control={<Radio/>}
                                />
                                <FormControlLabel
                                    value="M" label="Masculino"
                                    control={<Radio/>}
                                />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <FormLabel component="legend">Data de nascimento</FormLabel>
                            <TextField
                                variant="outlined"
                                type="date"
                                required
                                fullWidth
                                id="dataNascimento"
                                name="dataNascimento"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="cpf"
                                label="CPF"
                                name="cpf"
                                autoComplete="999.999.999-99"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="endereco"
                                label="Endereço completo"
                                name="endereco"
                                autoComplete="Rua joão da Silva, n° 527, Centro, Florianópolis, SC"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="crm"
                                label="CRM"
                                name="crm"
                                autoComplete="crm"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="especialidade"
                                label="Especialidade"
                                name="especialidade"
                                autoComplete="especialidade"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Senha"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary"/>}
                                label="Eu quero receber as atualizações por email."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Cadastrar
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">
                                Já possui uma conta? Realize o Login
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
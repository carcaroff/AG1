import React from "react";
import CadastroMedico from "./containers/CadastroMedico";
import Cadastro from "./containers/Cadastro";
import Login from "./containers/Login";
import AgendamentoConsulta from "./containers/AgendamentoConsulta";
import { Route, Switch } from "react-router-dom";
import Principal from "./containers/Principal";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    container: {
        display: "flex"
    }
});

export default function App() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Principal />
            <Switch>
                <Route exact from="/" render={props => <Login {...props} />} />
                <Route exact path="/login" render={props => <Login {...props} />} />
                <Route exact path="/cadastro" render={props => <Cadastro {...props} />} />
                <Route exact path="/cadastroMedico" render={props => <CadastroMedico {...props} />} />
                <Route exact path="/agendamento" render={props => <AgendamentoConsulta {...props} />} />
            </Switch>
        </div>
    );
}

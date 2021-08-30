import React, { useState} from "react";
import {
    Drawer as MUIDrawer,
    ListItem,
    List,
    ListItemIcon,
    ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import DehazeIcon from '@material-ui/icons/Dehaze';
import CloseIcon from '@material-ui/icons/Close';
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
    drawer: {
        width: "190px"
    }
});

const Principal = props => {
    const { history } = props;
    const classes = useStyles();
    const [state, setState] = useState(false);
    const toggleDrawer = open => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState(open);
    };
    const itemsList = [
        {
            text: "Login",
            icon: <LockOpenIcon />,
            onClick: () => history.push("/")
        },
        {
            text: "Cadastro",
            icon: <AssignmentIndIcon />,
            onClick: () => history.push("/cadastro")
        },
        {
            text: "Cadastro Medico",
            icon: <AssignmentIndIcon />,
            onClick: () => history.push("/cadastroMedico")
        },
        {
            text: "Agendamento Consulta",
            icon: <AssignmentIndIcon />,
            onClick: () => history.push("/agendamento")
        },
        {
            text: "Fechar",
            icon: <CloseIcon />,
            onClick: () => setState(false)
        }
    ];

    return (
        <div>
            <DehazeIcon onClick={toggleDrawer(true)}/>
            <MUIDrawer id={'drawer'} variant="persistent" open={state} className={classes.drawer} >
                <List>
                    {itemsList.map((item, index) => {
                        const { text, icon, onClick } = item;
                        return (
                            <ListItem button key={text} onClick={onClick}>
                                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                                <ListItemText primary={text} />
                            </ListItem>
                        );
                    })}
                </List>
            </MUIDrawer>
        </div>
    );
};

export default withRouter(Principal);

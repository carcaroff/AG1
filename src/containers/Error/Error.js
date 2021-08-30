import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    error: {
        color: "red"
    }
}));

const Error = ({message}) => {
    const classes = useStyles();
    return <span className={classes.error}>{message}</span>;
};

Error.prototypes = {
    message: PropTypes.node.isRequired,
};

export default Error;
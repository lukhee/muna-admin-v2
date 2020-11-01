import React from 'react';
import { makeStyles, Grid, Typography, Paper, Box } from "@material-ui/core";
import {ProverbTab} from './widget'

const tabTitle = [
    {
        id: 0,
        value: 'Translation'
    },
    {
        id: 1,
        value: 'Interpretation'
    },
]

const useStyles = makeStyles((theme)=>({
    root: {

    }
}))

const ProverbContent = ({content}) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <ProverbTab titles={tabTitle} content={content}/>
        </div>
    );
};

export default ProverbContent;
import React, { Component, Fragment } from 'react';
import { Card, CardActionArea, CardContent, CardActions, Typography, CardMedia, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './style.css';
const image = 'https://media-exp1.licdn.com/dms/image/C4D0BAQHiNSL4Or29cg/company-logo_200_200/0/1519856215226?e=2159024400&v=beta&t=r--a5-Dl4gvVE-xIkq8QyBzZ8mQ-OYwBOrixNzR95H0';


const useStyles = makeStyles({
    root: {
        marginTop: 40,
        overflow: "visible",     //To make Logo Visible outside of card
        padding: 15
    },
    image: {
        width: 100
    }
});

const JobCard = () => {
    const classes = useStyles();
    return <>
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent className={classes.cardContent}>
                    <div className='imgContainer'>
                        <img className='companyLogo' src={image} />
                    </div>
                    <Typography variant='body2' color='textSecondary' component='p'>
                        Time | Job Type
                    </Typography>
                    <Typography gutterBottom variant='h5' component='h2'>
                        Job Title
                    </Typography>
                    <Typography variant='body2' color='textSecondary' component='p'>
                        Company Name
                    </Typography>
                </CardContent>
                <CardActions>
                    <Typography color='primary' variant='subtitle1' color='textSecondary' component='p'>
                        Company Location
                    </Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    </>
}
export default JobCard;
import React, { Component, Fragment } from 'react';
import { Card, CardActionArea, CardContent, CardActions, Typography, CardMedia, Container, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './style.css';
const image = 'https://media-exp1.licdn.com/dms/image/C4D0BAQHiNSL4Or29cg/company-logo_200_200/0/1519856215226?e=2159024400&v=beta&t=r--a5-Dl4gvVE-xIkq8QyBzZ8mQ-OYwBOrixNzR95H0';
const image1 = 'https://cdn.icon-icons.com/icons2/2429/PNG/512/microsoft_logo_icon_147261.png';


const useStyles = makeStyles({
    cardRoot: {
        marginTop: 40,
        overflow: "visible",     //To make Logo Visible outside of card
        padding: 15,
        borderRadius: 5,
    },
    image: {
        width: 100
    },
    customToolTip: {
        fontSize: 18
    },
    cardContent: {
        marginTop: 10
    }
});

const JobCard = (props) => {
    const { data: { type, title, company, location } } = props;
    const classes = useStyles();
    return <>
        <Card className={classes.cardRoot}>
            <CardActionArea>
                <div className='imgContainer'>
                    <img className='companyLogo' src={image1} />
                </div>
                <CardContent className={classes.cardContent}>

                    <Typography variant='body2' color='textSecondary' component='p'>
                        1w ago | {type}
                    </Typography>
                    <Tooltip title={title} classes={{ tooltip: classes.customToolTip }}>
                        <Typography gutterBottom variant='h5' component='h2' noWrap>
                            {title}
                        </Typography>
                    </Tooltip>

                    <Typography variant='body2' color='textSecondary' component='p'>
                        {company}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Typography className="companyLocation" pl={2} color='primary' variant='subtitle1' component='p'>
                        {location}
                    </Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    </>
}
export default JobCard;
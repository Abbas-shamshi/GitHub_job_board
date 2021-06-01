import React, { Component, Fragment, useState } from 'react';
import { Card, CardActionArea, CardContent, CardActions, Typography, CardMedia, Container, Tooltip } from '@material-ui/core';
import { ThemeProvider, muiThemeable, useTheme } from '@material-ui/styles';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import './style.css';





const JobCard = (props) => {

    // const colors = ['#8d47ff', '#235cdf', '#daa278', '#68ab97', '#bb4643', '#e7de63'];
    const [color, setcolor] = useState(['#90E39A', '#3F7D20', '#DDF093', '#638475', '#CE4760', '#3B413C']);

    const [darkState, setDarkState] = useState(false);
    // setDarkState(props.darkMode);
    // console.log(props.darkMode)
    let cardBgColor = props.darkMode ? "#19212d" : "#ffffff";
    // let paperBgColor = darkState ? "#131822" : "#f5f6f8";

    const useStyles = makeStyles({
        cardRoot: {
            marginTop: 40,
            overflow: "visible",     //To make Logo Visible outside of card
            padding: 15,
            borderRadius: 5,
            backgroundColor: cardBgColor,
            // color: theme.palette.primary.contrastText
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

    const { data: { type, title, company, location, company_logo } } = props;
    const classes = useStyles();
    return <>
        <Card className={classes.cardRoot}>
            <CardActionArea>
                <div className='imgContainer imageLogo' style={{ backgroundColor: color[Math.floor(Math.random() * 5)] }}>
                    <img className='companyLogo' src={company_logo} />
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
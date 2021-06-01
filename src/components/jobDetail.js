import React, { Component, Fragment, useState } from 'react';
import { Card, CardActionArea, CardContent, CardActions, Typography, CardMedia, Container, Tooltip, Grid, CardHeader, Box, Hidden, Paper, ThemeProvider } from '@material-ui/core';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Header from './header';
import { Redirect } from "react-router-dom";
import './style.css';



const JobDetails = (props) => {

    var redirect;

    if (props.location.state) {
        console.log(props.location.state)
        var data = props.location.state.data;
        redirect = false;
    } else {
        redirect = true;
    }
    console.log(redirect)

    // Apply Theme
    const [darkState, setDarkState] = useState(false);
    let cardBgColor = darkState ? "#19212d" : "#ffffff";
    let paperBgColor = darkState ? "#131822" : "#f5f6f8";
    const useStyles = makeStyles({
        cardRoot: {
            overflow: "visible",     //To make Logo Visible outside of card
            borderRadius: 5,
            marginTop: -15,

        },
        cardColor: {
            backgroundColor: cardBgColor,
        },
        cardDetails: {
            marginTop: 24,
            padding: 15
        },
        cardColor2: {
            backgroundColor: '#5865e0'
        },
        paperContainer: {
            // backgroundColor: paperBgColor
        }
    });
    const palletType = darkState ? "dark" : "light";
    const darkTheme = createMuiTheme({
        palette: {
            type: palletType,
        }
    });
    const handleThemeChange = (event) => {
        setDarkState(event.target.checked);
    };
    const classes = useStyles();
    return <>
        {redirect ? <Redirect to="/" /> : <></>}
        <ThemeProvider theme={darkTheme}>
            <Paper className={classes.paperContainer}>
                <Header handleChange={handleThemeChange} />
                <Container maxWidth="md">
                    <Card className={`${classes.cardColor} ${classes.cardRoot}`}>
                        <div className="jobHeaderCard">
                            <div className='imgContainer jobHeaderImageCont'>
                                <img className='jobHeaderImage' src={data.company_logo} />
                            </div>
                            <div className="jobHeaderName">
                                <Typography variant="h5" >
                                    <Box fontWeight={700} m={1}>
                                        {data.company}
                                    </Box>
                                </Typography>

                                <Typography variant="subtitle1" >
                                    <Box fontWeight="fontWeightLight" m={1}>
                                        {data.company_url}
                                    </Box>
                                </Typography>
                            </div>
                            <a href={data.company_url}>

                                <div className="jobHeaderButton">
                                    <Typography variant="button" display="block" gutterBottom>
                                        Company Site
                                    </Typography>
                                </div>
                            </a>
                        </div>
                    </Card>
                    <Card className={`${classes.cardColor} ${classes.cardDetails}`}>
                        <div className="JobDetailsHeader">
                            <div className="JobDetailsHeaderInfo">
                                <Typography variant="subtitle1" >
                                    <Box m={1}>
                                        1 week ago | {data.type}
                                    </Box>
                                </Typography>
                                <Typography variant="h5" >
                                    <Box fontWeight={700} m={1}>
                                        {data.title}
                                    </Box>
                                </Typography>
                                <Typography variant="subtitle2" >
                                    <Box m={1}>
                                        {data.location}
                                    </Box>
                                </Typography>
                            </div>
                            <a href={data.url}>
                                <div className="jobDetailsButton">
                                    <Typography variant="button" display="block" gutterBottom>
                                        <Box textAlign="center">
                                            Apply Now
                                        </Box>
                                    </Typography>
                                </div>
                            </a>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: data.description }} />
                    </Card>
                    <Card className={`${classes.cardColor2} ${classes.cardDetails}`}>
                        <div>
                            <Typography variant="h6" >
                                <Box m={1}>
                                    How to Apply:
                                </Box>
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="body2" >
                                <Box m={1}>
                                    <div dangerouslySetInnerHTML={{ __html: data.how_to_apply }}>
                                    </div>
                                </Box>
                            </Typography>
                        </div>
                    </Card>
                    <Card className={`${classes.cardColor} ${classes.cardDetails}`}>
                        <div className="JobDetailsHeader">
                            <div className="JobDetailsHeaderInfo">
                                <Hidden xsDown>

                                    <Typography variant="h5" >
                                        <Box fontWeight={700} m={1}>
                                            Senior Software Enginner
                                        </Box>
                                    </Typography>
                                    <Typography variant="subtitle2" >
                                        <Box m={1}>
                                            Senior Software Enginner
                                        </Box>
                                    </Typography>
                                </Hidden>
                            </div>
                            <a href={data.url}>
                                <div className="jobDetailsButton">
                                    <Typography variant="button" display="block" gutterBottom>
                                        <Box textAlign="center">
                                            Apply Now
                                        </Box>
                                    </Typography>
                                </div>
                            </a>
                        </div>
                    </Card>
                </Container>
            </Paper>
        </ThemeProvider>
    </>
}
export default JobDetails;
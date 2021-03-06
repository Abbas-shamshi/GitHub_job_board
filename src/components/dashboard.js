import React, { Component } from 'react';
import './style.css';
import Header from './header';
import JobCard from './card';
import { Container, Grid, Button, Typography, Box, Paper } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Filter from './filter';
import axios from 'axios'
import { Link } from "react-router-dom";


class Dashboard extends Component {
    state = {
        data: [],
        location: {
            latitude: 0,
            longitude: 0
        },
        pageNo: 1,
        darkState: false
    }
    componentDidMount() {
        console.log(this.props)
        // Get User's Location
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
                location: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }
            });
            console.log(this.state.location);
        });
        this.getJobData();


    }
    getJobData = () => {
        let baseUrl = `https://jobs.github.com/positions.json?&page=${this.state.pageNo}`;
        let corsUrl = 'https://cors-heroku-as.herokuapp.com/';
        let usrLoc = `lat=${this.state.location.latitude}&long=${this.state.location.longitude}`
        let url = `${corsUrl}${baseUrl}`

        console.log(`Fetching : ${url}`)
        axios.get(`${url}`)
            .then((response) => {
                // handle success
                // var joined = this.state.myArray.concat(response.data);
                this.setState({
                    data: [...this.state.data, ...response.data]
                })

                console.log(this.state.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }
    loadMore = () => {
        console.log('Loadmore function');
        this.setState({
            pageNo: this.state.pageNo + 1
        }, () => this.getJobData())

    }
    searchJobs = (values) => {
        console.log(`Fetching : https://cors-heroku-as.herokuapp.com/https://jobs.github.com/positions.json?description=${values.descriptionData}&full_time=${values.jobType}&location=${values.locationData}&page=${this.state.pageNo}`)
        axios.get(`https://cors-heroku-as.herokuapp.com/https://jobs.github.com/positions.json?description=${values.descriptionData}&full_time=${values.jobType}&location=${values.locationData}&page=1`)
            .then((response) => {
                // handle success
                this.setState({
                    data: response.data
                })
                console.log(this.state.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
        console.log(values)
    }

    handleChange = (event) => {
        console.log("Clicked", event.target.checked)    //returns true and false
        this.setState({
            darkState: event.target.checked
        })

    };
    render() {
        const palletType = this.state.darkState ? "dark" : "light";
        const darkTheme = createMuiTheme({
            palette: {
                type: palletType,
            }
        });
        return (

            <>
                <ThemeProvider theme={darkTheme}>
                    <Paper>
                        <Header handleChange={this.handleChange} />
                        <Filter onFilterValues={this.searchJobs} />
                        <Container maxWidth="lg" className="cardContainer" >
                            <Grid container spacing={5} justify="center" >
                                {this.state.data.length == 0 &&
                                    <Typography variant="h5" >
                                        <Box fontWeight={700} m={1}>
                                            No Jobs Found
                                        </Box>
                                    </Typography>
                                }
                                {
                                    this.state.data.map((d) => {
                                        return (
                                            <Grid item lg={4} md={6} sm={6} xs={12} >
                                                <Link to={{
                                                    pathname: "/details",
                                                    state: {
                                                        data: d,
                                                        darkState: this.state.darkState
                                                    }
                                                }} style={{ textDecoration: 'none', color: "inherit" }}>
                                                    <JobCard data={d} darkMode={this.state.darkState} />
                                                </Link>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                            <Grid container spacing={5} >
                                <Grid item xs={12} >
                                    <Box className="buttonPos">
                                        {this.state.data.length / 50 == 1 &&
                                            <Button variant="contained" color="primary" onClick={this.loadMore} >
                                                Load More
                                        </Button>
                                        }
                                    </Box>
                                </Grid>
                            </Grid>

                        </Container>
                    </Paper>
                </ThemeProvider>
            </>
        )

    }

}
export default Dashboard;
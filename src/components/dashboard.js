import React, { Component } from 'react';
import './style.css';
import Header from './header';
import JobCard from './card';
import { Container, Grid, Button } from '@material-ui/core';
import Filter from './filter';
import axios from 'axios'

class Dashboard extends Component {
    state = {
        data: [],
        location: {
            latitude: 0,
            longitude: 0
        },
        pageNo: 1
    }
    componentDidMount() {
        // Fetch Api Data 
        this.getJobData();

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
    }
    getJobData = () => {
        axios.get(`https://cors-heroku-as.herokuapp.com/https://jobs.github.com/positions.json?lat=37.3229978&long=-122.0321823&page=${this.state.pageNo}`)
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
    }
    loadMore = () => {
        console.log('Loadmore function');
        this.setState({
            pageNo: this.state.pageNo + 1
        }, () => this.getJobData())


    }
    render() {
        return (
            <>
                <Header />
                <Filter />
                <Container maxWidth="lg" className="cardContainer">
                    <Grid container spacing={5} justify="center" >
                        {
                            this.state.data.map((d) => {
                                return (
                                    <Grid item lg={4} md={6} sm={6} xs={12} >
                                        <JobCard data={d} />
                                    </Grid>
                                )
                            })
                        }

                    </Grid>

                    {this.state.data.length / 50 == 0 && <Button variant="contained" color="primary" onClick={this.loadMore}>
                        Load More
                    </Button>
                    }
                </Container>
            </>
        )
    }
}
export default Dashboard;
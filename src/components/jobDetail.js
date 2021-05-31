import React, { Component, Fragment } from 'react';
import { Card, CardActionArea, CardContent, CardActions, Typography, CardMedia, Container, Tooltip, Grid, CardHeader, Box, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './style.css';
const image1 = 'https://cdn.icon-icons.com/icons2/2429/PNG/512/microsoft_logo_icon_147261.png';


const useStyles = makeStyles({
    cardRoot: {
        overflow: "visible",     //To make Logo Visible outside of card
        borderRadius: 5,
        marginTop: -15
    },
    cardDetails: {
        marginTop: 24,
        padding: 15
    }


});

const JobDetails = () => {
    const classes = useStyles();
    return <>
        <Container maxWidth="md">
            <Card className={classes.cardRoot}>
                <div className="jobHeaderCard">
                    <div className='jobHeaderImageCont'>
                        <img className='jobHeaderImage' src={image1} />
                    </div>
                    <div className="jobHeaderName">
                        <Typography variant="h5" >
                            <Box fontWeight={700} m={1}>
                                Company Name
                            </Box>
                        </Typography>

                        <Typography variant="subtitle1" >
                            <Box fontWeight="fontWeightLight" m={1}>
                                Company Website
                            </Box>
                        </Typography>
                    </div>
                    <a href="http://www.google.com">

                        <div className="jobHeaderButton">
                            <Typography variant="button" display="block" gutterBottom>
                                Company Site
                        </Typography>
                        </div>
                    </a>

                </div>
            </Card>
            <Card className={classes.cardDetails}>
                <div className="JobDetailsHeader">
                    <div className="JobDetailsHeaderInfo">
                        <Typography variant="subtitle1" >
                            <Box m={1}>
                                1 week ago | PartTime
                            </Box>
                        </Typography>
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
                    </div>
                    <a href="http://www.google.com">
                        <div className="jobDetailsButton">
                            <Typography variant="button" display="block" gutterBottom>
                                <Box textAlign="center">
                                    Apply Now
                            </Box>
                            </Typography>
                        </div>
                    </a>
                </div>
                <div>
                    <p>Position Summary...\n What you'll do...</p>\n<p>Marketplace Engineering team is in the forefront of building core platforms and services to enable Walmart to deliver vast selection at competitive prices and with best in class post order experience by enabling third party sellers to list, sell and manage their products to our customers on walmart.com. We do this with managing entire seller lifecycle, monitoring customer experience, and deliver high value insights to our sellers to help them plan their assortment, price, inventory. The team also actively collaborate with partner platform teams to ensure we continue to deliver the best experience to our sellers and our customers.</p>\n<p>Our team is growing, and we are looking for a highly motivated Principal Software Engineer - Backend who will play a critical role in the design and implementation of some of our core applications that impacts the largest retailer in the world!</p>\n<p>In this role, you will lead and help our teams in driving down costs to implementation, championing continuous improvement, engineering excellence, innovation and mentoring engineers on developing and enhancing our enterprise scale software applications and frameworks.</p>\n<p>Your job will include:</p>\n<p>Develop highly scalable services to process millions of requests per day and solve complex software systems problems by leveraging state-of-the-art technology\nGain exposure to various technologies used in Marketplace and E-commerce platforms\nDrive projects of high visibility across the organization\nLead team in designing systems and apps\nLeads team projects by reviewing project requirements, translating requirements into technical solutions while gathering requested information\nDesigning and developing backend microservices and REST APIs for web applications using JVM ecosystem (Kotlin, Java) and other languages and frameworks (Python, Go)\nTroubleshoot open issues and bug-fixes\nPartner and collaborate with project team and cross functional teams\nProvide leadership to the project team\nLead the discovery phase of projects to come up with high level design by partnering with the product management, project management, and business and user experience teams\nMust-Have Requirements:</p>\n<p>Over 8 years of experience in architecting large scale systems with challenges of scalability and delivering sub-second latencies on 99.99% uptime\nMaster's degree in Computer Science or equivalent experience\nPractical knowledge of agile software development methodologies (e.g., XP, scrum)\nExperience in large scale distributed systems and event-driven architectures\nExperience and fluency with relational / non-relational databases (e.g. MySQL, Oracle, Cassandra, etc)\nStrong background in algorithms and data structures\nExpertise in one or more programming languages (e.g. Java, Python, etc)\nStrong inclination towards exploring and learning new technologies\nProven understanding of micro-services oriented architecture and extensible REST APIs\nUnderstanding of SaaS, PaaS, IaaS industry with hands on experience with public or private cloud offerings (e.g., AWS, GAE, Azure)\nAdvanced knowledge of performance, scalability, and system architecture with an eye toward avoiding and reducing technical debt\nUnderstanding of machine learning</p>\n<p>Nice To Have:</p>\n<p>Previous experience in the marketplace/e-commerce domain is a bonus but not a requirement.</p>\n<p>Benefits &amp; Perks: </p>\n<p>Beyond competitive pay, you can receive incentive awards for your performance. Other great perks include 401(k) match, stock purchase plan, paid maternity and parental leave, PTO, multiple health plans, and much more. </p>\n<p>Equal Opportunity Employer </p>\n<p>Walmart, Inc. is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity- unique styles, experiences, identities, ideas and opinions – while being inclusive of all people. </p>\n<p>Who We Are</p>\n<p>Join Walmart and your work could help over 275 million global customers live better every week. Yes, we are the Fortune #1 company. But you’ll quickly find we’re a company who wants you to feel comfortable bringing your whole self to work. A career at Walmart is where the world’s most complex challenges meet a kinder way of life. Our mission spreads far beyond the walls of our stores. Join us and you'll discover why we are a world leader in diversity and inclusion, sustainability, and community involvement.  From day one, you’ll be empowered and equipped to do the best work of your life. careers.walmart.com</p>\n<p>Minimum Qualifications...\nOutlined below are the required minimum qualifications for this position. If none are listed, there are no minimum qualifications.</p>\n<p>Bachelor’s degree in Computer Science and 5 years’ experience in software engineering or related field OR 7 years’ experience in software\nengineering or related field\nPreferred Qualifications...\nOutlined below are the optional preferred qualifications for this position. If none are listed, there are no preferred qualifications.</p>\n<p>Master’s degree in Computer Science or related field and 4 years' experience in software engineering or related field</p>\n<p>Primary Location...\n840 W CALIFORNIA AVE, SUNNYVALE, CA 94086-4828, United States of America</p>
                </div>

            </Card>
            <Card className={classes.cardDetails}>
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
                            <p><a href="https://careers.walmart.com/us/jobs/WD552828-principal-software-engineer?codes=GitHub&amp;utm_source=GitHub&amp;utm_campaign=Walmart&amp;utm_medium=VanityURL&amp;utm_term=Walmart_Tech&amp;utm_content=Software_Development_and_Engineering\">
                                https://careers.walmart.com/us/jobs/WD552828-principal-software-engineer?codes=GitHub&amp;utm_source=GitHub&amp;utm_campaign=Walmart&amp;utm_medium=VanityURL&amp;utm_term=Walmart_Tech&amp;utm_content=Software_Development_and_Engineering
                                </a>
                            </p>\n
                        </Box>
                    </Typography>
                </div>
            </Card>
            <Card className={classes.cardDetails}>
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
                    <a href="http://www.google.com">

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

    </>
}
export default JobDetails;
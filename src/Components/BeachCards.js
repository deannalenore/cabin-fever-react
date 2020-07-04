import React, { Component } from 'react';
import './BeachCards.css';
import ReactCardFlip from 'react-card-flip';
import { Connect } from 'react-redux';
import back from './assets/images/back.jpg';
import balos from './assets/images/balos-beach.jpg';
import torre from './assets/images/beach-of-torregorda.jpg';
import evening from './assets/images/evening-beach.jpg';
import rock from './assets/images/rock-beach.jpg';
import sunny from './assets/images/sunny-beach.jpg';
import sunrise from './assets/images/sunrise-rock-beach.jpg';
import BeachCardImages from 'BeachCardImages';

const beachCards = [{balos},{torre},{evening},{rock},{sunny},{sunrise}]

    BeachCardImages = [{
        name: "sunrise",
        clicked: false,
        imageUrl: "sunrise-rock-beach.jpg"
    },
    {
        name: "evening",
        clicked: false,
        imageUrl: "evening-beach.jpg"
    },
    {
        name: "balos",
        clicked: false,
        imageUrl: "balos-beach.jpg"
    },
    {
        name: "torre",
        clicked: false,
        imageUrl: "beach-of-torregorda.jpg"
    },
    {
        name: "rock",
        clicked: false,
        imageUrl: "rock-beach.jpg"
    },
    {
        name: "sunny",
        clicked: false,
        imageUrl: "sunny-beach.jpg"
    }]







class BeachCards extends Component {
    render() {
        return (
            <Grid className="text-center" id="listOfProjects">

                <PageHeader className="projects-header">My Projects</PageHeader>
                {beachCards}.map(e => 
                    <BeachCard
                    photo={e.photo}
                    text={e.text}
                    />
                )}
            </Grid>
        );
    }
}




 
    
//}
//js comment to do flip action:document.querySelector("#myCard").classList.toggle("flip")
export default BeachCards;


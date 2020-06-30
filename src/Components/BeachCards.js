import React, { Component } from 'react';
import './BeachCards.css';

class BeachCards extends Component {
    render() {
        return(
            <div>
                <div className="BeachCards-app">
                    <div className="BeachCards"><img src={process.env.PUBLIC_URL + '/images/sunrise-rock-beach.jpg'} alt="sunrise beach" /></div>
                </div>
           
                <div className="BeachCards-app">
                    <div className="BeachCards"><img src={process.env.PUBLIC_URL + '/images/evening-beach.jpg'} alt="evening beach" /></div>
                </div>

                <div className="BeachCards-app">       
                    <div className="BeachCards"><img src={process.env.PUBLIC_URL + '/images/balos-beach.jpg'} alt="balos beach" /></div>
                </div>

                <div className="BeachCards-app">       
                    <div className="BeachCards"><img src={process.env.PUBLIC_URL + '/images/rock-beach.jpg'} alt="rock beach" /></div>
                </div>

                <div className="BeachCards-app">       
                    <div className="BeachCards"><img src={process.env.PUBLIC_URL + '/images/sunny-beach.jpg'} alt="sunny beach" /></div>
                </div>

                <div className="BeachCards-app">       
                    <div className="BeachCards"><img src={process.env.PUBLIC_URL + '/images/beach-of-torregorda.jpg'} alt="torr beach" /></div>
                </div>
            </div>
        )
    }
    
}
export default BeachCards;

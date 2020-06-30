import React, { Component } from 'react';
import './BeachCards.css';


class BeachCards extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        if (!this.props.matched && !this.props.imageUp) {
            this.props.onClick(this.props.id);
        }
    }

    render() {
        let beachCards = '.public/images/';
        if (this.props.imageUp) {
            beachCards = beachCards + this.props.image + '.jpg';
        }else{
            beachCards = beachCards + 'back.jpg';
        }

        let className = 'Card';
        if (this.props.matched) {
            className = className + ' Matched';
        }

        return (
            <img className={className} src={require(`${imPath}`)} alt='' onClick={this.onClick} />
        );
    };

//problem to get array images functional with onClick
beachCards = [{
                name: "sunrise",
                clicked: false,
                image: "sunrise-rock-beach.jpg"
            },
            {
                name: "evening",
                clicked: false,
                image: "evening-beach.jpg"
            },
            {
                name: "balos",
                clicked: false,
                image: "balos-beach.jpg"
            },
            {
                name: "torre",
                clicked: false,
                image: "beach-of-torregorda.jpg"
            },
            {
                name: "rock",
                clicked: false,
                image: "rock-beach.jpg"
            },
            {
                name: "sunny",
                clicked: false,
                image: "sunny-beach.jpg"
            }]







export default BeachCards;

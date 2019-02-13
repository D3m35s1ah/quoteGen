import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import PostButton       from './components/PostButton';
import QuoteField       from './components/QuoteField';

class App extends Component {

    constructor(props) {
        super(props);

        this.changeQuote = this.changeQuote.bind(this);

        this.state = {
            random  : this.quotes[0],
            bgColor : "brown"
        }

    }

    quotes = [
        {
            author      : "John Lennon",
            text        : "Life is what happens to you while you’re busy making other plans.",
            color       : "brown"
        },
        {
            author  : "W. Clement Stone",
            text    : " Definiteness of purpose is the starting point of all achievement. ",
            color   : 'cyan'
        },
        {
            author  : "Grandma Moses",
            text    : " Life is what we make it, always has been, always will be. ",
            color   : "yellow"
        },
        {
            author  : "Steve Jobs",
            text    : "Your time is limited, so don’t waste it living someone else’s life. ",
            color   : "lightgreen"
        },
        {
            author  : "Japanese Proverb",
            text    : "Fall seven times and stand up eight.",
            color   : 'purple'
        },
        {
            author  : "Benjamin Franklin",
            text    : "Either write something worth reading or do something worth writing.",
            color   : 'pink'
        },
        {
            author  : "Albert Einstein",
            text    : "A person who never made a mistake never tried anything new. ",
            color   : 'magenta'
        },
        {
            author  : "Chinese Proverb",
            text    : "The best time to plant a tree was 20 years ago. The second best time is now.",
            color   : 'orange'
        },
        {
            author  : "Wayne Gretzky",
            text    : "You miss 100% of the shots you don’t take.",
            color   : 'barewood'
        }
    ];


    changeQuote() {
        let random = this.quotes[Math.floor(Math.random() * this.quotes.length)];

        this.setState({
            random  : random,
            bgColor   : random.color
        });

        console.log(this.state.random);
    }

  render() {

    return (
        <ReactCSSTransitionGroup
                transitionName          = "box"
                transitionAppear        = {true}
                transitionAppearTimeout = {500}
                transitionEnter         = {false}
                transitionLeave         = {false}>
        <div className="core" style={{backgroundColor : this.state.bgColor}} key="core">
        <div id="quote-box" key="quote-box">
            <div className="container" key="container-1">
                <div className="row" key="row-1">
                    <QuoteField color={this.state.bgColor} quote={this.state.random} key="QuoteField"/>
                </div>
                <div className="row" key="row-2">
                    <div className="col-4" key="col-1">
                        <PostButton color={this.state.bgColor} type='twitter' key="PostButton"/>
                    </div>
                    <div className="col-8" key="col-2">
                        <button id="new-quote" className="btn" onClick={this.changeQuote} style={{backgroundColor : this.state.bgColor}} key="new-quote">New Quote</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </ReactCSSTransitionGroup>
    )
  }

}

export default App;

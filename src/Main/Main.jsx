import React, { Component } from 'react';
import hero from '../images/illustration-hero.svg';
import music from '../images/icon-music.svg';
import './Main.scss';

export default class Main extends Component {
    render() {
        return (
            <main>
                <div className="card">
                    <div className="card__image">
                        <img src={hero} alt="hero" />
                    </div>
                    <div className="card__content">
                        <h1 className="card__title">Order Summary</h1>
                        <p className="card__text">You can now listen to millions of songs, audiobooks, and podcasts on any
                            device anywhere you like!</p>
                        <div className="card__plan">
                            <div className="card__plan--left">
                                <img src={music} alt="music" />
                                <div className="card__plan--left-info">
                                    <p className='card__plan--left-info-annual'>Annual Plan</p>
                                    <p className='card__plan--left-info-price'>$59.99/year</p>
                                </div>
                            </div>
                            <div className="card__plan--right">
                                <a href='http://'>Change</a>
                            </div>
                        </div>
                        <button className='card__button'>Proceed to Payment</button>
                        <p className='card__cancel-btn'>Cancel Order</p>
                    </div>
                </div>
            </main>
        )
    }
}

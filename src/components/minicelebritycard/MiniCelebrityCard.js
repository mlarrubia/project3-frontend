import React, { Component } from 'react'
import './MiniCelebrityCard.css';
import wade from './wade.jpg';

export default class MiniCelebrityCard extends Component {
    render() {
        return (
            <div>
                <div className="mini-card">
                    <img src={wade} alt="not working" />
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react';
import './Category.css';
import MiniCelebrityCard from '../minicelebritycard/MiniCelebrityCard.js';

export default class Category extends Component {
    render() {
        return (
            
                <div className="category-board">
                    <div className="category-title">
                        <div>Sports</div>
                    </div>
                    <div className="category-tiles">
                       <MiniCelebrityCard/>
                       <MiniCelebrityCard/>
                       <MiniCelebrityCard/>
                    </div>
                    <div className="category-update">d</div>
                </div>
            
        )
    }
}

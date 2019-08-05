import React, { Component } from 'react'
import './UserProfile.css';
import Twitter from '../twitter/Twitter.js';
import Category from '../category/Category.js';
import me from './me.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import M from 'materialize-css';
import AddCelebrity from '../addcelebrity/AddCelebrity.js';


import axios from 'axios';

export default class UserProfile extends Component {






    componenetDidMount(){
        window.modalInit();
    }        



    render() {



        return (
            <div>
                <div className="user-profile">
                    {/* <div className="user-header">
                        header
                        <div className="user-profileImg"></div>
                        <div className="user-welcomeMessage"></div>
                    </div> */}

                    <div className="user-board">
                        <div className="user-leftboard">
                            <div className="user-stats">
                                <div className="user-header">
                                    <div className="user-namePic">
                                        <img src={me} alt="Not working" />
                                        <h2>Mlxciii</h2>
                                    </div>
                                    <div className="user-bio">
                                        Hello my name is Matthew and I enjoy following my favorite influencers in one platform.
                                    </div>
                                </div>
                                <div className="user-statboard">


                                    <div className="user-addCelebrity">
                                        <a className="btn modal-trigger" href="#addCelebrity">
                                            <i className="medium material-icons">add</i>
                                        </a>

                                    </div>
                                    <AddCelebrity />

                                   
                                </div>
                                <div className="user-footer">
                                    {/* <FontAwesomeIcon icon={['fab', 'apple']} />
                                    <FontAwesomeIcon icon={['fab', 'microsoft']} />
                                    <FontAwesomeIcon icon={['fab', 'google']} />
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i> */}
                                </div>
                            </div>
                        </div>
                        <div className="user-rightboard">
                            <Category />
                            <Category />
                            <Category />
                            <Category />
                        </div>


                    </div>


                </div>
            </div>
        )
    }
}


// document.addEventListener('DOMContentLoaded', function () {
//     var elems = document.querySelectorAll('.modal');
//     var instances = M.Modal.init(elems);
// });

import React, { Component } from 'react'
import './CelebrityProfile.css';
import Category from '../category/Category.js'


import {
    TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton,
    TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed,
    TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed,
    TwitterOnAirButton
} from 'react-twitter-embed';


import me from './me.jpeg';


export default class CelebrityProfile extends Component {
    render() {
        return (
            <div>
                <div className="celebrity-profile">

                    <div className="celebrity-board">
                        <div className="celebrity-leftboard">
                            <div className="celebrity-namePic">
                                <img src={me} alt="Not working" />
                                <h2>Mlxciii</h2>
                            </div>
                            <div className="celebrity-twitterboard">
                                <div className="celebrity-tweet">
                                    <TwitterTweetEmbed
                                        tweetId={'1080212949464043520'}
                                    />
                                </div>
                                <div className="celebrity-tweet">
                                    <TwitterTweetEmbed
                                        tweetId={'1080212949464043520'}
                                    />
                                </div>
                                <div className="celebrity-tweet">
                                    <TwitterTweetEmbed
                                        tweetId={'1080212949464043520'}
                                    />
                                </div>


                                {/* <TwitterTweetEmbed
                                    tweetId={'1087635466931695616'}
                                /> */}
                                {/* <TwitterTweetEmbed
                                    tweetId={'1153060517193236480'}
                                /> */}

                            </div>
                        </div>
                        <div className="celebrity-rightboard">
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

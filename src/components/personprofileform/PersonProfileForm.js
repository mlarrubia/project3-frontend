import React, { Component } from 'react'
import axios from 'axios';
import './PersonProfileForm.css';
import ReactDOM from 'react-dom';
import ModalVideo from 'react-modal-video';
import {
    TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton,
    TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed,
    TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed,
    TwitterOnAirButton
} from 'react-twitter-embed';
import RegisterCelebrityCard from '../registercelebritycard/RegisterCelebrityCard';



class PersonProfileForm extends React.Component {
    displayVideos = () => {
        let clone = [...this.state.eachVideoData];
        return clone.map((eachvideo, i) => {
            return (
                <div className="eachTile" key={i}>

                    <a onClick={() => this.openModal(i)}>
                        <img src={eachvideo.videoThumbNailIMG} />
                        <p>{eachvideo.videoTitle}</p>
                    </a>
                    <ModalVideo isOpen={this.state.isOpen === i} videoId={eachvideo.videoID}  onClose={() => this.setState({ isOpen: false })} />
                </div>





            )
        })


    }



    render() {
        return (
            <div>
                
                <div className="listOfVideos">
                    {this.displayVideos()}
                </div>
                <RegisterCelebrityCard />



                {/* This does not work */}
                {/* <a class="twitter-timeline" href="https://twitter.com/amandajimenezzz?ref_src=twsrc%5Etfw">Tweets by cryptoWZRD_</a> 
                <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>  */}
                
                {/* <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Sunsets don&#39;t get much better than this one over <a href="https://twitter.com/GrandTetonNPS?ref_src=twsrc%5Etfw">@GrandTetonNPS</a>. <a href="https://twitter.com/hashtag/nature?src=hash&amp;ref_src=twsrc%5Etfw">#nature</a> <a href="https://twitter.com/hashtag/sunset?src=hash&amp;ref_src=twsrc%5Etfw">#sunset</a> <a href="http://t.co/YuKy2rcjyU">pic.twitter.com/YuKy2rcjyU</a></p>&mdash; US Department of the Interior (@Interior) <a href="https://twitter.com/Interior/status/463440424141459456?ref_src=twsrc%5Etfw">May 5, 2014</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}

                <TwitterTweetEmbed
                    tweetId={'1080212949464043520'}
                />
                <TwitterTweetEmbed
                    tweetId={'1087635466931695616'}
                />
                <TwitterTweetEmbed
                    tweetId={'1153060517193236480'}
                />

                

            </div>

        )
    }
}

export default PersonProfileForm;
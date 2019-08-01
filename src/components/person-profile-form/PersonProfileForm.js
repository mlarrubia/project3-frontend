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



class PersonProfileForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            youtubeHandle: '',
            instagramHandle: '',
            twitterHandle: '',
            videoIDArray: [],
            eachVideoData: [],
            isOpen: false,
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal(i) {
        this.setState({ isOpen: i })
    }


    updateInput = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        this.setState({ [e.target.name]: e.target.value })
    }

    getVideos = (e) => {
        let videos = e.map((eachVideo) => {
            return {
                channelID: eachVideo.snippet.channelId,
                videoID: eachVideo.id.videoId,
                videoThumbNailIMG: eachVideo.snippet.thumbnails.medium.url,
                videoTitle: eachVideo.snippet.title,
            }
        })
        this.setState(this.state.eachVideoData = videos);
        console.log(videos)
    }



    displayVideos = () => {
        let clone = [...this.state.eachVideoData];
        return clone.map((eachvideo, i) => {
            return (
                <div className="eachTile" key={i}>

                    <a onClick={() => this.openModal(i)}>
                        <img src={eachvideo.videoThumbNailIMG} />
                        <p>{eachvideo.videoTitle}</p>
                    </a>
                    <ModalVideo isOpen={this.state.isOpen === i} videoId={eachvideo.videoID} width="100p" onClose={() => this.setState({ isOpen: false })} />
                </div>





            )
        })


    }


    getChannelID = (e) => {
        e.preventDefault();
        // axios.get(`https://www.googleapis.com/youtube/v3/channels?part=id&forUsername=${this.state.handle}&key=AIzaSyDyp33CDp-9IUNsPA5I_g_dP6-4P9Eaqgw`)
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=channel&key=AIzaSyCStfaDFYA5e16NX-wkQmoSQfP87hFqexA&q=${this.state.handle}`)
            .then((response) => {
                console.log(response);
                let channelID = response.data.items[0].id.channelId
                axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelID}&maxResults=25&type=video&key=AIzaSyCStfaDFYA5e16NX-wkQmoSQfP87hFqexA`)
                    .then((response) => {
                        let itemsArray = response.data.items;
                        this.getVideos(itemsArray);
                        this.displayVideos();
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.getChannelID}>
                    <div>
                        <label >Youtube Handle:</label>
                        <input
                            value={this.state.youtubeHandle}
                            name="youtubeHandle"
                            onChange={this.updateInput}
                        />
                    </div>
                    <div>
                        <label >Twitter Handle:</label>
                        <input
                            value={this.state.twitterHandle}
                            name="twitterHandle"
                            onChange={this.updateInput}
                        />
                    </div>
                    <div>
                        <label >Instagram Handle:</label>
                        <input
                            value={this.state.instagramHandle}
                            name="instagramHandle"
                            onChange={this.updateInput}
                        />
                    </div>
                    <button>Save</button>
                </form>
                <div className="listOfVideos">
                    {this.displayVideos()}
                </div>




                {/* This does not work */}
                <a class="twitter-timeline" href="https://twitter.com/amandajimenezzz?ref_src=twsrc%5Etfw">Tweets by cryptoWZRD_</a> 
                <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
                
                <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Sunsets don&#39;t get much better than this one over <a href="https://twitter.com/GrandTetonNPS?ref_src=twsrc%5Etfw">@GrandTetonNPS</a>. <a href="https://twitter.com/hashtag/nature?src=hash&amp;ref_src=twsrc%5Etfw">#nature</a> <a href="https://twitter.com/hashtag/sunset?src=hash&amp;ref_src=twsrc%5Etfw">#sunset</a> <a href="http://t.co/YuKy2rcjyU">pic.twitter.com/YuKy2rcjyU</a></p>&mdash; US Department of the Interior (@Interior) <a href="https://twitter.com/Interior/status/463440424141459456?ref_src=twsrc%5Etfw">May 5, 2014</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

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
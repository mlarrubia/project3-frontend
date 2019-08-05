import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import ModalVideo from 'react-modal-video';
import {
    TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton,
    TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed,
    TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed,
    TwitterOnAirButton
} from 'react-twitter-embed';

import axios from 'axios';

export default class RegisterCelebrityCard extends Component {

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
                    <ModalVideo isOpen={this.state.isOpen === i} videoId={eachvideo.videoID}  onClose={() => this.setState({ isOpen: false })} />
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
            </div>
        )
    }
}

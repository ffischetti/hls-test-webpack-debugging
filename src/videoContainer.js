import React, { Component } from 'react'
import VideoJSPlayer from './videojsPlayer'


export default class VideoPlayer extends Component {


  render() {
    const videoJsOptions = {
      autoplay: false,
      aspectRatio: '16:9',
      controls: true,
      sources: [{ src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8', type: 'application/x-mpegURL' }],
    }

    return (
        <VideoJSPlayer
          {...videoJsOptions}
        />
    )

  }
}
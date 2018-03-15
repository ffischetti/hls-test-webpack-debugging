import React from 'react'
import 'video.js/dist/video-js.css'
import videojs from 'video.js'
import 'videojs-contrib-hls.js'

// import 'videojs-contrib-hls' // there's some webpack issue that prevents this from loading
// import T from 'prop-types'

export default class VideoJSPlayer extends React.Component {


  componentDidMount() {
    // instantiate Video.js
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log('onPlayerReady', this) // eslint-disable-line
    })
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }
  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    return (
      <div>
        <div data-vjs-player style={{ position: 'inherit', width: '100%', height: '100%' }}>
          <video
            ref={(node) => this.videoNode = node}
            className="video-js"
          >
          </video>
        </div>
      </div>
    )
  }
}
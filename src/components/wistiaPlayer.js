import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import './wistiaPlayer.css'

class ResponsivePlayer extends Component {
  render() {
    return (
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url={this.props.video}
          width="100%"
          height="100%"
        />
      </div>
    )
  }
}

export default ResponsivePlayer

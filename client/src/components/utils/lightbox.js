import React, { Component } from 'react';
import Lightbox from 'react-images';

export default class ImageLightBox extends Component {
  // everything from the state comes from lightbox instructions
  state = {
    lightboxIsOpen: true,
    currentImage: this.props.pos,
    images: []
  };

  // we need to process the state of images
  static getDerivedStateFromProps(props, state) {
    if (props.images) {
      const images = [];
      // props are coming from prodImg / ImageLightBox
      props.images.forEach(element => {
        images.push({ src: `${element}` });
      });
      return (state = {
        images
      });
    }
    return false;
  }

  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  };

  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  };

  closeLightBox = () => {
    this.props.onclose();
  };

  render() {
    return (
      <Lightbox
        currentImage={this.state.currentImage}
        images={this.state.images}
        isOpen={this.state.lightboxIsOpen}
        onClickPrev={() => this.gotoPrevious()}
        onClickNext={() => this.gotoNext()}
        onClose={() => this.closeLightBox()}
      />
    );
  }
}

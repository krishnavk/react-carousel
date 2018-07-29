import React, { Component } from 'react'
import Carousel from '../../components/carousel'
/* 
  This is to separate data from presentation logic.
*/
export default class CarouselContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      imagesUrl :[]
    }
  }

  componentDidMount(){
    fetch('https://pixabay.com/api/?key=9663203-df67b6f5f03a99f1214f3dd3d&category=architecture')
    .then(response => {
      return response.json()
    })
    .then(data => {
      let imagesPreviewUrl = data.hits.map(image => image.previewURL)
      this.setState({imagesUrl : imagesPreviewUrl})
    })
  }

  render(){
    return(
      <Carousel images={this.state.imagesUrl} imagesToShow={5} />
    )
  }
}
import React, {Component} from 'react'
import PropTypes from 'prop-types'

let images = []

export default class Carousel extends Component {	

  constructor (props) {
		super(props)
		
		this.state = {
			currentImageIndex: 0,
			disablePrevButton: true,
			disableNextButton: false,
		}
		
		this.nextSlide = this.nextSlide.bind(this)
		this.previousSlide = this.previousSlide.bind(this)
	}

	componentWillReceiveProps(nextProps) {
		//wrap all image url's into ImagSlide component. So it can be use this to directly display the image in the viewbox. 
		//this logic can be moved to elsewhere and can be enhanced by lazy loading to improve performance. 
		images.push(...nextProps.images.map((image, index) => {
			return (<ImageSlide url={image} key={index} />)
		}))	
	}

	previousSlide () {
		const currentImageIndex = this.state.currentImageIndex

		//TODO: this logic can be enhanced to make it as infinite scroll
		const shouldDisablePrevButton = currentImageIndex === 0		
		const index = currentImageIndex - 1
		
		this.setState({
			currentImageIndex: index,
			disablePrevButton: shouldDisablePrevButton,
			disableNextButton: false,
		})
	}
	
	nextSlide () {
		const lastIndex = this.props.images.length - 1
		const currentImageIndex = this.state.currentImageIndex

		//TODO: this logic can be enhanced to make it as infinite scroll 
		const shouldDisableNextButton = currentImageIndex === lastIndex
		const index = currentImageIndex + 1

		this.setState({
			currentImageIndex: index,
			disableNextButton: shouldDisableNextButton,
			disablePrevButton: false,
		})
	}
	
	/* 
	return images to be displayed in the viewbox. 
	*/

	showImages = () => {		
		let displayImages = []
		const beginIndex = this.state.currentImageIndex
		const endIndex = beginIndex + this.props.imagesToShow		
		//TODO : improve logic to handle the display of first and last images more effectively.
		displayImages = images.slice(beginIndex, endIndex)
		return displayImages
	}

  render(){
    return (
			<div className="carousel">
				<button type="button" disabled={this.state.disablePrevButton} className="slideButton left" onClick={this.previousSlide}>Prev</button>
				<div className="imageList" >{this.showImages()}</div>
				<button type="button" disabled={this.state.disableNextButton} className="slideButton right" onClick={this.nextSlide}>Next</button>
			</div>
		)
	}
}

Carousel.defaultProps = {
	imagesToShow: '5',
}

Carousel.propTypes = {
	images: PropTypes.arrayOf(PropTypes.string).isRequired,
}

const ImageSlide = ({ url }) => {
	const styles = {
		backgroundImage: `url(${url})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	}
	
	return (
		<div className="imageSlide" style={styles} />
	)
}
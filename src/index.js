import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import CarouselContainer from './containers/carouselContainer/'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<CarouselContainer />, document.getElementById('root'))
registerServiceWorker()

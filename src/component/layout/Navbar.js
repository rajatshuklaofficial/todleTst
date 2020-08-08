import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const imgStyle={
	width:'30px',
	height:'30px'
}
const mainDivStyle={
	display:'flex',
	justifyContent: 'space-between',
	paddingTop:'15px',
	paddingBottom:'15px',
	height:'auto',
}

class Navbar extends Component {
	render(){
		return(
			<div style={mainDivStyle}>
				<div style={{"display":'flex', 'justifyContent':'space-around'}}>
				<img style = {imgStyle} src='/img/back.webp'/>
				<div style = {{'fontSize':'20px'}}>{this.props.pageTitle}</div>
			</div>
			<div style={{"display":'flex', 'justifyContent':'space-around'}}>
				<img style = {imgStyle} src='/img/search.webp'/>
				<img style = {imgStyle} src='/img/cart.webp'/>
				<img style = {imgStyle} src='/img/more.png'/>
			</div>
			</div>
			)
	}
}
export default Navbar;
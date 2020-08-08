import React ,{Component} from 'react'
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../layout/Navbar';
import {k} from './productlist.js'

const imgstyle={
	height:'150px',
	width:'150px',
	borderRadius:'20px',
}
const imgStyleIcon={
	width:'22px',
	height:'22px'
}
const productDivStyle={
	 borderBottom: '.1px solid #ebebe0',
	 borderRight: '.1px solid #ebebe0',
	 padding:'5%',
	 width:'100%',
}
const productDivStyleRight={
	 borderBottom: '.1px solid #ebebe0',
	 padding:'5%',
	 width:'100%',

}
const likeIconStyle={
	position:'absolute',
	width:'30px',
	height:'30px',
	borderRadius:'50%',
	backgroundColor:'#ffffff',
	top:'10px',
	left:'110px',
	padding:'3px'
}

class user extends Component{
	constructor(){
		super();
		this.state={
			errors:{},
			redirectlink:null,
		}
	}
	componentDidMount(){
		axios.get('https://dev-gtw1.coutloot.com:20038/product/list')
		.then((res)=>{console.log(res)
			})
		.catch(err=>console.log(err));
		
	}
	redirectToPost=(productUrl)=>{
		this.setState({redirectlink:productUrl})
	}
	productlisting(k){
		var d=[]
		for(let i=0;i<k.products.length;i+=2){
			let a=(
				<div style={{"display":'flex', 'justifyContent':'center','width':'100%'}}>
					<div style ={productDivStyle} onClick={()=>{this.redirectToPost(k.products[i].details.productUrl)}}>
					<div style={{'position':'relative'}}>
						<div style={likeIconStyle}><img  src='img/likeblank.webp' /></div>
						<img style={imgstyle} src={k.products[i].images.mainImages[0]}/>
					</div>
						<div style={{"fontSize":"12px","marginTop":'5px'}}> 
							&#8377;12000 
							<span style={{"textDecoration":"line-through",'fontWeight': '300',"fontSize":"10px"}}>(24000)</span> 
							<span style={{"fontSize":"10px","color":"green"}}>50% OFF</span>
						</div>
						<div style={{"fontSize":"11px","width":"120px"}}>{k.products[i].details.title}</div>
						<div style={{"fontSize":"11px","width":"120px"}}>&#11088;&#11088;&#11088;&#11088;&#11088;</div>
					</div>
					<div style ={productDivStyleRight} onClick={()=>{this.redirectToPost(k.products[i].details.productUrl)}}>
						<div style={{'position':'relative'}}>
							<div style={likeIconStyle}><img  src='img/likeblank.webp' /></div>
						<img style={imgstyle} src={k.products[i+1].images.mainImages[0]}/>
					</div>
						<div style={{"fontSize":"12px","marginTop":'5px'}}> 
							&#8377;12000 
							<span style={{"textDecoration":"line-through",'fontWeight': '300',"fontSize":"10px"}}>(24000)</span> 
							<span style={{"fontSize":"10px","color":"green"}}>50% OFF</span>
						</div>
						<div style={{"fontSize":"11px","width":"120px"}}>{k.products[i+1].details.title}</div>
						<div style={{"fontSize":"11px","width":"120px"}}>&#11088;&#11088;&#11088;&#11088;&#11088;</div>
					</div>
				</div>
				)
			d.push(a)
		}
		return d
		
	}
	 render(){
	 	console.log(k)
	 	if(this.state.redirectlink){
	 		 window.location.assign(this.state.redirectlink);
	 	}else{	
		 	return(
		 		<div>
		 		<Navbar
		 			pageTitle={k.pageTitle}
		 		 />
		 		 <div style={{'width':'100%',"backgroundColor":"#ebebe0","padding":'10px',"display":'flex', 'justifyContent':'space-between'}}>
			 		 <div style={{"display":'flex', 'justifyContent':'space-around'}}>
			 		 	<img style={imgStyleIcon} src='img/tick.png' />
			 		 	<div style={{'fontSize':'14px'}}> Show only assured products only</div>
			 		 </div>
			 		<div style={{"display":'flex', 'justifyContent':'space-around'}}>
		 		 		<img style={imgStyleIcon} src='img/on.png' />
		 		 	</div>
		 		 </div>
		 		 {
		 		 	this.productlisting(k)
		 		 }
		 		 </div>
	 		)
	 	}
	 }
}
export default user;
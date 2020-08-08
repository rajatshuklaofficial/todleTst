import React ,{Component} from 'react';
import {Link} from 'react-router-dom';


const mainDivStyle={
	padding:'5%',
}

const subDivStyle1={
	height:'auto',
	fontSize:'25px',
	color:'#b3cccc',
	width:'100%',
	paddingTop:'10px',
	borderBottom: '.5px solid #ebebe0',

}
const subDivStyle2={
	height:'auto',
	width:'100%',
	paddingTop:'10px',
	paddingBottom:'10px',
	borderBottom: '.5px solid #ebebe0',
	display:'flex',

}
const subDivStyle3={
	height:'auto',
	width:'100%',
	paddingTop:'10px',
	paddingBottom:'10px',
	borderBottom: '.5px solid #ebebe0',

}
const value='20'
const addStanderdButton={
	width:'100%',
	borderRadius:'10px',
	value:'50',
	marginTop:`${value+'px'}`,
	textAlign: 'center',
	paddingTop:'10px',
	paddingBottom:'10px',
	backgroundColor:'blue',
}
const imgStyleIcon={
	width:'22px',
	margin: '5px',
	height:'22px',
}
class Landing extends Component{
	render(){
		return(
			<div style={mainDivStyle}>
				<div style={subDivStyle1}><b>MATHEMATICS</b></div>
				<div style={subDivStyle2}>
					<div>
						<div><b>Actions</b></div>
						<div style={{'color':'#b3cccc'}}>Move,Indent,</div>
						<div style={{'color':'#b3cccc'}}>Outdent,Delete,</div>
					</div>
					<div>
						<div><b>Standerd</b></div>
						<div style={{'color':'#b3cccc'}}>The text of standerd</div>
					</div>
				</div>
				<div style={subDivStyle2}>
					<div style={{'display':'flex'}}>
						<img style={imgStyleIcon} src='img/move.png' />
						<img style={imgStyleIcon} src='img/left.png' />
						<img style={imgStyleIcon} src='img/right.png' />
						<img style={imgStyleIcon} src='img/del.webp' />
					</div>
					<div>
					 Type Standerd here
					</div>
				</div>
				<button style={addStanderdButton}>Add a standerd</button>

			</div>
		  )
	}
}

export default Landing;
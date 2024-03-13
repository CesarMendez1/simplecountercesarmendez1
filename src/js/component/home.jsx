import React from "react";

//include images into your bundle


//create your first component
const Home = (props) => {
	return (
		<div className="container reloj"> 
		<div className="row">
			
			<div className="col digito">
			<i className="far fa-clock"></i>
			</div>
			<div className="col digito">
				{props.digitoseis}
			</div>
			<div className="col digito">
				{props.digitocinco}
			</div>
			<div className="col digito">
				{props.digitocuatro}
			</div>
			<div className="col digito">
				{props.digitotres}
			</div>
			<div className="col digito">
				{props.digitodos}
			</div>
			<div className="col digito">
				{props.digitouno}
			</div>
		</div>
		</div>
	);
};
export default Home





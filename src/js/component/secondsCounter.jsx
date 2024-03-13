import React from "react";
import PropTypes, { object } from "prop-types";


const  SecondsCounter=(props)=> {
	return (
		<div
			className="rounded display-2 d-flex align-items-center justify-content-center mx-2 digito"
			id={props.identificador}>
			{props.seconds}
		</div>
	);
}
export default SecondsCounter;
SecondsCounter.propTypes = {
	seconds: PropTypes.string.isRequired, 
	identificador: PropTypes.string.isRequired 
};
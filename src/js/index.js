//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
/* import "bootstrap"; */

//include your index.scss file into the bundle

import "../styles/index.css"; 

//import your own components
import  Home  from "./component/home.jsx";

let second=0
setInterval(() => {
   const uno=Math.floor((second/1)%10)
   const dos=Math.floor((second/10)%10)
   const tres=Math.floor((second/100)%10)
   const cuatro=Math.floor((second/1000)%10)
   const cinco=Math.floor((second/10000)%10)
   const seis=Math.floor((second/100000)%10)
   second+=1 
   ReactDOM.render(<Home digitouno={uno} digitodos={dos} digitotres={tres} digitocuatro={cuatro} digitocinco={cinco} digitoseis={seis}/>, document.querySelector("#app"));
}, 1000);
//render your react application

import React, { useState } from "react";
import "../src/contact.css"
const Contact=()=>{

    const [data,setData]= useState({
        name:"",
        phone:"",
        email:"",
        msg:"",
});

const InputEvent=(event)=>{
    const{name,value}=event.target;

    setData((preVal)=>{
        return{
            ...preVal,
            [name]:value,
        };
    });
};

const formSubmit=(e)=>{
e.preventDefault();
alert(`${data.name}`);
};

    return(
        <>
         <div class="container">
	<div class="row">
			<h1>contact us</h1>
	</div>
	<div class="row">
			<h4 >We'd love to hear from you!</h4>
	</div>
	<div class="row input-container">
			<div class="col-xs-12">
				<div class="styled-input wide">
					<input type="text" required />
					<label>Name</label> 
				</div>
			</div>
			<div class="col-md-6 col-sm-12">
				<div class="styled-input">
					<input type="text" required />
					<label>Email</label> 
				</div>
			</div>
			<div class="col-md-6 col-sm-12">
				<div class="styled-input" >
					<input type="text" required />
					<label>Phone Number</label> 
				</div>
			</div>
			<div class="col-xs-12">
				<div class="styled-input wide">
					<textarea required></textarea>
					<label>Message</label>
				</div>
			</div>
			<div class="col-xs-12">
				<div class="btn-lrg submit-btn">Send Message</div>
			</div>
	</div>
</div>

            </>
    );
};

export default Contact;
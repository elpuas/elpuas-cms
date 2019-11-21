import React, { useState } from "react"
import styled from "styled-components"
import FormInput from "./form-input"

// const FormRow = styled.div`
// 	display: flex;
// 	position: relative;
// 	label {
// 		position: absolute;
// 		padding: 5px 0 0 5px;
// 	}
// 	input {
// 		min-height: 50px;
// 		width: 100%;
// 		border: solid 4px var(--formBorderColor);
// 	}
// `

function useInput() {
	const [value, setValue] = useState("");
  
	const onChange = e => {
	  setValue(e.target.value);
	};
  
	return {
	  value,
	  onChange
	};
  }
  
function Form() {
	const name = useInput();
	const email = useInput();
  
	return (
	  <form
		name="contact-form"
		method="POST"
		data-netlify="true"
		data-netlify-honeypot="bot-field"
		key="contact-form"
	  >
		<FormInput {...name} label="Your Name:" type="text" name="name" />
		<FormInput {...email} label="Your Email:" type="text" name="email" />
	  </form>
	);
  }

export default Form
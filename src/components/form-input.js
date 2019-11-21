import React, { useState } from "react"
import styled from "styled-components"


function FormInput({ label, value, ...props }) {
	const [isOpen, setIsOpen] = useState(false);
  
	const expand = isOpen || value !== "";
  
	const toggleOpen = () => {
	  setIsOpen(isCurrentlyOpen => !isCurrentlyOpen);
	};
  
	return (
	  <div style={{ margin: "32px 0", display: "flex", flexDirection: "column" }}>
		<label
		  className={
			expand ? ".input__label--expanded" : ".input__label--collapsed"
		  }
		  style={{
			fontWeight: "bold",
			fontSize: isOpen || value !== "" ? "0.8em" : "1em"
		  }}
		>
		  {label}
		</label>
		<input
		  {...props}
		  value={value}
		  onFocus={toggleOpen}
		  onBlur={toggleOpen}
		/>
	  </div>
	);
  }

  export default FormInput
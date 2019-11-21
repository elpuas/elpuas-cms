import React from "react"
import { storiesOf } from "@storybook/react"
import Form from "./form"

storiesOf(`Components/Form`, module).add(`default`, () => (
	<div>
		<p>Form</p>
		<Form />
	</div>
))
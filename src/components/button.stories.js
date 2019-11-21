import React from "react"
import { storiesOf } from "@storybook/react"
import Button from "./button"

storiesOf(`Components/Buttons`, module).add(`default`, () => (
	<div>
		<p>Regular Button</p>
		<Button marginTop="35px">Click Me!</Button>
	</div>
))
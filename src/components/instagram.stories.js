import React from "react"
import { storiesOf } from "@storybook/react"
import Instagram from "./instagram"

storiesOf(`Dashboard/Instagram`, module).add(`default`, () => (
	<div>
		<p>Instagram</p>
		<Instagram />
	</div>
))
import { useState } from "react";

const UseToggle = ({ defaultValue }) => {
	const [value, setValue] = useState(defaultValue);

	function toggleValue(valueParams) {
		setValue((currentValue) =>
			typeof valueParams === "boolean" ? valueParams : !currentValue
		);
	}

	return [value, toggleValue];
};

export default UseToggle;

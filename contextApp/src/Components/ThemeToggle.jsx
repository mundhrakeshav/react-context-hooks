import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

// class ThemeToggle extends React.Component {
// 	static contextType = ThemeContext;
// 	render() {
// 		const { toggleTheme } = this.context;
// 		return <button onClick={toggleTheme}>toggle</button>;
// 	}
// }
const ThemeToggle = () => {
	const { toggleTheme } = useContext(ThemeContext);
	return <button onClick={toggleTheme}>toggle</button>;
};

// export default ThemeToggle;
export default ThemeToggle;

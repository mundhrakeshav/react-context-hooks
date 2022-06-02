import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Navbar = () => {
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const theme = isLightTheme ? light : dark;
	return (
		<nav style={{ background: theme.ui, color: theme.syntax }}>
			<h1>Context App</h1>
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</nav>
	);
};

export default Navbar;

// class Navbar extends React.Component {
// 	static contextType = ThemeContext;
// 	render() {
// 		const { isLightTheme, light, dark } = this.context;
// 		const theme = isLightTheme ? light : dark;
// 		return (
// 			<nav style={{ background: theme.ui, color: theme.syntax }}>
// 				<h1>Context App</h1>
// 				<ul>
// 					<li>Home</li>
// 					<li>About</li>
// 					<li>Contact</li>
// 				</ul>
// 			</nav>
// 		);
// 	}
// }

// export default Navbar;

import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { ThemeContext } from "../Context/ThemeContext";
//This method can be used in a functional component and multiple consumers can be consumed in a single file.
// class BookList extends Component {
//   static contextType = ThemeContext;
//   render() {
//     return (
//       <AuthContext.Consumer>
//         {(authContext) => {
//           return (
//             <ThemeContext.Consumer>
//               {(context) => {
//                 const { isLightTheme, light, dark } = context;
//                 const { isAuthenticated, toggleAuth } = authContext;
//                 const theme = isLightTheme ? light : dark;
//                 console.log({ isAuthenticated });
//                 return (
//                   <div
//                     className="book-list"
//                     style={{ color: theme.syntax, background: theme.bg }}
//                   >
//                     <button onClick={toggleAuth}>
//                       {isAuthenticated ? "LoggedIn" : "Logged Out"}
//                     </button>
//                     <ul>
//                       <li style={{ background: theme.ui }}>the way of kings</li>
//                       <li style={{ background: theme.ui }}>
//                         the name of the wind
//                       </li>
//                       <li style={{ background: theme.ui }}>the final empire</li>
//                     </ul>
//                   </div>
//                 );
//               }}
//             </ThemeContext.Consumer>
//           );
//         }}
//       </AuthContext.Consumer>
//     );
//   }
// }

const BookList = () => {
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const { isAuthenticated, toggleAuth } = useContext(AuthContext);
	const theme = isLightTheme ? light : dark;

	return (
		<div
			className="book-list"
			style={{ color: theme.syntax, background: theme.bg }}
		>
			<button onClick={toggleAuth}>
				{isAuthenticated ? "LoggedIn" : "Logged Out"}
			</button>
			<ul>
				<li style={{ background: theme.ui }}>the way of kings</li>
				<li style={{ background: theme.ui }}>the name of the wind</li>
				<li style={{ background: theme.ui }}>the final empire</li>
			</ul>
		</div>
	);
};

export default BookList;

import "./App.css";
import BookList from "./Components/BookList";
import Navbar from "./Components/Navbar";
import ThemeToggle from "./Components/ThemeToggle";
import AuthContextProvider from "./Context/AuthContext";
import BookContextProvider from "./Context/BookContext";
import ThemeContextProvider from "./Context/ThemeContext";

function App() {
	return (
		<div className="App">
			<ThemeContextProvider>
				<AuthContextProvider>
					<Navbar />
					<BookContextProvider>
						<BookList />
					</BookContextProvider>
					<ThemeToggle />
				</AuthContextProvider>
			</ThemeContextProvider>
		</div>
	);
}

export default App;

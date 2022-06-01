import "./App.css";
import BookList from "./Components/BookList";
import Navbar from "./Components/Navbar";
import ThemeToggle from "./Components/ThemeToggle";
import AuthContextProvider from "./Context/AuthContext";
import ThemeContextProvider from "./Context/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;

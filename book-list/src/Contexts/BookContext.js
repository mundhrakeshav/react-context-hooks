import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const BookContext = createContext();

const BookContextProvider = (props) => {
	const [books, setBooks] = useState([
		{ title: "Harry Potter", author: "JK Rowling", id: 1 },
		{ title: "Lord of the Rings", author: "Tolkien", id: 2 },
		{ title: "The Dark Tower", author: "Stephen King", id: 3 },
		{ title: "Eloquent Ruby", author: "Russ Olsen", id: 4 },
	]);

	const addBook = (title, author) => {
		setBooks([...books, { title, author, id: uuid() }]);
	};

	const removeBook = (id) => {
		setBooks(books.filter((book) => book.id !== id));
	};

	return (
		<BookContext.Provider value={{ books, addBook, removeBook }}>
			{props.children}
		</BookContext.Provider>
	);
};

export default BookContextProvider;

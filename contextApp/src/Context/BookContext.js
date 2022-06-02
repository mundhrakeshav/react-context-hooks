import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
	const [books, setBooks] = useState([
		{ title: "Harry Potter", author: "JK Rowling", id: 1 },
		{ title: "Lord of the Rings", author: "Tolkien", id: 2 },
		{ title: "The Dark Tower", author: "Stephen King", id: 3 },
		{ title: "Eloquent Ruby", author: "Russ Olsen", id: 4 },
	]);


	return (
		<BookContext.Provider value={{ books }}>
			{props.children}
		</BookContext.Provider>
	);
};

export default BookContextProvider;

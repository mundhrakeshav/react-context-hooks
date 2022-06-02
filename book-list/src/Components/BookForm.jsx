import { useContext, useState } from "react";
import { BookContext } from "../Contexts/BookContext";

const BookForm = () => {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const { addBook } = useContext(BookContext);
    const handleSubmit = (e) => { 
        e.preventDefault();
        console.log(title, author);
        addBook(title, author);
        setTitle("");
        setAuthor("");
    }
    return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Book Title"
				value={title}
				onChange={(e) => {
					setTitle(e.target.value);
				}}
			/>
			<input
				type="text"
				placeholder="Book Author"
				value={author}
				onChange={(e) => {
					setAuthor(e.target.value);
				}}
			/>
			<input type="submit" value="add book" />
		</form>
	);
};

export default BookForm;

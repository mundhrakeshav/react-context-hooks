import { useState } from "react";

const NewSongForm = ({ addSong }) => {
	const [title, setTitle] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		addSong(title);
		setTitle("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>Song:</label>
			<input
				type="text"
				value={title}
				required={true}
				onChange={(e) => {
					setTitle(e.target.value);
				}}
			/>
			<input type="submit" value="add Song" />
		</form>
	);
};

export default NewSongForm;

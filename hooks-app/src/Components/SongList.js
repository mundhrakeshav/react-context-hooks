import { useState, useEffect } from "react";
import NewSongForm from "./NewSongForm";

const SongList = () => {
	const [songs, setSongs] = useState([
		{ title: "nihil sunt quas", duration: "4:05", id: 1 },
		{ title: "ut et esse", duration: "3:21", id: 2 },
		{ title: "molestiae quisquam sit", duration: "6:23", id: 3 },
	]);

	const addSong = (title) => {
		setSongs([...songs, { title, duration: "4:05", id: songs.length + 1 }]);
	};
	useEffect(() => {
		console.log("Use Effect Ran");
	}, [songs]);
	return (
		<div className="song-list">
			<ul>
				{songs.map((song) => {
					return <li key={song.id}>{song.title}</li>;
				})}
			</ul>
			<NewSongForm addSong={addSong} />
		</div>
	);
};

export default SongList;

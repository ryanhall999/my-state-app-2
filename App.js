import React, { useState } from "react";
import "./App.css";
import faker from "faker";
import { addNoun, addAdj, adjList, nounList } from "./words.js";
// import bootstrap from "bootstrap";

function App() {
	const [words, wordUpdate] = useState({ nouns: [], adjectives: [] });

	// let adjsList = adjList();
	// let nounsList = nounList();

	return (
		<div className="App">
			<div>
				<h1>The Word Game</h1>
				<p>You've generated nouns and adjectives</p>
				<button type="button" onClick={addNoun(words)}>
					Add Noun
				</button>
				<button type="button" onClick={addAdj(words)}>
					Add Adjective
				</button>
			</div>
			{/* <div>{adjsList}</div>
			<div>{nounsList}</div> */}
		</div>
	);
}

export default App;

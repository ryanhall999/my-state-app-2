import React, { useState } from "react";
import "./App.css";
import faker from "faker";

export const generateNoun = type => {
	const method = type === "Noun" ? faker.company.bsNoun : faker.company.bsNoun;
	return {
		type: "Noun",
		text: method()
	};
};

export const generateAdj = type => {
	const method =
		type === "Adjective"
			? faker.company.bsAdjective
			: faker.company.bsAdjective;
	return {
		type: "Adjective",
		text: method()
	};
};

export function addNoun(words) {
	let newWord = generateNoun();
	console.log(newWord);
	if (newWord.type === "noun") {
		words.nouns.push(newWord);
	} else {
		words.nouns.push(newWord);
	}
	console.log(words);
}

export function addAdj(words) {
	let newWord = generateAdj();
	console.log(newWord);
	if (newWord.type === "adjective") {
		words.nouns.push(newWord);
	} else {
		words.adjectives.push(newWord);
	}
	console.log(words);
}

export function adjList(words) {
	words.adjectives.forEach(adj => {
		return (
			<div class="card">
				<div class="card-body">{adj.text}</div>
			</div>
		);
	});
}

export function nounList(words) {
	words.adjectives.forEach(noun => {
		return (
			<div class="card">
				<div class="card-body">{noun.text}</div>
			</div>
		);
	});
}

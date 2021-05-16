import React, { useContext, useState, useEffect, useRef } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { CardCharacter } from "../component/cardCharacters";
import { CardPlanets } from "../component/cardPlanets";
import { ModalContent } from "../component/modal";

export const Home = () => {
	const { store, actions } = useContext(Context);

	//fetch de people

	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		obtenerDatos();
	}, []);

	const obtenerDatos = async () => {
		const data = await fetch("https://www.swapi.tech/api/people?page=1&limit=100");
		const users = await data.json();
		setCharacters(users.results);
	};

	//fetch de planets

	const [planets, setPlanets] = useState([]);

	useEffect(() => {
		obtenerPlanetas();
	}, []);

	const obtenerPlanetas = async () => {
		const data = await fetch("https://www.swapi.tech/api/planets?page=1&limit=100");
		const users = await data.json();
		setPlanets(users.results);
	};

	useEffect(
		() => {
			if (store.modalActive == true) {
				actions.changeModal();
			}
		},
		[store.modalActive]
	);

	return (
		<div className="Home">
			{store.modalActive ? <ModalContent /> : null}
			<div className="characters">
				<h1>Characters</h1>
				<div className="scrollmenu">
					{characters.map(item => (
						<span key={item.uid}>
							<CardCharacter name={item.name} uid={item.uid} />
						</span>
					))}
				</div>
			</div>
			<div className="planets">
				<h1>Planets</h1>
				<div className="scrollmenu">
					{planets.map(item => (
						<span key={item.uid}>
							<CardPlanets name={item.name} uid={item.uid} />
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

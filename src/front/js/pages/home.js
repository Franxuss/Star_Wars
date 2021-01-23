import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { CardCharacter } from "../component/cardCharacters";
import { CardPlanets } from "../component/cardPlanets";

export const Home = () => {
	const { store, actions } = useContext(Context);

	//fetch de people

	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		obtenerDatos();
	}, []);

	const obtenerDatos = async () => {
		const data = await fetch("https://www.swapi.tech/api/people/");
		const users = await data.json();
		setCharacters(users.results);
	};

	//fetch de planets

	const [planets, setPlanets] = useState([]);

	useEffect(() => {
		obtenerPlanetas();
	}, []);

	const obtenerPlanetas = async () => {
		const data = await fetch("https://www.swapi.tech/api/planets/");
		const users = await data.json();
		setPlanets(users.results);
	};

	const images = [
		{
			id: 1,
			url: "https://wipy.tv/wp-content/uploads/2020/02/Luke-Skywalker-se-iba-a-llamar-Luke-Starkiller-2.jpg"
		},
		{
			id: 2,
			url: "https://i1.wp.com/wipy.tv/wp-content/uploads/2020/09/pierna-plateada-de-c3po.jpg?fit=1000%2C600&ssl=1"
		},
		{
			id: 3,
			url: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/05/03/15885120366138.jpg"
		},
		{
			id: 4,
			url:
				"https://static.wikia.nocookie.net/hitlerparody/images/3/38/Darth-Vader.jpg/revision/latest?cb=20170109114532&path-prefix=es"
		},
		{
			id: 5,
			url: "https://www.cinepremiere.com.mx/wp-content/uploads/2020/06/Leia-Organa-Star-Wars--1024x559.jpg"
		},
		{
			id: 6,
			url: "https://i.ytimg.com/vi/5UW1PIplmlc/maxresdefault.jpg"
		},
		{
			id: 7,
			url: "https://fullstarwars.files.wordpress.com/2015/05/berulars01.jpg"
		},
		{
			id: 8,
			url: "https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=114%2C0%2C1332%2C666"
		},
		{
			id: 9,
			url: "https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C780"
		},
		{
			id: 10,
			url:
				"https://cnet1.cbsistatic.com/img/rykfBbOTgZMJj_PC9dxAuvPeXIc=/1200x675/center/top/2019/08/16/65ef0311-d2a6-49f4-9b55-5fce9e60e3a1/obi2.jpg"
		}
	];

	return (
		<div className="Home">
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

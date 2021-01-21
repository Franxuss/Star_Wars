import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { CardCharacter } from "../component/cardCharacters";
import { CardPlanets } from "../component/cardPlanets";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="Home">
			<div className="characters">
				<h1>Characters</h1>
				<div className="scrollmenu">
					<a>
						<CardCharacter />
					</a>
				</div>
			</div>
			<div className="planets">
				<h1>Planets</h1>
				<div className="scrollmenu">
					<a>
						<CardPlanets />
					</a>
				</div>
			</div>
		</div>
	);
};

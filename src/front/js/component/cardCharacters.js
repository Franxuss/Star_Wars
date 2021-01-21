import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import "../../styles/cardCharacters.scss";

export const CardCharacter = () => {
	return (
		<div>
			<div className="card cardPlanets">
				<img
					className="card-img-top"
					src="https://d25nlln9isiu5y.cloudfront.net/wp-content/uploads/2020/08/18093730/Starwars-trilogia.jpg"
					//alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>

					<p className="card-text" style={{ lineHeight: "1.5" }}>
						Gender:
					</p>
					<p className="card-text" style={{ lineHeight: "1.5" }}>
						Hair Color:
					</p>
					<p className="card-text" style={{ lineHeight: "1.5" }}>
						Eye Color:
					</p>
					<div className="d-flex buttonsDiv">
						<Link to="/demo">
							<button className=" buttonBlue " type="button" href="#">
								{"Learn more!"}
							</button>
						</Link>
						<button type="button" className="buttonHeart ml-auto mr-5 ">
							<i className="far fa-heart" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

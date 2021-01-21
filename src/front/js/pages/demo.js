import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<div className="containerAll mt-3 row">
				<div className="colImg col-8">
					<div className="containerInfo">
						<img
							className="imgInfo"
							src="https://d25nlln9isiu5y.cloudfront.net/wp-content/uploads/2020/08/18093730/Starwars-trilogia.jpg"
							//alt="Card image cap"
						/>
						<div className="info col-4">
							<h1>Tittle</h1>
							<p>Descrption</p>
							<div className="imgDecal" />
						</div>
					</div>
				</div>
			</div>
			<div className="descriptionList">
				<table className="table table-striped">
					<thead>
						<tr>
							<th className="borderTable" scope="col">
								APPEARANCES
							</th>
							<th className="borderTable" scope="col">
								AFFILIATIONS
							</th>
							<th className="borderTable" scope="col">
								LOCATIONS
							</th>
							<th className="borderTable" scope="col">
								GENDER
							</th>
							<th className="borderTable" scope="col">
								DIMENSIONS
							</th>
							<th className="borderTable" scope="col">
								SPECIES
							</th>
							<th className="borderTable" scope="col">
								VEHICLES
							</th>
							<th className="borderTable" scope="col">
								WEAPONS
							</th>
							<th scope="col">TOOL</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th className="rowStyle borderTable">ndoifuvpdvbdsñvn</th>
							<th className="rowStyle borderTable">ndoifuvpdvbndubvjh</th>
							<th className="rowStyle borderTable">ndoifuvpdvñvndubvjh</th>
							<th className="rowStyle borderTable">ndoifuvpñvndubvjh</th>
							<th className="rowStyle borderTable">ndoifuvpndubvjh</th>
							<th className="rowStyle borderTable">ndoifuvvndubvjh</th>
							<th className="rowStyle borderTable">ndoifuvpndubvjh</th>
							<th className="rowStyle borderTable">ndoifuvvndubvjh</th>
							<th className="rowStyle">ndoifudubvjh</th>{" "}
						</tr>
					</tbody>
				</table>
			</div>
			<div className="d-flex justify-content-center">
				<Link to="/">
					<button className="btn btn-secondary">Back home</button>
				</Link>
			</div>
		</div>
	);
};

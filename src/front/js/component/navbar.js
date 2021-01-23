import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { SplitButton } from "primereact/splitbutton";
import { Toast } from "primereact/toast";
import "../../styles/home.scss";

export const Navbar = () => {
	const toast = useRef(null);

	const items = [
		{
			label: "Character 1",
			icon: "pi pi-times",
			command: () => {
				deleteFavorites();
			}
		}
	];
	const deleteFavorites = () => {
		toast.current.show({ severity: "success", summary: "Delete", detail: "Data Deleted" });
	};
	return (
		<nav className="navbar navbar-light">
			<img
				className="starWarsImg"
				src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo.png"
				width="10%"
				style={{ marginLeft: "4em" }}
			/>
			<Toast ref={toast} />
			<div className="splitButtonDiv justify-content-end">
				<SplitButton label="Favorites" icon="pi pi-heart" model={items} />
			</div>
		</nav>
	);
};

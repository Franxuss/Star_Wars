const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: []
		},
		actions: {
			addFavorites(item) {
				const store = getStore();

				setStore({
					favorites: [...store.favorites, item]
				});

				// setStore(store => ({
				// 	favorites: [...store.favorites, item]
				// }));
			},

			deleteFavortites() {
				//console.log("funciona delete");
			}
		}
	};
};

export default getState;

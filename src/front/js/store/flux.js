const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			modalActive: false,
			images: [
				{
					id: 1,
					url:
						"https://wipy.tv/wp-content/uploads/2020/02/Luke-Skywalker-se-iba-a-llamar-Luke-Starkiller-2.jpg"
				},
				{
					id: 2,
					url:
						"https://i1.wp.com/wipy.tv/wp-content/uploads/2020/09/pierna-plateada-de-c3po.jpg?fit=1000%2C600&ssl=1"
				},
				{
					id: 3,
					url: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/05/03/15885120366138.jpg"
				},
				{
					id: 4,
					url: "https://www.eluniversal.com.mx/sites/default/files/2020/11/29/vader.jpg"
				},
				{
					id: 5,
					url:
						"https://www.cinepremiere.com.mx/wp-content/uploads/2020/06/Leia-Organa-Star-Wars--1024x559.jpg"
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
					url:
						"https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=114%2C0%2C1332%2C666"
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
			]
		},
		actions: {
			addFavorites(item) {
				const store = getStore();

				function filterFavorites(arr, criteria) {
					return arr.filter(function(obj) {
						return Object.keys(criteria).every(function(c) {
							return obj[c] == criteria[c];
						});
					});
				}
				if (filterFavorites(store.favorites, { label: item }).length < 1) {
					setStore({
						favorites: [
							...store.favorites,
							{
								label: item,
								icon: "pi pi-times",
								command: () => {
									store.favorites.splice(store.favorites.findIndex(e => e.label === item), 1);
								}
							}
						]
					});
				} else {
					setStore({ modalActive: true });
				}
			},
			changeModal() {
				setTimeout(function() {
					setStore({ modalActive: false });
				}, 3000);
			}
		}
	};
};

export default getState;

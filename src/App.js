import ShoppingListDetail from "./components/ShoppingListDetail.js";
const App=()=>{
	const INITIAL_USERS=[
		{uid:3,email:"milos.hynek@email.cz",name:"Miloš",surname:"Hynek",degree:""},
		{uid:2,email:"jan@novak.xx",name:"Jan",surname:"Novák",degree:"Bc."},
		{uid:5,email:"jaroslava.svoboda@email.xx",name:"Jaroslava",surname:"Svobodová",degree:"Ing."},
		{uid:1,email:"kubanovotny@email.xx",name:"Jakub",surname:"Novotný",degree:""},
		{uid:10,email:"hanicka@kucerova.xx",name:"Hana",surname:"Kučerová",degree:"DiS."}
		];
	const INITIAL_SHOPPING_LIST_DETAIL={
		slid:7,
		id_owner:3,
		name:"Odpolední nákup",	
		description:"Vše prosím nakoupit v místní večerce, děkuji.",
		is_archived:0,
		is_solved:0,
		shopping_list_items:[
			{sliid:14,id_shopping_list:7,name:"Rohlíky",value:"10 ks",is_solved:0},
			{sliid:27,id_shopping_list:7,name:"Chléb",value:"1 ks",is_solved:0},
			{sliid:32,id_shopping_list:7,name:"Mléko",value:"3 x 1l",is_solved:0},
			{sliid:16,id_shopping_list:7,name:"Jogurt malina",value:"4 ks",is_solved:1},
			{sliid:1,id_shopping_list:7,name:"Jogurt jahoda",value:"4 ks",is_solved:1},
			{sliid:41,id_shopping_list:7,name:"Jogurt vanilka",value:"4 ks",is_solved:1},
			{sliid:33,id_shopping_list:7,name:"Máslo",value:"1 ks",is_solved:0},
			{sliid:52,id_shopping_list:7,name:"Mandarinky v síťce",value:"1 Kg",is_solved:1},
			],
		shopping_list_members:[
			{slmid:59,id_shopping_list:7,id_user:2},
			{slmid:62,id_shopping_list:7,id_user:10}
			]
		};
	let current_user=3;	
	return(
		<>
			<h1>Domácí úkol 2 - Detail nákupního seznamu / Frontendové systémy / Miloš Hynek</h1>
			
			
			<ShoppingListDetail shoppingList={INITIAL_SHOPPING_LIST_DETAIL} users={INITIAL_USERS} currentUser={current_user} />
		</>
		);
	};
export default App;
	

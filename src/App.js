import ShoppingListDetail from "./components/ShoppingListDetail.js";
import UserSelector from "./components/UserSelector.js";
import {useState} from "react"

//start-data definitions
//defined here for possible modification in app
let current_user=3;	
const INITIAL_USERS=[
	{uid:2,email:"jan@novak.xx",name:"Jan",surname:"Novák",degree:"Bc."},
	{uid:3,email:"jiri.prochazka@email.xx",name:"Jiří",surname:"Procházka",degree:""},
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
		
const App=()=>{	
	//component rendering updates:
	const [updateMain,setUpdateMain]=useState(0);
	const refreshMain=()=>{setUpdateMain(updateMain+1);}
	
	//Change logged user
	let callbackChangeUser=(uid)=>{					
		current_user=uid;				
		refreshMain();		
		}
	
	return(
		<>			
			<div className="row ">		
				<div className="col-xs-12 col-sm-8 col-md-9">
					<h1>Domácí úkol 2 - Detail nákupního seznamu <small>(Frontendové systémy / Miloš Hynek)</small></h1>	
				</div>	
				<div className="col-xs-12 col-sm-4 col-md-3 align-right">
					<UserSelector users={INITIAL_USERS} currentUser={current_user} callbackChangeUser={callbackChangeUser} />
				</div>	
				<div className="col-xs-12 col-sm-12 col-md-12">
					<h2>Komponenta ShoppingListDetail</h2>
				</div>				
			</div>
			<br />					
			<ShoppingListDetail shoppingList={INITIAL_SHOPPING_LIST_DETAIL} users={INITIAL_USERS} currentUser={current_user} />
			<br /><br />
			<h2>Přehled dat uživatelů v&nbsp;systému <small>(za&nbsp;účelem testování výše uvedené komponenty)</small></h2>
			{INITIAL_USERS.map((user:{...})=>
				(<div key={user.uid}>#{user.uid} - {user.degree} {user.name} {user.surname} - {user.email}</div>)
			)}				
		</>
		);
	};
export default App;
	

import "./ShoppingListDetail.css";
import ShoppingListMember from "./ShoppingListMember.js";

const ShoppingListDetail=(props)=>{
	let usersById=[];
	props.users.forEach((user)=>( 	
		usersById[user.uid]=user
		));		
	return(
		<div className="shoppingList">
			<h2>{props.shoppingList.name}</h2>
			<p>{props.shoppingList.description}</p>
			<h3>Položky nákupního seznamu:</h3>
			
			<h3>Uživatelé nákupního seznamu:</h3>
			{props.shoppingList.shopping_list_members.map((member:{...})=>(
				<ShoppingListMember key={member.slmid} member={member} users={usersById} currentUser={props.currentUser} />
				))}
			<h3>Vlastník nákupního seznamu:</h3>
				
		</div>
		);
	};
export default ShoppingListDetail;
	

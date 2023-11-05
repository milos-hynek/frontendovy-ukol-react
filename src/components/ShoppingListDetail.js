import "./ShoppingListDetail.css";
import ShoppingListMember from "./ShoppingListMember.js";
import {useState} from "react"

const ShoppingListDetail=(props)=>{
	//helping array for users:
	let usersById=[];
	props.users.forEach((user)=>( 	
		usersById[user.uid]=user
		));
	
	//component rendering updates:
	const [update,setUpdate]=useState(0);
	const refresh=()=>setUpdate(update+1);
	
	//Shopping list helper
	const [shoppingList,setShoppingList]=useState(props.shoppingList);
	
	//Delete some member from shopping list
	let callbackDeleteMember=(slmid)=>{					
		shoppingList.shopping_list_members.forEach((member,index)=>{ 	
			if(member.slmid===slmid){
				shoppingList.shopping_list_members.splice(index,1);				
				alert("Člen úspěšně odstraněn z nákupního seznamu.");	
				}								
			});				
		const updatedShoppingList=shoppingList;
		setShoppingList(updatedShoppingList);	
		refresh();		
		}
	
	return(
		<div className="shoppingListDetail">
			<h2>{shoppingList.name}</h2>
			<p>{shoppingList.description}</p>
			<h3>Položky:</h3>
			
			<h3>Členové:</h3>
			<div className="row">
				<div className="shoppingListOwner col-xs-12 col-sm-6 col-md-3">
					<div className="shoppingListOwnerInner">
						{usersById[props.currentUser].degree} {usersById[props.currentUser].name}	{usersById[props.currentUser].surname}  (vlastník)
					</div>
				</div>
				{shoppingList.shopping_list_members.map((member:{...})=>(
					<ShoppingListMember key={member.slmid} member={member} users={usersById} currentUser={props.currentUser} owner={shoppingList.id_owner} callbackDelMember={callbackDeleteMember} />
					))}
			</div>
			
		</div>
		);	
	};
export default ShoppingListDetail;
	

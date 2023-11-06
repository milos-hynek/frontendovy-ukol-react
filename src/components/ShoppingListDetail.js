import "./ShoppingListDetail.css";
import ShoppingListMember from "./ShoppingListMember.js";
import ShoppingListAddMember from "./ShoppingListAddMember.js";
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
	
	//helping array for members:
	let membersById=[];
	shoppingList.shopping_list_members.forEach((member)=>( 	
		membersById[member.id_user]=member.id_user
		));
	
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
		
	//Add new member into shopping list
	let callbackAddMember=(user_id)=>{		
		let member_id=(Math.floor(Math.random()*10000000)*10);
		let newMember={slmid:member_id,id_shopping_list:shoppingList.slid,id_user:user_id};
		shoppingList.shopping_list_members.push(newMember);
		alert("Člen úspěšně přidán do nákupního seznamu.");	
		const updatedShoppingList=shoppingList;
		setShoppingList(updatedShoppingList);			
		refresh();		
		}
	
	if(parseInt(props.currentUser)===parseInt(shoppingList.id_owner)||parseInt(props.currentUser)===membersById[parseInt(props.currentUser)]){}else{ // only owner and member can see shopping list		
		return (
			<div className="shoppingListDetail">
				<h2>Nemáte oprávnění vidět nákupní seznam "{shoppingList.name}" - nejste ani&nbsp;členem a&nbsp;ani&nbsp;vlastníkem nákupního seznamu.</h2>
			</div>
			);
		}
	
	return(
		<div className="shoppingListDetail">
			<h2>{shoppingList.name}</h2>
			<p>{shoppingList.description}</p>
			<h3>Položky</h3>
			
			<h3>Členové</h3>
			<div className="row">
				<div className="shoppingListOwner col-xs-12 col-sm-6 col-md-3">
					<div className="shoppingListOwnerInner">
						{usersById[props.shoppingList.id_owner].degree} {usersById[props.shoppingList.id_owner].name}	{usersById[props.shoppingList.id_owner].surname}  (vlastník)
					</div>
				</div>
				{shoppingList.shopping_list_members.map((member:{...})=>(
					<ShoppingListMember key={member.slmid} member={member} users={usersById} currentUser={props.currentUser} owner={shoppingList.id_owner} callbackDelMember={callbackDeleteMember} />
					))}
				<ShoppingListAddMember members={membersById} users={usersById} currentUser={props.currentUser} owner={shoppingList.id_owner} callbackAddMember={callbackAddMember} />	
			</div>
			
		</div>
		);	
	};
export default ShoppingListDetail;
	

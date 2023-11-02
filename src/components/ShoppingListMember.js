import "./ShoppingListMember.css";


const ShoppingListMember=(props)=>{
	if(props.users===undefined){
		return(<></>);
		}
	if(props.member===undefined){
		return(<></>);
		}	
	if(props.users[props.member.id_user]!==undefined){						
		return(
			<div className="shoppingListMember">
				<h4>{props.users[props.member.id_user].name} {props.users[props.member.id_user].surname} {props.users[props.member.id_user].degree} </h4>
				
				
			</div>
			);
		}	
	return(<></>); 	
	};
export default ShoppingListMember;
	

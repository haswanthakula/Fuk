import {useLocation} from 'react-router-dom'
import React, { Children } from 'react';   
import Service from "../Service/Service.js";

function ViewCart(){
	// const location=useLocation();
	// const {products}=location.state;
	//console.log("hellooooooooo");
	const products=Service.viewCart();
	const styles={
		h2:{fontWeight:"650",textAlign:"center",color:"#FFA07A"},
		div:{marginLeft:"100px",minHeight:"5em", width:"30%", color:"#ffffff"},
		dt:{fontWeight:"700",color:"#ffffff"},
		dl:{fontWeight:"500"}
	}
//console.log("Products list in viewcart "+products);
 
	return(
		<div>
			{products.length===0 ?
			<h2 style={styles.h2}>There are no items in the Cart list that can be shown.</h2>
			:
			<>
			{products.map(product=>{
				return <div style={styles.div}>
				  <dl style={styles.dl} key={product.id}>
                     <dt style={styles.dt}>Product id: {product.id}</dt>
					 <dd>Title: {product.title}</dd>
					 <dd>Price: {product.price}</dd>
				  </dl>
				</div>
				
			})}
			</>
			
		}

		</div>
	)	
}	 	  	  		    	   	 	   	 	
export default ViewCart;

import React, { Component } from "react";
import ReactDOM from 'react-dom';
import productList from "../products.json";
import { useState } from "react";
import { Route,Routes,Link, Router, BrowserRouter} from 'react-router-dom';
import ViewCart from "./ViewCart.js";
import Service from "../Service/Service.js";
//import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
const styles={
    h1:{
    color:'#b22222',textAlign:'center'
    },
    label:{
      color:"#D0F0C0",
      fontWeight:"600"
    },
    div: {
      marginLeft:"100px",
      backgroundColor:"#00563B",
      maxHeight:"8em", 
      width:"27%",
      color:"#DADD98"
    },
    dt:{
      backgroundColor:"#D1C1F8",
      fontWeight:"700",
      color:"#000000"
    },
    p:{
      fontWeight:"700", 
      color:"#FFA07A"
      },
      button:{marginLeft:'77.50%'}
    }
class DisplayProducts extends Component{
    cartHandler=(index)=> {
        console.log("%%%%%%%%%%%"+index);
         Service.addToCart(index);
     }	 	  	  		    	   	 	   	 	

    render(){    
    return(
        
		<div>
            {productList.products.map(function(product, index) {
                return(
                    <div key={product.id} style={styles.div}>
		 				  <dl style={{fontWeight:"500"}}>
                  <dt style={styles.dt}>Product id:{product.id}</dt>
		 				        <dd><label style={styles.label}>Title:</label> {product.title}</dd>
		 				        <dd><label style={styles.label}>Price:</label> ${product.price}</dd>
		 				        <dd><label style={styles.label}>Available Size:</label>{product.availableSizes.map(
		 				           	(size)=>{ return(<td>{size}&nbsp;</td>)}
	    				           )} 
                    </dd>
                    <dd><button onClick={this.cartHandler.bind(this,index)} style={styles.button}>Add To Cart</button>
                    </dd>
		 				  </dl>
                              
		 			  </div>
                )
            },this
          )
        }
          <p style={styles.p}>
**Products cannot be returned nor exchanged once purchased.
</p>
 </div>
    )
 }
}
export default DisplayProducts  
           {/* <Link to={'/viewCart/'+this.state.cartList}>View Cart</Link> */}
           {/* <Link to="/viewCart">View Cart</Link>  
           <>  {	 	  	  		    	   	 	   	 	
         this.state.cartList.length!==0 ? <Link to="/viewCart" state={{products:this.state.cartList}}>View Cart</Link> : <h5>There is no items in the cart</h5>
        }
        </>
        */}
          {/* <BrowserRouter>
               <Routes>
                  <Route path="/viewCart" element={<ViewCart/>}></Route>
                 </Routes>
                 <Link to="/viewCart" state={{products:this.state.cartList}}> View Cart </Link> 
       </BrowserRouter> */}
       
           {/* <Link to="/viewCart" state={{products:this.state.cartList}}> View Cart </Link>  */}
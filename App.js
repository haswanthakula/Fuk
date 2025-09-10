//import { editableInputTypes } from '@testing-library/user-event/dist/utils/index.js';
import React,{Component} from 'react';
import { BrowserRouter as Router, Route,Link,Routes} from 'react-router-dom';
//ADD THE REQUIRED IMPORT STATEMENT
import DisplayProducts from './Components/DisplayProducts.js';
import ViewCart from './Components/ViewCart.js';
const styles={
  div:{backgroundImage: "linear-gradient(to bottom, #0052b0, #520f41)",minHeight:"950px"},
  h1:{textAlign:"center", color:"#ffffff", backgroundColor:"#293241",minHeight:"2em",paddingTop:"0.5em"},
  nav:{borderBottom: "groove 0.5em",borderTop: "groove 0.5em",paddingBottom: "1rem", fontWeight:"bolder",backgroundColor:"#B3C7D6FF"},
  link1:{fontSize:"1.3em",marginLeft:"1.25%"},
  link2:{fontSize:"1.3em"}
}
class App extends Component {
//IMPLEMENT YOUR CODE HERE

    render(){
            return(
              <div style={styles.div}>
           
   
               <div>
               <h1 style={styles.h1}>Super Nova Fashion Clothings</h1>
               <nav style={styles.nav}> 
                 <Link style={styles.link1} activeStyle={{ color: 'red' }} to="/displayProducts"> Display Products</Link> {" "}|{" "}
                 <Link style={styles.link2} activeStyle={{ color: 'red' }} to="/viewCart"> View Cart</Link>           
                 </nav>  
                 
               <Routes> 
                  <Route  path='/displayProducts' element={<DisplayProducts/>}></Route> 
                  <Route  path='/viewCart' element={<ViewCart/>}></Route>
               </Routes> 
              </div>          
   
             </div> 
            )
            
       
       
    }	 	  	  	 			     	    	 	
}


export default App;
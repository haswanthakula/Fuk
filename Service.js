



// DO NOT CHANGE THE IMPORT STATEMENTS
import React, { Component } from "react";
import productList from "../products.json";
import { useState } from "react";
import { Route,Routes,Link, Router, BrowserRouter} from 'react-router-dom';
import DisplayProducts from "../Components/DisplayProducts";

const styles={

    h1:{
    color:'#b22222',textAlign:'center'
    },
    h2:{
        color:'#b22222'   
    },
    p:{
    fontSize:'large',
    color:'#dc143c'
    },
    div:{
        backgroundColor:'#ffe4c4',
        borderStyle:'dotted',
        color:'#4c684c'
    }
    }
    var cartList=[];

function addToCart(index){
    // Implement your code here
    cartList.push(productList.products[index]);
    alert("Product has been added to your cart");
 }
 
 function viewCart(){	 	  	  	 			     	    	 	
    // Implement your code here
     return cartList;
 }

export default {viewCart,addToCart,cartList}


import React ,{useState,useEffect}from 'react'

export default function Resturent() {
    let[products,setProducts]=useState([])
    const getProducts=async()=>{
        let response=await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
        let data=await response.json();
        setProducts(data.recipes);
    }
    let[menu,setMenu]=useState([])
    const getMenu=async()=>{
        let response=await fetch("https://forkify-api.herokuapp.com/api/search?q=salad");
        let data=await response.json();
        setMenu(data.recipes);
    }
    let[onion,setOnion]=useState([])
    const getOnion=async()=>{
        let response=await fetch("https://forkify-api.herokuapp.com/api/search?q=onion");
        let data=await response.json();
        setOnion(data.recipes);
    }
   useEffect( ()=>{
    getProducts();
    getMenu();
    getOnion();
   },[]

   )
    
  
   return(
    <>
    <div className='row py-3'>
    <h3>Menu Of Pizza</h3>
    {products.map((ele)=>{
        return(
            <div className='col-md-4' key={ele.id}>
                <h2>{ele.title}</h2>
                <img src={ele.image_url} className='w-100'/>
            </div>
        )
    })}
    
</div>
<div className='row py-5'>
<h3>Menu Of Salad</h3>
    {menu.map((ele)=>{
        return(
            <div className='col-md-4' key={ele.id}>
                <h2>{ele.title}</h2>
                <img src={ele.image_url} className='w-100'/>
            </div>
        )
    })}
    
</div>
<div className='row py-5'>
<h3>Menu Of Onion</h3>
    {onion.map((ele)=>{
        return(
            <div className='col-md-4' key={ele.id}>
                <h2>{ele.title}</h2>
                <img src={ele.image_url} className='w-100'/>
            </div>
        )
    })}
    
</div>
</>
   )

}

import React from 'react';
import { useState } from 'react';
import learn from '/src/assets/learn.jpg'
import './App.css'

//FIRST CODE A BUTTON

function MyButton(){
  return(
    <button>i am a button</button>
  );
}

// ADDED MY FIRST COMPONENT WITH AN IMAGE
function AboutPage (){
  return (
    <>

    <img src={learn} className="logo" alt="Vite logo" />
    <h1>ABOUTS PAGE</h1>
    <p>guys this is my first react app and am enjoying this</p>

    </>
  );
}


// CREATED THE DEFAULT COMPONENT
export default function App(){
  return(
  <div>
    <h1>WELCOME TO MY APP</h1>
    <MyButton/>
    <AboutPage/>
    <DisplayingData/>
    <Rendering/>
    <ListsRendering/>
    <Events/>
    <UsingStates/>
    <UsingStates/>
  </div>
  );
}


// FEEDING INPUTS AND DISPLAYING THE DATA
function DisplayingData(){
  const user = {name :'CODEKARTEL'};
  return(<h2 className='myname'>{user.name}</h2>
  );
}
//USING CONDITIONS AND RENDERING IN REACT
function Rendering(){
let temperature;
const temp = 10;
if (temp>=30) {
  temperature =  'ITS TOO HOT'
}
else {
  temperature =  'ITS TOO COLD'
}
return ( <div>
  {temperature}
</div>
);
}

//RENDERING LISTS

function ListsRendering(){
  const products = [
    {title : 'cabbage',id:1},
    {title :'garlic',id:2},
    {title : 'Apple',id:3}
  ];
  const listitems = products.map(product=>
       <li key={product.id}>
                  {product.title}
       </li>);
    return(
    <ol>{listitems}</ol>
    );
}


//RESPONDING TO EVENTS

function Events(){
  function handleClick(){
    alert('you clicked me');}
    return(<button onClick={handleClick}>CLICK ME TO SEE HANDLING EVENTS</button>);
  }




// USINGS STATES TO UPDATE SCREEN
function UsingStates(){
  const [initialCount,setCount]=useState(0);
  function handleClick(){
    setCount(initialCount +1);
  }
  return (<button onClick={handleClick}>YOU HAVE CLICKED ME THIS {initialCount} TIMES </button>
  );
}



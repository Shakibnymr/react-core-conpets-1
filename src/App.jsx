import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singer from "./Singer";
import BookStore from "./BookStore"

function App() {
const actors = [' sakib khan', ' raj', ' messi', ' neymar'];

const singers = [
  {id:1, name: 'Dr. mahfuzur rahman', age: 74},
  {id:2, name: 'hero', age: 24},

  {id:3, name: 'pritam', age: 34},
  {id:4, name: 'rofiq', age: 31}
] 

const books = [
  {id: 1, name: 'physics', price: 100},
  {id: 1, name: 'math', price: 110},
  {id: 1, name: 'chemistry', price: 200},
  {id: 1, name: 'english', price: 90},
]

return (
   <>     <h1>Vite + React</h1>

<BookStore books={books}></BookStore>

{/* {
  books.map(book => )
} */}

     {   singers.map(singer => <Singer singer={singer}></Singer>)
      }

      <Actor name={"Bappa Raz"}></Actor>
{
  actors.map(actor => <Actor name={actor}></Actor>)
}


      {/* <Todo task="learn react" isDone={true}></Todo>
      <Todo task="explore core concepts" isDone={false}></Todo>
      <Todo task="try JSX" isDone={true}></Todo> */}
      {/* <Device name="Laptop" price="55"></Device>
<Device name= "mobile" price="15"></Device>
<Device name= "watch" price="5"></Device>

      <Person></Person>
 
      <Student grade="7" score="77"></Student>
      <Student grade="9" score="87"></Student>
      <Student grade="8" ></Student>
      <Developer></Developer> */}
    </>
  );
}

function Device(props) {
  console.log(props);
  return (
    <h2>
      This device: {props.name} price: {props.price}
    </h2>
  );
}

function Person() {
  const age = 24;
  const money = 20;
  const person = { name: "skb", age: 12 };
  return (
    <h3>
      I am a {person.name} and my age is {age + money}
    </h3>
  );
}

const { grade, score } = { grade: "7", score: "77" };
function Student({ grade, score = 0 }) {
  console.log(grade, score);
  return (
    <div className="student">
      <h3>This is a student</h3>
      <p>Grade: {grade}</p>
      <p>Score: {score}</p>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid purple",
    borderRadius: "10px",
  };
  return (
    <div style={developerStyle}>
      <h5>Devo devo</h5>
      <p>Coding: </p>
    </div>
  );
}

export default App;

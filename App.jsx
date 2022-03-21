import React, { useRef, useState } from "react";
import UserCard from "./Components/UserCard";
import "./App.css";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";


 const App = () => {
  const [input, setInput] = useState("");
  const inputVal = useRef();

  // Search Handler
  const searchHandler = (e) => {
    e.preventDefault();
    const searchVal = inputVal.current.value;
    setInput(searchVal);

    // setInput("")
    document.getElementById("inputId").value = ""
  };

  return (
    <>
    

      <Header />
      <div className="main">
      <form onSubmit={searchHandler} className="searchBox">
        <input
          id="inputId"
          type="search"
          placeholder="Enter Username"
          ref={inputVal}
        />
      </form>
     

      <UserCard 
      input={input} 
      />

    </div>
    

    <Footer />
    </>
  );
}

export default App;



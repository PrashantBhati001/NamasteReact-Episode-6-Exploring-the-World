import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { render } from "react-dom";


const AppLayout=()=>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )  
}

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)


//Monolith
// In monolith architecture,all the services are available in a single Project.

//Microservices
// In microservices ,there are different services for different purpose and these services independently could be written in different 
// languages.


// Usually there are two approaches on how we can render the UI:
// 1.LOAD--->API-->RENDER
// Here when the page loads we are making an api call and once all the data is available we are rendering it on UI.

// 2.LOAD--->RENDER--->API--->RERENDER
// Here in the second approach when the page is loaded we render what we have and then once the data ia available from api 
// we again rerender the UI with that data.

// The problem with the first approach is that the UI will be blank for the time the data is not fetched which looks weired.So in react we use the 
// second approach








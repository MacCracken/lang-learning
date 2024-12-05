//import React from 'react';
import ReactDOM from 'react-dom/client';
import UserSearch from './classes/UserSearch';

const users = [
  {name: 'Sarah', age: 20},
  {name: 'Alex', age: 20},
  {name: 'Michael', age: 20}
]
// 2) Get a reference to the div with ID root
const el = document.getElementById("root");
  
// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el!);
  
// 4) Create a component
const App = () => {
  return (
    <div>
      <UserSearch users={users}/>
    </div>
  );
};
  
// 5) Show the component on the screen
root.render(<App />);

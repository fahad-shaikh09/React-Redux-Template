import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment} from "./actions";
import {decrement} from "./actions";
import {login} from "./actions";
import {logout} from "./actions";


function App() {
  const counter = useSelector(state => state.counterReducer);
  const isLogged = useSelector(state => state.isLoggedReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>App Component</h1>

      <h2>Login Status: {isLogged ? "Logged In" : "Logged Out"} </h2>
      <button onClick={() => dispatch(login())} >{isLogged ? "Logout" : "Login"}</button>

      <h2>Counter: {counter} </h2>
      <button onClick={() => dispatch(increment())} > Increment</button>
      <button onClick={() => dispatch(decrement())} > Decrement</button>


    </div>
  );
}

export default App;

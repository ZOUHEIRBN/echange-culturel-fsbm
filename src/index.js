import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
} from "react-router-dom";
import Acceuil from './pages/Acceuil';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import FsbmEnChiffre from './pages/FsbmEnChiffre';
import EventList from './pages/EventList';
import MasterMaroc from './pages/MasterMaroc';

export default function getRoutes() {
  return createBrowserRouter([
    {
      path: "login",
      element: <Login/>,
    },
    {
      path: "SignUp",
      element: <SignUp/>,
    },
    {
      path: "/",
      element: <Acceuil/>,
    },
    {
      path: "FsbmEnChiffre",
      element: <FsbmEnChiffre/>,
    },
    {
      path: "EventList",
      element: <EventList/>,
    },
   
    {
      path: "MasterMaroc",
      element: <MasterMaroc/>,
     },
    // {
    //   path: "établissements-uh2c",
    //   element: <établissements_uh2c/>,
    // },
  ]);
  
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

// react-router
import { BrowserRouter as Router, Route, Switch ,Routes, Outlet } from 'react-router-dom';
// import { BrowserRouter , Route ,Router, Switch } from 'react-router-dom/esm/react-router-dom';

// tost
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import './App.css';


//firebase
// import firebase from "firebase/app";
// import "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Component
import Home from './pages/Home';
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import PageNotFound from './pages/PageNotFound'
import { UserContext } from './context/UserContext';
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import firebaseConfig from './config/firebaseConfig';

// init firebasee
firebase.initializeApp(firebaseConfig)

const App=()=> {
  const [user , setUser] = useState(null)


  return (
    
    <Router>
    <ToastContainer />
    <UserContext.Provider value={{ user, setUser }}>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/" element={() => <div>Welcome to the home page</div>} />
        <Route exact path="/signin" element={<Signin/>} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="*" element={<PageNotFound/>} />
      </Routes>
    <Footer/>
    </UserContext.Provider>
  </Router>
  );
}

export default App;

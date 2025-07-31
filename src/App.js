import React from 'react';
import logo from './assets/logo.jpg';
import Booking from './booking';
import About from './about';
import LoginForm from './components/LoginForm.jsx';
import AdminLogin from './components/AdminLogin.jsx';
import Gallery from './Gallery';
import Members from './Members';
import Events from './Events';
import Merch from './Merch';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';


function App() {
    return ( <
        Router >
        <
        Navbar / >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/about"
        element = { < About / > }
        /> <
        Route path = "/events"
        element = { < Events / > }
        /> <
        Route path = "/gallery"
        element = { < Gallery / > }
        /> <
        Route path = "/members"
        element = { < Members / > }
        /> <
        Route path = "/merch"
        element = { < Merch / > }
        />  <
        Route path = "/booking"
        element = { < Booking / > }
        /><
        Route path = "/contact"
        element = { < Contact / > }
        />  <
        Route path = "/AdminLogin"
        element = { < AdminLogin / > }
        /><
        Route path = "/loginForm"
        element = { < LoginForm / > }
        /> < /
        Routes > <
        Footer / >
        <
        /Router>
    );
}

function Navbar() {
    return ( <
        nav className = "navbar" >
        <
        div className = "logo" > < Link to = "/" > A Musical Club of Metropolitan University < /Link></div >
        <
        ul >
        <
        li > < Link to = "/" > Home < /Link></li >
        <
        li > < Link to = "/about" > About < /Link></li >
        <
        li > < Link to = "/events" > Events < /Link></li >
        <
        li > < Link to = "/gallery" > Gallery < /Link></li >
        <
        li > < Link to = "/members" > Members < /Link></li >
        <
        li > < Link to = "/merch" > Merch < /Link></li >
        <
        li > < Link to = "/booking" > Booking < /Link></li >
        <
        li > < Link to = "/contact" > Contact < /Link></li >
        <
        li > < Link to = "/login"
        className = "login-btn" > Login < /Link></li >
        <
        /ul> < /
        nav >
    );
}


function Home() {
    return ( <
        >
        <
        section className = "hero" >
        <
        div className = "hero-content" >
        <
        img src = { logo }
        alt = "Alpha Community Logo"
        className = "hero-logo" / >
        <
        h1 > Welcome to Alpha Community < /h1> <
        p > Where Music Comes Alive < /p> <
        div className = "hero-buttons" >
        <
        button > Explore Events < /button> <
        button > Official Marchentise < /button> < /
        div > <
        /div> < /
        section >

        <
        section className = "section about" >
        <
        h2 > About Our Club < /h2> <
        p > A vibrant Musical collective at Metropolitan University in Sylhet, dedicated to welfare, collaboration, musical mastery, cultural richness, and social depth into an unstoppable force. < /p> < /
        section >

        <
        section className = "section events" >
        <
        h2 > Upcoming Events < /h2> <
        ul >
        <
        li > Blust Night With Alpha Community < /li> <
        li > Winter Carnival < /li> < /
        ul > <
        /section>

        <
        section className = "section merch-preview" >
        <
        h2 > Our Merchandise < /h2> <
        p > We offer exclusive Alpha Community T - shirts, Hoodies & Caps.Order yours from our Merch section! < /p> < /
        section > <
        />
    );
}



// function Events() { return <div className = "page-content" > < h2 > Events Page < /h2></div > ; }

{ /* function Gallery() { return <div className = "page-content" > < h2 > Gallery Page < /h2></div > ; } */ }

{ /* function Members() { return <div className = "page-content" > < h2 > Members Page < /h2></div > ; } */ }

// function Merch() { return <div className = "page-content" > < h2 > Merch Page < /h2></div > ; }

function Contact() { return <div className = "page-content" > < h2 > Contact Page < /h2></div > ; }

function Footer() {
    return ( <
        footer className = "footer" >
        <
        p > ©2025 Alpha Community | All Rights Reserved < /p> < /
        footer >
    );
}
export default App;
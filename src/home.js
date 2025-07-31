import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.jpg';
import banner from './assets/banner.jpg';

function Home() {
    return ( <
        div className = "hero-section" >
        <
        div className = "hero-top" >
        <
        img src = { logo }
        alt = "Alpha Community Logo"
        className = "hero-logo" / >
        <
        h1 > Welcome to Alpha Community < /h1> < /
        div >

        <
        div className = "hero-content" >
        <
        div className = "hero-links" >
        <
        Link to = "/events" > < button > Explore Events < /button></Link >
        <
        Link to = "/merch" > < button > Shop Merch < /button></Link >
        <
        Link to = "/about"
        className = "about-link" > About Our Club < /Link> < /
        div >

        <
        div className = "upcoming-banner" >
        <
        Link to = "/events" >
        <
        img src = { banner }
        alt = "Upcoming Event Banner" / >
        <
        /Link> < /
        div >

        <
        footer className = "footer" >
        <
        p > Follow us on: < /p> <
        a href = "https://www.facebook.com/share/16gqLbFWBb/"
        target = "_blank"
        rel = "noopener noreferrer" > Facebook < /a> | <
        a href = "https://www.instagram.com/alpha_community.mu"
        target = "_blank"
        rel = "noopener noreferrer" > Instagram < /a> | <
        a href = "mailto:alphacommunitymu@gmail.com" > Email < /a> | <
        a href = "tel:01703281708" > Contact: 01703 - 281708 < /a> | <
        a href = "https://www.google.com/maps/dir//Sylhet+Metropolitan+University,+Pirer+bazar,+Sylhet+-+Tamabil+Hwy,+Bateshwar/@24.9301381,91.9704423,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3750552bc71c899d:0x804e438bcc32b390!2m2!1d91.9730172!2d24.9301381?entry=ttu"
        target = "_blank"
        rel = "noopener noreferrer" > Location < /a> < /
        footer > <
        /div> < /
        div >
    );
}

export default Home;
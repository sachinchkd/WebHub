import React from "react"
import LogInNavbar from "../components/login_navbar"
import Header from "../components/header"
import Videocontainer from "../components/video"
import Container from "../components/container"
import Second from "../components/secondcontainer"
import LogInFooter from "../components/login_footer"


export const Home = () => {
    return(
        <div className="home">
             <LogInNavbar/>
             <Header/>
             <Videocontainer/>
             <Container/>
             <Second/>
             <LogInFooter/>
        </div>
    )
}
import React from "react"
import Navbar from "../components/navbar"
import Header from "../components/header"
import Videocontainer from "../components/video"
import Container from "../components/container"
import Second from "../components/secondcontainer"
import Footer from "../components/footer"


export const _home = () => {
    return(
        <div className="home">
             <Navbar/>
             <Header/>
             <Videocontainer/>
             <Container/>
             <Second/>
             <Footer/>
        </div>
    )
}
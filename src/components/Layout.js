import React, { Component } from "react";
import NavBar from "./NavBar";

class Layout extends Component{
    render(){
        return(
           <React.Fragment>
               <NavBar/>
               {this.props.children}
           </React.Fragment>
        );
    }
}

export default Layout;
import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import "../navBar/Navbar.css";
import MessagePopUp from "../messagePopUp/MessagePopUp";

function Navbar(probs) {
  
 const HandleShowHideBook = (e) => {
   probs.showHideBook();
 };
 const HandleshowHideUserRole = () => {
   probs.showHideUserRole();
 };

 const Handleclick = (e) => {
   console.log(e.target.name);
 };
 return (
   <div className="navbar-custom">
     <Nav
       className="bg-dark p-1"
       activeKey="/home"
       onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
     >
       <Nav.Item>
         <Nav.Link
           name="user"
           onClick={(e) => {
             Handleclick(e);
           }}
         >
           Hi, {probs.appUser}
         </Nav.Link>
       </Nav.Item>
       <Nav.Item>
         <Nav.Link
           name="home"
           onClick={(e) => {
             "";
           }}
           href="/home"
         >
           Home
         </Nav.Link>
       </Nav.Item>
       <Nav.Item>
         <Nav.Link
           name="books "
           onClick={(e) => {
             HandleShowHideBook(e);
           }}
         >
           Books
         </Nav.Link>
       </Nav.Item>
       {probs.appUser == "librarian" && (
         <>
           {" "}
           <Nav.Item>
             <Nav.Link
               name="userrols"
               onClick={(e) => {
                 HandleshowHideUserRole(e);
               }}
             >
               User Roles
             </Nav.Link>
           </Nav.Item>
         </>
       )}

       {probs.appUser == "member" && (
         <Nav.Item>
           <MessagePopUp />
         </Nav.Item>
       )}
     </Nav>
   </div>
 );
}

export default Navbar;

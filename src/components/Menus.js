import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
const Menus =()=>{
    return(
        <ListGroup>
        <Link className="list-group-item list-group-item-action" tag="a" to="/" action>Home</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/add-course" action>Add Courses</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/view-course" action>View Course</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/about-course" action>About</Link>
       
      </ListGroup>
    )
}
export default Menus;
import { useState } from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import BotonStyled from "./styled components/BotonStyled";
import "../index.css"

function CardProducto({ producto }) {



  return (
    <Card border="info" style={{ width: '18rem', fontFamily: "Goldman, Verdana, Tahoma, sans-serif" }} className="text-center w-20" bg="Light"
      text="dark">
      <Card.Header style={{ fontSize: "90%", height: "25%", padding: "20px 4px", backgroundColor: "#00365cff", color: "white" }}>{producto.name}</Card.Header>
      <Card.Body>
        <Card.Img src={producto.imagen} style={{ margin: "10px 0px" }} />
        <Card.Text style={{ fontSize: "clamp(0.55em, 1.8vw, 2em)", margin: "10px" }}>
          ${producto.price}
        </Card.Text>
        <Link to={"/productos/" + producto.id}><BotonStyled titulo="Ver descripción" /></Link>
      </Card.Body>
    </Card>
  )

}

export default CardProducto
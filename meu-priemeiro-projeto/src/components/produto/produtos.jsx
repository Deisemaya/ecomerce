import React from "react"
import "./produtos.css";

const Produtos = () => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
}
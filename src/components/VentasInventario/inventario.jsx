import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './assets/Header';
import Navbar from './assets/Navbar';

export default function Inventario() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://6194fc6d74c1bd00176c6aa4.mockapi.io/Products');
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <>
      <Header />
      <Navbar />


    </>
  )
}

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './assets/Header';
import Navbar from './assets/Navbar';

export default function Home() {
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
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-wrap pb-8 text-xl font-bold">Productos</h1>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src={product.image} alt={product.name} className="h-full w-full object-cover object-center group-hover:opacity-75" />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
        <nav class="flex justify-center">
          <ul class="inline-flex -space-x-px text-base h-10 my-6">
            <li>
              <Link to="#" class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">Previous</Link>
            </li>
            <li>
              <Link to="#" aria-current="page"  class="flex items-center justify-center px-4 h-10 leading-tight text-red-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">1</Link>
            </li>
            <li>
              <Link to="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">2</Link>
            </li>
            <li>
              <Link to="#" class="flex items-center justify-center px-4 h-10 text-gray-500 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700">3</Link>
            </li>
            <li>
              <Link to="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">4</Link>
            </li>
            <li>
              <Link to="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">5</Link>
            </li>
            <li>
              <Link to="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">Next</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
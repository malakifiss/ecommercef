'use client';
//page principale des produits 
import { useEffect, useState } from "react";
import CartButton from '../components/Card_Produit/CartButton';
import ProductCard from '../components/Card_Produit/ProductCard'; 
import Carousel from '../components/carousel/Carousel';
import NavigBare from '../components/NavigBare';

import styles from './module1.css'
import Link from 'next/link'; 
import { use } from 'react';
const mockProducts = [
  {
    id: "1",
    name: "Appareil Photo Canon EOS R5",
    price: 3899.99,
    image: "/images/camerasony.jpg",
    description: "Appareil photo mirrorless 45MP",
    category: "Photographie"
  },
  {
    id: "2",
    name: "MacBook Pro 16\" M2 Max",
    price: 3499.99,
    image: "/images/macbook.jpg",
    description: "16GB RAM • 1TB SSD • 32-core GPU",
    category: "Informatique"
  },
  {
    id: "3",
    name: "Casque Sony WH-1000XM5",
    price: 399.99,
    image: "/images/headphones.jpg",
    description: "Réduction de bruit active",
    category: "Audio"
  },
];

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(mockProducts);
  }, []);

  return (
    <div>
      <NavigBare/>
    <Carousel/>
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Nos Produits</h1>
        <CartButton />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (

<div key={product.id} className="cursor-pointer">
<ProductCard product={product} />
          </div>
          
        ))}
      </div>
    </div>
    </div>
  );
}

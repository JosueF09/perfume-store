"use client";
import React from 'react';
import { PRODUCTS } from '../../data/products';

export default function ProductPage() {
  const product = PRODUCTS.find(p => p.id === 'nuit-dor');
  if (!product) return <div>Producto no encontrado</div>;

  return (
    <div className="max-w-4xl mx-auto p-8 font-sans">
      <a href="/" className="text-sm text-slate-500 mb-8 block">← Volver al catálogo</a>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <img src={product.images[0]} alt={product.name} className="w-full rounded-lg" />
        <div>
          <h1 className="text-4xl font-serif mb-4">{product.name}</h1>
          <p className="text-2xl mb-6">${product.price}.00</p>
          <div className="bg-slate-50 p-4 mb-6">
            <h3 className="font-bold text-xs uppercase mb-2">Notas Olfativas</h3>
            <p className="text-sm">Salida: {product.notes.top} | Corazón: {product.notes.heart} | Fondo: {product.notes.base}</p>
          </div>
          <button 
  onClick={() => window.open(`https://wa.me/TU_NUMERO?text=Hola, me interesa el perfume ${product.name}`)}
  className="w-full bg-green-600 text-white py-4 rounded-full font-bold"
>
  Pedir por WhatsApp
	</button>
        </div>
      </div>
    </div>
  );
}
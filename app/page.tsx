"use client";
import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';

export default function HomePage() {
  const [filter, setFilter] = useState("Todos");
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} agregado al carrito`);
  };

  const total = cart.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-900 font-sans pb-20">
      {/* HEADER CON CARRITO */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <h1 className="text-2xl font-serif tracking-widest font-bold">AURA</h1>
          <div className="flex gap-4 items-center">
            <nav className="hidden md:flex gap-6 text-xs uppercase font-medium">
              <button onClick={() => setFilter("Todos")}>Inicio</button>
              <button onClick={() => setFilter("Masculino")}>Hombre</button>
              <button onClick={() => setFilter("Femenino")}>Mujer</button>
            </nav>
            <button onClick={() => setShowCheckout(true)} className="bg-black text-white px-4 py-2 rounded-full text-xs">
              Carrito ({cart.length})
            </button>
          </div>
        </div>
      </header>

      {/* CATÁLOGO */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {PRODUCTS.filter(p => filter === "Todos" || p.gender === filter).map((product) => (
            <div key={product.id} className="group border p-4 bg-white hover:shadow-xl transition">
              <img src={product.images[0]} className="w-full aspect-square object-cover mb-4" alt={product.name} />
              <h4 className="font-bold text-lg">{product.name}</h4>
              <p className="text-slate-500 text-sm mb-2">{product.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="font-serif text-xl">${product.price}.00</span>
                <button 
                  onClick={() => addToCart(product)}
                  className="bg-slate-900 text-white px-4 py-2 text-xs uppercase hover:bg-amber-700"
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* MODAL DE CHECKOUT (SIMULADO) */}
      {showCheckout && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full p-8 rounded-lg shadow-2xl">
            <h2 className="text-2xl font-serif mb-4">Tu Carrito</h2>
            <div className="max-h-60 overflow-y-auto mb-4">
              {cart.map((item, i) => (
                <div key={i} className="flex justify-between border-b py-2 text-sm">
                  <span>{item.name}</span>
                  <span>${item.price}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-4">
              <span>Total:</span>
              <span>${total}.00</span>
            </div>
            
            <div className="mt-6 space-y-4">
              <input type="text" placeholder="Nombre completo" className="w-full border p-2 rounded text-sm" />
              <input type="email" placeholder="Correo electrónico" className="w-full border p-2 rounded text-sm" />
              <button 
                onClick={() => { alert("¡Pedido confirmado! Gracias por tu compra."); setCart([]); setShowCheckout(false); }}
                className="w-full bg-green-600 text-white py-3 font-bold rounded hover:bg-green-700"
              >
                Finalizar Compra
              </button>
              <button onClick={() => setShowCheckout(false)} className="w-full text-slate-400 text-sm">Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
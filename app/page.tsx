"use client";
import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';

export default function PerfumeStore() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [step, setStep] = useState('catalog'); // catalog, checkout, success

  const addToCart = (product) => {
    setCart([...cart, { ...product, cartId: Math.random() }]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1a1a1a]">
      {/* NAVIGATION UI */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <h1 className="text-3xl font-serif tracking-[0.3em] font-light">AURA</h1>
          <button onClick={() => setIsCartOpen(true)} className="relative p-2">
            <span className="text-xs uppercase tracking-widest">Bolsa</span>
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* HERO UX (Mensaje de valor) */}
      <header className="pt-32 pb-20 px-6 text-center">
        <span className="text-[10px] uppercase tracking-[0.5em] text-gray-400 mb-4 block">Colección 2025</span>
        <h2 className="text-5xl md:text-7xl font-serif mb-6 italic">Esencias Exclusivas</h2>
        <p className="max-w-xl mx-auto text-gray-500 font-light leading-relaxed">
          Diseñamos fragancias que capturan momentos. Calidad artesanal para quienes buscan dejar una huella inolvidable.
        </p>
      </header>

      {/* PRODUCT GRID (UX de Selección) */}
      <main className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group">
              <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-6 relative">
                <img 
                  src={product.images[0]} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <button 
                  onClick={() => addToCart(product)}
                  className="absolute bottom-4 left-4 right-4 bg-white/90 py-3 text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Añadir a la bolsa
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-lg">{product.name}</h3>
                  <p className="text-gray-400 text-xs uppercase tracking-tighter">{product.gender}</p>
                </div>
                <span className="font-serif text-lg">${product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* CARRITO Y PROCESO DE COMPRA (UX Modal) */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl p-8 flex flex-col">
            <button onClick={() => setIsCartOpen(false)} className="text-left text-xs uppercase mb-12">Cerrar</button>
            
            {step === 'catalog' && (
              <>
                <h3 className="text-2xl font-serif mb-8">Tu Selección</h3>
                <div className="flex-1 overflow-y-auto space-y-6">
                  {cart.map((item) => (
                    <div key={item.cartId} className="flex gap-4 border-b border-gray-50 pb-4">
                      <img src={item.images[0]} className="w-20 h-24 object-cover" />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{item.name}</h4>
                        <p className="text-gray-400 text-xs">${item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-8 border-t border-gray-100">
                  <div className="flex justify-between mb-6 italic">
                    <span>Subtotal</span>
                    <span>${total}.00</span>
                  </div>
                  <button 
                    onClick={() => setStep('checkout')}
                    className="w-full bg-black text-white py-5 text-[10px] uppercase tracking-[0.2em] hover:bg-gray-800 transition"
                  >
                    Ir al pago
                  </button>
                </div>
              </>
            )}

            {step === 'checkout' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-serif mb-8">Datos de Envío</h3>
                <input type="text" placeholder="NOMBRE COMPLETO" className="w-full border-b py-3 text-xs focus:outline-none focus:border-black" />
                <input type="email" placeholder="EMAIL" className="w-full border-b py-3 text-xs focus:outline-none focus:border-black" />
                <input type="text" placeholder="DIRECCIÓN" className="w-full border-b py-3 text-xs focus:outline-none focus:border-black" />
                <button 
                  onClick={() => setStep('success')}
                  className="w-full bg-black text-white py-5 text-[10px] uppercase tracking-[0.2em]"
                >
                  Confirmar Pedido
                </button>
              </div>
            )}

            {step === 'success' && (
              <div className="text-center py-20">
                <h3 className="text-3xl font-serif mb-4">¡Gracias!</h3>
                <p className="text-gray-500 font-light mb-8">Tu pedido ha sido confirmado y está en preparación.</p>
                <button onClick={() => {setCart([]); setStep('catalog'); setIsCartOpen(false);}} className="text-[10px] uppercase underline">Volver a la tienda</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
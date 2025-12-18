"use client";
import React, { useState } from 'react';
// Importación corregida para tu estructura de carpetas
import { PRODUCTS } from '../data/products';

export default function HomePage() {
  const [filter, setFilter] = useState("Todos");
  const [search, setSearch] = useState("");

  const filteredProducts = PRODUCTS.filter(p => 
    (filter === "Todos" || p.gender === filter) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-900 font-sans">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <h1 className="text-2xl font-serif tracking-widest font-bold">AURA</h1>
          
          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-tighter font-medium">
            <button onClick={() => setFilter("Todos")} className="hover:text-amber-600 transition">Inicio</button>
            <button onClick={() => setFilter("Masculino")} className="hover:text-amber-600 transition">Masculino</button>
            <button onClick={() => setFilter("Femenino")} className="hover:text-amber-600 transition">Femenino</button>
          </nav>

          <div className="flex items-center gap-4">
            <input 
              type="text" 
              placeholder="Buscar..." 
              className="bg-slate-100 border-none rounded-full px-4 py-2 text-sm focus:ring-1 focus:ring-slate-400"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative h-[50vh] flex items-center justify-center bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1541643600914-78b084683601?q=80')] bg-cover bg-center"></div>
        <div className="relative z-10 text-center px-4">
          <h2 className="text-5xl font-serif mb-4">Esencias Exclusivas</h2>
          <p className="text-lg mb-8 font-light italic">Descubre tu aroma ideal</p>
        </div>
      </section>

      {/* CATÁLOGO / GRID */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex justify-between items-baseline mb-12 border-b pb-6">
          <h3 className="text-3xl font-serif italic">{filter}</h3>
          <p className="text-slate-500 text-sm">{filteredProducts.length} fragancias</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden bg-slate-200 mb-4 relative">
                <img 
                  src={product.images[0]} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">{product.brand}</p>
              <h4 className="text-lg font-medium mb-1">{product.name}</h4>
              <p className="font-serif text-lg">${product.price}.00</p>
              <button className="mt-4 w-full border border-slate-900 py-2 text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-white transition">
                Ver detalle
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER SIMPLE */}
      <footer className="bg-white border-t border-slate-200 py-10 text-center">
        <p className="text-slate-400 text-xs uppercase tracking-[0.2em]">© 2025 AURA Perfumería Estática</p>
      </footer>
    </div>
  );
}
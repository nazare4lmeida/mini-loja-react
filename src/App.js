import React, { useState } from 'react';
import { Button } from 'primereact/button';

import "primereact/resources/themes/lara-light-teal/theme.css"; 
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";

import Storefront from './views/Storefront';
import ProductForm from './components/ProductForm';

function App() {
  const [products, setProducts] = useState([]);
  const [view, setView] = useState('loja'); 

  const addProduct = (newProduct) => {
    setProducts([newProduct, ...products]);
    setView('loja'); 
  };

  return (
    <div className="bg-bluegray-50 min-h-screen">
      <header className="bg-teal-700 text-white p-4 shadow-3">
        <div className="max-w-custom mx-auto flex justify-content-between align-items-center" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {/* 💡 ALTERE AQUI: O nome da sua loja e o ícone (ex: pi-shopping-cart, pi-camera) */}
          <h1 className="m-0 text-xl md:text-2xl font-light tracking-wide cursor-pointer" onClick={() => setView('loja')}>
            <i className="pi pi-palette mr-2"></i> ARTES & CORES
          </h1>
          
          <Button 
            label={view === 'loja' ? "Cadastrar Novo Item" : "Voltar para Galeria"} 
            icon={view === 'loja' ? "pi pi-plus" : "pi pi-arrow-left"} 
            className="p-button-sm p-button-info"
            onClick={() => setView(view === 'loja' ? 'cadastro' : 'loja')}
          />
        </div>
      </header>

      <main className="p-4 md:p-6 mx-auto" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {view === 'loja' ? (
          <Storefront products={products} setProducts={setProducts} />
        ) : (
          <div className="fadein">
            <h2 className="text-teal-900 mb-4">Novo Item no Acervo</h2>
            <ProductForm onAddProduct={addProduct} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
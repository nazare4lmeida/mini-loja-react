import React, { useState } from 'react';

// --- IMPORTAÇÕES DE ESTILO (A "ROUPA" DO PROJETO) ---
// Trocamos para o tema 'indigo', que é elegante para artes
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";                  
import "primeicons/primeicons.css";                                
import "/node_modules/primeflex/primeflex.css";                   

import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

function App() {
  // Estado que guarda todos os nossos produtos de arte
  const [products, setProducts] = useState([]);

  // Função para adicionar um novo item (ex: uma nova aquarela) à lista
  const addProduct = (newProduct) => {
    // Pegamos o novo e espalhamos os antigos logo depois
    setProducts([newProduct, ...products]); 
  };

  return (
    <div className="bg-bluegray-50 min-h-screen p-3 md:p-5">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <header className="text-center mb-6">
          <h1 className="text-800 text-5xl font-bold mb-2">
            <i className="pi pi-palette text-primary mr-3" style={{ fontSize: '2.5rem' }}></i>
            Ateliê Aquarela
          </h1>
          <p className="text-600">Sua vitrine de materiais artísticos e obras originais</p>
        </header>
        
        {/* Componente para cadastrar novos itens */}
        <ProductForm onAddProduct={addProduct} />
        
        {/* Componente que exibe a galeria de produtos */}
        <ProductList products={products} setProducts={setProducts} />
      </div>
    </div>
  );
}

export default App;
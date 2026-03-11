import React from 'react';
import ProductList from './ProductList';

function HomePage({ products, onAddToCart, searchTerm }) {
  // Filter products based on searchTerm
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      {/* Show filtered count if searching */}
      {searchTerm && (
        <p>
          Found {filtered.length} product{filtered.length !== 1 ? 's' : ''} matching "{searchTerm}"
        </p>
      )}

      {/* Render ProductList with filtered products */}
      {filtered.length > 0 ? (
        <ProductList products={filtered} onAddToCart={onAddToCart} />
      ) : (
        // Show "No products found" if filtered.length === 0
        <p>No products found</p>
      )}
    </div>
  );
}

export default HomePage;
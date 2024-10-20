import React from 'react';
import Product from './Product';

const ProductList = () => {
  const products = [
    { productName: 'Product 1', price: 12.99, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-A6IfYt5se2o0c15Z7vOqt4vUdRg3OU-Pdw&s', description: 'This is the first product.' },
    { productName: 'Product 2', price: 17.99, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlndpwDalSNF8TzBG6T7kGv73l0IOReNJpKw&s', description: 'This is the second product.' },
    { productName: 'Product 3', price: 14.99, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpp7JZN_voM95GSpUBMWkJsAw4pPzrazJWOg&s', description: 'This is the third product.' },
    { productName: 'Product 4', price: 99.99, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReJbQ6aThyE0I87NeA3rdsrWfUveEnjxse-Q&s', description: 'This is the fourth product.' },
    { productName: 'Product 5', price: 59.99, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFPJIrZN6eAh1AgxYNd5T7Nce63UU7aPtg0A&s', description: 'This is the fifth product.' },
    { productName: 'Product 6', price: 79.99, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp92YxjhzlBwREbtN3Es-hetNZgEV8FaTOrg&s', description: 'This is the sixth product.' },

  ];

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <Product
          key={index}
          productName={product.productName}
          price={product.price}
          imageUrl={product.imageUrl}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default ProductList;
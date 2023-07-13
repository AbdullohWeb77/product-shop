import React, { useState, useEffect } from 'react';
import './All.scss';
import check from '../../assets/check.svg'
import Edit from '../../assets/edit.svg'
import Trash from '../../assets/trash.svg'
import axios from 'axios';
import { Link } from 'react-router-dom';


const All = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);
  const [editingProduct, setEditingProduct] = useState(null);
  const [name, setName] = useState('');
  const [madeIn, setMadeIn] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://64a6fca7096b3f0fcc80ef97.mockapi.io/products'
        );
        setProducts(response.data.slice(0, 50));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.madeIn.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://64a6fca7096b3f0fcc80ef97.mockapi.io/products/${id}`);
      const newProducts = products.filter((product) => product.id !== id);
      setProducts(newProducts);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = async (product) => {
    setEditingProduct(product);
    setName(product.name);
    setMadeIn(product.madeIn);
  };

  const handleSave = async (event) => {
    event.preventDefault();
    try {
      const updatedProduct = {
        ...editingProduct,
        name: name,
        madeIn: madeIn,
      };
      await axios.put(
        `https://64a6fca7096b3f0fcc80ef97.mockapi.io/products/${editingProduct.id}`,
        updatedProduct
      );
      const newProducts = products.map((product) =>
        product.id === editingProduct.id ? updatedProduct : product
      );
      setProducts(newProducts);
      setEditingProduct(null);
      setName('');
      setMadeIn('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => {
    setEditingProduct(null);
    setName('');
    setMadeIn('');
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="all">
      <div className="all-con">
        <div className="all-top">
          <h3>Все товары (5)</h3>
          <input
            type="text"
            placeholder="Поиск"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="line"></div>
        <div className="all-catalog">
          <h4><img src={check} alt="" />Наименование</h4>
          <h3>Артикул</h3>
          <h3>Бренд</h3>
          <h3>Цена</h3>
          <h3>сделано в</h3>
        </div>  
      <ul>
        {currentProducts.map((product) => (
          <li key={product.id}> 
            <h4><img src={check} alt="" />Товар</h4>
            <p>{product.code}</p>
            <h3>{product.name}</h3>
            <p>{product.price} so'm</p>
            <p>{product.madeIn}</p>
            <button onClick={() => handleEdit(product)}><img src={Edit}></img></button>
            <button onClick={() => handleDelete(product.id)}><img src={Trash}></img></button>
          </li>
        ))}
      </ul>
        <div className="all-bot">
          <div className="all-bot-left">
          <select>
            <option>10</option>
            <option>5</option>
          </select>
          </div>
          <div className="pagination">
            {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }).map(
            (item, index) => (
            <button key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
            )
            )}
          </div>
        </div>
        <div className="line fcd"></div>
        <Link to='/New'><button className='all-add'>+ Новый товар</button></Link>
      </div>
    </div>
  );
};

export default All;
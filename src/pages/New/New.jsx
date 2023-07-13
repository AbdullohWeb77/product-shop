import React, { useState , axios} from 'react';
import './New.scss';
import { Link } from 'react-router-dom';
import Photoadd from '../../assets/add-photo.svg'

const New = () => {
  const [product, setProduct] = useState({
    name: '',
    brand: '',
    article: '',
    country: '',
    description: '',
    weight: '',
    image: '',
    color: '',
    price: '',
    discountPrice: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setProduct((prevState) => ({
        ...prevState,
        image: reader.result
      }));
    };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('https://64a6fca7096b3f0fcc80ef97.mockapi.io/products', product);
      alert('Mahsulot qo\'shildi!');
      setProduct({
        name: '',
        brand: '',
        article: '',
        country: '',
        description: '',
        weight: '',
        image: '',
        color: '',
        price: '',
        discountPrice: ''
      });
    } catch (error) {
      console.error(error);
      alert('Xatolik yuz berdi, qaytadan urinib ko\'ring!');
    }
  };

  return (
    <div className="new">
        <form onSubmit={handleSubmit}>
          <div className="form-group1">
          <label htmlFor="name">Название *</label>
          <input
            type="text"
            name="name"
            id="name"
            value={product.name}
            onChange={handleInputChange}
            required
          />
          </div>
          <div className="form-group2-3">
            <div className="form-group2">
            <label htmlFor="brand">Brend:</label>
            <input
              type="text"
              name="brand"
              id="brand"
              value={product.brand}
              onChange={handleInputChange}
              required
            />
            </div>
            <div className="form-group3">
            <label htmlFor="article">Artikul:</label>
            <input
              type="text"
              name="article"
              id="article"
              value={product.article}
              onChange={handleInputChange}
              required
            />
            </div>
          </div>
          <div className="form-group4">
          <label htmlFor="country">Страна производства</label>
          <input
            type="text"
            name="country"
            id="country"
            value={product.country}
            onChange={handleInputChange}
            required
          />
          </div>
          <div className="form-group5">
          <label htmlFor="description">Описание *</label>
          <input
            name="description"
            id="description"
            rows="5"
            value={product.description}
            onChange={handleInputChange}
            required
          />
          </div>
          <div className="form-group6">
          <label htmlFor="weight">Вес с упаковкой, грамм</label>
          <input
            type="number"
            name="weight"
            id="weight"
            value={product.weight}
            onChange={handleInputChange}
            required
          />
          </div>
          <div className="form-group7">
          <label htmlFor="image">Фотографии *</label>
          <input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            onChange={handleImageUpload}
            required
            placeholder={Photoadd}
          />
          <p>Загрузите не более 20 фотографий</p>
          </div>
          <div className="form-group8">
          <select name="color" id="color" value={product.color}       onChange={handleInputChange} required>
            <option value="">Выберите цвет</option>
            <option value="qora">Qora</option>
            <option value="oq">Oq</option>
            <option value="qizil">Qizil</option>
            <option value="yashil">Yashil</option>
            <option value="ko'k">Ko'k</option>
          </select>
          </div>
          <div className="form-group9-10">
            <div className="form-group">
            <label htmlFor="price">Narxi:</label>
            <input
              type="number"
              name="price"
              id="price"
              value={product.price}
              onChange={handleInputChange}
              required
            />
            </div>
            <div className="form-group">
              <label htmlFor="discountPrice">Chegirma narxi:</label>
              <input
              type="number"
              name="discountPrice"
              id="discountPrice"
              value={product.discountPrice}
              onChange={handleInputChange}
              required
              />
            </div>
          </div>
          <Link to='/all'>
            <button className='new-saqlash' type="submit">Saqlash</button>
          </Link>
        </form>
    </div>
  );
};

export default New;
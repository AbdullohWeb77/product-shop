import React from 'react';
import { Link } from 'react-router-dom';
import Shopimg from '../../assets/home-shop.svg';
import isLoggedIn from '../../auth';
import './Home.scss'

const Home = () => {
  const handleButtonClick = () => {
    if (isLoggedIn()) {
      window.location.href = '/new';
    } else {
      window.location.href = '/login';
    }
  };

  return (
    <div className='home'>
      <div className="home-con">
        <h3>Вы пока не создали ни одного товара</h3>
        <img src={Shopimg} alt="404" />
        <Link>
          <button className='home-btn' onClick={handleButtonClick}>Создать первый товар</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;  
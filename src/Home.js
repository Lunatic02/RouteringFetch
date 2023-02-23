import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ color }) => {
  return (
    <div>
      <h1>Home</h1>
      <p>Essa é a home</p>
      <Link to="produto/notebook-3">notebook-3</Link>{' '}
      <Link to="produto/tablet">tablet</Link>{' '}
      <Link to="produto/smartphone">smartphone</Link>{' '}
      <Link to="produto/smartwatch">smartwatch</Link>
    </div>
  );
};

export default Home;

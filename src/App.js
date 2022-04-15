import React from 'react';
import './App.css';
import Logo from './components/header';
import { Link, Route } from "wouter";
import SearchForm from './components/SearchForm';
import ListOfCharacters from './components/listOfCharacters';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <Logo />
        </Link>
        <SearchForm />
      </header>
      <ListOfCharacters />
    </div>
  );
}
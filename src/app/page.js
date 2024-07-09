"use client"
import React from 'react';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import MainContent from '@/components/MainContent/MainContent.jsx';

export default function Home() {
  return (
    <div>
      <Header />
        <title>Portafolio de [Gabriela]</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Merriweather:wght@400;700&display=swap" />
      <main>
        <MainContent/>
      </main>
      <Footer />
    </div>
  );
}
import { useState, useEffect } from 'react';
import Tokens from '../Views/Tokens';
import Container from './Container';

const basePath: string = "https://fantom.api.0x.org"

const Home = (): JSX.Element => {

  return (
    <>
      <Container />
      <Tokens />
    </>
  )
};

export default Home;

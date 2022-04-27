import React from "react";
import Banner from "../components/HomePage/Banner/Banner";
import Advantages from "../components/HomePage/Advantages/Advantages";
import Product from "../ui/Product";
import Container from "../ui/Container/Container";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Advantages />
      <Container width="1109">
        <Product />
      </Container>
    </>
  );
};

export default HomePage;

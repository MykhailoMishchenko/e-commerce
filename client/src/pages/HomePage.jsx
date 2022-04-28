import React from "react";

import Banners from "../components/HomePage/Banners/Banners";
import Advantages from "../components/HomePage/Advantages/Advantages";
import Products from "../components/HomePage/Products/Products";
import SecondBanners from "../components/HomePage/SecondBanners/SecondBanners";
import Blog from "../components/HomePage/Blog/Blog";
import {useGetFemaleProductsQuery, useGetMaleProductsQuery} from "../redux/Products/productsApi";

const HomePage = () => {

    const
        {
            data: femaleProducts = [],
            isLoading: isLoadingFemale,
            isError: isErrorFemale,
            error: errorFemale
        } = useGetFemaleProductsQuery();
    const {
        data: maleProducts = [],
        isLoading: isLoadingMale,
        isError: isErrorMale,
        error: errorMale
    } = useGetMaleProductsQuery();

    return (
        <>
            <Banners/>
            <Advantages/>
            <Products gender="female" products={femaleProducts} title="Для Жінок" to="/women"/>
            <Products gender="male" products={maleProducts} title="Для Чоловіків" to="/men"/>
            <SecondBanners/>
            <Blog/>
        </>
    );
};

export default HomePage;

import React from 'react';
import BaseTemplate from '../../templates/BaseTemplate';
import BannerCarousel from '../../components/UI/BannerCarousel';
import ProductList from '../../components/Products/ProductsList';
import ContentContainer from "../../templates/ContentContainer";
import CategoriesList from "../../components/Categories/CategoriesList";
import banner1 from '../../assets/banner-1.jpg';
import banner2 from '../../assets/banner-2.jpg';
import banner3 from '../../assets/banner-3.jpg';

const banners = [
    {
        imageUrl: banner1,
        altText: 'Banner 1',
    },
    {
        imageUrl: banner2,
        altText: 'Banner 2',
    },
    {
        imageUrl: banner3,
        altText: 'Banner 3',
    },
];

const HomePage = () => {
    return (
        <BaseTemplate
            className="home-page"
            showTopHeader={true}
            showCartHeader={false}
            showBottomHeader={true}
            showTopFooter={true}
            showMainFooter={true}
            showBottomFooter={true}
        >
            <ContentContainer>
                <BannerCarousel banners={banners} />
                <CategoriesList />
                <ProductList />
            </ContentContainer>
        </BaseTemplate>
    );
};

export default HomePage;

import React from 'react';
import BaseTemplate from '../../templates/BaseTemplate';
import ContentContainer from "../../templates/ContentContainer";
import CategoryProductsList from "../../components/Categories/CategoryProductsList";

const CategoryPage = () => {

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
                <CategoryProductsList />
            </ContentContainer>
        </BaseTemplate>
    );
};

export default CategoryPage;
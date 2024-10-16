import React, { useState } from 'react';
import BaseTemplate from '../../templates/BaseTemplate';
import ContentContainer from '../../templates/ContentContainer';
import ProfileSidebarMenu from '../../components/UserProfile/ProfileSidebarMenu';
import ProfileInfo from '../../components/UserProfile/ProfileInfo';
import ProfileOverview from '../../components/UserProfile/ProfileOverview';
// import OrderHistory from '../../components/UserProfile/OrderHistory'; // Компонент для отображения истории заказов
import FavProductsList from '../../components/Products/FavProductsList';
import PersonalData from '../../components/UserProfile/PersonalData';
import { styles } from './styles';

const ProfilePage = () => {
    const [activeComponent, setActiveComponent] = useState('overview'); // Состояние для активного компонента

    const userData = {
        initials: 'К',
        name: 'Крістіна Димитрова',
        bonuses: 0,
        orders: 2,
        comments: 0,
        favorites: 1,
        catalogLink: '/catalog',
        promotionsLink: '/promotions',
    };

    const user = { name: 'Крістіна Кузнецова', phone: '+38 (063) 000 - 00 - 00' };
    const lastDelivery = '17.03.2024';

    const renderActiveComponent = () => {
        switch (activeComponent) {
            case 'overview':
                return <ProfileOverview />;
            // case 'orderHistory':
            //     return <OrderHistory />;
            case 'favorites':
                return <FavProductsList />;
            case 'personalData':
                return <PersonalData user={user} lastDelivery={lastDelivery} />;
            default:
                return <ProfileOverview />;
        }
    };

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
                <ProfileInfo user={userData} />
                <div style={styles.profileContainer}>
                    <div style={styles.sidebar}>
                        <ProfileSidebarMenu setActiveComponent={setActiveComponent} />
                    </div>
                    <div style={styles.activeComponent}>
                        {renderActiveComponent()}
                    </div>
                </div>
            </ContentContainer>
        </BaseTemplate>
    );
};

export default ProfilePage;


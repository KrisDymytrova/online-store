import React from 'react';
import BaseTemplate from '../../templates/BaseTemplate';
import ContentContainer from '../../templates/ContentContainer';
import ProfileSidebarMenu from '../../components/UserProfile/ProfileSidebarMenu';

const ProfilePage = () => {

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
                <ProfileSidebarMenu />
            </ContentContainer>
        </BaseTemplate>
    );
};

export default ProfilePage;
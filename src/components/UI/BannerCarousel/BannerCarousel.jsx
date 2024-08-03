import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';
import { styles } from './styles';


const BannerCarousel = ({ banners }) => {
    return (
        <div style={styles.carouselContainer}>
            <Carousel
                controls={true}
                indicators={true}
                interval={5000}
                pause='hover'
            >
                {banners.map((banner, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={banner.imageUrl}
                            alt={banner.altText}
                            style={styles.carouselImage}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

BannerCarousel.propTypes = {
    banners: PropTypes.arrayOf(
        PropTypes.shape({
            imageUrl: PropTypes.string.isRequired,
            altText: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default BannerCarousel;

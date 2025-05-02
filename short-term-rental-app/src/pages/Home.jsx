import React from 'react';
import PropertyCard from '../components/PropertyCard';

const Home = () => {
    const properties = [
        {
            id: 1,
            name: 'Paradise on Queen',
            location: 'Toronto, ON',
            price: '$250/night',
            image: 'https://via.placeholder.com/150'
        }
    ];

    return (
        <div>
            <h1>Welcome to Paradise Luxe Homes</h1>
            <p>Your perfect short-term rental awaits!</p>
            <div className="property-list">
                {properties.map(property => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>
        </div>
    );
};

export default Home;
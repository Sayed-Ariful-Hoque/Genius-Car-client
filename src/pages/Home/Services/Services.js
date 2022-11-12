import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-24'>
            <div className='text-center mb-20'>
                <p className='text-2xl font-bold text-orange-600'>Service</p>
                <div className="h2 text-5xl font-semibold mb-2">Our Service Area</div>
                <p className='text-2xl w-4/5 m-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='text-center my-10'>
                <button className="btn btn-outline btn-primary font-semibold ">More Services</button>
            </div>
        </div>
    );
};

export default Services;
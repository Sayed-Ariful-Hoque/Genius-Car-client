import React from 'react';
import './BannerItems.css'

const BannerItems = ({slide}) => {

   const {image, id, prev, next} = slide;


    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={image} alt=""  className="w-full rounded-lg" />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                    <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-1/4 mt-28">
                    <h1 className='text-6xl font-bold text-white'>
                        Affordable <br />
                        Price for car <br />
                        servicing
                    </h1>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-1/2 w-1/2 mt-20">
                    <p className='text-3xl  text-white'>
                        There are many variations of passages of  available, but the majority have suffered alteration in some form
                    </p>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-1/2 mt-40 ">
                    <p className='text-3xl  text-white mt-20'>
                        <button className="btn btn-outline btn-primary mr-10">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Project</button>

                    </p>
                </div>
            </div>
    );
};

export default BannerItems;
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button'
import '../styles/GalleryStyles.css';

const Gallery = () => {
    return (
        <div className="GalleryTitle">
            <h2>Our top picks</h2>
            <div className="GalleryContainer">
                <div className="Arches GalleryImageContainer">
                    <p>Arches National Park</p>
                    <Link 
                        to={`/map/ARCH`} 
                        style={{ textDecoration: 'none', color: '#f4f4f4'}}>
                    <div className="HoverBackground">
                        <div className="HoverBackgroundText">
                            Learn More
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="GrandTeton GalleryImageContainer">
                    <p>Grand Teton National Park</p>
                    <Link 
                        to={`/map/GRTE`} 
                        style={{ textDecoration: 'none', color: '#f4f4f4'}}>
                    <div className="HoverBackground">
                        <div className="HoverBackgroundText">
                            Learn More
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="Zion GalleryImageContainer">
                    <p>Zion National Park</p>
                    <Link 
                        to={`/map/ZION`} 
                        style={{ textDecoration: 'none', color: '#f4f4f4'}}>
                    <div className="HoverBackground">
                        <div className="HoverBackgroundText">
                            Learn More
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="Acadia GalleryImageContainer">
                    <p>Acadia National Park</p>
                    <Link 
                        to={`/map/ACAD`} 
                        style={{ textDecoration: 'none', color: '#f4f4f4'}}>
                    <div className="HoverBackground">
                        <div className="HoverBackgroundText">
                            Learn More
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="Glacier GalleryImageContainer">
                    <p>Glacier National Park</p>
                    <Link 
                        to={`/map/GLBA`} 
                        style={{ textDecoration: 'none', color: '#f4f4f4'}}>
                    <div className="HoverBackground">
                        <div className="HoverBackgroundText">
                            Learn More
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="Yosemite GalleryImageContainer">
                    <p>Yosemite National Park</p>
                    <Link 
                        to={`/map/YOSE`} 
                        style={{ textDecoration: 'none', color: '#f4f4f4'}}>
                    <div className="HoverBackground">
                        <div className="HoverBackgroundText">
                            Learn More
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="Rocky GalleryImageContainer">
                    <p>Rocky Mountain National Park</p>
                    <Link 
                        to={`/map/ROMO`} 
                        style={{ textDecoration: 'none', color: '#f4f4f4'}}>
                    <div className="HoverBackground">
                        <div className="HoverBackgroundText">
                            Learn More
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="Yellowstone GalleryImageContainer">
                    <p>Yellowstone National Park</p>
                    <Link 
                        to={`/map/YELL`} 
                        style={{ textDecoration: 'none', color: '#f4f4f4'}}>
                    <div className="HoverBackground">
                        <div className="HoverBackgroundText">
                            Learn More
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="Capitol GalleryImageContainer">
                    <p>Capitol Reed National Park</p>
                    <Link 
                        to={`/map/CARE`} 
                        style={{ textDecoration: 'none', color: '#f4f4f4'}}>
                    <div className="HoverBackground">
                        <div className="HoverBackgroundText">
                            Learn More
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
            <div>
                <div className="ReviewText">
                    <h3 className="ReviewTitle">Share your experience!</h3>
                    <div className="ReviewContent">
                        The outdoors are a great way to enjoy time with family and loved ones.
                        Check out other people's experience to inspire your next adventure. 
                        Are you coming back from an adventure? We encourage you to drop an anonymous review to let others know how 
                        your trip went.
                    </div>
                    <Link to="/posts" style={{ textDecoration: 'none'}}>
                        <Button variant="contained" color="secondary" size="large">Review</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
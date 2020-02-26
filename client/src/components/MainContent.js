import React from 'react';
import "../styles/MainContentStyles.css";

const MainContent = () => {
    return (
        <div>
            <div className="MainContent">
                <h3>About</h3>
                <div className="MainContentText"> &nbsp; On August 25, 1916, President Woodrow Wilson signed the "Organic Act" 
                    creating the National Park Service, a federal bureau in the Department 
                    of the Interior responsible for maintaining national parks and monuments 
                    that were then managed by the department. The National Park System has since 
                    expanded to 419 units (often referred to as parks), more than 150 related 
                    areas, and numerous programs that assist in conserving the nation's natural 
                    and cultural heritage for the benefit of current and future generations
                </div>
            </div>
            <div className="twoParkContainer">
                <div className="yosemite">
                    <p>Explore one of the 62 U.S. national parks.</p>
                </div>
                <div className="rockBridge">
                    <p>Explore one of the many other recreational areas, monuments, and preservations.</p>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
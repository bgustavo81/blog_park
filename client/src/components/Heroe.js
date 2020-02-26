import React from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import "../styles/HeroeStyles.css"


const Heroe = () => {
    return (
        <div className='HeroeContainer'>       
                <div className='HeroeTextContainer'>
                    <h1 className="HeroeTitle">Explore the United States</h1>
                    <h3 className="HeroeText">With over hundreds of national parks
                        and recreation areas, adventure comes 
                        closer than you think.
                    </h3>
                <Link
                    to='/posts'
                    style={{ textDecoration: 'none' }}
                    className='HeroeLink'
                >
                    <Button
                        variant='contained'
                        color='secondary'
                        size="large"
                    >
                        Reviews
                    </Button>
                </Link>
                <Link 
                    to='/map'
                    style={{ textDecoration: 'none'}}
                    className='HeroeLink'
                >
                    <Button
                        variant='contained'
                        color='secondary'
                        size="large"
                    >
                        Explore
                    </Button>
                </Link>
                </div>
        </div>

    )
}

export default Heroe;
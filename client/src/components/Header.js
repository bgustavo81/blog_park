import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeaderStyles.css';


import IconButton from '@material-ui/core/IconButton';
import MapIcon from '@material-ui/icons/Map';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';

import GoogleAuth from './GoogleAuth';

const Header = () => {
      return (
      <div className='nav'>
            <IconButton edge="start">
              <Link to='/map' className='link icon'><MapIcon /></Link>
            </IconButton>
            <IconButton edge="start">
              <Link to='/posts' className='link icon'><RateReviewOutlinedIcon /></Link>
            </IconButton>
            <div className="link parkly">
              <Link to='/' className='link parkly'>Parkly</Link>              
            </div>
            <GoogleAuth />
      </div>
    );
  }




export default Header;


import React from 'react';
import {Link} from 'react-router-dom';

const PortfolioPage = () => (
    <div>
        <h1>My work</h1>
        <p>Checkout the stuff I've done</p>
        <br/>
        <Link to='/portfolio/1'>Item One</Link>
        <Link to='/portfolio/2'>Item two</Link>
    </div>
);

export default PortfolioPage;
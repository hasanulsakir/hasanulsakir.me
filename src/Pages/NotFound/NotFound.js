import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            This Page Not Found!
            <Link to="/"/>
        </div>
    );
};

export default NotFound;
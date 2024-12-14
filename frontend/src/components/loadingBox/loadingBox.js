import React from 'react';
import ReactLoading from 'react-loading';

const LoadingBox = ({ type, color }) => (
    <div className="container">
        <div className='row'>
            <div className="col">
                <div className='d-flex align-items-center justify-content-center height'>
                    <ReactLoading type={type} color={color} />
                </div>
            </div>
        </div>
    </div>
);

export default LoadingBox;
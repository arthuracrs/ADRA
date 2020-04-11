import React from 'react';

import './style.css'

import Loader from './assets/loader.svg'

export default function ShowDetail() {
    return (
        <div className="loading-container">
            <img src={Loader} alt="" className="loading" />
        </div>
    );
}
import React from 'react';

const PrimaryButton = ({ children }) => {
    return (

        <button class="btn btn-primary mt-3 text-white font-bold bg-gradient-to-r from-secondary to-primary">{children}</button>

    );
};

export default PrimaryButton;
import React from 'react';

const Button = ({children}) => {
    return (
        <div>
            <button class="btn btn-primary my-5">{children}</button>
        </div>
    );
};

export default Button;
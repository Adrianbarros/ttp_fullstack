import React from 'react';

function Stock({ name, value, qty }) {
    return (
        <div>
            {name}
            {value}
            {qty}
        </div>
    );
}

export default Stock;
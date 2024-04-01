import React from 'react';

const Total = (props) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Total:</h1>
            {/* Display the total number of cars */}
            <h1>{props.cars.length}</h1>
        </div>
    )
}

export default Total;

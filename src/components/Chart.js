import React from 'react'
import PieChart from 'react-minimal-pie-chart';

const Chart = (props) => {
    // create variable "over" with all the cars whose horsepower is >= 200
    // create variable "under" with all the cars whose horsepower is < 200
    const { cars } = props;

    const over = cars.filter(cars => cars.horsepower >= 200).length;
    const under = cars.filter(cars => cars.horsepower < 200).length;

    return (
        <div>
            <PieChart style={{ width: '200px' }}
                data={[
                    { title: 'Over', value: over, color: '#C13C37' },
                    { title: 'Under', value: under, color: '#E38627' },
                ]}
                label
                labelStyle={{
                    fill: 'white',
                    fontSize: 'small'
                }}
            />
            <Legend />
        </div>
    )
}

function Legend(props) {
    return (
        <h6>Horsepower: &nbsp;
            <span style={{background: '#C13C37'}}>
                &nbsp;
                &nbsp;
                &nbsp;
            </span>
            &nbsp;
            <span>{props.over}</span>
            &nbsp;
            <span style={{background: '#E38627'}}>
                &nbsp;
                &nbsp;
                &nbsp;
            </span>
            &nbsp;
            <span>{props.under}</span>
        </h6>
    )
}

export default Chart

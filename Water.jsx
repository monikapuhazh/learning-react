import React from 'react';

class Water extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            currentTemp: 211
        };
    }
    
    render() {
        var stateOfMatter;

        if(this.state.currentTemp <= 32) {
            stateOfMatter = 'Solid';
        } else if(this.state.currentTemp >= 212) {
            stateOfMatter = 'Gas';
        } else {
            stateOfMatter = 'Liquid';
        }

        return (
            <div>
                <p>At {this.state.currentTemp} degrees Farenheit, water is considered to be {stateOfMatter} state of matter</p>
            </div>
        )
    }
};

export default Water;
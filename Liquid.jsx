import React from 'react';

class Liquid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTemp: 60
        };
    }

    setTemperature(e) {
        this.setState({
            currentTemp: e.target.value
        });
    }
    
    render() {
        
        var stateOfMatter;

        if(this.state.currentTemp <= this.props.config.freezingPt) {
            stateOfMatter = 'Solid';
        } else if(this.state.currentTemp >= this.props.config.boilingPt) {
            stateOfMatter = 'Gas';
        } else {
            stateOfMatter = 'Liquid';
        }
        return (
            <div>
                <input type="text" onChange={this.setTemperature.bind(this)} value={this.state.currentTemp}/>
                <p>When {this.props.config.name} is at {this.state.currentTemp} degrees Farenheit, it is considered to be a {stateOfMatter} state of matter</p>
            </div>
        );
    }
}

export default Liquid;
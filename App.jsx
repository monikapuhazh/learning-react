import React from 'react';

class App extends React.Component {
    render() {
        var greetingTargetClass = 'greetingTargetContainer';
        var greetingTargets = ['Anna', 'Tyler', 'Joe'];
        var namesList = greetingTargets.map(function(name, index) {
            return (
                <li key={index}>{name}</li>
            );
        });
        return (
            <div className={greetingTargetClass}>Hello!
                <ul>
                    {namesList}
                </ul>
            </div>
        );
    }
}

export default App;
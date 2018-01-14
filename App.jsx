import React from 'react';

class App extends React.Component {
    render() {
        var greetingTargetClass = 'greetingTargetContainer';
        var greetingTarget = 'Gus';
        return (
            <div className={greetingTargetClass}>Hello {greetingTarget}!</div>
        );
    }
}

export default App;
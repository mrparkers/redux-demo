import React from 'react';

const renderDisplayedComponent = children => React.Children.map(children, child => React.cloneElement(child));

export default class App extends React.Component {
    render() {
        const {children} = this.props;

        return (
            <div className="app">
                {renderDisplayedComponent(children)}
            </div>
        );
    }
}
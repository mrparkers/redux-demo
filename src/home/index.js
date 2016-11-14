import React from 'react';

export default class Home extends React.Component {
    render() {
        return (
            <div className="ui container page">
                <h2>Redux Demo</h2>
                <p>
                    This application is meant to serve as a demo for simple applications using Redux and how they can
                    compare to applications that solely rely on React's state management.
                </p>
                <p>
                    You can any of the links above to navigate to each example.
                </p>
                <p>Here are some really helpful resources for picking up Redux:</p>
                <ul className="ui bulleted list">
                    <li className="item">
                        <a href="http://redux.js.org/" target="_blank">
                            Official Redux Documentation
                        </a>
                    </li>
                    <li className="item">
                        <a href="https://egghead.io/courses/getting-started-with-redux" target="_blank">
                            Dan Abramov's Redux Video Tutorials <i className="empty star icon" />
                        </a>
                    </li>
                    <li className="item">
                        <a href="https://www.youtube.com/watch?v=xsSnOQynTHs" target="_blank">
                            Dan Abramov's React Europe 2015 Tech Talk <i className="empty star icon" />
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

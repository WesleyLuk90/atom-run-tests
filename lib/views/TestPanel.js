'use babel';

import React from 'react';
import PropTypes from 'prop-types';
import TestList from '../TestList';

export default class TestPanel extends React.Component {
    render() {
        return (<div className="test-panel">
            {this.props.testList.getSuites().map(suite => <div>suite</div>)}
        </div>);
    }
}

TestPanel.propTypes = {
    testList: PropTypes.instanceOf(TestList).isRequired,
};

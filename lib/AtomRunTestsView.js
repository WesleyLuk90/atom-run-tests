'use babel';

import React from 'react';
import ReactDom from 'react-dom';
import TestPanel from './views/TestPanel';

export default class AtomRunTestsView {
    constructor(testList) {
        this.element = document.createElement('div');
        this.update(testList);
    }

    update(testList) {
        ReactDom.render(
            <TestPanel testList={testList} />, this.element);
    }

    destroy() {
        this.element.remove();
    }

    getElement() {
        return this.element;
    }

    getTitle() {
        return 'Tests';
    }
}

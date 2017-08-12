'use babel';

import React from 'react';
import ReactDom from 'react-dom';

export default class AtomRunTestsView {

    constructor(serializedState) {
        this.element = document.createElement('div');

        ReactDom.render(<div>hello</div>, this.element);
    }

    destroy() {
        this.element.remove();
    }

    getElement() {
        return this.element;
    }

    getTitle() {
        return 'hello world';
    }

}

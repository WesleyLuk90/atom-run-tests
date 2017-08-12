'use babel';

import AtomRunTestsView from './atom-run-tests-view';

class Model {}

export default {
    activate(state) {
        console.log('activate');
        // atom.views.addViewProvider(Model, (editor) => {
        //     console.log(editor);
        //     const ele = document.createElement('div');
        //     return ele;
        //     ele.innerText = 'hello world';
        // })
        atom.workspace.addOpener((uri) => {
            if (uri === 'atom-run-tests://main') {
                const ele = document.createElement('div');
                ele.innerText = 'hello world';
                return ele;
            }
        });
        atom.workspace.open("atom-run-tests://main");
    },

    deactivate() {},

    serialize() {}
};

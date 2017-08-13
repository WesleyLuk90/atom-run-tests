'use babel';

import AtomRunTestsView from './AtomRunTestsView';
import TestList from './TestList';

export default {
    activate() {
        atom.workspace.addOpener((uri) => {
            if (uri === 'atom-run-tests://main') {
                return new AtomRunTestsView(new TestList());
            }
            return null;
        });
        atom.workspace.open('atom-run-tests://main', {
            split: 'down',
            location: 'left',
        });
    },

    deactivate() {},

    serialize() {},
};

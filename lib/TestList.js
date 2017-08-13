'use babel';

export default class TestList {
    constructor() {
        this.testRuns = [];
    }

    getTestRuns() {
        return this.testRuns;
    }

    getSuites() {
        return ['a', 'b', 'c', 'd'];
    }
}

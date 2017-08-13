'use babel';

export default class TestRun {
    constructor(options) {
        Object.assign(this, { testSuites: [] }, options);
    }

    getTestSuites() {
        return this.testSuites;
    }
}

'use babel';

export default class TestCase {
    constructor(options) {
        Object.assign(this, { testSuites: [], testCases: [] }, options);
    }
}

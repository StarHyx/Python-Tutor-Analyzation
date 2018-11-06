const runFrontendTest = require('./frontend-golden-test').runFrontendTest;

// TODO: we can separate this out later into different subsets

// need to wrap in async to make it run serially
(async () => {
  for (e of [false, true]) { // iterate over disableHeapNesting options
    await runFrontendTest('py2', 'homepage.trace', {disableHeapNesting: e, startingInstruction: 14});
    await runFrontendTest('py2', 'linked-list-1.trace', {disableHeapNesting: e, startingInstruction: 29, width: 1000, height: 1200});
    await runFrontendTest('py2', 'linked-list-2.trace', {disableHeapNesting: e, startingInstruction: 53, width: 1000, height: 1200});
    await runFrontendTest('py2', 'heap-jiggle.trace', {disableHeapNesting: e, startingInstruction: 2});
    await runFrontendTest('py2', 'heap-jiggle.trace', {disableHeapNesting: e, startingInstruction: 3});
    await runFrontendTest('py2', 'inheritance.trace', {disableHeapNesting: e, startingInstruction: 8});
    await runFrontendTest('py2', 'aliasing.trace', {disableHeapNesting: e, startingInstruction: 4});

    await runFrontendTest('py3', 'metaclass.trace', {disableHeapNesting: e, startingInstruction: 4});
    await runFrontendTest('py3', 'storture.trace', {disableHeapNesting: e, startingInstruction: 17});
    await runFrontendTest('py3', 'decorator.trace', {disableHeapNesting: e, startingInstruction: 19});
    await runFrontendTest('py3', 'tree.trace', {disableHeapNesting: e, startingInstruction: 1});
  }
})();

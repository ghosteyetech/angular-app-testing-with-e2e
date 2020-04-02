// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
const { JUnitXmlReporter } = require('jasmine-reporters');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    //'./src/**/*.e2e-spec.ts'
    './src/app.e2e-spec.ts',
    './src/pages/homepage/homepage.e2e-spec.ts',
    './src/pages/albumpage/album-page.e2e-spec.ts',
  ],
  capabilities: {
    chromeOptions: {// By adding this chromeOptions as headless will not launch the browser
      args: [ "--headless" ]
    },
    browserName: 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));

    //Add following code snippet to write test results into a file
    const junitReporter = new JUnitXmlReporter({
      savePath: './e2e/test-results/E2E',
      consolidateAll: true//false // (false) -> will create seperate xml file for each test case file
    });
    jasmine.getEnv().addReporter(junitReporter);
  },
  resultJsonOutputFile:'./e2e/test-results/result.json',
};
# Simple Cypress Cucumber Example



## What's Here
There is no front-end project here, it's just one, full cucumber.js + cypress.js  Feature for "showing results for what you meant instead of what you said" by using Google.com's search and checks that when you misspell "hello world" as "hello werld" it corrects it and gives you results for "hello world".


## Usage

I used node v10.16.0 for this example:

```
nvm i v10.16.0
nvm use v10.16.0
```

If you just cloned this repo, install the dependencies:
```
npm i
```

At this point, all you gotta do is run either the cypress "open" or "run" commands depending on how you want to run the tests (ui mode or headless mode).

watch the automated tests:
```
npm run cypress:open
```

or to run tests in headless mode:
```
npm run cypress:run
```

These commands should run the regular ol' cypress test and the feature file + the step definition file version of the test.

In the end the cucumber tests are all you really need, but the nicer browsersync updates makes developing in non-cucumber cypress a slightly nicer developer experience.


## How To Remake This Project
If you want to set up cypress and cucumber from scratch in your repo, follow this guide. 


## Part 1 - Setup Cypress

1. First, build choose repo where you want cypress.

2. Next, initialze a project and created a package.json file.

```
npm init
```

3. Install cypress

```
npm install cypress --save-dev
```


You can run cypress tests like this

```
npm run cypress:open
npm run cypress:run
```

_Note: I guess there is something about "cypress open" that it will check if you have a cypress.json file and cypress directory already in the root of your project. If not, it will scaffold out a shit-ton of files for you. 👍_


Here's some gherkin I came up with that describes the "shows what you meant" feature:

```
Feature: "Showing Results Instead"

  Scenario: Mispelling hello world As hello welrd

    Given I open the Google home page
    When I type "hello werld" into the search and hit enter
    Then I should see that the results are for "hello world".
```

I then built this out as a raw cypress test without cucumber, and that file is located here:
`./cypress/examples/google-hello-werld-cypress-only.js`

Once I had this working, I went on to install cucumber.js!

### Cucumber Stuff


- Installed the "cypress-cucumber-preprocessor":
```
npm i cypress-cucumber-preprocessor --save-dev
```

Then go to `cypress/plugins/index.js` and, bring in the cucumber function with require and add a line in my so that that line so that cypress knows to use this cucumber preprocessor:

```
var cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber());
};

```
## Create Feature Folder With Feature Files

Create a folder named "features" within `cypress/integration` and place feature files there containing gherkin.

## Create Step_Definitions Folder With Step Definition Files

Create a folder "step_definitions" within `cypress/support` and place step definition files there. Use `/cypress/support/step_definitions/google-hello-world.js` as a template.

For me it was very important to put the things above in these specific directories since these were the only locations where my files were actually found and run properly by cypress & cucumber.

---

To run the cucumber specs first open cypress with `npm run cypress:open` and click on the feature files.

To run in headless mode: `npm run cypress:run`

_Note, you can also ignore everything but the feature files by adding the option in `cypress.json`._


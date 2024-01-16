# Pecode-test-automation-cypress

1. Install dependencies:
```bash
npm install 
```

2. Run the tests:
```bash
npm run test:cypress:open
more scripts located inside the package.json > scripts
```

## Technologies
Project is created with:
* Cypress version: ^13.6.2
* Page Object pattern

## About Cypress
- JavaScript End to End Testing Framework.
- Cypress has been made specifically for developers and QA engineers, to help them get more done.
- Cypress benefits from our amazing open source community - and our tools are evolving better and faster than if we worked on them alone.
- Cypress takes snapshots as your tests run. Simply hover over commands in the Command Log to see exactly what happened at each step.
- Debug directly from familiar tools like Chrome DevTools. Our readable errors and stack traces make debugging lightning fast.
- Cypress automatically reloads whenever you make changes to your tests.
- Cypress automatically waits for commands and assertions before moving on. No more async hell.

## Directory structure  
* constants - contains test data.
* e2e - contains tests.
* models - contains test methods.
* page-objects - contains the page selectors.
* reports/screenshots - failed tests will be displayed there.
* support - commands.js is for custom commands; e2e.js is test running configuration


# TL HackerRank Front-End Challenge

## DO NOT FORK!

We ask that you clone the repo locally, do your work, and submit it back to us as a zip file.

## Overview

You've been tasked with maintaining the addictive React/Preact app "Jokes For Everyone". Below are the high priority tickets assigned to you. Complete them within 1 hour and submit your test.

## Tickets

1. Make a Plan:

After reviewing the code, make some notes about what you would change or do differently in the app. Let's assume that the feature scope is fixed for now; but how can the code quality improve? What patterns or best practices would you implement?

- Put your notes in a file called ~/TODO.md for review

1. Bug:

The joke isn't added to the list.

- The developer left right before finishing the feature! :( Find out what's wrong and fix it.

1. New Feature:

Support "types" for jokes. Show four buttons with these labels:

- Add a General Joke
- Add a Knock-knock Joke
- Add a Programming Joke
- Add a Random Joke

Implement the feature. See API docs for details.

1. Design Improvements:

Make the app look prettier! Add any design improvements you can think of.

### Bonus Tasks (OPTIONAL - pick and choose any of the following that you wish)

1. Improve state management:

Implement a better abstraction of application state in the system, using React Context, Redux, or a state library of your choosing.

1. Add config page:

Allow the user to specify the following preferences:

- Dark mode (black background / white font)
- Font size (small/medium/large)

1. Joke rating system

Allow the user to rate jokes on a scale from 1-5, using star icons to represent the rated value.

- Optionally store these rating in localStorage, or don't -- just reset them when the app reloads is acceptable too.

1. Family filter

Allow the user to input a list of words that the app will filter out (case-insensitive) from jokes, replacing the words with "\*" chars.

- A simple input field, with a comma separated text string, will suffice
- Jokes should update instantly, every time the filter field changes

1. Implement your own idea!

If you've thought of something great, go ahead and show us!

## API Documentation

Routes: https://github.com/15Dkatz/official_joke_api

List of raw data: https://github.com/15Dkatz/official_joke_api/blob/master/jokes/index.json

## Sample Joke Entity

```javascript
{
  "id":355,
  "type":"general",
  "setup":"Why do bananas have to put on sunscreen before they go to the beach?",
  "punchline":"Because they might peel!"
}
```

## CREATE-PREACT-APP OFFICAL DOCS

## CLI Commands

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve

# run tests with jest and enzyme
npm run test
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).

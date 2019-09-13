[![Build Status](https://travis-ci.org/ThomasAndrewMacLean/patient-companion-app.svg?branch=master)](https://travis-ci.org/ThomasAndrewMacLean/patient-companion-app)

# Run locally

## App

-   npm install
-   npm run dev (hot reloading)

## Storybook

-   npm install
-   npm run storybook

# Todo

- add aspect ratio hack to images (have a colour while image is loading)
- cache data using service worker
- window scroll to top when navigating to other pages
- create detail page
- style category page
- remove cursor pointer from small icons
- save pictures in airtable
- add wave easteregg in 👋


# Progress

## Setup Storybook

-   npm init -y
-   npx -p @storybook/cli sb init --type svelte
-   add git + remote
    -   git init
    -   git remote add origin https://github.com/ThomasAndrewMacLean/bothrs.git

## Setup deployment Storybook

-   generate token in github settings with access to public repo's
-   add Environment Variable => GITHUB_TOKEN
-   add .travis.yml file

## Setup deployment Surge

-   run surge token in terminal
-   add SURGE_LOGIN with email address in travis
-   add SURGE_TOKEN with the token generated
-   add build and deployment to travis.yml

`if you've got the travis cli installed you can run travis lint .travis.yml to check the yml file`

## Svelte

-   used these plugins for vscode
    -   fivethree.vscode-svelte-snippets
    -   jamesbirtles.svelte-vscode

# Random things

-   https://www.ruggenberg.nl/titels.html
-   https://uinames.com/
-   https://hipsum.co/

# links

-   https://docs.travis-ci.com/user/job-lifecycle/
-   https://developers.google.com/speed/pagespeed/insights/
-   https://cruft.io/posts/automated-accessibility-testing-node-travis-ci-pa11y/

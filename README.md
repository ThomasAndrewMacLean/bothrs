[![Build Status](https://travis-ci.org/ThomasAndrewMacLean/bothrs.svg?branch=master)](https://travis-ci.org/ThomasAndrewMacLean/bothrs)

# Progress

## Setup Storybook
- npm init -y
- npx -p @storybook/cli sb init --type svelte
- add git + remote
    - git init
    - git remote add origin https://github.com/ThomasAndrewMacLean/bothrs.git

## Setup deployment Storybook
- generate token in github settings with access to public repo's
- add Environment Variable => GITHUB_TOKEN
- add .travis.yml file

## Setup deployment Surge
- run surge token in terminal 
- add SURGE_LOGIN with email address in travis
- add SURGE_TOKEN with the token generated
import { configure, addDecorator } from '@storybook/svelte';

import { withA11y } from '@storybook/addon-a11y';

// apply global styles
import '../src/global.css';
import './storybook.css'

// add a11y plugin
addDecorator(withA11y);

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

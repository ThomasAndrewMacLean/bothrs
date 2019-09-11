import { storiesOf } from '@storybook/svelte';

import Header from '../src/components/Header.svelte';
import QuickActions from '../src/components/QuickActions.svelte';
import Navigation from '../src/components/Navigation.svelte';
import Card from '../src/components/Card.svelte';

import RoundButton from '../src/atoms/RoundButton.svelte';

storiesOf('Header', module)
    .add('Stef', () => ({
        Component: Header,
        props: { name: 'Stef' },
    }))
    .add('Gil', () => ({
        Component: Header,
        props: { name: 'Gil' },
    }))
    .add('Thomas', () => ({
        Component: Header,
        props: { name: 'Thomas' },
    }));

storiesOf('QuickActions', module).add('actions ', () => ({
    Component: QuickActions,
}));

storiesOf('Navigation', module).add('actions ', () => ({
    Component: Navigation,
}));

storiesOf('Card', module).add('actions ', () => ({
    Component: Card,
    props: { cardTitle: 'Tip of the day', icon: 'tips', colour: '--quart-colour', image: 'food' },
}));

storiesOf('RoundButton', module)
    .add('Normal', () => ({
        Component: RoundButton,
        props: { title: 'Icon', icon: 'atom', colour: '--quart-colour' },
    }))
    .add('Small', () => ({
        Component: RoundButton,
        props: { title: 'Icon', icon: 'atom', colour: '--quart-colour', size: 'small' },
    }));

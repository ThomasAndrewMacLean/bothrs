import { storiesOf } from '@storybook/svelte';

import Header from '../src/components/Header.svelte';
import QuickActions from '../src/components/QuickActions.svelte';
import Navigation from '../src/components/Navigation.svelte';
import Card from '../src/components/Card.svelte';
import ScrollCard from '../src/components/ScrollCard.svelte';

import RoundButton from '../src/atoms/RoundButton.svelte';
import CardHeader from '../src/atoms/CardHeader.svelte';
import CardButtons from '../src/atoms/CardButtons.svelte';
import CardWeeklyTopic from '../src/atoms/CardWeeklyTopic.svelte';

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

storiesOf('Navigation', module).add('Navigation ', () => ({
    Component: Navigation,
}));

storiesOf('Card', module)
    .add('Card ', () => ({
        Component: Card,
        props: { cardTitle: 'Tip of the day', icon: 'tips', colour: '--quart-colour', image: 'food' },
    }))
    .add('Skeleton Card ', () => ({
        Component: Card,
        props: { cardTitle: 'Tip of the day', icon: 'tips', skeleton: true, colour: '--quart-colour', image: 'food' },
    }));

storiesOf('ScrollCard', module)
    .add('ScrollCard ', () => ({
        Component: ScrollCard,
        // props: { cardTitle: 'Tip of the day', icon: 'tips', colour: '--quart-colour', image: 'food' },
    }))
    .add('CardWeeklyTopic ', () => ({
        Component: CardWeeklyTopic,
        // props: { cardTitle: 'Tip of the day', icon: 'tips', colour: '--quart-colour', image: 'food' },
    }));

storiesOf('Atoms', module)
    .add('Normal RoundButton', () => ({
        Component: RoundButton,
        props: { title: 'Icon', icon: 'atom', colour: '--quart-colour' },
    }))
    .add('Small RoundButton', () => ({
        Component: RoundButton,
        props: { title: 'Icon', icon: 'atom', colour: '--quart-colour', size: 'small' },
    }))
    .add('CardHeader', () => ({
        Component: CardHeader,
        props: { cardTitle: 'Tip of the day', title: 'Icon', icon: 'atom', colour: '--quart-colour', size: 'small' },
    }))
    .add('CardButtons', () => ({
        Component: CardButtons,
        props: { cta1: { title: 'see all' }, cta2: { title: 'add topic' } },
    }));

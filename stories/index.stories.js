import { storiesOf } from '@storybook/svelte';

import Footer from '../src/components/Footer.svelte';
import Header from '../src/components/Header.svelte';

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

storiesOf('Footer', module).add('with text', () => ({
    Component: Footer,
}));

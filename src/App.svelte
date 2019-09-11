<script>
    import Footer from './components/Footer.svelte';
    import QuickActions from './components/QuickActions.svelte';
    import Header from './components/Header.svelte';
    import Navigation from './components/Navigation.svelte';
    import Card from './components/Card.svelte';
</script>

<Header name="Thomas" />
<QuickActions />

<Card cardTitle="Tip of the day" icon="tips" colour="--quart-colour" image="food" />

<Navigation />

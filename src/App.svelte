<script>
    import Footer from './components/Footer.svelte';
    import QuickActions from './components/QuickActions.svelte';
    import Header from './components/Header.svelte';
    import Navigation from './components/Navigation.svelte';
    import Card from './components/Card.svelte';
    import ScrollCard from './components/ScrollCard.svelte';

    import CardWeeklyTopic from './atoms/CardWeeklyTopic.svelte';
</script>

<main>
<Header name="Thomas" />
<QuickActions />
<br />
<Card cardTitle="Tip of the day" icon="tips" colour="--quart-colour" image="food" />
<br />
<ScrollCard />
<Card cardTitle="MG Update" icon="atom" colour="--primary-colour" image="stress" />
    
<Navigation />
</main>

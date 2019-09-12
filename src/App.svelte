<script>
    import Footer from './components/Footer.svelte';
    import QuickActions from './components/QuickActions.svelte';
    import Header from './components/Header.svelte';
    import Navigation from './components/Navigation.svelte';
    import Card from './components/Card.svelte';
    import ScrollCard from './components/ScrollCard.svelte';

    import CardWeeklyTopic from './atoms/CardWeeklyTopic.svelte';
    import { databaseUrl } from './utils/constants';

    let loadedData = false;

    let community = [];
    const getData = async () => {
        const rawData = await fetch(databaseUrl);
        const data = await rawData.json();

        console.log(data);

        community = data.filter(d => d.category === 'community');
        loadedData = true;
    };

    getData();
</script>

<main>
    <Header name="Thomas" />

    <QuickActions />
    {#if loadedData}
        <Card cardTitle="Tip of the day" icon="tips" colour="--quart-colour" image="food" />
        <ScrollCard topics={community} />
        <Card cardTitle="MG Update" icon="atom" colour="--primary-colour" image="stress" />
        <Navigation />
    {/if}
</main>

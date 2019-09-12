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
    let tipOfTheDay = null;
    const getData = async () => {
        const rawData = await fetch(databaseUrl);
        const data = await rawData.json();

        community = data.filter(d => d.category === 'community');
        tipOfTheDay = data.find(d => d.category === 'tip');
        loadedData = true;
    };

    getData();
</script>

<main>
    <Header name="Thomas" />

    <QuickActions />
    {#if loadedData}
        {#if tipOfTheDay}
            <Card
                cardTitle="Tip of the day"
                icon="tips"
                title={tipOfTheDay.title}
                excerpt={tipOfTheDay.text}
                image={tipOfTheDay.image} />
        {/if}
        <ScrollCard topics={community} />
        <Card cardTitle="MG Update" icon="atom" colour="--primary-colour" image="stress" />
        <Navigation />
    {/if}
</main>

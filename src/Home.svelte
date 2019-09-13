<script>
    import Footer from './components/Footer.svelte';
    import QuickActions from './components/QuickActions.svelte';
    import Header from './components/Header.svelte';
    import Navigation from './components/Navigation.svelte';
    import Card from './components/Card.svelte';
    import ScrollCard from './components/ScrollCard.svelte';

    import CardWeeklyTopic from './atoms/CardWeeklyTopic.svelte';

    export let loadedData;
    export let tipOfTheDay;
    export let communityTopics;
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
        <ScrollCard topics={communityTopics} />
        <Card cardTitle="MG Update" icon="atom" colour="--primary-colour" image="stress" />
        <Navigation />
    {/if}
</main>

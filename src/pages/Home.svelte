<script>
    import Footer from '../components/Footer.svelte';
    import QuickActions from '../components/QuickActions.svelte';
    import Header from '../components/Header.svelte';
    import Navigation from '../components/Navigation.svelte';
    import Card from '../components/Card.svelte';
    import ScrollCard from '../components/ScrollCard.svelte';

    import CardWeeklyTopic from '../atoms/CardWeeklyTopic.svelte';

    export let loadedData;
    export let tipOfTheDay;
    export let communityTopics;
</script>

<style>
    main.loadingData {
        filter: grayscale(0.7);
        transition: filter 300ms cubic-bezier(0.61, 1.06, 1, 1);
    }
    main {
        margin-bottom: 100px;
    }
</style>

<main class={!loadedData ? 'loadingData' : ''}>
    <Header name="Thomas" />

    <QuickActions {loadedData} />
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
    {:else}
        <Card cardTitle="" icon="tips" title="" excerpt="" image="" skeleton={true} />
        <Card cardTitle="" icon="atom" title="" excerpt="" image="" skeleton={true} />
    {/if}
    <Navigation />
</main>

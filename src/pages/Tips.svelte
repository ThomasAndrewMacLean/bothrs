<script>
    import Navigation from '../components/Navigation.svelte';
    import Card from '../components/Card.svelte';
    import CategoryHeader from '../atoms/CategoryHeader.svelte';

    export let loadedData;
    export let tips;
</script>

<main>
    <CategoryHeader />
    {#if loadedData}
        {#each tips as tip}
            <Card cardTitle={tip.tipHeader} icon="tips" title={tip.title} excerpt={tip.text} image={tip.image} />
        {/each}

        <Navigation />
    {/if}
</main>

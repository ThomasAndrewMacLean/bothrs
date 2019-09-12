<script>
    import CardHeader from '../atoms/CardHeader.svelte';
    import CardWeeklyTopic from '../atoms/CardWeeklyTopic.svelte';
    import CardButtons from '../atoms/CardButtons.svelte';
    export let cardTitle = 'Community';
    export let title = 'Community';
    export let icon = 'tips';
    export let colour = '--fourth-colour';
    export let cta1 = { title: 'see all' };
    export let cta2 = { title: 'add topic' };
    export let topics = [{}, {}, {}, {}];
</script>

<style>
    .scroll-wrapper {
        width: 350px;
        height: 428px;
        border-radius: 15px;
        background: #221f2b;
        position: relative;
        margin: auto;
        margin-bottom: 17px;
    }

    h4 {
        font-weight: 900;
        font-size: 20px;
        line-height: 26px;

        letter-spacing: -0.532503px;
        margin: 16px 0 11px 26px;
    }
    .topic-slider {
        padding-left: 17px;
        margin-right: calc(-1 * var(--margin-slider));
        display: grid;
        grid-auto-flow: column;
        grid-column-gap: 9px;
        overflow: auto;
        white-space: nowrap;
        cursor: pointer;
        -webkit-overflow-scrolling: touch;
    }
    .topic-slider::-webkit-scrollbar {
        width: 0 !important;
    }
    .topic:last-of-type {
        padding-right: calc(17px + var(--margin-slider));
    }
</style>

<div class="scroll-wrapper">
    <CardHeader {cardTitle} {title} {icon} {colour} />
    <h4>This week's topics</h4>
    <div class="topic-slider">
        {#each topics as topic}
            <div class="topic">
                <CardWeeklyTopic title={topic.title} author={topic.author} date={topic.date} excerpt={topic.text} />
            </div>
        {/each}
    </div>
    <CardButtons {cta1} {cta2} />

</div>

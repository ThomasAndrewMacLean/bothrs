<script>
    import { getImage } from '../utils/helpers';
    import CardHeader from '../atoms/CardHeader.svelte';
    import CardButtons from '../atoms/CardButtons.svelte';
    import { colourMap } from '../utils/constants';

    export let cardTitle;
    export let icon;
    const colour = colourMap[icon];

    export let image;

    export let title = 'Swallowing';
    export let excerpt =
        'If you struggle with swallowing, eat soft<br/> foods wherever possible. You can check out some of our soft food recipes for ideas here.';

    export let skeleton = false;
    export let cta1 = { title: 'see all' };
    export let cta2 = { title: 'explore tip' };
</script>

<style>
    article {
        max-width: 350px;
        height: 309px;
        background: var(--background-card-colour);
        border-radius: 15px;
        position: relative;
        margin: auto;
        margin-bottom: 17px;
        /* transition: all 1s ease-in; */
    }

    article.skeleton {
        filter: blur(2px);
    }

    .img-wrap {
        position: absolute;
        /* bottom: 52px; */
        overflow: hidden;
        height: 193px;
    }
    img {
        padding-bottom: 193px;
    }

    h4 {
        position: absolute;
        width: 222px;
        height: 30px;
        left: 25px;
        top: 84px;

        font-style: normal;
        font-weight: 900;
        font-size: 20px;
        line-height: 26px;
        z-index: 1;
        letter-spacing: -0.532503px;
    }
    p {
        position: absolute;
        width: 168px;
        height: 117px;
        font-style: normal;
        left: 25px;
        top: 117px;
        /* font-weight: bold; */
        font-size: 16px;
        letter-spacing: -0.532503px;
        line-height: 19px;
        z-index: 1;
    }
</style>

<article class={skeleton ? 'skeleton' : ''}>
    <CardHeader {cardTitle} {title} {icon} />
    {#if !skeleton}
        <h4>{title}</h4>
        <p>
            {@html excerpt}
        </p>
        <div class="img-wrap" style={'background:var(' + colour + ')'}>
            <img src={getImage(image)} alt="" />
        </div>
        <CardButtons {cta1} {cta2} />
    {/if}

</article>

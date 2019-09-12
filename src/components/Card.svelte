<script>
    import { getImage } from '../utils/helpers';
    import CardHeader from '../atoms/CardHeader.svelte';
    import CardButtons from '../atoms/CardButtons.svelte';

    export let cardTitle;
    export let icon;
    export let colour;

    export let image;

    export let title = 'Swallowing';
    export let excerpt =
        'If you struggle with swallowing, eat soft<br/> foods wherever possible. You can check out some of our soft food recipes for ideas here.';

    export let cta1 = { title: 'see all' };
    export let cta2 = { title: 'explore tip' };
</script>

<style>
    article {
        width: 350px;
        height: 309px;
        background: var(--background-card-colour);
        border-radius: 15px;
        position: relative;
        margin: auto;
    }

    img {
        position: absolute;
        bottom: 52px;
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
        font-weight: bold;
        font-size: 16px;
        letter-spacing: -0.532503px;
        line-height: 19px;
        z-index: 1;
    }
</style>

<article>
    <CardHeader {cardTitle} {title} {icon} {colour} />
    <h4>{title}</h4>
    <p>
        {@html excerpt}
    </p>
    <img src={getImage(image)} alt="" />

    <CardButtons {cta1} {cta2} />

</article>

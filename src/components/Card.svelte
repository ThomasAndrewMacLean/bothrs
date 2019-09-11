<script>
    import { imagePath } from '../utils/constants';
    import RoundButton from '../atoms/RoundButton.svelte';

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
    }
    h3 {
        font-size: 22px;
        line-height: 26px;
        display: flex;
        align-items: center;
        margin-left: 11px;
    }
    .card-header {
        position: absolute;
        left: 4.57%;
        top: 5.18%;
        display: flex;
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
    .button-wrap {
        bottom: 0;
        position: absolute;
        width: 100%;
        display: flex;
    }
    button {
        width: 50%;
        height: 52px;

        font-family: inherit;
        font-style: normal;
        font-weight: 900;
        font-size: 16px;
        line-height: 19px;
        text-transform: uppercase;
        border: none;
        background: none;
        display: block;
        color: inherit;
        letter-spacing: -0.387275px;
    }

    button:first-of-type {
        border-right: 4px solid #292533;
    }
</style>

<article>
    <div class="card-header">
        <RoundButton {title} {icon} {colour} size="small" />
        <h3>{cardTitle}</h3>
    </div>
    <h4>{title}</h4>
    <p>
        {@html excerpt}
    </p>
    <img src={'./' + imagePath + image + '.jpg'} alt="" />

    <div class="button-wrap">
        <button>{cta1.title}</button>
        <button>{cta2.title}</button>
    </div>

</article>

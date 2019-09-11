<script>
    export let cta1;
    export let cta2;
</script>

<style>
    .button-wrap {
        bottom: 0;
        position: absolute;
        width: 100%;
        background: var(--background-card-colour);
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
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
        border-right: 1px solid #292533;
    }
</style>

<div class="button-wrap">
    <button>{cta1.title}</button>
    <button>{cta2.title}</button>
</div>

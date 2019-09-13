<script>
    import { getIcon } from '../utils/helpers';
    import { colourMap } from '../utils/constants';

    export let title;
    export let icon;
    export let colour;

    if (!colour) {
        colour = colourMap[icon];
    }
    export let size;
</script>

<style>
    button {
        height: 50px;
        width: 50px;
        border-radius: 100%;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    button.small {
        height: 34px;
        width: 34px;
    }
    label {
        color: #bebebe;
        font-size: 12px;
        line-height: 14px;
        padding-bottom: 2px;
    }
    .wrapper {
        width: 66px;
        height: 70px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    .wrapper.small {
        width: 34px;
        height: 34px;
    }
    img.small {
        height: 20px;
    }
</style>

<div class={size + ' wrapper'}>
    <button class={size} {title} style={'background:var(' + colour + ')'}>
        <img class={size} src={getIcon(icon)} alt={icon} />
    </button>
    {#if size !== 'small'}
        <label for={title}>{title}</label>
    {/if}
</div>

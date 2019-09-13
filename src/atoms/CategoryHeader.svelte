<script>
    import { getIcon } from '../utils/helpers';
</script>

<style>
    .triangle {
        border-color: var(--tertiary-colour) transparent;
        border-style: solid;
        border-width: 10vw 10vw 0px 10vw;
    }

    img {
        position: absolute;
        top: 10px;
        cursor: pointer;
    }
    h1 {
        position: absolute;
        top: 40px;
    }
</style>

<div class="triangle">

    <img src={getIcon('arrow-left')} alt="arrow-left" on:click={() => history.back()} />
    <h1>Tips/FAQ</h1>
    <br />
    <br />
</div>

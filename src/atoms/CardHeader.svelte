<script>
    import RoundButton from './RoundButton.svelte';
    export let cardTitle;
    export let icon;
    export let colour;
    export let title;
</script>

<style>
    h3 {
        font-size: 22px;
        line-height: 26px;
        display: flex;
        align-items: center;
        margin-left: 11px;
    }
    .card-header {
        background: var(--background-card-colour);
        padding-left: 16px;
        padding-top: 15px;
        padding-bottom: 13px;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        display: flex;
    }
</style>

<div class="card-header">
    <RoundButton {title} {icon} {colour} size="small" />
    <h3>{cardTitle}</h3>
</div>

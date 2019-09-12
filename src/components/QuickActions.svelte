<script>
    import RoundButton from '../atoms/RoundButton.svelte';
    const actions = [
        {
            title: 'Info',
            colour: '--primary-colour',
            icon: 'atom',
            nav: '#',
        },
        {
            title: 'Tips',
            colour: '--quart-colour',
            icon: 'tips',
            nav: '#',
        },
        {
            title: 'Trials',
            colour: '--tertiary-colour',
            icon: 'inbox',
            nav: '#',
        },
        {
            title: 'Community',
            colour: '--red-colour',
            icon: 'message',
            nav: '#',
        },
        {
            title: 'Extra',
            colour: '--fourth-colour',
            icon: 'tips',
            nav: '#',
        },
        {
            title: 'Extra',
            colour: '--primary-dark-colour',
            icon: 'tips',
            nav: '#',
        },
    ];
</script>

<style>
    ul {
        display: flex;
        padding-left: 13px;
        padding-right: 20px;
        overflow: auto;
        white-space: nowrap;
        margin-bottom: 17px;
    }
</style>

<ul>
    {#each actions as action}
        <li>
            <RoundButton title={action.title} icon={action.icon} colour={action.colour} />
        </li>
    {/each}

</ul>

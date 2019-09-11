<script>
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
        flex-wrap: wrap;
    }
    li {
        width: 66px;
        height: 70px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    button {
        height: 50px;
        width: 50px;
        border-radius: 100%;
        border: none;
    }
    label {
        color: #bebebe;
        font-size: 12px;
        line-height: 14px;
        padding-bottom: 2px;
    }
</style>

<ul>
    {#each actions as action}
        <li>
            <button name={action.title} style={'background:var(' + action.colour + ')'}>

                <!-- TODO: path is different for webpack and rollup -->
                <img src={'./' + action.icon + '.svg'} alt="" />
            </button>
            <label for={action.title}>{action.title}</label>

        </li>
    {/each}

</ul>

<script>
    import { Router, Link, Route } from 'svelte-routing';
    import { databaseUrl } from './utils/constants';

    import Home from './Home.svelte';
    import Tips from './Tips.svelte';

    export let url = '';

    let loadedData = false;

    let communityTopics = [];
    let tipOfTheDay = null;
    let tips = [];
    const getData = async () => {
        const rawData = await fetch(databaseUrl);
        const data = await rawData.json();

        communityTopics = data.filter(d => d.category === 'community');
        tipOfTheDay = data.find(d => d.category === 'tip');
        tips = data.filter(d => d.category === 'tip');
        loadedData = true;
    };

    getData();
</script>

<!-- App.svelte -->
<Router {url}>
    <div>
        <Route path="tips">
            <Tips {loadedData} {tips} />
        </Route>
        <Route path="/">
            <Home {communityTopics} {loadedData} {tipOfTheDay} />
        </Route>
    </div>
</Router>

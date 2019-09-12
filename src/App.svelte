<script>
    import { Router, Link, Route } from 'svelte-routing';
    import Home from './Home.svelte';
    import Tips from './Tips.svelte';

    export let url = '';
</script>

<!-- App.svelte -->
<Router {url}>
    <div>
        <Route path="home" component={Home} />
        <Route path="tips" component={Tips} />
        <Route path="/">
            <Home />
        </Route>
    </div>
</Router>

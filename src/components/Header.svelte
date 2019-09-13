<script>
    export let name;

    const savedName = localStorage.getItem('name');
    if (savedName) {
        name = savedName;
    } else {
        const urlParams = new URLSearchParams(window.location.search);
        const nameFromUrl = urlParams.get('name');
        console.log(nameFromUrl);

        if (nameFromUrl) {
            name = nameFromUrl;
            localStorage.setItem('name', nameFromUrl);
        }
    }
</script>

<style>
    .header-wrap {
        margin-left: 21px;
        margin-top: calc(58px - 25px);
        margin-bottom: 17px;
    }
    h1 {
        font-size: 34px;
        line-height: 40px;
        font-weight: bold;
    }
    p {
        color: var(--text-darker-colour);
        font-weight: normal;
        font-size: 20px;
        line-height: 24px;
    }
</style>

<div class="header-wrap">
    <h1>Hi {name} 👋</h1>
    <p>How can I help you today?</p>
</div>

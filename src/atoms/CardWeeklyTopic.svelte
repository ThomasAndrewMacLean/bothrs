<script>
    import { getIcon, getHumanReadableTime } from '../utils/helpers';

    export let title = 'My Disease';
    export let author = 'Dries Droopy';
    export let date = '2019-09-02T16:23:25.000Z';
    //TODO: get number of days/hours from diff with date from airtable
    let time = getHumanReadableTime(date);
    export let excerpt =
        'This is a sharing about my recovery from Myasthenia Gravis (MG). This disease started initially from my jaw. When I ate or chew something, I would feel tired soon and then had to stop chewing because I had no strength to do it..';
</script>

<style>
    article {
        width: 290px;
        height: 231px;
        background: var(--background-card-colour);
        box-shadow: 3px 2px 24px rgba(0, 0, 0, 0.09);
        border-radius: 6px;
    }
    .header {
        padding: 18px 20px 18px 19px;
        display: flex;
    }
    h4 {
        font-weight: bold;
        font-size: 16px;
        /* line-height: 26px; */
        letter-spacing: -0.532503px;
    }
    img {
        height: 26px;
        width: 26px;
        margin-right: 17px;
    }
    .inner {
        display: flex;
        flex-direction: column;
        transform: translateY(-6px);
    }

    .author {
        font-size: 14px;
        /* line-height: 26px; */
        /* or 186% */

        letter-spacing: -0.532503px;
        opacity: 0.7;
    }
    p {
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        opacity: 0.9;
        width: 251px;
        margin-left: 17px;
        white-space: normal;
    }
</style>

<article>
    <div class="header">
        <img src={getIcon('profile', '.png')} alt="" />
        <div class="inner">
            <span class="author">posted {time}&nbsp; • &nbsp;{author}</span>
            <h4>{title}</h4>
        </div>
    </div>
    <p>{excerpt}</p>

</article>

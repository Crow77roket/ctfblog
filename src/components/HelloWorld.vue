<template>
    <div>
        <h1>{{ msg }}</h1>
        <p class="dark_theme note">欢迎来到这里！！！</p>
        <h3>欢迎来到CTF易芯</h3>
        <p>这是专注于CTF比赛攻防的网站，请尽情享受您的比赛</p>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }
</style>

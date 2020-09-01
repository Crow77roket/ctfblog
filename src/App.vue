<template>
    <div class="app_wrap dark_theme">
        <header id="app_header" class="dark_theme">
            <div id="nav">
                <div class="nav_title">
                    <a href="#">
                        <h3>易芯CTF</h3>
                    </a>
                </div>
                <div class="nav_content">
                    <ul>
                        <li>
                            <router-link to="/">Home</router-link>
                        </li>
                        <li>
                            <router-link to="/blog">Blog</router-link>
                        </li>
                        <li>
                            <router-link to="/ques">Question</router-link>
                        </li>
                        <li>
                            <router-link to="/about">About</router-link>
                        </li>
                    </ul>


                </div>
            </div>
        </header>
        <div id="app_content">
            <router-view></router-view>
        </div>
    </div>
</template>


<style lang="scss">
    @import "./assets/scss/main";
    #nav {
        padding: 1.2em 5em;
        /*display: flex;*/
    }
    .nav_title{
        margin: 20px;
        display: inline;
        h3{
            display: inline;
           margin: 0;
        }
    }
    .nav_content{
        display: inline;
        margin: 0 40px;
    }
    #app_content{
        text-align: center;
    }
    ul{
        display: inline;
        li{
            display: inline;
            list-style-type: none;
            margin: 0 30px;
        }
    }


</style>

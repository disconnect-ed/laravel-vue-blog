<template>
    <div class="">
        <Header/>
        <b-container>
            <main class="main">
                <router-view/>
            </main>
        </b-container>
        <Footer/>
    </div>
</template>

<script>
    import Header from "./components/Header";
    import Footer from "./components/Footer";
    export default {
        name: "Index",
        components: {
            Footer,
            Header
        }
    }
</script>
<style lang="scss">
    #app {
        background-color: #F1F5FB;
    }
</style>
<style lang="scss" scoped>
    .main {
        width: 100%;
        margin-top: 60px;
        min-height: calc(100vh - 60px);
    }
</style>

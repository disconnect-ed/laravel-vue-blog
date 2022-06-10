<template>
    <div class="">
        <Header/>
        <b-container>
            <main class="main">
                <div class="col-12 pt-3">
                    <MainCardComponent/>
                </div>
                <b-row class="pt-3">
                    <b-col cols="9">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </b-col>
                    <b-col cols="3">
                        <SearchComponent/>
                        <CategoriesComponent/>
                    </b-col>
                </b-row>
                <div class="col-12">
                    <PaginationComponent/>
                </div>
            </main>
        </b-container>
        <Footer/>
    </div>
</template>

<script>
    import Header from "./components/Header";
    import Footer from "./components/Footer";
    import Card from "./components/Card";
    import Aside from "./components/CategoriesComponent";
    import SearchComponent from "./components/SearchComponent";
    import CategoriesComponent from "./components/CategoriesComponent";
    import MainCardComponent from "./components/MainCardComponent";
    import PaginationComponent from "./components/PaginationComponent";

    export default {
        name: "Index",
        components: {
            PaginationComponent,
            MainCardComponent,
            CategoriesComponent,
            SearchComponent,
            Aside,
            Card,
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

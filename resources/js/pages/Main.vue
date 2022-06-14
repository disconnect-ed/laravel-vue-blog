<template>
    <div>
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
    </div>
</template>

<script>
    import MainCardComponent from "../components/MainCardComponent";
    import CategoriesComponent from "../components/CategoriesComponent";
    import SearchComponent from "../components/SearchComponent";
    import Card from "../components/Card";
    import PaginationComponent from "../components/PaginationComponent";

    export default {
        name: "Main",
        components: {
            MainCardComponent,
            CategoriesComponent,
            SearchComponent,
            PaginationComponent,
            Card,
        }
    }
</script>

<style scoped>

</style>

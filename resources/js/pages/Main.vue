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
                <Menu className="categories sticky-top mt-3 mb-3"
                      title="Категории"
                      styles="top: 15px"
                      :link-list="linkList"
                />
            </b-col>
        </b-row>
        <div class="col-12">
            <PaginationComponent/>
        </div>
    </div>
</template>

<script>
    import MainCardComponent from "../components/MainCardComponent";
    import SearchComponent from "../components/SearchComponent";
    import Card from "../components/Card";
    import PaginationComponent from "../components/PaginationComponent";
    import Menu from "../components/Menu";

    export default {
        name: "Main",
        data() {
            return {
                linkList: [
                    {title: 'JavaScript', link: '/'}
                ]
            }
        },
        components: {
            Menu,
            MainCardComponent,
            SearchComponent,
            PaginationComponent,
            Card,
        }
    }
</script>

<style scoped>

</style>

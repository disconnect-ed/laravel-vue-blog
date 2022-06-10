<template>
    <b-card class="categories sticky-top mt-3 mb-3">
        <h4>
            Категории
        </h4>
        <ul>
            <li>
                <a href="">JavaScript</a>
            </li>
            <li>
                <a href="">React</a>
            </li>
            <li>
                <a href="">Vue</a>
            </li>
            <li>
                <a href="">Node.js</a>
            </li>
            <li>
                <a href="">React Native</a>
            </li>
            <li>
                <a href="">PHP</a>
            </li>
            <li>
                <a href="">Laravel</a>
            </li>
            <li>
                <a href="">Symfony</a>
            </li>
            <li>
                <a href="">HTML</a>
            </li>
            <li>
                <a href="">CSS</a>
            </li>
        </ul>
    </b-card>
</template>

<script>
    export default {
        name: "CategoriesComponent"
    }
</script>

<style scoped lang="scss">
    .categories {
        top: 15px !important;
    }
</style>

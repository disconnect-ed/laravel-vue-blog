<template>
    <b-card class="search">
        <h4>Поиск постов</h4>
        <b-input-group>
            <b-form-input></b-form-input>
            <b-input-group-append>
                <b-button class="btn" variant="info">Найти</b-button>
            </b-input-group-append>
        </b-input-group>
    </b-card>
</template>

<script>
    export default {
        name: "SearchComponent"
    }
</script>

<style scoped>
    .btn {
        color: white;
    }
</style>

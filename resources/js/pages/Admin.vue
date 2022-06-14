<template>
    <div>
        <b-card class="admin-panel">
            <b-tabs content-class="mt-3" fill>
                <b-tab title="Главная" active >
                    1
                </b-tab>
                <b-tab title="Пользователи"><p>I'm the second tab</p></b-tab>
                <b-tab title="Категории"><p>I'm the tab with the very, very long title</p></b-tab>
                <b-tab title="Посты"><p>I'm a disabled tab!</p></b-tab>
            </b-tabs>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: "Admin"
    }
</script>

<style scoped>
    .card-body {
        padding-top: 0 !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
    }
</style>

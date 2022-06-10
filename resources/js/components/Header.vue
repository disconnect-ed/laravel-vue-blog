<template>
    <header class="header d-flex align-items-center justify-content-between">
        <h1>< Blog /></h1>
        <div>
            <b-button variant="primary">Войти</b-button>
            <b-button variant="success">Регистрация</b-button>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="scss" scoped>
    .header {
        position: absolute;
        z-index: 100;
        top: 0;
        right: 0;
        left: 0;
        height: 60px;
        background-color: white;
        padding-right: 15px;
        padding-left: 15px;
    }
</style>

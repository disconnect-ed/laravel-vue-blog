<template>
    <b-card :bg-variant="bgVariant" :text-variant="textVariant" :header="title" class="text-center col-2">
        <b-card-text><h4>{{text}}</h4></b-card-text>
    </b-card>

</template>

<script>
    export default {
        name: "DashboardCard",
        props: {
            bgVariant: {type: String, default: 'primary'},
            textVariant: {type: String, default: 'white'},
            text: String,
            title: String,
        }
    }
</script>

<style scoped>
    .card {
        padding-right: 0;
        padding-left: 0;
    }
</style>

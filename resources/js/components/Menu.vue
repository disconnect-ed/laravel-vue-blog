<template>
    <b-card :style="styles" :class="className">
        <h4>
            {{title}}
        </h4>
        <ul>
            <li v-for="link in linkList">
                <a :href="link.link">{{link.title}}</a>
            </li>
        </ul>
    </b-card>
</template>

<script>
    export default {
        name: "Menu",
        props: {
            title: String,
            linkList: Array,
            className: String,
            styles: String
        }
    }
</script>

<style scoped>
    .menu {
        top: 15px;
    }
</style>

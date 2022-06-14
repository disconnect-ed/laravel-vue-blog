<template>
    <b-card img-src="https://placekitten.com/300/300" img-alt="Изображение карточки" img-left class="mb-3">
        <router-link style="text-decoration: none" to="/article/1">
            <b-card-title style="color: initial">Котики не против</b-card-title>
        </router-link>
        <b-card-sub-title>Дата публикации: 02.02.2022</b-card-sub-title>
        <b-card-text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur deleniti dolorum ducimus
            exercitationem, facilis iure molestiae nesciunt nihil non officiis possimus quis repudiandae sequi sit
            tempora unde voluptates! Ad assumenda blanditiis eveniet fuga maiores mollitia officia officiis omnis
            repellat veritatis.
        </b-card-text>
        <router-link class="btn-primary btn link" :to="{name: 'article'}">Читать далее</router-link>
    </b-card>
</template>

<script>

    export default {
        name: "Card",
        components: {}
    }
</script>

<style lang="scss" scoped>
    .link {

    }

</style>

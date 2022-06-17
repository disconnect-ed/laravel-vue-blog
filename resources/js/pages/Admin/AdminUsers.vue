<template>
    <b-row class="pt-3">
        <b-col cols="9">
            <b-card>
                <h4 class="text-center">Дашборд</h4>
                
            </b-card>
        </b-col>
        <b-col cols="3">
            <Menu title="Меню" :link-list="linkList"/>
        </b-col>
    </b-row>
</template>

<script>
    import Menu from "../../components/Menu";
    export default {
        name: "AdminUsers",
        data() {
            return {
                linkList: [
                    {title: 'Главная', link: '/'},
                    {title: 'Пользователи', link: '/'},
                    {title: 'Категории', link: '/'},
                    {title: 'Теги', link: '/'},
                    {title: 'Посты', link: '/'},
                ]
            }
        },
        components: {Menu}
    }
</script>

<style scoped>

</style>

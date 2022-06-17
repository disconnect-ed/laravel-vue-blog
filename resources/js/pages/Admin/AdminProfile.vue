<template>
    <b-row class="pt-3">
        <b-col cols="9">
            <b-card>
                <h4 class="text-center">Дашборд</h4>
                <b-card-group deck class="row d-flex justify-content-around">
                    <DashboardCard text="5" title="Пользователи"/>
                    <DashboardCard text="12" title="Посты" bg-variant="success"/>
                    <DashboardCard text="7" title="Категории" bg-variant="warning"/>
                    <DashboardCard text="7" title="Теги" bg-variant="danger"/>
                </b-card-group>
            </b-card>
        </b-col>
        <b-col cols="3">
            <Menu title="Меню" :link-list="linkList"/>
        </b-col>
    </b-row>
</template>

<script>
    import DashboardCard from "../../components/Profile/DashboardCard";
    import Menu from "../../components/Menu";
    export default {
        name: "Admin",
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
        mounted() {
            this.getData()
        },
        methods: {
            async getData() {
                const resp = await axios.get('/api/get')
                console.log(resp)
            }
        },
        components: {Menu, DashboardCard}
    }
</script>

<style scoped>

</style>

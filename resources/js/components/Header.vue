<template>
    <header class="header d-flex align-items-center justify-content-between">
        <h1>< Blog /></h1>
        <div v-if="fetchPerson">
            <b-spinner></b-spinner>
        </div>
        <div v-else-if="!fetchPerson && person && token" class="dropdown">
            <button class="btn btn-outline-primary dropdown-toggle" type="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                <b-avatar v-if="person.avatar" :src="person.avatar" size="sm"></b-avatar>
                <b-avatar v-else size="sm" variant="primary"></b-avatar>
                {{person.name}}
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><router-link to="/user" class="dropdown-item" href="#">Профиль</router-link></li>
                <li><a @click.prevent="logout" class="dropdown-item" href="#">Выйти</a></li>
            </ul>
        </div>
        <div v-else>
            <router-link class="btn btn-primary" :to="{name: 'login'}">Войти</router-link>
            <router-link class="btn btn-success" :to="{name: 'registration'}">Регистрация</router-link>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                token: null
            }
        },
        updated() {
            if (!this.token) {
                const token = localStorage.getItem('x-xsrf-token')
                if (token) {
                    this.token = token
                }
            }
        },
        mounted() {
            const token = localStorage.getItem('x-xsrf-token')
            if (token) {
                this.$store.dispatch('getProfile')
                this.token = token
            }
        },
        methods: {
            logout() {
                this.$store.dispatch('logout')
            }
        },
        computed: {
            person() {
                return this.$store.getters.person
            },
            fetchPerson() {
                return this.$store.getters.fetchPerson
            }
        }
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

<template>
    <div class="col-4 m-auto login">
        <b-card>
            <h3 class="text-center">Вход</h3>
            <b-form @submit="login">
                <b-form-group
                    id="input-group-1"
                    label="Ваш email:"
                    label-for="input-1"
                    class="position-relative"
                >
                    <b-form-input
                        id="input-1"
                        type="email"
                        placeholder="Email"
                        required
                        class="mb-3"
                        v-model="email"
                        :state="personError && personError.email ? false : null"
                    ></b-form-input>
                    <small class="text-danger" v-if="personError">
                        {{personError.email ? personError.email[0] : null}}
                    </small>
                </b-form-group>

                <b-form-group
                    id="input-group-2"
                    label="Ваш пароль:"
                    class="position-relative"
                    label-for="input-2">
                    <b-form-input
                        id="input-2"
                        type="password"
                        placeholder="Пароль"
                        required
                        class="mb-3"
                        v-model="password"
                        :state="personError && personError.password ? false : null"
                    ></b-form-input>
                    <small class="text-danger" v-if="personError">
                        {{personError.password ? personError.password[0] : null}}
                    </small>
                </b-form-group>
                <div class="text-center">
                    <b-button class="" type="submit" variant="primary">Войти</b-button>
                    <router-link class="d-block mt-2" to="/">На главную</router-link>
                </div>
            </b-form>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                email: '',
                password: '',
            }
        },
        beforeUnmount() {
            this.$store.dispatch('setPersonError', null)
        },
        methods: {
            async login(event) {
                event.preventDefault()
                try {
                    await this.$store.dispatch('login', {email: this.email, password: this.password})
                    await this.$store.dispatch('getProfile')
                } catch (e) {
                    await this.$store.dispatch('setPersonError', e)
                }

            }
        },
        computed: {
            personError() {
                return this.$store.getters.personError
            }
        }
    }
</script>

<style scoped>
    .login {
        padding-top: 100px;
    }
    small {
        position: absolute;
        left: 0;
        bottom: -20px;
    }
</style>

<template>
    <div class="col-4 m-auto registration">
        <b-card>
            <h3 class="text-center">Регистрация</h3>
            <b-form @submit="registration" >
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
                    label="Ваше имя:"
                    label-for="input-2"
                    class="position-relative"
                >
                    <b-form-input
                        id="input-2"
                        type="text"
                        placeholder="Имя"
                        required
                        class="mb-3"
                        v-model="name"
                        :state="personError && personError.name ? false : null"
                    ></b-form-input>
                    <small class="text-danger" v-if="personError">
                        {{personError.name ? personError.name[0] : null}}
                    </small>
                </b-form-group>

                <b-form-group
                    id="input-group-3"
                    label="Ваш пароль:"
                    class="position-relative"
                    label-for="input-3">
                    <b-form-input
                        id="input-3"
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

                <b-form-group id="input-group-4" label="Повторите пароль:" label-for="input-4">
                    <b-form-input
                        id="input-4"
                        type="password"
                        placeholder="Повторите пароль"
                        required
                        class="mb-3"
                        v-model="confirmPassword"
                    ></b-form-input>
                </b-form-group>

                <div class="text-center">
                    <b-button class="" type="submit" variant="success">Зарегистрироваться</b-button>
                    <router-link class="d-block mt-2" to="/">На главную</router-link>
                </div>
            </b-form>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: "Registration",
        data() {
            return {
                email: '',
                name: '',
                password: '',
                confirmPassword: '',
            }
        },
        methods: {
            async registration(event) {
                event.preventDefault()
                try {
                    await this.$store.dispatch('registration', {email: this.email, name: this.name, password:
                        this.password, password_confirmation: this.confirmPassword})
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
    .registration {
        padding-top: 100px;
    }
    small {
        position: absolute;
        left: 0;
        bottom: -20px;
    }
</style>

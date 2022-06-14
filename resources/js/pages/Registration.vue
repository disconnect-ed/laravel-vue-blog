<template>
    <div class="col-4 m-auto registration">
        <b-card>
            <h3 class="text-center">Регистрация</h3>
            <b-form @submit="onSubmit" >
                <b-form-group
                    id="input-group-1"
                    label="Ваш email:"
                    label-for="input-1"
                >
                    <b-form-input
                        id="input-1"
                        type="email"
                        placeholder="Email"
                        required
                        class="mb-3"
                        v-model="email"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="input-group-2"
                    label="Ваше имя:"
                    label-for="input-2"
                >
                    <b-form-input
                        id="input-2"
                        type="text"
                        placeholder="Имя"
                        required
                        class="mb-3"
                        v-model="name"
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-3" label="Ваш пароль:" label-for="input-3">
                    <b-form-input
                        id="input-3"
                        type="password"
                        placeholder="Пароль"
                        required
                        class="mb-3"
                        v-model="password"
                    ></b-form-input>
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
            onSubmit(event) {
                event.preventDefault()
                console.log(this.email, this.password)
            }
        }
    }
</script>

<style scoped>
    .registration {
        padding-top: 100px;
    }
</style>

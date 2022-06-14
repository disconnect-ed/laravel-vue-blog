<template>
    <transition name="fade">
        <b-card v-show="showCard" bg-variant="light" class="about">
            <div class="close" @click="closeCard">&times;</div>
            <b-jumbotron header="Привет!" lead="Блог создал Долгопол Руслан">
                <p>Для получения дополнительной информации посетите веб-сайты</p>
                <a href="https://www.linkedin.com/in/ruslan-dolgopol/" target="_blank" class="btn btn-primary">LinkedIn</a>
                <a href="https://github.com/disconnect-ed" target="_blank" class="btn btn-danger">GitHub</a>
            </b-jumbotron>
        </b-card>
    </transition>
</template>

<script>
    export default {
        data() {
            return {
                img: 'https://picsum.photos/900/250/?image=3',
                showCard: true
            }
        },
        methods: {
            closeCard() {
                this.showCard = false
            }
        },
        name: "MainCardComponent"
    }
</script>

<style scoped>
    .about {
        position: relative;
    }

    .close {
        position: absolute;
        top: 0;
        right: 15px;
        font-size: 35px;
        cursor: pointer;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
</style>

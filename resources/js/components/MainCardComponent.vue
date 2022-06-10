<template>
    <a target="_blank" href="https://disconnect-ed.github.io/ruslan-dolgopol-portfolio/#/main">
        <b-card
            overlay
            :img-src="img"
            img-alt="Изображение карточки"
            text-variant="white"
            title="Посетите мой сайт портфолио!"
        >
            <b-card-text>
                Привет! Меня зовут Руслан Долгопол и я FullStack разработчик. Пожалуйста, посетите мой сайт портфолио и ознакомтесь с моими навыками и умениями подробнее. Хорошего дня! :)
            </b-card-text>
        </b-card>
    </a>
</template>

<script>
    export default {
        data() {
            return {
                img: 'https://picsum.photos/900/250/?image=3'
            }
        },
        name: "MainCardComponent"
    }
</script>

<style scoped>

</style>

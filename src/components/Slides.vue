<template>
    <div id="slides">
        <div class="slide-container">
            <div class="slide-title">
                <img :src="images.profile" alt="">
                <div class="title">
                    <h1>{{ images.title }}</h1>
                    <p>{{ sponsor }}</p>
                </div>
            </div>
            <div class="slideImage" :style="setBackgroundImage"></div>
            <div class="slide-btn">
                <button>View</button>
                <span><i class="fa fa-angle-right"></i></span>
            </div>
        </div>
        <div class="slide-container">
            <div class="slide-title">
                <img :src="images.profile" alt="">
                <div class="title">
                    <h1>{{ images.title }}</h1>
                    <p>{{ sponsor }}</p>
                </div>
            </div>
            <div class="slideImage" :style="setBackgroundImage"></div>
            <div class="slide-btn">
                <button>View</button>
                <span><i class="fa fa-angle-right"></i></span>
            </div>
        </div>
        <div class="slide-container">
            <div class="slide-title">
                <img :src="images.profile" alt="">
                <div class="title">
                    <h1>{{ images.title }}</h1>
                    <p>{{ sponsor }}</p>
                </div>
            </div>
            <div class="slideImage" :style="setBackgroundImage"></div>
            <div class="slide-btn">
                <button>View</button>
                <span><i class="fa fa-angle-right"></i></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            images: {
                type: Object,
                required: true
            },
            sponsor: {
                type: String,
                required: true
            }
        },
        computed: {
            setBackgroundImage() {
                return {backgroundImage: "url("+this.images.url+")"}}
        },
        data() {
            return {

            } 
        }
    }
</script>

<style lang="sass" scoped>
    $black-color: #292c31
    $white-color: #ffffff;

    #slides
        max-width: 80%;
        height: fit-content;
        margin: 0 auto;
        display: grid;
        grid-gap: 30px;
        grid-template-columns: repeat(3,minmax(300px,400px));
        justify-content: center;
    .slide-container
        .slide-title
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 10px;
            img
                height: (200px / 4);
                border-radius: 50%;
                &:hover
                    cursor: pointer;
            h1
                font-size: 18px;
                transform: translateY(5px);
            p
                transform: translateY(-5px);
            .title
                margin-left: 10px;
                cursor: pointer;
        .slide-btn
            height: 40px;
            background: $black-color;
            color: $white-color;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 15px;
            &:hover
                cursor: pointer;
            button
                background: none;
                outline: none;
                border: none;
                color: $white-color;
                font-size: 20px;
        .slideImage
            cursor: pointer;
            height: (400px / 2);
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
    @media screen and (max-width: 1065px)
        #slides
            grid-template-columns: 1fr 1fr;
            .slide-container:last-child
                display: none;
            .slideImage
                height: 160px;
    @media screen and (max-width: 715px)
        #slides .slideImage
            height: 120px;
    @media screen and (max-width: 500px)
        #slides
            grid-template-columns: 1fr;
            .slide-container:last-child,.slide-container:nth-child(2)
                display: none;
            .slideImage
                height: 120px;
</style>

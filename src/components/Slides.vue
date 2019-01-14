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
    *
        transition: all 1s ease-in-out;
    $black-color: #292c31
    $white-color: #ffffff;

    #slides
        max-width: 80%;
        height: fit-content;
        // background: blue;
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
            // width: 100%;
            cursor: pointer;
            // width: (500px / 2);
            height: (400px / 2);
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            // background-image: url('../assets/Slider/1.jpg');
    @media screen and (max-width: 1024px)
        #slides
            grid-template-columns: repeat(2,minmax(200px,400px));
            .slide-container
                &:last-child
                    display: none;

    @media screen and (max-width: 800px)
        #slides
            grid-template-columns: repeat(1,minmax(300px,500px));
            .slide-container
                &:nth-child(2)
                    display: none;
</style>

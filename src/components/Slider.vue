<template>
<div id="slider">
    <Slides :images="images[imageIndex]" :sponsor="sponsor"></Slides>
</div>
</template>

<script>
import Slides from './Slides.vue'

export default {
    components: {
        Slides
    },
    data() {
        return {
            // Image sige is 500 X 300
            images: [{
                    id: 0,
                    title: 'Unknown',
                    profile: 'https://seeklogo.com/images/R/rey-castro-cuban-bar-restaurant-logo-D762CFD8AF-seeklogo.com.gif',
                    url: 'http://dubbohealthfood.com/wp-content/uploads/2015/06/bigstock-Organic-Market-Fruits-And-Vege-55448555-500x300.jpg',
                },
                {
                    id: 2,
                    title: 'Unknown',
                    profile: 'https://restaurant-siemreap.com/wp-content/uploads/2017/12/restaurant-siem-reap-logo.png',
                    url: 'https://cdn.strandofsilk.com/journeymap_social_img/strand_of_silk_-_journey_map_-_kerala_-_food_-_tbiryani.jpg',
                },
                {
                    id: 3,
                    title: 'Unknown',
                    profile: 'https://www.absurdtrivia.com/qi/logos/kfc.png',
                    url: 'https://www.theupcoming.co.uk/wp-content/uploads/2018/07/Beach-Bag-Header-Image-500x300.jpeg',
                },
                {
                    id: 4,
                    title: 'Unknown',
                    profile: 'https://static1.squarespace.com/static/5294b737e4b0768dc0c51a76/t/52957038e4b035cf40455c96/1385525305067/logo_iris-200x200.png',
                    url: 'https://www.purseblog.com/images/2016/03/Coach-Saddle-23-Bag-floral-printed-haircalf-500x300.jpg',
                },
                {
                    id: 5,
                    title: 'Unknown',
                    profile: 'http://www.strawnrestaurantgroup.com/wp-content/uploads/2015/06/MRestaurant_logo_hover_300px-200x200.png',
                    url: 'https://img.purch.com/rc/500x300/aHR0cDovL21lZGlhLmJlc3RvZm1pY3JvLmNvbS9KLzEvMzM2MzQ5L29yaWdpbmFsL25va2lhLWx1bWlhLTkwMC1ldXJvcGUtMDEuanBn',
                },
                {
                    id: 6,
                    title: 'Unknown',
                    profile: 'https://sep.yimg.com/ay/yhst-8365087989875/restaurant-logo-mats-10.gif',
                    url: 'http://www.thequarteracrehomestead.com/wp-content/uploads/2015/01/iphone-410311_1280a1-500x300.jpg',
                },
            ],
            imageIndex: 0,
            sponsor: 'Sponsored'
        }
    },
    methods: {
        move() {
            let flag = this.imageIndex++
            flag++
            if (flag >= this.images.length) {
                flag = 0
            }
            this.imageIndex = flag
        }
    },
    created() {
        let self = this
        setInterval(() => {
            self.move()
        }, 5000)
    }
}
</script>

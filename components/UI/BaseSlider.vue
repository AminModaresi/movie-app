<template>
    <VueSlickCarousel v-bind="settings">
        <slot></slot>
    </VueSlickCarousel>
</template>

<script>
export default {
    data: () => ({
        settings: {
            "dots": true,
            "infinite": true,
            "slidesToShow": 7,
            "slidesToScroll": 7,
            "touchThreshold": 5,
            "autoplay": true,
            "speed": 800,
            "autoplaySpeed": 7000,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5,
                    }
                },
                {
                    breakpoint: 1050,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 650,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots : false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots : false
                    }
                },
            ]
        },
    })
}
</script>
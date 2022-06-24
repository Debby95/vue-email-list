new Vue({
    el: '#app',
    data: {
        randomEmail: [],
        currentIndex: 0,
    },
    methods: {
        generate10RandomEmail() {
            for (let i = 0; i <= 10; i++) {
                axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((axiosResponse) => {
                    this.randomEmail.push(axiosResponse.data.response);
                })
            }
        }
    }
});


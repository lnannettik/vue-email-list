
const app = new Vue ({
    el: '#app',

    data: {
        mail : '',
    },

    created() {
        this.getAPIMail();
    },

    methods: {
        getAPIMail() {

            // console.log(this);
            // const self = this;

            // axios.get('https://flynn.boolean.careers/exercises/api/random/int')
            // .then(function(result) {
            //     // console.log(result.data.response)

            //     console.log(this);

            //     self.number = result.data.response;
            // })

            https://flynn.boolean.careers/exercises/api/random/mail
        }
    }


});



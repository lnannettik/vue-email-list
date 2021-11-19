
const app = new Vue ({
    el: '#app',

    data: {
        // mail : '',
        mailList : []
    },

    created() {
        this.getAPIMail();
    },

    methods: {


        
        getAPIMail() {

                mailList = []


            for(let i = 0; i < 10; i++) {
                
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                
                .then(function(result) {
                    

                    const mail = result.data.response;
                    console.log(mail);

                    this.mailList.push(mail)

                    console.log(mailList)
                
                });
            }
        
        }

    },


});
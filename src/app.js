const app = {
    data() {
        return {
            name: "",
            input_name: "" // Data Binding.
        }
    },

    methods: {
        submitForm(e) {
            e.preventDefault();

            console.log("Envio do formulário cancelado.");

            this.name = this.input_name;
        }
    }
}

Vue.createApp(app).mount("#app");

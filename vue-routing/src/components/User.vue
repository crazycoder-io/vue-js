<template>
    <div>
        <div v-show="id">
            <p>User Id {{id}}</p>
            <p>User Id directly from params: {{ $route.params.id }}</p>
        </div>
        <br>
        <button class="btn btn-success" @click="navigateToHome">Home Component</button>
        <button class="btn btn-success" @click="navigateToHomeData">Home Component & Data Element</button>
    </div>
</template>

<script>
export default {
    name: "User",
    data() {
        return {
            id: this.$route.params.id,
        }
    },
    methods: {
        navigateToHome() {
            this.$router.push("/");
            // this.$router.push({path: "/"}); // To route with path
            // this.$router.push({name: "Anasayfa"}); // To route with name attribute
            // this.$router.push({name: "Anasayfa", query: {key: "value"}}); // Send query
            // this.$router.push({name: "Anasayfa", params: {key: "value"}}); // Set params
        },
        navigateToHomeData() {
            this.$router.push({name: "Anasayfa", hash: '#data'}); // To route with name attribute
        }
    },
    /**
     * Reactivity kazandırmak için yazılan bir kod parçası, çünkü eğer aynı bileşeni farklı bir parametre ile tekrar çağırırsak;
     * created fonksiyonu çalışmayacağı için gelen id güncellenmeyecektir.
     * Reactivity for id, cause if try to render same link with different params, it may not re-render the created action.
     * So id won't be updated.
     */
    // watch: {
    //     "$route"(to, from) {
    //         this.id = to.params.id;
    //     }
    // },
    beforeRouteEnter: (to, from, next) => {
        // component level control
        // bileşen düzeyinde kontrol
        next();
    },
    // beforeRouteLeave (to, from, next) {
    //     // component level leave control
    //     // bileşen düzeyinde çıkış kontrolü
    //     next();
    // }
}
</script>
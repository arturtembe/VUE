<template>

    <body>
        <!-- ============= HEADER ========== -->
        <HeaderView @button-clicked="handleCloseOpen"
        :closeOpen="closeOpen"/>

        <!-- ============= MAIN ========== -->
        <main class="main">

            <!-- ========== NAV BAR ============ -->
            <NavBarView/>
            
            <!-- ========== MAIN CONTAINER ============ -->
            <section class="container">

                <!-- ========== SEARCH BAR ============ -->
                <SearchBar/>

                <!-- ========== BOX CONTAINER ============ -->
                <BoxContainer/>

                <!-- ========== REPORT CONTAINER ============ -->
                <ReportContainer/>

            </section> 

        </main>

    </body>

</template>
<script>
import HeaderView from '@/components/dashboard/partial/HeaderView.vue';
import NavBarView from '@/components/dashboard/partial/NavBarView.vue';
import SearchBar from '@/components/dashboard/partial/SearchBar.vue';
import ReportContainer from '@/components/dashboard/partial/ReportContainer.vue';
import BoxContainer from '@/components/dashboard/partial/BoxContainer.vue';
import { ref } from 'vue';

export default {
    name: 'DasboardView',
    components:{
        HeaderView,
        NavBarView,
        SearchBar,
        BoxContainer,
        ReportContainer
    },
    data(){
        return {
            closeOpen:ref(false)
        }
    },
    methods:{
        handleCloseOpen(data){
            
            this.closeOpen = data? false: true;

            let nav = document.getElementById('navcontainer');
            nav.classList.toggle("navclose");
            
        }
    }
}

</script>

<style scoped>

body {
    background-color: var(--background-color4);
    max-width: 100%;
    overflow-x: hidden;
}

/* ======= MAIN ==== */
.main {
    display: flex;
    width: 100vw;
    height: 100vh;
    position: relative;
    top: 70px;
    z-index: 1;
}

/* ======= CONTAINER ======== */
.container {
    height: calc(100vh - 70px);
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 40px 30px 30px 30px;
}

.container::-webkit-scrollbar-thumb {
    background-image: 
        linear-gradient(to bottom, rgb(0, 0, 85), rgb(0, 0, 50));
}
.container::-webkit-scrollbar {
    width: 5px;
}
.container::-webkit-scrollbar-track {
    background-color: #9e9e9eb2;
}

@media screen and (max-width: 850px) {
    .container {
        padding: 40px 30px 30px 30px;
    }
}

</style>
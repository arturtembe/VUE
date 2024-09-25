<template>

    <section class="navcontainer" id="navcontainer">

        <nav class="nav">

            <div class="nav-upper-options">

                <div class="nav-option option1">
                    <img :src="dashboard" class="nav-img" alt="dashboard">
                    <h3> Dashboard</h3>
                </div>

                <div class="option2 nav-option">
                    <img :src="num9" class="nav-img" alt="articles">
                    <h3> Articles</h3>
                </div>

                <div class="nav-option option3">
                    <img :src="num5" class="nav-img" alt="report">
                    <h3> Report</h3>
                </div>

                <div class="nav-option option4">
                    <img :src="num6" class="nav-img" alt="institution">
                    <h3> Institution</h3>
                </div>

                <div class="nav-option option5">
                    <img :src="num10" class="nav-img" alt="blog">
                    <h3> Profile</h3>
                </div>

                <div class="nav-option option6">
                    <img :src="num4" class="nav-img" alt="settings">
                    <h3> Settings</h3>
                </div>

                <div class="nav-option logout">
                    <img :src="num7" class="nav-img" alt="logout">
                    <h3>Logout</h3>
                </div>

            </div>
            
        </nav>

    </section>

</template>

<script>

    import dashboard from '@/assets/avatar/Untitled-design-(29).png';
    import num4 from '@/assets/avatar/4.png';
    import num5 from '@/assets/avatar/5.png';
    import num6 from '@/assets/avatar/6.png';
    import num7 from '@/assets/avatar/7.png';
    import num8 from '@/assets/avatar/8.png';
    import num9 from '@/assets/avatar/9.png';
    import num10 from '@/assets/avatar/10.png';

    export default{
        name: '_headerViewDash',
        data(){
            
            return {
                dashboard,
                num4, num5, num6,
                num7, num8, num9, num10
            }
        }
    }

</script>

<style scoped>

.navcontainer {
    height: calc(100vh - 70px);
    width: 250px;
    position: relative;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: all 0.5s ease-in-out;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
}
.navcontainer::-webkit-scrollbar {
    display: none;
}
.nav {
    min-height: 91vh;
    width: 250px;
    background-color: var(--background-color2);
    position: absolute;
    top: 0px;
    left: 00;
    box-shadow: 1px 1px 10px rgba(198, 189, 248, 0.825);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    padding: 30px 0 20px 10px;
}
.navclose {
    width: 80px;
}
.nav-option {
    width: 250px;
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 30px 0 20px;
    gap: 20px;
    transition: all 0.1s ease-in-out;
    -webkit-transition: all 0.1s ease-in-out;
    -moz-transition: all 0.1s ease-in-out;
    -o-transition: all 0.1s ease-in-out;
}
.nav-option:hover {
    border-left: 5px solid #a2a2a2;
    background-color: #dadada;
    cursor: pointer;
}
.nav-img {
    height: 30px;
}

.nav-upper-options {
    display: flex;
    flex-direction: column;
    -ms-flex-direction: column;
    align-items: center;
    gap: 30px;
}

.option1 {
    border-left: 5px solid #010058af;
    background-color: var(--Border-color);
    color: white;
    cursor: pointer;
}
.option1:hover {
    border-left: 5px solid #010058af;
    background-color: var(--Border-color);
}

/* Responsive CSS Here */
@media screen and (max-width: 950px) {
    .nav-img {
        height: 25px;
    }
    .nav-option {
        gap: 30px;
    }
    .nav-option h3 {
        font-size: 15px;
    }
}

@media screen and (max-width: 850px) {
    .nav-img {
        height: 30px;
    }
    .nav-option {
        gap: 30px;
    }
    .nav-option h3 {
        font-size: 20px;
    }
    .navcontainer {
        width: 100vw;
        position: absolute;
        transition: all 0.6s ease-in-out;
        -webkit-transition: all 0.6s ease-in-out;
        -moz-transition: all 0.6s ease-in-out;
        -o-transition: all 0.6s ease-in-out;
        top: 0;
        left: -100vw;
    }
    .nav {
        width: 100%;
        position: absolute;
    }
}

@media screen and (max-width: 490px) {
    .nav-img {
        height: 25px;
    }
    .nav-option {
        gap: 25px;
    }
    .nav-option h3 {
        font-size: 12px;
    }
    .nav-upper-options {
        gap: 15px;
    }
}

</style>
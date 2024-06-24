<template>

    <header class="header">

        <div class="logosec">
            <div class="logo">DashStudents</div>
            <svg @click="handleCloseOpen" class="icn menuicn" id="menuicn"
                xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
        </div>

        <div class="searchbar">
            <input type="text" 
                    placeholder="Search">
            <div class="searchbtn">
                <svg class="icn srchicn"
                    xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill="#fff" d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
            </div>
        </div>

        <div class="message">
            <div class="circle"></div>
            <img :src="notification" class="icn" alt="">
            <div class="dp">
                <img :src="avatar" class="dpicn" alt="dp">
            </div>
        </div>

    </header>

</template>

<script>

    import avatar from '@/assets/avatar/avatar.png';
    import notification from '@/assets/avatar/8.png';

    export default{
        name: '_headerViewDash',
        data(){
            return {
                avatar,
                notification
            }
        },
        props:{
            'closeOpen':{
                type: Boolean
            }
        },
        methods:{
            handleCloseOpen(){
                this.$emit('button-clicked', this.closeOpen);
            }
        }
    }

</script>

<style scoped>

.header {
    height: 70px;
    width: 100vw;
    padding: 0 30px;
    background-color: var(--background-color1);
    position: fixed;
    z-index: 100;
    box-shadow: 1px 1px 15px rgba(161, 182, 253, 0.825);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 27px;
    font-weight: 600;
    color: rgb(77, 49, 179);
}

.icn {
    height: 30px;
}
.menuicn {
    cursor: pointer;
}

.searchbar,
.message,
.logosec {
    display: flex;
    align-items: center;
    justify-content: center;
}

.logosec {
    gap: 60px;
}

.searchbar input {
    width: 250px;
    height: 42px;
    border-radius: 50px 0 0 50px;
    background-color: var(--background-color3);
    padding: 0 20px;
    font-size: 15px;
    outline: none;
    border: none;
}
.searchbtn {
    width: 50px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0px 50px 50px 0px;
    background-color: var(--secondary-color);
    cursor: pointer;
}

.message {
    gap: 40px;
    position: relative;
    cursor: pointer;
}
.circle {
    height: 7px;
    width: 7px;
    position: absolute;
    background-color: #fa7bb4;
    border-radius: 50%;
    left: 19px;
    top: 8px;
}
.dp {
    height: 40px;
    width: 40px;
    background-color: #626262;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}
.dp img{
    width: 100%;
    height: 100%;
    object-fit: fill;
}

/* Responsive CSS Here */

@media screen and (max-width: 850px) {

    .searchbar {
        display: none;
    }

}

@media screen and (max-width: 490px) {
    .message {
        display: none;
    }
    .logosec {
        width: 100%;
        justify-content: space-between;
    }
    .logo {
        font-size: 20px;
    }
    .menuicn {
        height: 25px;
    }

}

@media screen and (max-width: 400px) {
    .searchbtn img {
        height: 20px;
    }
}

@media screen and (max-width: 320px) {
    .searchbtn {
        width: 40px;
    }
}

</style>
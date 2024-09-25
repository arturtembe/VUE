<template>

    <section class="searchbar2">
        <input type="text" name="" id="" placeholder="Search">
        <div class="searchbtn">
            <svg class="icn srchicn"
                xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill="#fff" d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
        </div>
    
    </section>

</template>

<script>

    export default{
        name: '_searchBarView'
    }

</script>

<style scoped>

    .searchbar2 {
        display: none;
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

    .icn {
        height: 30px;
    }

    @media screen and (max-width: 850px) {
        .searchbar2 {
            width: 100%;
            display: flex;
            margin: 0 0 40px 0;
            justify-content: center;
        }
        .searchbar2 input {
            width: 250px;
            height: 42px;
            border-radius: 50px 0 0 50px;
            background-color: var(--background-color3);
            padding: 0 20px;
            font-size: 15px;
            border: 2px solid var(--secondary-color);
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
        .searchbar2 input {
            width: 180px;
        }
    }

</style>
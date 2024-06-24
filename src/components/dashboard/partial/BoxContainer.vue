<template>

    <section class="box-container">

        <div class="box box1">
            <div class="text">
                <h2 class="topic-heading">60.5k</h2>
                <h2 class="topic">Article Views</h2>
            </div>

            <img :src="num31" alt="Views">
        </div>

        <div class="box box2">
            <div class="text">
                <h2 class="topic-heading">150</h2>
                <h2 class="topic">Likes</h2>
            </div>

            <img :src="num14" alt="likes">
        </div>

        <div class="box box3">
            <div class="text">
                <h2 class="topic-heading">320</h2>
                <h2 class="topic">Comments</h2>
            </div>

            <img :src="num32" alt="comments">
        </div>

        <div class="box box4">
            <div class="text">
                <h2 class="topic-heading">70</h2>
                <h2 class="topic">Published</h2>
            </div>

            <img :src="num13" alt="published">
        </div>

    </section>

</template>

<script>

    import num13 from '@/assets/avatar/13.png';
    import num14 from '@/assets/avatar/14.png';
    import num31 from '@/assets/avatar/Untitled-design-(31).png';
    import num32 from '@/assets/avatar/Untitled-design-(32).png';

    export default{
        name: '_boxContainerView',
        data: ()=>{
            return {
                num13, num14, num31, num32
            }
        }
    }

</script>

<style scoped>

.box-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    gap: 50px;
}
.box-container .box {
    height: 130px;
    width: 230px;
    border-radius: 20px;
    box-shadow: 3px 3px 10px rgba(0, 30, 87, 0.751);
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
}
.box-container .box:hover {
    transform: scale(1.08);
}

.box-container .box:nth-child(1) {
    background-color: var(--one-use-color);
}
.box:nth-child(2) {
    background-color: var(--two-use-color);
}
.box:nth-child(3) {
    background-color: var(--one-use-color);
}
.box:nth-child(4) {
    background-color: var(--two-use-color);
}

.box img {
    height: 50px;
}
.box .text {
    color: white;
}

/* ======= TEXT ========= */
.topic {
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 1px;
}

.topic-heading {
    font-size: 30px;
    letter-spacing: 3px;
}

</style>
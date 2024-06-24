<template>

    <section class="report-container">

        <div class="report-header">
            <h1 class="recent-Articles">Recent Articles</h1>
            <button class="view">View All</button>
        </div>

        <div class="report-body">

            <div class="report-topic-heading">
                <h3 class="t-op">Article</h3>
                <h3 class="t-op">Views</h3>
                <h3 class="t-op">Comments</h3>
                <h3 class="t-op">Status</h3>
            </div>

            <div class="items">

                <div class="item1">
                    <h3 class="t-op-nextlvl">Article 73</h3>
                    <h3 class="t-op-nextlvl">2.9k</h3>
                    <h3 class="t-op-nextlvl">210</h3>
                    <h3 class="t-op-nextlvl label-tag">Published</h3>
                </div>

                <div class="item1">
                    <h3 class="t-op-nextlvl">Article 72</h3>
                    <h3 class="t-op-nextlvl">1.5k</h3>
                    <h3 class="t-op-nextlvl">360</h3>
                    <h3 class="t-op-nextlvl label-tag">Published</h3>
                </div>

                <div class="item1">
                    <h3 class="t-op-nextlvl">Article 71</h3>
                    <h3 class="t-op-nextlvl">1.1k</h3>
                    <h3 class="t-op-nextlvl">150</h3>
                    <h3 class="t-op-nextlvl label-tag">Published</h3>
                </div>

                <div class="item1">
                    <h3 class="t-op-nextlvl">Article 70</h3>
                    <h3 class="t-op-nextlvl">1.2k</h3>
                    <h3 class="t-op-nextlvl">420</h3>
                    <h3 class="t-op-nextlvl label-tag">Published</h3>
                </div>

                <div class="item1">
                    <h3 class="t-op-nextlvl">Article 69</h3>
                    <h3 class="t-op-nextlvl">2.6k</h3>
                    <h3 class="t-op-nextlvl">190</h3>
                    <h3 class="t-op-nextlvl label-tag">Published</h3>
                </div>

                <div class="item1">
                    <h3 class="t-op-nextlvl">Article 68</h3>
                    <h3 class="t-op-nextlvl">1.9k</h3>
                    <h3 class="t-op-nextlvl">390</h3>
                    <h3 class="t-op-nextlvl label-tag">Published</h3>
                </div>

                <div class="item1">
                    <h3 class="t-op-nextlvl">Article 67</h3>
                    <h3 class="t-op-nextlvl">1.2k</h3>
                    <h3 class="t-op-nextlvl">580</h3>
                    <h3 class="t-op-nextlvl label-tag">Published</h3>
                </div>

                <div class="item1">
                    <h3 class="t-op-nextlvl">Article 66</h3>
                    <h3 class="t-op-nextlvl">3.6k</h3>
                    <h3 class="t-op-nextlvl">160</h3>
                    <h3 class="t-op-nextlvl label-tag">Published</h3>
                </div>

                <div class="item1">
                    <h3 class="t-op-nextlvl">Article 65</h3>
                    <h3 class="t-op-nextlvl">1.3k</h3>
                    <h3 class="t-op-nextlvl">220</h3>
                    <h3 class="t-op-nextlvl label-tag">Published</h3>
                </div>

            </div>

        </div>
                
    </section>

</template>

<script>

    export default{
        name: '_reportContainerView'
    }

</script>

<style scoped>

.report-container {
    min-height: 300px;
    max-width: 1200px;
    margin: 70px auto 0px auto;
    background-color: #ffffff;
    border-radius: 30px;
    box-shadow: 3px 3px 10px rgb(188, 188, 188);
    padding: 0px 20px 20px 20px;
}
.report-header {
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 20px 10px 20px;
    border-bottom: 2px solid rgba(0, 20, 151, 0.59);
}

.recent-Articles {
    font-size: 30px;
    font-weight: 600;
    color: #5500cb;
}

.view {
    height: 35px;
    width: 90px;
    border-radius: 8px;
    background-color: #5500cb;
    color: white;
    font-size: 15px;
    border: none;
    cursor: pointer;
}

.report-body {
    max-width: 1160px;
    overflow-x: auto;
    padding: 20px;
}
.report-topic-heading,
.item1 {
    width: 1120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.t-op {
    font-size: 18px;
    letter-spacing: 0px;
}

.items {
    width: 1120px;
    margin-top: 15px;
}

.item1 {
    margin-top: 20px;
}
.t-op-nextlvl {
    font-size: 14px;
    letter-spacing: 0px;
    font-weight: 600;
}

.label-tag {
    width: 100px;
    text-align: center;
    background-color: rgb(0, 177, 0);
    color: white;
    border-radius: 4px;
}


/* Responsive CSS Here */
@media screen and (max-width: 950px) {
    .report-topic-heading,
    .item1,
    .items {
        width: 800px;
    }
}

@media screen and (max-width: 850px) {
    .report-topic-heading,
    .item1,
    .items {
        width: 700px;
    }
}

@media screen and (max-width: 490px) {
    .recent-Articles {
        font-size: 20px;
    }
    .report-topic-heading,
    .item1,
    .items {
        width: 550px;
    }
}

@media screen and (max-width: 400px) {
    .recent-Articles {
        font-size: 17px;
    }
    .view {
        width: 60px;
        font-size: 10px;
        height: 27px;
    }
    .report-header {
        height: 60px;
        padding: 10px 10px 5px 10px;
    }
}

@media screen and (max-width: 320px) {
    .recent-Articles {
        font-size: 12px;
    }
    .view {
        width: 50px;
        font-size: 8px;
        height: 27px;
    }
    .report-header {
        height: 60px;
        padding: 10px 5px 5px 5px;
    }
    .t-op {
        font-size: 12px;
    }
    .t-op-nextlvl {
        font-size: 10px;
    }
    .report-topic-heading,
    .item1,
    .items {
        width: 300px;
    }
    .report-body {
        padding: 10px;
    }
    .label-tag {
        width: 70px;
    }
}

</style>
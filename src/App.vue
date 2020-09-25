<template>
  <div id="app">
      <ul class="all">
          <!--导航栏    -->
          <li class="navbar">
                <navbar></navbar>
          </li>

          <!--内容区域      -->
          <li class="content" :style="myContentStyle">
                <router-view>

                </router-view>
          </li>

          <!--选项卡    -->
          <li class="tabbar">
            <tabbar>

            </tabbar>
          </li>
      </ul>
  </div>
</template>

<script>
    //引入navbar模块
    import navbar from "./components/navbar";

    //引入tabbar模块
    import tabbar from "./components/tabbar";
    export default {
        data(){
            return{
                myContentStyle:{
                    height: "0px",
                }
            }
        },
        beforeMount() {
            //    初始化内容区域的高度
            var height = document.documentElement.clientHeight;
            this.$store.commit("setContentHeight" , (height-125)+"px");

            this.myContentStyle.height =this.$store.state.contentHeight;
        },
        mounted() {

        },
        components:{
        //    为navbar做局部注册
            navbar,

        //    为tabbar做局部注册
            tabbar,
        }

    }
</script>

<style lang="scss" scoped>
    *{
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .all{
        display: flex;
        flex-direction: column;
        /*导航栏样式*/
        .navbar{
            height: 50px;
            border: 1px solid;
        }

        /*内容区域样式*/
        .content{
            border: 1px solid;
        }

        /*选项卡样式*/
        .tabbar{
            height: 50px;
            border: 1px solid;
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background: #fff;
        }
    }
</style>

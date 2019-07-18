<template>
    <!-- <div class="header-container">
        <div class="header-section">
            <div class="header-logo">
                <img src="" alt="" class="logo-map">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item v-for="value in headerTitle" :to='value.link' v-bind:key="value.link">{{value.name}}</el-breadcrumb-item>
                </el-breadcrumb>
                <Breadcrumb />
            </div>
            <div class="log-user">
                午夜蔚蓝
                <a href="javascript:;" class="log-handle">退出</a>
            </div>
        </div>
    </div> -->
    <div class="header-section">
        <div class="header-hd">
        <Breadcrumb />
        </div>
    </div>
</template>
<script>
import Breadcrumb from "@/components/BasicBreadcrumb.vue";
import axios from './../request/request'
import users from './../request/api/user'
export default {
    name:'BasicLayoutHeader',
     components: {
        Breadcrumb
    },
    created:function(){
        console.log(this.deal);
        let token = this.deal;
        if(!token.liuyinsheusertoken){
            this.$router.push({ path:'/login'})
        }
        let url = users.judge;
        axios.post( url,{
                  token:token.usertoken
              }).then((res)=>{
                console.log(res);
                if(res.data.code !== 200){
                    this.$router.push({ path:'/login'})
                }
                })
                .catch((e)=> {
                    this.$router.push({ path:'/login'})
                })
                .finally(function () {
                });

    },
    computed:{
        // headerTitle:function(){
        //     console.log(this.$route);
        //     return this.$route.matched.filter(data => data.meta && data.meta.breadcrumb).map(item => {
        //         console.log(item)
        //         return {
        //             name:item.meta.breadcrumb.title,
        //             link:item.meta.breadcrumb.replace ? { name: item.name } : undefined
        //         }
        //     })
        // }
        deal: function(){ 
          var cookie = document.cookie;
          console.log(cookie)
          var arr = cookie.split(';');
          console.log(arr);
          var obj = {};
          arr.forEach(function(item){
            var itemArr = item.split('=');
              obj[itemArr[0].trim()] = itemArr[1].trim();
          })
          
          return obj;
        }
    },
}
</script>
<style lang="less">
    .header-container{
        height: 70px;
        width: 100%;
        .header-section{
            display: flex;
            justify-content: space-between;
            line-height: 70px;
            padding: 0 20px;
            .header-logo{
                color: rgb(22, 37, 59);
                font-size: 23px;
                .el-breadcrumb{
                    display: inline-block;
                }
            }
            .log-user{
                color: rgb(84, 112, 134);
                font-size: 18px;
                .log-handle{
                    text-decoration: none;
                    color: #fff;
                    margin-left: 10px;
                }
            }
        }
    }
</style>



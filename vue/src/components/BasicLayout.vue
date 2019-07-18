<template>
<!-- <div class="page-wrapper">
  <div class="page-sider">
      <Sider/>
  </div>
  <div class="page-mainer">
    <div class="page-header"><Header/></div>
    <div class="page-body">
      <router-view></router-view>
    </div>
    <div class="page-footer">
      <Footer/>
      </div>
  </div>
</div> -->
<div class="page-wrapper">
    <div class="page-sider"><Sider/></div>
    <div class="page-mainer">
      <div class="page-header"><Header/></div>
      <div class="page-body">
        <router-view></router-view>
      </div>
      <div class="page-footer"><Footer/></div>
    </div>
  </div>
</template>
<script>
import Header from './BasicLayoutHeader.vue';
import Footer from './BasicLayoutFooter.vue';
import Sider from './BasicLayoutSider.vue';
export default {
  name:'BasicLayout',
  components: {
    Header,
    Sider,
    Footer,
  }
}
</script>
<style lang="less">
*{
  padding:0;
  margin: 0;
  box-sizing: border-box;
}
html,body{
  width: 100%;
  height: 100%;
}
// .page-wrapper{
//   width: 100%;
//   height: 100%;
//   display: flex;
// }
//   .page-sider{
//     width: 200px;
//     height: 100vh;
//   }
//   .page-mainer{
//     flex: 1;
//     display: flex;
//      flex-direction:column;
//      justify-content: space-between;
//     .page-header{
//       width: 100%;
//     }
//     .page-body{
//       flex: 1;
//     }
//   }
.page-wrapper {
  height: 100vh;
  background-color: #f0f2f5;
  display: flex;
}

.page-sider {
  position: relative;
  background-color: #fff;
  box-shadow: 2px 0 8px 0 rgba(29, 35, 41, 0.05);
  width: 240px;
}

.page-mainer {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.page-header {
  background-color: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
  position: relative;
  z-index: 10;
  height: 64px;
}

.page-body {
  flex: 1;
}

.page-footer {
  text-align: center;
  font-size: 12px;
  line-height: 40px;
  opacity: 0.4;
}
</style>


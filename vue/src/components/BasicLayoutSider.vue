<template>
    <div class="sider-container">
        <div class="sider-section">
            <el-row class="tac">
                <el-col >
                    <el-menu
                    class="el-menu-vertical-demo"
                    >
                    <template v-for="value in data">
                            <el-submenu v-if="value.children" :index="value.link" v-bind:key="value.link"> 
                                <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>{{value.title}}</span>
                                </template>
                                <el-menu-item-group>
                                    <template slot="title">{{value.title}}</template>
                                    <template v-for="item in value.children">
                                        <el-menu-item v-if="!item.children" :index="item.link" v-bind:key="item.link"><router-link :to="item.link">{{item.title || item.name}}</router-link></el-menu-item>
                                        <template v-if="item.children" >
                                            <el-submenu>
                                                <template slot="title">{{item.title || item.name}}</template>
                                                <template v-for="son in item.children">
                                                    <el-menu-item :index="son.link" v-bind:key="son.link"><router-link :to="son.link">{{son.title || son.name}}</router-link></el-menu-item>
                                                </template>
                                            </el-submenu>
                                        </template>
                                    </template>
                                </el-menu-item-group>
                            </el-submenu>
                            <el-menu-item v-if="!value.children" :index="value.link" v-bind:key="value.link">
                                 <i class="el-icon-menu"></i>
                                <span slot="title"> 
                                    <router-link :to="value.link">{{value.title}}</router-link>
                                </span>
                            </el-menu-item>
                        </template>
                    </el-menu>
                    
                </el-col>
            </el-row>
        </div>
    </div>
      <!-- <el-menu :default-active="path" :router="true">
    <template v-for="route in filterRoutes">
      <el-submenu
        v-if="hasNavChildren(route)"
        :index="route.path"
        :key="route.path"
      >
        <template slot="title">
          <i v-if="route.meta.nav.icon" :class="route.meta.nav.icon"></i>
          <span slot="title">{{ route.meta.nav.title }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            v-for="route in route.children"
            :key="route.path"
            :index="route.path"
            :route="{ path: route.path }"
            :id="route.name"
          >
            <i v-if="route.meta.nav.icon" :class="route.meta.nav.icon"></i>
            <span slot="title">{{ route.meta.nav.title }}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-menu-item
        v-else
        :key="route.path"
        :disabled="route.disabled"
        :index="route.path"
        :route="{ path: route.path }"
        :id="route.name"
      >
        <i v-if="route.meta.nav.icon" :class="route.meta.nav.icon"></i>
        <span slot="title">{{ route.meta.nav.title }}</span>
      </el-menu-item>
    </template>
  </el-menu> -->
</template>
<script>
import routesPermission from "./../router/routesPermission"
export default {
    name:'BasicLayoutSider',
    data(){
        return{
            data:[],
        }
    },
    created:function(){
        let geyrouter= this.filtrate(routesPermission[0].children);
        this.data = geyrouter;
    },
    methods:{
        filtrate(arr) {
            let all = arr.map(data => {
                let item = [];
                if(data.meta){
                    if(!data.meta.nav){
                        item = {
                            title:data.name,
                            link:data.path,
                            name:data.name,
                        }
                    }else{
                        item = {
                            title:data.meta.nav.title,
                            link:data.path,
                            name:data.name,
                        }
                    }
                    if(data.children){
                        item.children = this.filtrate(data.children);
                    }
                }else{
                    item = {
                        link:data.path,
                        name:data.name,
                    } 
                }
                return(item);
            })
            return all;
        }
    }
}


// import routes from "@/router/routes";

// export default {
//   data() {
//     return {
//       path: this.$route.path,
//       filterRoutes: []
//     };
//   },
//   created() {
//     this.getRoutes();
//   },
//   watch: {
//     $route(to) {
//       this.path = to.path;
//     }
//   },
//   methods: {
//     getRoutes() {
//       this.filterRoutes = this.filterNavigator(routes);
//     },
//     filterNavigator(node) {
//       let result = [];
//       node.forEach(data => {
//         if (data.meta && data.meta.nav) {
//           let item = {
//             path: data.path,
//             name: data.name,
//             meta: data.meta
//           };
//           if (data.children) {
//               console.log(data);
//             item.children = this.filterNavigator(data.children);
//           }
//           console.log(item);
//           result.push(item);
//         } else if (data.children) {
//           this.filterNavigator(data.children).forEach(item =>
//             result.push(item)
//           );
//         }
//       });
//       return result;
//     },
//     hasNavChildren(route) {
//       const children = route.children || [];
//       return children.some(data => data.meta && data.meta.nav);
//     }
//   }
// };
</script>
<style lang="less">
    a{
        text-decoration: none;
        color: #333;
    }
    // .sider-container{
    //     height: 100%;
    //     border-right: 1px solid #999;
    //     .el-menu{
    //         border: none;
    //     }
    // }

    .el-menu {
        border-right: none;
    }
</style>
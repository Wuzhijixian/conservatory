<template>
    <!-- <div class="user-container">
        <p class="Create-title">创建新的账号:</p>
        <div class="Create-section">
            <div class="Create-input">
                <p class="input-title">账户: </p>
                <el-input v-model="phone" placeholder="请输入手机号码" minlength="11" maxlength="11" @blur="judgevalue"></el-input>
            </div>
            <div class="Create-input">
                <p class="input-title">密码: </p>
                <el-input v-model="code" placeholder="请输入密码"></el-input>
            </div>
            <div class="Create-input">
                <p class="input-title">用户昵称: </p>
                <el-input v-model="name" placeholder="请输入用户昵称"></el-input>
            </div>
            <el-button @click="adduser">创建</el-button>
        </div>
         <div class="alluser-container">
             <el-table
                :data="alluser"
                style="width: 100%">
                <el-table-column
                label="用户ID"
                width="180">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.id }}</span>
                </template>
                </el-table-column>
                <el-table-column
                label="用户昵称"
                width="180">
                <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                    <p>手机_账户: {{ scope.row.user_phone }}</p>
                    <p>密码: {{ scope.row.user_code }}</p>
                    <div slot="reference" class="name-wrapper">
                        <el-tag size="medium">{{ scope.row.user_name }}</el-tag>
                    </div>
                    </el-popover>
                </template>
                </el-table-column>
                <el-table-column
                label="创建时间"
                >
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.created_time }}</span>
                </template>
                </el-table-column>
                <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
                </el-table-column>
            </el-table>
        </div>
            <el-dialog
            title="编辑"
            :visible.sync="dialogVisible"
            width="30%"
            >
            <div class="Create-input">
                <p class="input-title">账户: </p>
                <el-input v-model="newphone" placeholder="请输入手机号码" minlength="11" maxlength="11" @blur="judgevalue"></el-input>
            </div>
            <div class="Create-input">
                <p class="input-title">密码: </p>
                <el-input v-model="newcode" placeholder="请输入密码"></el-input>
            </div>
            <div class="Create-input">
                <p class="input-title">用户昵称: </p>
                <el-input v-model="newname" placeholder="请输入用户昵称"></el-input>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="editUser">确 定</el-button>
            </span>
            </el-dialog>
    </div> -->
    <div>
        123
    </div>
   
</template>
<script>
// import axios from 'axios';
// import users from './../api/user'
// export default {
//   data() {
//     return {
//       name:'',
//       code:'',
//       phone:'',
//       alluser:null,
//       dialogVisible:false,
//       newname:'',
//       newcode:'',
//       newphone:'',
//       newid:''
//     }
//   },
//   created:function(){
//       this.getuser()
//   },
//   methods:{
//       judgevalue:function(){
//           if(this.phone.search(/^1[3456789]\d{9}$/) == -1){
//               this.$message('请填写正确手机号码');
//               if(this.dialogVisible){
//                 this.newphone = '';  
//               }
//               this.phone = '';
              
//           }
//       },
//       adduser:function(){
//           let url = users.adduser();
//           let time = users.newTime()
//           if(this.code && this.name && this.phone){
//               axios.post( url,{
//                   user_name:this.name,
//                   user_code:this.code,
//                   created_time:time,
//                   user_phone:this.phone
//               }).then((res)=>{
//                 console.log(res);
//                 if(res.data.code == 200){
//                     this.$message(res.data.data);
//                     this.getuser()
//                     this.name = '';
//                     this.code = '';
//                     this.phone = '';
//                 }else{
//                     this.$message(res.data.data);
//                 }
//                 })
//                 .catch((e)=> {
//                     this.$message('创建失败，请重新添加');
//                 })
//                 .finally(function () {
//                 });
//           }else{
//             this.$message('创建失败，请填写全部资料');
//           }
          
//       },
//       getuser:function(){
//           let url = users.getalluser();
//                 axios.get( url,{
//               }).then((res)=>{
//                 if(res.data.code == 200){
//                     this.alluser = res.data.data;
//                 }else{
//                     this.$message('获取数据失败，请注意网速');
//                 }
//                 })
//                 .catch((e)=> {
//                     this.$message('获取数据失败，请注意网速');
//                 })
//                 .finally(function () {

//                 });
//       },
//       handleEdit(index, row) {
//         this.newname = row.user_name;
//         this.newcode = row.user_code;
//         this.newphone = row.user_phone;
//         this.newid = row.id;
//         this.dialogVisible = true
//       },
//       handleDelete(index, row) {
//         let url = users.deleteuser()
//         let id = row.id;
//         axios.delete( url + id,{
//         }).then((res)=>{
//         console.log(res);
//             if(res.data.code == 200){
//                 this.$message(res.data.data);
//                 this.getuser()
//             }else{
//                 this.$message(res.data.data);
//             }
//         })
//         .catch((e)=> {
//             this.$message(e.data.data);
//         })
//         .finally(function () {
            
//         });
//       },
//       editUser(){
//         let created_time = users.newTime();
//         let url = users.edituser()
//         let id = this.newid;
//         let user_name = this.newname;
//         let user_code = this.newcode;
//         let user_phone = this.newphone;
//         axios.put( url + id,{
//             user_name,
//             user_code,
//             user_phone,
//             created_time
//         }).then((res)=>{
//         console.log(res);
//             if(res.data.code == 200){
//                 this.$message(res.data.data);
//                 // this.getuser()
//             }else{
//                 this.$message(res.data.data);
//             }
//         })
//         .catch((e)=> {
//             this.$message(e.data.data);
//         })
//         .finally( ()=> {
//             this.dialogVisible = false
//             this.newname = '';
//             this.newcode = '';
//             this.newphone = '';
//             this.newid = '';
//             this.getuser()

                
//         });
//       }
//   }
// }
</script>
<style lang="less">
// .user-container{
//     padding-left: 30px;
//     box-sizing: border-box;
// }
// .Create-title{
//     font-size: 20px;
//     color: #333;
//     margin:10px;
//     font-weight: 300;

// }
//     .Create-section{
//         display: flex;
//         padding: 20px 30px;
//         align-items: flex-end;
//         .Create-input{
//             margin-right: 30px;
//             color: #999;
//             font-weight: 300;
//             font-size: 18px;
//             display: flex;
//             align-items: center;
//             .input-title{
//                 flex-shrink:0;
//                 margin-right: 20px;
//             }
//             .el-input{
//                 width: 200px;;
//             }
//         }
//         .el-button{
//             height: 38px;
//         }
//     }
</style>

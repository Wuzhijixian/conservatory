<template>
    <div class="login-container">
      <div class="login-section">
        <div class="logs-container">
          <div class="logs-header">
            <!-- <img src="~@/assets/logo.png" alt="" class="logs-header_img">  -->
            留音社
          </div>
          <div class="logs-center">
            <div class="logs-center_select">
              <p class="logs-center_select_code" :class="{active: show == 1}" @click="handleShow(1)">
                账号登录
              </p>
            </div>
            <el-form
                :model="rules1"
                status-icon
                :rules="passwordRules1"
                ref="rules1"
              >
              <div class="select_code_section"  :class="{active: show == 1}">
                  <el-form-item prop="input1" id="el-input123">
                    <el-input
                      type="number"
                      prefix-icon="el-icon-user"
                      placeholder="请输入手机号码"
                      v-model="rules1.input1">
                    </el-input>
                  </el-form-item>
                  <el-form-item prop="input2"  id="el-input321">
                    <el-input
                      show-password
                      prefix-icon="el-icon-lock"
                      placeholder="请输入密码"
                      v-model="rules1.input2">
                    </el-input>
                  </el-form-item>
                </div>
                </el-form>
            <div class="logs-center_register">
              <el-switch
                v-model="log"
                active-color="rgb(38, 190, 236)"
                inactive-color="#999"
                
                active-text="自动登录">
              </el-switch>
            </div>
          </div>
          <div class="logs-footer">
            <el-button type="primary" @click="logs">登录</el-button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

import axios from 'axios';
import users from './../api/user'

export default {
  data() {
    return {
      show:1,
      rules1:{
        input1:'',
        input2:'',
      },
      rules2:{
        input3:'',
        input4:'',
        
      },
      log:true,
      verifyNO:true,
      verify:'获取验证码',
      passwordRules1:{
        input1:[
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { max: 11, pattern: /^1[3456789]\d{9}$/, message: '请输入正确手机号码', trigger: 'blur' }
        ],
        input2:[
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
      },
      passwordRules2:{
        input3:[
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { max: 11, pattern: /^1[3456789]\d{9}$/, message: '请输入正确手机号码', trigger: 'blur' }
        ],
        input4:[
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { max: 4, message: '请输入正确验证码', trigger: 'blur' }
        ]
      }
      
    }
  },
  methods:{
   handleShow:function(index){
     this.rules1.input1 = '';
     this.rules1.input2 = '';
     this.rules2.input3 = '';
     this.rules2.input4 = '';
     this.show = index;
   },
   handleVerify:function(){
     if(!this.verifyNO){
       return
     }
    this.verifyNO = false;
    let time = 60;
    this.verify = time + '秒后重发';
    const interval = setInterval(() => { 
      time -= 1;
      this.verify = time + '秒后重发';
      if(time <= 0){
        this.verifyNO = true;
        this.verify = '重新发送';
        window.clearInterval(interval);
      }
    }, 1000);
    
   },
   logs:function(){
     let formName;
     let name = null;
     let code =null;
     let url = users.verifyUser();
    if(this.show == 1){
      name = this.rules1.input1;
      code = this.rules1.input2
      formName = 'rules1';
    }else{
       name = this.rules2.input1;
      code = this.rules2.input2
      formName = 'rules2';
    }
     this.$refs[formName].validate((valid) => {
      if (valid) {
        axios.get( url + '?user_phone=' + name + '&user_code=' + code)
        .then((res)=>{
          if(res.data.code == 200){
            document.cookie ="usertoken=" + res.data.token + ';';
            this.$router.push({ path:'/'})
          }else{
            this.$message('账号或者密码错误，请重新填写');

          }
        })
        .catch((e)=> {
          this.$message('账号或者密码错误，请重新填写');
        })
        .finally(function () {
        });

      } else {
        this.$message('账号或者密码错误，请重新填写');
        return false;
      }
    });
   },
  }
}
</script>

<style lang="less" scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,body{
  width: 100%;
  height: 100%;
  .login-container,login-section{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin-top: 180px;
    background-image: url('https://one.jiker.com/img/antd-login-bg.5825f033.svg');
    .logs-container{
      width: 300px;
      text-align: center;
      .logs-header{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 36px;
        color: #333;
        font-weight: 500;
        margin-bottom: 15px;
        .logs-header_img{
          width: 30px;
          height: 30px;
          margin-right: 10px;
        }
      }
      .logs-center_select{
        display: flex;
        justify-content: center;
        font-size: 24px;
        line-height: 60px;
        color: #333;
        .logs-center_select_code{
          margin: 0 10px; 
        }
        .logs-center_select_code.active{
          margin: 0 10px; 
          position: relative;
          &:after{
            content: '';
            display: inline-block;
            width: 60px;
            height: 2px;
            background-color: #0f9cee;
            position: absolute;
            bottom: 2px;
            left: 50%;
            transform: translateX(-50%)
          }
        }
        .logs-center_select_phone{
          margin: 0 10px;
        }
        .logs-center_select_phone.active{
          position: relative;
          &:after{
            content: '';
            display: inline-block;
            width: 60px;
            height: 2px;
            background-color: #0f9cee;
            position: absolute;
            bottom: 2px;
            left: 50%;
            transform: translateX(-50%)
          }
        }
      }
      .select_code_section{
        display: none;
        width:300px;
        margin: 20px auto;
        text-align: center;
        .el-form-item__content{
          margin-bottom: 20px;
          .el-input{
            margin: 20px 0;
            font-size: 16px;
            color: #333;
            
          }
        }
        
      }
      .select_code_section.active{
        display: inline-block;
      }
      // .select_phone_section{
      //   display: none;
      //   width:300px;
      //   margin: 20px auto;
      //   text-align: center;
      //   .el-input{
      //     margin: 10px 0;
      //     font-size: 16px;
      //     color: #333;
      //     &:after {
      //       display: none;
      //     }
      //     &.link {
      //       font-size: 14px;
      //       font-weight: 500;
      //       text-align: center;
      //       color: #409eff;
      //       text-decoration: none;
      //     }
          
      //   }
      //   .icon-lock_section{
      //     display: flex;
      //     align-items: center;
      //     .el-button{
      //       height: 100%;
      //       margin-left: 10px;
      //       vertical-align: top;
      //       height: 40px;
      //       padding: 0 20px;
      //     }
      //     .el-button.active{
      //       background-color: #97badd;
      //     }
      //   }
      // }
      .select_phone_section.active{
        display: inline-block;
      }
      .logs-center_register{
        text-align: left;
        .el-switch{
          margin-left: 0;
          color: #333;
          font-size: 16px;
        }
        
      }
      .logs-footer{
        width: 100%;
        .el-button{
          width: 100%;
          margin-top: 30px;
          height: 40px;
        }
      }
    }
  }
}
.el-form-item__content{
  margin-bottom: 20px;
}
</style>
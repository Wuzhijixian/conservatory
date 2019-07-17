const user = require('./../models/user.js');
const authCodeFunc = require('./../utils/authCode.js');

const userControllers = {
    verifyUser: async function(req,res,next){
        console.log(123)
        let user_phone = req.query.user_phone;
        let user_code = req.query.user_code;
        console.log(user_code,user_phone);
        try{
            let users = await user.select({user_phone,user_code});
            console.log(users,12321);
            if(users.length > 0){
                let auth_Code = user_phone +'\t'+ user_code +'\t';
                auth_Code = authCodeFunc(auth_Code,'ENCODE');
                res.cookie('ac', auth_Code, { maxAge: 24* 60 * 60 * 1000, httpOnly: true });
                res.json({code:200,data:'有此用户',token:auth_Code})
            }else{
                res.json({code:0,data:'无此用户'})
            }
        }catch(e){
            console.log(e);
            res.json({code:0,data:'无此用户'})
        }
    },
    addUser:async function(req, res, next){
        let user_name = req.body.user_name;
        let user_code = req.body.user_code;
        let user_phone = req.body.user_phone;
        let created_time = req.body.created_time
        if(!user_name || !user_code || !user_phone || !created_time){
            return  res.json({code:0,data:'缺少参数'})

        }
        try{
            let judge = await user.select({user_phone});
            if(judge.length <= 0){
                let users = await user.insert({user_name,user_code,created_time,user_phone});
                if(users.length > 0){
                    res.json({code:200,data:'添加成功'})
                }else{
                    res.json({code:0,data:'添加失败'})
                }
            }else{
                return res.json({code:0,data:'用户已存在'})
            }
            
            console.log(user,12321);
            
        }catch(e){
            console.log(e);
            res.json({code:0,data:'添加失败'})
        }
    },
    getallUser:async function(req,res,next){
        try{
            let userData = await user.all();
            res.json({code:200,data:userData})
        }catch{
            res.json({code:0,data:'获取失败'})

        }
    },
    deleteUser:async function(req, res, next){
        let id = req.params.id;
        console.log(id)
        try{
            let userData = await user.delete(id);
            if(userData){
                res.json({code:200,data:"删除成功"})
            }
        }catch{
            res.json({code:0,data:"删除失败"})
        }
    },
    editUser:async function(req, res, next){
        try{
            let id = req.params.id;
            let user_name = req.body.user_name;
            let user_code = req.body.user_code;
            let user_phone = req.body.user_phone;
            let created_time = req.body.created_time;
            let putuser = await user.update(id,{user_name,user_code,user_phone,created_time});
            if(putuser){
                res.json({code:200,data:"修改成功"})

            }
        }catch{
            res.json({code:0,data:"修改失败"})

        }
    }
    
}
module.exports = userControllers;
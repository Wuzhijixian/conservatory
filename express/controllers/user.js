const User = require('./../models/user.js');
const authCodeFunc = require('./../utils/authCode.js');

const userControllers = {
    login: async function(req,res,next){
        let user_phone = req.body.user_phone;
        let user_code = req.body.user_code;
        try{
            console.log(user_code,user_phone);
            let user = await User.select({user_phone,user_code});
            console.log(user)
            if(user.length > 0){
                let auth_Code = user_phone +'\t'+ user_code +'\t';
                let newauth_Code = authCodeFunc(auth_Code,'ENCODE');
                res.json({code:200,data:'有此用户',token:newauth_Code})
            }else{
                res.json({code:0,data:'1无此用户'})
            }
        }catch(e){
            res.json({code:0,data:'无此用户'})
        }
    },
    add:async function(req, res, next){
        let user_name = req.body.user_name;
        let user_code = req.body.user_code;
        let user_phone = req.body.user_phone;
        let created_at = req.body.created_at
        if(!user_name || !user_code || !user_phone || !created_at){
            return  res.json({code:0,data:'缺少参数'})
        }
        try{
            let judge = await User.select({user_phone});
            if(judge.length <= 0){
                let user = await User.insert({user_name,user_code,created_at,user_phone});
                res.json({code:200,data:'添加成功'})
            }else{
                return res.json({code:0,data:'用户已存在'})
            }
        }catch(e){
            console.log(e);
            res.json({code:0,data:'添加失败'})
        }
    },
    all:async function(req,res,next){
        try{
            let user = await User.all();
            res.json({code:200,data:user})
        }catch{
            res.json({code:0,data:'获取失败'})

        }
    },
    del:async function(req, res, next){
        let id = req.params.id;
        console.log(id)
        try{
            let user = await User.delete(id);
            res.json({code:200,data:"删除成功"})
        }catch{
            res.json({code:0,data:"删除失败"})
        }
    },
    edit:async function(req, res, next){
        try{
            let id = req.params.id;
            let user_name = req.body.user_name;
            let user_code = req.body.user_code;
            let user_phone = req.body.user_phone;
            let updated_at = req.body.updated_at;
            if(!user_name || !user_code || !user_phone || !updated_at || !id){
                return  res.json({code:0,data:'缺少参数'})
            }
            let user = await User.update(id,{user_name,user_code,user_phone,updated_at});
                res.json({code:200,data:"修改成功"})
        }catch{
            res.json({code:0,data:"修改失败"})

        }
    },
    judge:async function(req,res,next){
        try{
            let token = req.body.token;
            console.log(token)
            let auth_Code = authCodeFunc(token,'DECODE');
            let newauthArr = auth_Code.split("\t");
            console.log(newauthArr);
            let user_phone = newauthArr[0];
            let user_code= newauthArr[1];
            let user = await User.select({user_phone,user_code});
            res.json({code:200,data:"有此用户"})
        }catch{
            res.json({code:0,data:"无此用户"})
        }
    }
    
}
module.exports = userControllers;
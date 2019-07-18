// class routers  {
//     constructor(props) {
//         this.api = 'http://localhost:3000'
//     }
//     newTime(){
//         let character =['日','一','二','三','四','五','六'];
//         let newData = new Date();
//         // 年
//         let years = newData.getFullYear();
//         // 月
//         let month =`${newData.getMonth()}`.length == 1 ? '0' + (newData.getMonth()) : newData.getMonth();
//         // 日
//         let day = `${newData.getDate()}`.length == 1 ? '0' + (newData.getDate()) : newData.getDate();
//         // 周
//         let week = newData.getDay();
//         // 时
//         let hour = `${newData.getHours()}`.length == 1 ? '0' + (newData.getHours()) : newData.getHours();
//         // 分
//         let minute = `${newData.getMinutes()}`.length == 1 ? '0' + (newData.getMinutes()) : newData.getMinutes();
//         // 秒
//         let second = `${newData.getSeconds()}`.length == 1 ? '0' + (newData.getSeconds()) : newData.getSeconds(); 
//         let time = `${years}年${month}月${day}日  周${character[week]}  ${hour}:${minute}:${second}`;
//         return time
//     }
//     verifyUser(){
//         let url = this.api + '/api/login'
//         return url;
//     }
//     adduser(){
//         let url = this.api + '/api/user'
//         return url;
//     }
//     getalluser(){
//         let url = this.api + '/api/user'
//         return url;
//     }
//     deleteuser(){
//         let url = this.api + '/api/user/'
//         return url;
//     }
//     edituser(){
//         let url = this.api + '/api/user/'
//         return url;
//     }
// }
// // console.log(routers.verifyUser());
// export default new routers()


// const MODE = 'devlopment';
const MODE = 'production';
const PRODUCTION_PREFIX = 'http://localhost:3000';
const DEVELOPMENT_PREFIX = '';
const PREFIX =  ( MODE === 'production' ) ? PRODUCTION_PREFIX : DEVELOPMENT_PREFIX;
export default {
    verifyUser: `${PREFIX}/api/login`,
    adduser: `${PREFIX}/api/user/`,
    getalluser: `${PREFIX}/api/user`,
    deleteuser: `${PREFIX}/api/user/`,
    edituser: `${PREFIX}/api/user/`,
    judge:`${PREFIX}/api/judge`,
  plan: (id) => `${PREFIX}/api/user/${id}`,
}
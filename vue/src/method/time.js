export default {
    Time:function(){
                let character =['日','一','二','三','四','五','六'];
                let newData = new Date();
                // 年
                let years = newData.getFullYear();
                // 月
                let month =`${newData.getMonth()}`.length == 1 ? '0' + (newData.getMonth()) : newData.getMonth();
                // 日
                let day = `${newData.getDate()}`.length == 1 ? '0' + (newData.getDate()) : newData.getDate();
                // 周
                let week = newData.getDay();
                // 时
                let hour = `${newData.getHours()}`.length == 1 ? '0' + (newData.getHours()) : newData.getHours();
                // 分
                let minute = `${newData.getMinutes()}`.length == 1 ? '0' + (newData.getMinutes()) : newData.getMinutes();
                // 秒
                let second = `${newData.getSeconds()}`.length == 1 ? '0' + (newData.getSeconds()) : newData.getSeconds(); 
                let time = `${years}年${month}月${day}日  周${character[week]}  ${hour}:${minute}:${second}`;
                return time
            }
}
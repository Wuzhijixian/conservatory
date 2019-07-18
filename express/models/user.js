// 定义连接数据库的哪张表

const model = require('./base.js');
class mood extends model {
    constructor(props = 'manager') {
        super(props)
    }
}
module.exports = new mood();
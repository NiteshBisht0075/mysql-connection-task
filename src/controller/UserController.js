const User = require('../model/User');
// const Project = require('../model/Project');
module.exports = {

    async add(ctx){
        try {
          const {body} = ctx.request;
          var user = await db.query(`SELECT * FROM users WHERE user_id=`+body.user_id+``);
          if(user.length>0){
            ctx.throw(406, 'Not Acceptable! User with same id already exist');
          }else{
            const response = await User.getInstance().addUser(body);
            ctx.body = { status: "success", response: response };
          }
        } catch (err) {
          ctx.throw(500, err)
        }
      }
}
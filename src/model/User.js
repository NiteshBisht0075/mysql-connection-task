
class User {
  constructor(){}
  async addUser(param){
    var response = await db.query(`INSERT INTO users(user_id,name,age,project_id) VALUES(`+param.user_id+`,'`+param.name+`',`+param.age+`,`+param.project_id+`)`);
    return response;
  }
}
module.exports = User;
module.exports.getInstance = () => new User();

// Give the Home View
module.exports.home=function(req,res){
    return res.render('home.ejs',{
        title:'Home'
    })
}

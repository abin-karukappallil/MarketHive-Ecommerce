const MongoClient = require('mongodb').MongoClient
const state = {
    db:null
}
module.exports.connect=function(done){
    const uri=""
    const dbname = "MarketHive"

    MongoClient.connect(uri,(err,data)=>{
        if(err) return done(err)
        state.db=data.db(dbname)
    done()
    })

}
module.exports.get=function(){
    return state.db
}

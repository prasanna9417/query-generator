
module.exports.create = (req,res)=>{
    const body = req.body
    if(body.table){
        if(Object.keys(body).length==1){
            res.json({query: `SELECT * FROM ${body.table}`})
        }else{
        
            let query = 'SELECT '
            Object.keys(body).forEach(function(key){
                if(key!='table'){ 
                    query+= ` ${body[key]},`
                }
            })
            query+=` FROM ${body.table}`
            res.json({output: query}) 
        }
        
    }else{
        res.json({message: "table name should be included"})
    }
}

//example:
//{
//    "table" : "prasanna",
//   "column1" : "city",
 //   "column2" : "state"
//}
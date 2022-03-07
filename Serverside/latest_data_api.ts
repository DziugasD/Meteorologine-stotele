
exports.latest_data =  function (app, pool){
    
    var response
    get_air_data_from_database()
    setInterval(function(){
        get_air_data_from_database()
    }, 30000)

    async function get_air_data_from_database() {
        let conn
        try{
            conn = await pool.getConnection(); 
            const rows = await conn.query("select *from weather_measurement ORDER BY ID DESC LIMIT 1 ")
            // console.log(rows)
            response = rows
        }catch(err){
            throw err; 
        }finally{
            if(conn) return conn.end()
        }
    }

    app.get('/latest_data', function (req, res){
        res.send(response) 
    })
}
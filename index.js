let express = require('express');
let app = express();
app.use(express.json());

let incomeTracker = [];

const { Database } = require("quickmongo");
const db = new Database("mongodb+srv://Week7:Week7Week7@week7.qbiwz3w.mongodb.net/?retryWrites=true&w=majority");
db.on("ready", () => {
    console.log("Connected to the database");
});
db.connect(); 



app.use('/',express.static('public'));

app.post('/Income',(req,res)=>{
    console.log(req.body);
    let currentDate = new Date();
    let options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    let formattedDate = currentDate.toLocaleDateString('en-US', options);
    let obj = {
        Date: formattedDate,
        Income: req.body.Income
    };
    db.push("incomeTracker",obj);
    res.json({task:"sucess"});
})

app.get('/History',(req,res)=>{
    db.get("incomeTracker").then(incomeData =>{
        let obj = {data: incomeData};
        res.json(obj);
    })
    
})



app.listen(5000,()=>{
    console.log('listening to localhost:5000');
})
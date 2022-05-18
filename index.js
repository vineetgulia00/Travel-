let express = require("express")
let path = require("path")
let hbs = require('hbs')

let app = express()

var templatepath = path.join(__dirname, "./template/views")
var partialpath = path.join(__dirname, "./template/partials")
hbs.registerPartials(partialpath)

let cssstaticpath = path.join(__dirname, "./public")
let imge = path.join(__dirname)


app.use(express.static(cssstaticpath))
app.use(express.static(imge))

app.set('view engine', 'hbs')
app.set('views', templatepath)


app.get("/", (req, res) => {
    res.render('project');
})

let mongoose = require ("mongoose")
mongoose.connect('mongodb://localhost:27017/nodejsdb')
.then(()=>{
    console.log("database connected.....")
}).catch((err)=>{
    console.log(err)
})

let myschema = new mongoose.Schema({

    name : {type:String , required : true},
    noofguests: Number,
    repeat:Boolean,
    date_adm: {type:Date, default: Date.now}
   })
   let Student = new mongoose.model("Student", myschema)


   let createDocs = async ()=>{
         let s2 = new Student({

             name: "vineet",
             noofguests:15,
             repeat: false,
             date_adm: "2022-01-2"
         })
    
         let s3 = new Student({
             name: "karan9",
             noofguests:20,
             repeat: true,
             date_adm: "2022-02-2"
         })
    
         let s4 = new Student({
             name: "pawan",
             noofguests:10,
             repeat: true,
             date_adm: "2022-02-2"
      })
     

         let res = await Student.insertMany([s2,s3,s4])
       console.log(res)
      }
    
        createDocs() 


app.listen("3000", () => {
    console.log("server is listening to port 3000")
})


// server creation


//1)import json server -libraysine import chynu
const jsonServer = require('json-server')

//2)create path for db.json file using router method - for storing data
const router = jsonServer.router("db.json")

//3)data sharing frontentile datas varan :- create middleware to convert json to js- defaults() method use chyth
const middleware = jsonServer.defaults()

//4)create json server :- just create koduthal jsonServer.create()  varum
const mpserver = jsonServer.create() 

//5)server should use middle ware and router :- use() ith vechttan middlewarenem router use chyunne
// aathym middilewareine paranj kodknm ennt vnm routerine paranj kodkn
mpserver.use(middleware)
mpserver.use(router)

//6)set port for server
// serverin run chyn oru port num kodknm fronteum backendum different application aan so different port set chynm
// default port 3000 aan so port set chynm
// 3000 athava crash aay poyt indeghil vere port consume chyn vndit aan process.env.PORT
const PORT = 3000 || process.env.PORT

//7)ee particular portil run chyth requestine resolve chyum listen() use chythit
mpserver.listen(PORT,()=>{
    console.log(`server running successfully at port number ${PORT}`);
})

//8)
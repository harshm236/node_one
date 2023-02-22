
const http = require('http')
const server= http.createServer((req,res)=>{
    res.write('<h1>A node is a basic unit of a data structure, such as a linked list or tree data structure. Nodes contain data and also may link to other nodes. Links between nodes are often implemented by pointers.</h1>')
    res.end()
})


server.listen(5000,()=>console.log('server started'))
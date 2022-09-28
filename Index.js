const http =require('http')
const fs=require('fs')

fs.writeFile('index.html','<h1> Hello World </h1><br><p> This is Nethaji...</p>',(err)=>{
    if(err) console.log(err)
    else console.log('file created successfully')});

http.createServer((req,res)=>{
    console.log('Server started.')
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('index.html','utf-8',(err,data)=>{
        res.write(data)
        res.end()
    })
    
}).listen(5000)
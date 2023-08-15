const express = require("express")

const app = express()

app.listen(3333)
app.use(express.json())

app.get("/cursos",(request,response)=>{
    const query = request.query
    console.log(query)
    return response.json(["curso1","curso2","curso3"])
})

app.post("/cursos",(request,response) =>{
    const body = request.body
    console.log(body)
    return response.json(["curso1","curso2","curso3","curso4"])
})

app.put("/cursos/:id",(request, response) =>{
    const {id} = request.params
    console.log(id)
    return response.json(["curso6","curso2","curso3","curso4"])
})
app.patch("/cursos/:id",(request, response) =>{
    return response.json(["curso6","curso2","curso3","curso4"])
})

app.delete("/cursos/:id",(request,response) =>{
    return response.json(["curso6","curso2","curso4"])
})


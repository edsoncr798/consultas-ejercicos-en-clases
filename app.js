const { response } = require('express');
const express=require('express');

const app=express();



app.listen(532, ()=>{
    console.log('server started at port 532')
} );



app.get('/me', (require, response)=>{

    const data=[
        {
            name: 'edson',
            age:24,
            country:'PERU'
        }
    ]



    response.status(200).json(data)

})


app.post('/metas', (req, res)=>{

    const metas=["playSoccer", "videogames", 'watch movies']


    res.status(200).json(metas)

})
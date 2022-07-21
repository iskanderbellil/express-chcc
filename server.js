
const express=require('express')

const path=require('path')
const app=express() 

const logger=require('./middelware/logger')



app.use(logger);

app.use(express.static(path.join(__dirname,"public")));

const port = process.env.port || 5000 ;
app.listen(port,()=>console.log(`server start on ${port}`))



// const port = 5000;

// const currentHour= new Date();
//  app.use('/', function(req, res,next) { (currentHour.getHours() > 9 && currentHour.getHours() < 17) ? 
//  res.send('the website is not available from 9a.m to 5p.m from Monday to Friday'): res.send('Hello');
//  next();
//  });

//  app.use(express.static('public'));
//  app.listen(5000);









//listen to the port
//app.listen(port, (err)=> {err? console.log(err) : console.log('the server is running on port 8080')});

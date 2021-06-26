const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 8000 ;

// path setup
const staticpath = path.join(__dirname , "../public/src");
const templetespath = path.join(__dirname , "../templetes/views");
const patrialspath = path.join(__dirname , "../templetes/partials");


// connect all path

app.use(express.static(staticpath));
app.set('view engine' , 'hbs');
app.set('views' , templetespath);
hbs.registerPartials(patrialspath);

// web get and set or patch and del

app.get('/' , (req,res) =>{
    res.status(201).render('index' , {name : "Morsalin"});
})

app.get('/about', (req,res) =>{
    res.status(201).render('about');
});

app.get('*' , (req,res) =>{
    res.status(404).render('404')
})

app.listen(port , ()=>{
    console.log(`Server port is ${port}`)
})
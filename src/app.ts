import express from 'express';

const app = express();

app.get('/',(req,res) => {
    res.send("wassup");
});

app.listen(8080, () => console.log("up and running"));
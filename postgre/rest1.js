import express from 'express';
const app = express();

app.use(express.json())

import mongoose from 'mongoose';
mongoose.connect("mongodb://localhost:27017/crud")

const productSchema = new mongoose.Schema({
    name: String,
    price: Number
});

const Product = mongoose.model("products", productSchema);

app.get("/products", async(req, res)=>{
    let data = await Product.find({})
    res.send(data);
});

app.post('/products', async(req, res)=>{
    let data = await Product.insertOne(req.body)
    res.send(data)
});

app.put("/products", async(req, res)=>{
    let data = await Product.updateOne({_id:req.params}, {$set:req.body})
    res.send(data)
})

app.listen(3000)
import db from "./firebase.config.js"
import express from "express"
import morgan from "morgan"
import cors from "cors"
import { collection, getDocs, getDoc, doc } from "firebase/firestore";

// const db = require("./firebase.config.js")
// const express = require('express')
// const morgan = require('morgan')
// const cors = require('cors')

const app = express()
const port = process.env.PORT || 3001

app.use(express.json())
app.use(morgan("tiny"))
app.use(cors())

app.get('/Test', async (req, res) => {
    try {
        const data =  await getDocs(collection(db, "Accesos"));
        data.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        });
        res.send(data.data())
    } catch (error) {
        console.error(error)
        res.status(400)
        res.send({"error" : "Error getting data: " + error })
    }
})

app.get('/getEntries', async (req, res) => {
    try {
        const data = await getDoc(doc(db, "Accesos", "Ventanas"))
        res.send(data.data())
    } catch (error) {
        console.error(error)
        res.status(400)
        res.send({"error" : "Error getting data: " + error })
    }
})

app.get('/getDoors', async (req, res) => {
    try {
        const data = await getDoc(doc(db, "Accesos", "Puertas"))
        res.send(data.data())
    } catch (error) {
        console.error(error)
        res.status(400)
        res.send({"error" : "Error getting data: " + error })
    }
})

app.get('/getWindows', async (req, res) => {
    try {
        const data = await getDoc(doc(db, "Accesos", "Ventanas"))
        res.send(data.data())
    } catch (error) {
        console.error(error)
        res.status(400)
        res.send({"error" : "Error getting data: " + error })
    }
})

app.get('/getLights', async (req, res) => {
    try {
        const data = await getDoc(doc(db, "Accesos", "Ventanas"))
        res.send(data.data())
    } catch (error) {
        console.error(error)
        res.status(400)
        res.send({"error" : "Error getting data: " + error })
    }
})

app.listen(port, () => {
  console.info(`IOT Project ${port}`)
})


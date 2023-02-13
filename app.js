// use express framework
const express = require("express")
const app = express()
app.use(express.static("public"))

// set template engine (PUG)
app.set("view engine", "pug")
app.set("views", "views")

// set up root handler for the root URL
app.get("/", (req, res) => {
    res.render("index", { title: "Activity 2: Apple Clone"})
})

// Start express app and listen upcoming requests
app.listen(3000, () => {
    console.log("Running on localhost:3000")
})



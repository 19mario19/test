import express from "express"
import serverless from "serverless-http"
import path from "path"

const app = express()

const __dirname = process.cwd()

const fullPath = path.join(__dirname, "public")

// Serve static files from the public directory
app.use(express.static("public"))

// Add a specific route for the root path that serves index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(fullPath, "index.html"))
})

app.get("/about", (req, res) => {
  res.sendFile(path.join(fullPath, "about.html"))
})

// For any other routes that should be handled by your function
const router = express.Router()
// Add router-specific routes here if needed
app.use("/.netlify/functions/server", router)

export const handler = serverless(app)

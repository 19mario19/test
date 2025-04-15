import express, { Router } from "express"
import serverless from "serverless-http"
import path from "path"

const app = express()
const router = Router()

app.use(express.static("public"))



router.get("/", (req, res) => {
  res.redirect("/index.html")
})

app.use("/api", router)

// Export the handler for serverless
export const handler = serverless(app)

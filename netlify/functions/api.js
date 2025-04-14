import express, { Router } from "express"
import serverless from "serverless-http"

const api = express()

// Define the router
const router = Router()

// Basic route that serves HTML content
router.get("/", (req, res) => {
  let template = /*html*/ `
    <h1>Test</h1>
    <p>This is a simple test response from your Express function.</p>
  `
  res.send(template)
})

// Use the router under the '/api' path
api.use("/api", router)

// Export the handler for serverless
export const handler = serverless(api)

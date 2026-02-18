import app from './app'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { connectDB } from './infrastructure/database/connection'

dotenv.config()

const PORT = process.env.PORT || 5000
connectDB(process.env.MONGO_URI as string)
  .then(() => {
    app.listen(PORT,() => {
      console.log(` the app is listening at http://localhost:${PORT}`)
    })
  })
  .catch((err) => {
    console.log('Failed to connect to MongoDB:', err)
    process.exit(1)
  })

import express from 'express';
import consign from 'consign';
// const router = express.Router();
const PORT = 3000;

const app = express()

app.set("json spaces", 4)

consign()
.include("models")
.then("routes")
.into(app);

app.listen(PORT, () => console.log(`TaskApi - working on port ${PORT}`));

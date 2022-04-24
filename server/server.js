require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRouter = require("./routes/authRoutes");
const ugyfelRouter = require("./routes/ugyfel");
const cikkRouter = require("./routes/cikk");
const rffejRouter = require("./routes/rffej");
const rftetRouter = require("./routes/rftet");
const keszletRouter = require("./routes/keszlet");
const commandsRouter = require("./routes/commands");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/ugyfel", ugyfelRouter);
app.use("/cikk", cikkRouter);
app.use("/rffej", rffejRouter);
app.use("/rftet", rftetRouter);
app.use("/keszlet", keszletRouter);
app.use("/commands", commandsRouter);

mongoose
  .connect(process.env.DATABASE_URL, { useNewUrlParser: true })
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port: ${process.env.PORT}`)
    )
  )
  .catch((error) => console.log(error.message));

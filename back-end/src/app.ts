import express from "express";
import cors from  "cors";
import path from  "path";
import bodyParser from  "body-parser";
import {routes}  from "./routes/route";
const port = process.env.PORT || 9000;
const app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':false}));
app.use('/api',routes);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
  });
  
app.listen(port, async () => {
    console.log(`Listening on port ${port}`);
  });
process.on('uncaughtException', function (err) {
  console.log("Error",err)
})
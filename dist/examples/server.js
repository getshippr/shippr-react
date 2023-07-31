import express from "express";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
    return res.status(200).send("ok");
});
app.listen(process.env.PORT || 8000, () => {
    console.log("Server started");
});
//# sourceMappingURL=server.js.map
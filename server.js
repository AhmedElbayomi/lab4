const express = require("express");
const app = express();

app.use(express.static(__dirname));

app.get("/meme", (req, res) => {
    try {
        const { template, top, bottom } = req.query;
        const url = `https://api.memegen.link/images/${template}/${top}/${bottom}.png`;
        res.json({ url });
    } catch {
        res.json({ error: "Failed to generate meme" });
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));

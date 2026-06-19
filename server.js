const express =require("express");
const app = express();
const PORT = process.env.PORT || 6700;

// to tell app where sttaic files are stored
app.use(express.static("frontend"));
app.listen(PORT,function(){
    console.log("App running on http://localhost:"+PORT);
});
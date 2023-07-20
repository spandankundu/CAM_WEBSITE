const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://dhndipsites:CameraDiary@DPS1101@cluster0.sgygegf.mongodb.net/", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    dbName:"youtubeRegistration",
}).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`no connection`);
})
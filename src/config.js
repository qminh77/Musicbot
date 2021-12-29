module.exports = {
    token: process.env.TOKEN || "OTA5Nzc3Njg4MTcxMDA4MDIw.YZJOfw.Vcqmo14Z0dGPwtV0GjOs3lZlRsY",  // your bot token
    prefix: process.env.PREFIX || "?", // bot prefix
    ownerID: process.env.OWNERID || "870670166835486760", //your discord id
    SpotifyID: process.env.SPOTIFYID || "52ad218fe09e463f8cb9e110902946ef", // spotify client id
    SpotifySecret: process.env.SPOTIFYSECRET || "8cba16cad2e243cda21c3fcf4538e5f8", // spotify client secret
    mongourl: process.env.MONGO_URI || "mongodb://newuser:newuser@cluster0-shard-00-00.uf6th.mongodb.net:27017,cluster0-shard-00-01.uf6th.mongodb.net:27017,cluster0-shard-00-02.uf6th.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-6cm745-shard-0&authSource=admin&retryWrites=true&w=majority", // MongoDb URL
    embedColor: process.env.COlOR || "#303236", // embed colour
    logs: process.env.LOGS || "918159383484051476", // channel id for guild create and delete logs 

  nodes: {
     
      host: "disbotlistlavalink.ml",
      port: 443,
      password: "LAVA",
      id: "DisBotlist Lavalink",
      retryDelay: 3000,
      secure: true
    
    },
 
}

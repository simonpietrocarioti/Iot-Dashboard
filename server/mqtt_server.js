const express = require('express')

const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();

const port = process.env.port || 5000;
const path = require('path')
app.listen(port, ()=>{
    console.log('Server started on port ' + port)
})

app.use(bodyParser.json());
app.use(cors());

app.use( '/' , express.static(path.join(__dirname ,'/' ,'public')));

app.get('/', (req,res)=>{
 
    res.sendFile(path.join(__dirname + '/public/index.html',{root: __dirname}));
})

const mosca = require('mosca')

const settings = {
    http:{
        port:8000,
        bundle:true
    }
}

const moscaServer = new mosca.Server(settings)
moscaServer.on('ready', setup)

function setup(){
    console.log('MQTT Server listening')
}

moscaServer.on('clientConnected', function(client){
    console.log('Client connected ' + client.id)
})

moscaServer.on('published', function(packet, client){
    
    const topicTime = packet.topic + '/time'
    //console.log( packet.topic)
 
})

moscaServer.on('subscribed', function(topic, client){
    console.log('Subscribed : ' + topic);
})
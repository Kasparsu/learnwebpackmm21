import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({port: 8080 });

wss.on('connection', connection);

function connection(ws) {
  ws.on('message', (data) => {
    message(data, ws);
  });
}

function message(data, ws) {
  data = JSON.parse(data.toString());
  types[data.type](data.data, ws);
  
}
let types = {
  message(data, ws){
    wss.clients.forEach(function(client) {
      if(client != ws){
        client.send(JSON.stringify({type: 'message', data: {text: data, isMe:false, name: ws.name}}));
      }
    });
  },
  name(data, ws){
    ws.name = data;
  }
}
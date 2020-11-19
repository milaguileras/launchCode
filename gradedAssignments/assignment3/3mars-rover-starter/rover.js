const Message = require('./message.js');


class Rover {
  constructor(position) {
    this.position = position;
    this.mode = 'NORMAL'
    this.generatorWatts = 110
  }

  receiveMessage(message){
   let response = {
     message: message.name,
     results: []
   }
   for(let i in message.commands){
     if (i.commandType === 'STATUS_CHECK'){
       response.results.push({
         completed: true,
         roverStatus: {
           mode: this.mode,
           generatorWatts: this.generatorWatts,
           position: this.position
         }
       })
     } else if (i.commandType === 'MOVE'){
       response.results.push({
         completed: true
       })
     } else (i.commandType === 'MODE_CHANGE');{
       response.results.push({
         completed: true
       })
     }
   }
   return response
  }
}

  



module.exports = Rover;
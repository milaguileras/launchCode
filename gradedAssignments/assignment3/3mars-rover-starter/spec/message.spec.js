const assert = require('assert');
const Message = require('../message.js');
const Command = require('../command.js');


describe ("Message Class", function(){

  it("throws error if a name is NOT passed into the constructor as the first parameter", function(){
    assert.throws(
      function(){
        new Message()
      },
      {message: 'Name required.'}
    )
  })

  it("constructor sets name", function(){
    let message = new Message('something');
    assert.strictEqual(
      message.name,'something'
    );

  })

 it("contains a commands array passed into the constructor as 2nd argument", function(){
   let a = new Command('a',2)
   let b = new Command('b',3)
   let c = new Command('c',4)
   let commands = [a,b,c]
   let message = new Message('something', commands)

   assert.strictEqual(
     message.commands, commands
   )
 })

})
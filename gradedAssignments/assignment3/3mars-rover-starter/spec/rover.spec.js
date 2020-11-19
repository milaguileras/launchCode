const assert = require('assert');
const Rover = require('../rover.js');
const Command = require('../command.js');
const Message = require('../message.js');


describe ("Rover Class", function(){

  it("constructor sets position and default values for mode and generatorWatts", function(){
    let rover = new Rover(10)

    assert.strictEqual(rover.position, 10);
    assert.strictEqual(rover.mode, 'NORMAL');
    assert.strictEqual(rover.generatorWatts, 110)
  })

  it("response returned by receiveMessage contains name of message", function(){
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    let rover = new Rover(10);    
    let actual = rover.receiveMessage(message).message;
    let expected = message.name

    assert.strictEqual(actual, expected)  
  })

  it("response returned by receiveMessage includes two results if two commands are sent in the message", function(){
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    let rover = new Rover(10);    
    let actual = rover.receiveMessage(message).results.length;
    let expected = commands.length

    assert.deepEqual(actual, expected)
  })

  it("responds correctly to status check command", function(){
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    let rover = new Rover(10);   
    let expected = rover.receiveMessage(message).results[1].response
    let actual = message.commands.response;

    assert.deepEqual(actual,expected);
   
  })
})
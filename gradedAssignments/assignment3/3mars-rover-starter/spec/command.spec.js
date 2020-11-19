const assert = require('assert');
const Command = require('../command.js');

describe("Command class", function() {

  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    assert.throws(
      function() {
        new Command();
      },
        {
        message: 'Command type required.'
        }
    );
  });

  it("sets command type", function(){
    let command = new Command('something');
    assert.strictEqual(
      command.commandType,'something'
);
  });

  it("sets a value passed in as the 2nd argument", function(){
    let command = new Command('something', 2);
    assert.strictEqual(
      command.value, 2
    );
  });

  it

});
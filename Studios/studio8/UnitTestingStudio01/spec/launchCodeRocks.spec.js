const launchOutput = require('../launchCodeRocks.js');
const assert = require('assert');

describe("launchOutput", function(){

  it("should return 'Launch!' if the number is divisible ONLY by 2", function(){
    let output = launchOutput(2);
    assert.strictEqual(output, 'Launch!');
  })

  it("should return 'Code!' if the number is divisible ONLY by 3", function(){
    let output = launchOutput(3);
    assert.strictEqual(output, 'Code!');

  })

  it("Should return 'Rocks!' if the number is divisible ONLY by 5 ", function(){
    let output = launchOutput(5);
    assert.strictEqual(output, 'Rocks!');

  })

  it ("Should return 'LaunchCode!' if the number is divisible by 2 AND 3", function(){
    let output = launchOutput(522);
    assert.strictEqual(output, 'LaunchCode!')
  })

  it("Should return 'Code Rocks!' if the number is divisible by 3 AND 5", function(){
    let output = launchOutput(15)
    assert.strictEqual(output, 'Code Rocks!')
  })

  it("Should return 'Launch Rocks!' if the number is divisible by 2 AND 5", function(){
    let output = launchOutput(40)
    assert.strictEqual(output, 'Launch Rocks!')
  })

  it("Should return 'LaunchCode Rocks!' if the number is divisible by 2, 3 AND 5", function(){
    let output = launchOutput(60)
    assert.strictEqual(output, 'LaunchCode Rocks!')
  })

  it("Should return 'Rutabagas! That doesn't work.' if the number is NOT divisble by 2, 3, OR 5", function(){
    let output = launchOutput(1)
    assert.strictEqual(output, "Rutabagas! That doesn't work!")
  })
    
});
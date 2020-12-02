Assignment #3: Mars Rover
This task puts your unit testing, modules making, and exception handling knowledge to use by writing tests and classes for the Mars rover named Curiosity.


Selfie of Curiosity on Mars.
You will create a simulation for issuing commands to Curiosity. The idea is to create a command at mission control, convert that command into a message,  send it to the rover, then have the rover respond to that message.
Features you need to implement in three separate classes:
1. Command: A type of object containing a commandType property. commandType is one of the given strings in the table below. Some commandTypes are coupled with a value property, but not all. Every Command object is a single instruction to be delivered to the rover.
2. Message: A Message object has a name and contains several Command objects. Message is responsible for bundling the commands from mission control and delivering them to the rover.
3. Rover: An object representing the mars rover. This class contains information on the rover's position, operating mode, and generatorWatts. It also contains a function, receiveMessage that handles the various types of commands it receives and updates the rover's properties.


A. Command

Command Class
For this class, Command, we've provided the functionality. Command is already written for you and you do not need to modify it to write passing tests. Open up and examine the file command.js.

1. This class builds an object with two properties. constructor(commandType, value)
   1. commandType is a string that represents the type of command. We will go over the details of the types when we get to the Rover class and tests. At this time, note that a command type will be one of the following: 'MODE_CHANGE', 'MOVE', or 'STATUS_CHECK'.

      1. To peek ahead at the full functionality of these types, refer to Command Types table.
      2. value is a value related to the type of command.



Command Tests

Test 1
Note that the test description reads, "throws error if a command type is NOT passed into the constructor as the first parameter".

	1. So far, you have only used assert methods to check for equality. Using assert.throws to verify if a specific error is thrown is a new concept. To learn how to use this new ability of assert, look at the constructor in command.js and look at the test description in command.spec.js. You can also look at the official Node.js assert.throws documentation.
	2. Click "Run" to verify that the test passes. Next, comment out lines 4-6 in command.js. Click "Run" again to verify that the test fails (the expected error is not thrown when the Command class is called).
	3. Restore lines 4-6 to throw Error("Command type required.");.
	4. Change line 12 in command.spec.js to message: 'Oops'. Click "Run" again to verify that the test fails (the error message did not match "Command type required.").
	5. Restore line 12 to message: "Command type required.".


Test 2
Create a second Command test using, "constructor sets command type" as the description. This test checks that the constructor in the Command class correctly sets the commandType property in the new object.


Test 3
Code a third test using, "constructor sets a value passed in as the 2nd argument" as the description. This test checks that the constructor correctly sets the value property in the new object.
B. Message
Recall, the role of a message object is to bundle commands to send to the rover.
Message Class

	1. This class builds an object with two properties. constructor(name, commands)
   		1. name is a string that is the name of the message.
   		2. commands is an array of Command objects.


B. Message Tests

At the same level as command.spec.js, create a file message.spec.js and write the unit tests for the Message class as described below. Remember to use the given phrase as the test description.

Test 4
For this test description, use the text, "throws error if a name is NOT passed into the constructor as the first parameter". Review the first test in command.spec.js for an example of how to write this test.


Test 5
Use "constructor sets name" as the description. The test confirms that the constructor in the Message class correctly sets the name property in a new message object.


Test 6
Use "contains a commands array passed into the constructor as 2nd argument". This test confirms that the commands property of a new message object contains the data passed in from the Message(name, commands) call.

	1. Hint: Inside this test, you will have to create a commands array, fill it with some Command objects, and pass it into the Message constructor.


C. Rover

Rover receives a message object, updates its properties from the message, and returns the results.


Rover Class
This class builds a rover object with a few properties, and it also contains a function outside of the constructor to handle updates to its properties.

	1. constructor(position)
   		1. position is a number representing the rover's position.
   		2. Sets this.position to position
   		3. Sets this.mode to 'NORMAL'
   		4. Sets default value for generatorWatts to 110
	2. receiveMessage(message)
   		1. message is a Message object
   		2. Returns an object containing at least two properties:
      			1. message: the name of the original Message object
     			2. results: an array of results. Each element in the array is an object that corresponds to one Command in message.commands.
   			3. Updates certain properties of the rover object
     				
Rover Tests
Create spec/rover.spec.js and write the following tests. Write the code to make them pass in rover.js. Remember to use the given phrase as the test description.


Test 7
"constructor sets position and default values for mode and generatorWatts". Refer to the Rover Class description above for these default values.


Test 8
"response returned by receiveMessage contains name of message"


Test 9
"response returned by receiveMessage includes two results if two commands are sent in the message"


Test 10
"responds correctly to status check command"

	1. For the STATUS_CHECK command, receiveMessage(message).results includes a roverStatus object describing the current state of the rover object --- mode, generatorWatts, and position. The test should check each of these for accuracy.
	2. See the Rover Command Types table for more details.
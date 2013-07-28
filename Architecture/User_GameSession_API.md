# GameSession Object

The Game Session object encapsulates all of the behaviors that a user can perform at a given time in the game as well as the user interface displayed to the user.

## var Mode {}

The mode object delegates user input/output based on what the user is currently doing in game (e.g., checking inventory, in combat, exploring, in a mini-game, etc).

### function draw (userData, zoneData)

Draws the image displayed to the user.

* `userData` User attributes, inventory, equipment, quest logs, etc.
* `zoneData` The map grid, other pc/npc placements, zone's time, etc.

### function keyPressed(key)

Listener for keyboard events.

### function mousePressed(click)

Listener for mouse events.

## function getFromServer (model, id)

Retrieves the model with the specified id.

* `model` The model type, e.g., user, item, mob, in game time, etc.
* `id` The id of the desired model instance, if applicable.
* Returns the corresponding model object.

## function sendToServer (modelObject)

Saves the given model object to the database.

* `modelObject` The model object being updated.
* Returns true if the operation was successful and false otherwise.


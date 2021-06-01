// @input string triggerName

if (!global.behaviorSystem) {
    print("Behavior system not initialized. Make sure a Behavior script is present in the scene, and above this in the Objects panel hierarchy.");
}

global.behaviorSystem.sendCustomTrigger(script.triggerName);
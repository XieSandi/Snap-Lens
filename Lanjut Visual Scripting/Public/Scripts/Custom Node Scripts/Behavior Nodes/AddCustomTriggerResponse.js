// @input string triggerName
// @output execution onTrigger

if (!global.behaviorSystem) {
    print("Behavior system not initialized. Make sure a Behavior script is present in the scene, and above this in the Objects panel hierarchy.");
}

global.behaviorSystem.addCustomTriggerResponse(script.triggerName, script.onTrigger);
// @input float delay
// @input bool repeat
// @output execution callback

if (script.callback) {
    var evt = script.createEvent("DelayedCallbackEvent");
    evt.bind(function() {
        script.callback();
        if (script.repeat) {
            evt.reset(script.delay);
        } else {
            script.removeEvent(evt);
        }
    });
    evt.reset(script.delay);
}
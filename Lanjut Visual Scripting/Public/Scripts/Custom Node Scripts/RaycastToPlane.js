// @input vec3 rayPos = {0, 1, 0}
// @input vec3 rayDir = {0, -1, 0}
// @input vec3 planePos = {0, 0, 0}
// @input vec3 planeNormal = {0, 1, 0}

// @output vec3 hitPosition
// @output bool didHit

// @output execution void(vec3 hitPos) onHit


function intersectPlane(planePos, planeNormal, rayPos, rayDir) { 
    // assuming vectors are all normalized
    var denom = -planeNormal.dot(rayDir); 
    if (denom > 1e-6) {
        var offset = planePos.sub(rayPos);
        var dist = -offset.dot(planeNormal) / denom;
        if (dist >= 0) {
            return rayPos.add(rayDir.uniformScale(dist));
        }
    } 
    return null;
}

var result = intersectPlane(script.planePos, script.planeNormal, script.rayPos, script.rayDir);
if (result) {
    script.hitPosition = result;
    script.didHit = true;
    if (script.onHit) {
        script.onHit(result);
    }
} else {
    script.hitPosition = null;
    script.didHit = false;
}

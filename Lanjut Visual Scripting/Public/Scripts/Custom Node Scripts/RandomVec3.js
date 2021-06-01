// @input vec3 min
// @input vec3 max = {1, 1, 1}

// @output vec3 vec

var offset = script.max.sub(script.min);
offset.x *= Math.random();
offset.y *= Math.random();
offset.z *= Math.random();
script.vec = script.min.add(offset);
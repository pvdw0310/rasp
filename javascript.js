// msg.timeRemaining is in milliseconds
if (msg.timeRemaining < 0) {       // is de tijd voorbij?
    msg.timeRemaining = 0;
}

var t = msg.timeRemaining / 1000;
var h = Math.floor(t / 3600);
var m = Math.floor(t % 3600 / 60);
var s = Math.floor(t % 3600 % 60);

// Format into hh:mm:ss
msg.timerText = ("0" + h).slice(-2) + ":" + ("0" + m).slice(-2) + ":" + ("0" + s).slice(-2);

// Update the editor node
node.status({fill:"green", shape:"dot", text:msg.timerText});

// Forward the message along the flow
return msg;

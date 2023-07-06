const EventEmitter = require("events");

const eventemitter = new EventEmitter();

const subscribeMessage = (channelName)=>{
    console.log(`you have subscribed to ${channelName}`);
}
eventemitter.addListener("subscribe",subscribeMessage);
console.log(" calling before removing listener");
eventemitter.emit("subscribe","college Wallah!");
// removing listener
eventemitter.removeListener("subscribe",subscribeMessage);
console.log("calling after removal");
eventemitter.emit("subscribe","college Wallah!");
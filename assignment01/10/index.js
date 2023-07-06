const EventEmitter = require("events");
const { getMaxListeners } = require("process");

const eventemitter = new EventEmitter();

const subscribeMessage = (channelName)=>{
    console.log(`you have subscribed to ${channelName}`);
}
eventemitter.addListener("subscribe",subscribeMessage);
eventemitter.emit("subscribe","college Wallah!");
console.log("the maximum number of listeners are:",eventemitter.getMaxListeners());
eventemitter.setMaxListeners(5);
console.log("the maximum number of listeners are:",eventemitter.getMaxListeners());
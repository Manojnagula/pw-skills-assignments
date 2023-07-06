const EventEmitter = require("events");

const eventemitter = new EventEmitter();

const subscribeMessage = (channelName)=>{
    console.log(`you have subscribed to ${channelName}`);
}
eventemitter.addListener("subscribe",subscribeMessage);
eventemitter.emit("subscribe","college Wallah!");

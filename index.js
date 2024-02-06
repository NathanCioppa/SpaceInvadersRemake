import { Player } from "./Entities/Player.js";
import { ValuePair } from "./WebGameEngine/Types/ValuePair.js";
import { Canvas } from "./WebGameEngine/engine.js";


let player = new Player()
player.position = new ValuePair(Canvas.width/2 - player.width/2, Canvas.height - player.height)


export function play() {

}
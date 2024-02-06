import { Entity } from "../WebGameEngine/Types/Entity.js";
import { ValuePair } from "../WebGameEngine/Types/ValuePair.js";
import { Canvas } from "../WebGameEngine/engine.js";
import { playerTexture } from "./textures.js";

export class Player extends Entity {
    constructor() {
        super(new ValuePair().Zero(), playerTexture)

        
    }
}
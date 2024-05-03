import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SoundManagerComponent')
export class SoundManagerComponent extends Component {
    start() {
        console.log("Sound manager component");
    }

    update(deltaTime: number) {
        
    }
}



import { _decorator, Component, Node } from 'cc';
import { GameDirector } from '../../Gamerical/Utility/GameDirector';
const { ccclass, property } = _decorator;

@ccclass('Scene1')
export class Scene1 extends Component {
    start() {
        console.log("Scene 1 loaded");
        let name1 : string = GameDirector.SoundManager().getComponent().node.name;
        let name2 : string = GameDirector.SceneManager().getComponent().node.name;
        console.log(name1);
        console.log(name2)
    }

    update(deltaTime: number) {
        
    }
}



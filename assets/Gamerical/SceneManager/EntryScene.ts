import { _decorator, CCBoolean, CCString, Component, director, Node } from 'cc';
import { SceneManagerComponent } from './SceneManagerComponent';
import { GameDirector } from '../Utility/GameDirector';
import { SoundManagerComponent } from '../SoundManager/SoundManagerComponent';
const { ccclass, property } = _decorator;
// https://json2ts.dev/

@ccclass('EntryScene')
export class EntryScene extends Component {

    private _initializedCount : number = 0;
    private _assignedSystemCount : number = 0;

    @property({
        type : CCBoolean,
        visible : true  
    })
    _sceneManager : boolean;

    @property({
        visible : true
    })
    _sceneManagerConfigPath : string = "";

    
    @property({
        type : CCBoolean,
        visible : true
    })
    _soundManager : boolean;

    @property({
        visible : true
    })
    _soundManagerConfigPath : string = "";

    start() {
        this._initializedCount = 0;
        this._assignedSystemCount = 0;
        if(this._sceneManager){
            let sceneManagerNode = new Node("SceneManager");
            this.node.parent.addChild(sceneManagerNode);
            director.addPersistRootNode(sceneManagerNode);
            const myComp = sceneManagerNode.addComponent(SceneManagerComponent);
            const monoConfig : MonoSingletonConfig = {
                configPath : this._sceneManagerConfigPath
            }
            GameDirector.SceneManager().initialize(monoConfig,this.initialized.bind(this));
            GameDirector.SceneManager().setComponent(myComp);
            this._assignedSystemCount ++
        }
        if(this._soundManager){
            let soundManagerNode = new Node("SoundManager");
            this.node.parent.addChild(soundManagerNode);
            director.addPersistRootNode(soundManagerNode);
            const myComp = soundManagerNode.addComponent(SoundManagerComponent);
            const monoConfig : MonoSingletonConfig = {
                configPath : this._soundManagerConfigPath
            }
            GameDirector.SoundManager().initialize(monoConfig,this.initialized.bind(this));
            GameDirector.SoundManager().setComponent(myComp);
            this._assignedSystemCount ++
        }
    }

    initialized = () => {
        this._initializedCount ++;
        console.log(`Initialized ${this._initializedCount}`)
        if(this._initializedCount >= this._assignedSystemCount){
            console.log("Start load first scene");
            console.log(GameDirector.SceneManager());
            GameDirector.SceneManager().loadFirstScene();
        }
    }

    update(deltaTime: number) {
       
    }
}



import { _decorator, Component, Node } from 'cc';
import { ISystemBase } from '../Utility/ISystemBase';
import { SceneManagerComponent } from './SceneManagerComponent';
import { MonoSingleton } from '../Utility/MonoBehaviour';
const { ccclass, property } = _decorator;

@ccclass('SceneManager')
export class SceneManager  extends MonoSingleton<SceneManagerComponent,SceneManagerConfg> {

    public loadFirstScene() : void{
        console.log("load first scene");
    }

}




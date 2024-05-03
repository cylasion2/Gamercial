import { _decorator, Component, Node } from 'cc';
import { SoundManagerComponent } from './SoundManagerComponent';
import { MonoSingleton } from '../Utility/MonoBehaviour';
const { ccclass, property } = _decorator;

@ccclass('SoundManager')
export class SoundManager extends MonoSingleton<SoundManagerComponent,SoundManagerConfig> {
    
}



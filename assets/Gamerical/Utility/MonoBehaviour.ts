import { _decorator, Component, JsonAsset, Node, resources } from 'cc';
import { ISystemBase } from '../Utility/ISystemBase';
const { ccclass, property } = _decorator;

// Dictionary to store instances for different T types
const instanceDictionary: { [key: string]: any } = {};

@ccclass('MonoBehaviour')
export class MonoSingleton<T1 extends Component, T2> implements ISystemBase {

    protected _component : T1;
    protected _config : T2;

    public static getInstance<T1 extends Component,T2>(typename : string): MonoSingleton<T1,T2> {
        const typeName = typename; // Get the name of the type T1
        if (!instanceDictionary[typeName]) {
            console.log(`Creating new instance for type ${typeName}`);
            instanceDictionary[typeName] =   new MonoSingleton<T1,T2>()   ;
            console.log(`Created new instance :${instanceDictionary[typeName]}`);
            console.log(instanceDictionary[typeName]);
        }
        return instanceDictionary[typeName] ;
    }
    public setComponent(comp: T1): void {
        this._component =  comp;
    }
    public getComponent(): T1 {
       return this._component;
    }
    public initialize( config : MonoSingletonConfig , onCompleted  : () => void): void {
        if(config){
            console.log(`Load config from ${config.configPath}`);
            resources.load("Gamercial/Config/"+config.configPath,(err,data) => {
                if (err) {
                    console.error('Failed to load config.json:', err);
                    return;
                }            
                this._config = (data as JsonAsset ).json as T2;
                console.log(this._config);
                onCompleted();
            });
        }
    }
}

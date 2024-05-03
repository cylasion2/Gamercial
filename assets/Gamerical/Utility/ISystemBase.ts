import { Component } from "cc";

export interface ISystemBase{
    setComponent( comp  : Component) : void;
    getComponent() : Component;
    initialize( config : MonoSingletonConfig, onCompleted  : () => void) : void;
}
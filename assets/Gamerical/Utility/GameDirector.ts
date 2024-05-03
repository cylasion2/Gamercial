import { SceneManager } from '../SceneManager/SceneManager'
import { SoundManager } from '../SoundManager/SoundManager'
import { SceneManagerComponent } from '../SceneManager/SceneManagerComponent';
import { SoundManagerComponent } from '../SoundManager/SoundManagerComponent';
import { MonoSingleton } from './MonoBehaviour';

export class GameDirector{
  
    public static SceneManager() : SceneManager {
        let sceneManager : SceneManager = SceneManager.getInstance<SceneManagerComponent,SceneManagerConfg>("SceneManager") as SceneManager;
        if( sceneManager instanceof SceneManager ) {
            console.log("Correct instance");
        }else
            console.log("Not an instance");
        return SceneManager.getInstance<SceneManagerComponent,SceneManagerConfg>("SceneManager") as SceneManager;
    }

    public static SoundManager() : SoundManager {
        return SoundManager.getInstance<SoundManagerComponent,SoundManagerConfig>("SoundManager");
    }
}



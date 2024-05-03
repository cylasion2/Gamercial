interface Scene {
    index: number;
    name: string;
    path: string;
    preloading_assets: Preloadingasset[] | string;
  }
interface SceneManagerConfg {
    start_scene: string;
    scene: Scene[];
  } 
interface Preloadingasset {
    asset_name: string;
    asset_path: string;
  }
  
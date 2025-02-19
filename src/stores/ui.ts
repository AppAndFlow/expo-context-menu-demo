import { makeAutoObservable } from 'mobx';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UiStore {}

class UiClass {
  /**
   @observable exempleVariable: UiStore["exempleVariable"] = false;

   @action
   exempleFunction: UiStore["exempleFunction"] = () => {
     this.splashScreenIsHidden = true;
   };
 */

  constructor() {
    makeAutoObservable(this);
  }
}

export default UiClass;

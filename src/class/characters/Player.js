import { Character } from "./Character";

class Player extends Character {
  constructor(name, gender) {
    super(name, gender, 0, 0);
  }
}

export { Player };

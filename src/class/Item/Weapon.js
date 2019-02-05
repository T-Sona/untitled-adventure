import { Item } from ".";

class Weapon extends Item {
  constructor(
    name,
    weight,
    attack,
    range,
    requirements = null,
    enhancements = null
  ) {
    super(name, weight);
    this.attack = attack;
    this.range = range;
    this.requirements = requirements;
    this.enhancements = enhancements;
  }
}

export { Weapon };

import { Item } from ".";

class Armor extends Item {
  constructor(name, weight, armor, requirements = null, enhancements = null) {
    super(name, weight);
    this.armor = armor;
    this.requirements = requirements;
    this.enhancements = enhancements;
  }
}

export { Armor };

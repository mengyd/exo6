import {random100} from '../functions';
export class Pokemon {
  constructor(
    private name: string,
    private speed: number,
    private accuracy: number,
    private evasion: number,
    private life: number,
    private hitpoints: number,
    private avatar: string
  ) {}

  getName(): string {
    return this.name;
  }

  setName(name): void {
    this.name = name;
  }

  showName(): void {
    console.log(this.name);
  }

  getSpeed(): number {
    return this.speed;
  }

  getAccuracy(): number {
    return this.accuracy;
  }

  getEvasion(): number {
    return this.evasion;
  }

  getLife(): number {
    return this.life;
  }

  setLife(life): void {
    this.life = life;
  }

  getHitpoints(): number {
    return this.hitpoints;
  }

  getAvatar(): string {
    return this.avatar;
  }

  hited(enemy: Pokemon): boolean {
    if (random100() < this.accuracy - enemy.getEvasion()) {
      console.log('Hited !');
      return true;
    }
    console.log('Missed !');
    return false;
  }

  attack(enemy: Pokemon): void {
    console.log(this.name + '(hp:' + this.life + ') attcks ' + enemy.getName() + '(hp:' + enemy.getLife() + ')');
    if (this.hited(enemy)) {
      enemy.setLife(enemy.getLife() - this.hitpoints);
    }
  }

}

import { WorldPosData } from '../../data/world-pos-data';
import { Packet } from '../../packet';
import { PacketType } from '../../packet-type';
import { Reader } from '../../reader';
import { Writer } from '../../writer';

/**
 * Sent when the player shoots a projectile.
 */
export class PlayerShootPacket implements Packet {

  readonly type = PacketType.PLAYERSHOOT;

  //#region packet-specific members
  /**
   * The current client time.
   */
  time: number;
  /**
   * The id of the bullet which was fired.
   */
  bulletId: number;
  /**
   * The item id of the weapon used to fire the projectile.
   */
  containerType: number;
  /**
   * The position at which the projectile was fired.
   */
  startingPos: WorldPosData;
  /**
   * The angle at which the projectile was fired.
   */
  angle: number;
  /**
   * The speed multiplier for the projectile (affected by Inspired).
   */
  speedMult: number;
  /**
   * The lifetime MS multiplier for the projectile (affected by Inspired?)
   */
  lifeMult: number;
  //#endregion

  constructor() {
    this.time = 0;
    this.bulletId = 0;
    this.containerType = 0;
    this.startingPos = new WorldPosData();
    this.angle = 0;
    this.speedMult = 0;
    this.lifeMult = 0;
  }

  write(writer: Writer): void {
    writer.writeInt32(this.time);
    writer.writeByte(this.bulletId);
    writer.writeShort(this.containerType);
    this.startingPos.write(writer);
    writer.writeFloat(this.angle);
    writer.writeShort(this.speedMult);
    writer.writeShort(this.lifeMult);
  }

  read(reader: Reader): void {
    this.time = reader.readInt32();
    this.bulletId = reader.readByte();
    this.containerType = reader.readShort();
    this.startingPos.read(reader);
    this.angle = reader.readFloat();
    this.speedMult = reader.readShort();
    this.lifeMult = reader.readShort();
  }
}

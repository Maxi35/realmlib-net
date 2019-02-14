import { Writer } from '../../writer';
import { Reader } from '../../reader';
import { PacketType } from '../../packet-type';
import { Packet } from '../../packet';

/**
 * Received when a player has died.
 */
export class DeathPacket implements Packet {

  type = PacketType.DEATH;
  propagate = true;

  //#region packet-specific members
  /**
   * The account id of the player who died.
   */
  accountId: string;
  /**
   * The character id of the player who died.
   */
  charId: number;
  /**
   * The cause of death.
   */
  killedBy: string;
  /**
   * The object id of the zombie, if the player died wearing a cursed amulet.
   */
  zombieId: number;
  /**
   * The type of zombie, if the player died wearing a cursed amulet.
   */
  zombieType: number;
  /**
   * Whether or not a zombie was spawned.
   *
   * This is a derived property, and is the result of `zombieId !== -1`.
   */
  isZombie: boolean;
  //#endregion

  read(reader: Reader): void {
    this.accountId = reader.readString();
    this.charId = reader.readInt32();
    this.killedBy = reader.readString();
    this.zombieType = reader.readInt32();
    this.zombieId = reader.readInt32();
    this.isZombie = this.zombieId !== -1;
  }

  write(writer: Writer): void {
   writer.writeString(this.accountId);
   writer.writeInt32(this.charId);
   writer.writeString(this.killedBy);
   writer.writeInt32(this.zombieType);
   writer.writeInt32(this.zombieId);
  }
}

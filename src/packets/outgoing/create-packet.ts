import { Writer } from '../../writer';
import { Reader } from '../../reader';
import { PacketType } from '../../packet-type';
import { Packet } from '../../packet';

/**
 * Sent to create a new character.
 */
export class CreatePacket implements Packet {

  type = PacketType.CREATE;
  propagate = true;

  //#region packet-specific members
  /**
   * The class to use for the new character.
   */
  classType: number;
  /**
   * The skin id to use for the new character.
   * The default skin id is `0`.
   */
  skinType: number;
  //#endregion

  write(writer: Writer): void {
    writer.writeShort(this.classType);
    writer.writeShort(this.skinType);
  }

  read(reader: Reader): void {
    this.classType = reader.readShort();
    this.skinType = reader.readShort();
  }
}

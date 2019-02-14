import { Writer } from '../../writer';
import { Reader } from '../../reader';
import { PacketType } from '../../packet-type';
import { Packet } from '../../packet';

/**
 * > Unknown.
 */
export class SquareHitPacket implements Packet {

  type = PacketType.SQUAREHIT;
  propagate = true;

  //#region packet-specific members
  /**
   * The current client time.
   */
  time: number;
  /**
   * > Unknown.
   */
  bulletId: number;
  /**
   * > Unknown.
   */
  objectId: number;
  //#endregion

  write(writer: Writer): void {
    writer.writeInt32(this.time);
    writer.writeByte(this.bulletId);
    writer.writeInt32(this.objectId);
  }

  read(reader: Reader): void {
    this.time = reader.readInt32();
    this.bulletId = reader.readByte();
    this.objectId = reader.readInt32();
  }
}

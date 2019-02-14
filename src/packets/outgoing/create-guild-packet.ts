import { Writer } from '../../writer';
import { Reader } from '../../reader';
import { PacketType } from '../../packet-type';
import { Packet } from '../../packet';

/**
 * Sent to create a new guild.
 */
export class CreateGuildPacket implements Packet {

  type = PacketType.CREATEGUILD;
  propagate = true;

  //#region packet-specific members
  /**
   * The name of the guild being created.
   */
  name: string;
  //#endregion

  write(writer: Writer): void {
    writer.writeString(this.name);
  }

  read(reader: Reader): void {
    this.name = reader.readString();
  }
}

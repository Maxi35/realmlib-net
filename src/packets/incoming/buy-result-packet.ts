import { Writer } from '../../writer';
import { Reader } from '../../reader';
import { PacketType } from '../../packet-type';
import { Packet } from '../../packet';

/**
 * Received in response to a `BuyPacket`.
 */
export class BuyResultPacket implements Packet {

  type = PacketType.BUYRESULT;
  propagate = true;

  //#region packet-specific members
  /**
   * The result code.
   */
  result: number;
  /**
   * > Unknown.
   */
  resultString: string;
  //#endregion

  read(reader: Reader): void {
    this.result = reader.readInt32();
    this.resultString = reader.readString();
  }

  write(writer: Writer): void {
    writer.writeInt32(this.result);
    writer.writeString(this.resultString);
  }
}

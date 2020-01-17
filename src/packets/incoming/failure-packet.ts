import { FailureCode } from '../../models/failure-code';
import { Packet } from '../../packet';
import { PacketType } from '../../packet-type';
import { Reader } from '../../reader';
import { Writer } from '../../writer';

/**
 * Received when an error has occurred.
 */
export class FailurePacket implements Packet {

  type = PacketType.FAILURE;
  propagate = true;

  //#region packet-specific members
  /**
   * The error id of the failure.
   * @see `FailureCode`
   */
  errorId: FailureCode;
  /**
   * A description of the error.
   */
  errorDescription: string;
  //#endregion

  read(reader: Reader): void {
    this.errorId = reader.readInt32();
    this.errorDescription = reader.readString();
  }

  write(writer: Writer): void {
    writer.writeInt32(this.errorId);
    writer.writeString(this.errorDescription);
  }
}

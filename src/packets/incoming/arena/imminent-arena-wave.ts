import { Writer } from '../../../writer';
import { Reader } from '../../../reader';
import { PacketType } from '../../../packet-type';
import { Packet } from '../../../packet';

/**
 * Received when a new arena wave is about to begin.
 */
export class ImminentArenaWavePacket implements Packet {

  type = PacketType.IMMINENT_ARENA_WAVE;
  propagate = true;

  //#region packet-specific members
  /**
   * The length of time the player has been in the arena for.
   */
  currentRuntime: number;
  //#endregion

  read(reader: Reader): void {
    this.currentRuntime = reader.readInt32();
  }

  write(writer: Writer): void {
    writer.writeInt32(this.currentRuntime);
  }
}

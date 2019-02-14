import { Writer } from '../../../writer';
import { Reader } from '../../../reader';
import { PacketType } from '../../../packet-type';
import { Packet } from '../../../packet';

/**
 * Sent to accept a death in the arena.
 */
export class AcceptArenaDeathPacket implements Packet {

  type = PacketType.ACCEPT_ARENA_DEATH;
  propagate = true;

  //#region packet-specific members

  //#endregion

  write(writer: Writer): void {
    //
  }

  read(reader: Reader): void {
    //
  }
}

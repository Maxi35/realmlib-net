import { Writer } from '../../writer';
import { Reader } from '../../reader';
import { PacketType } from '../../packet-type';
import { Packet } from '../../packet';

/**
 * Sent to prompt the server to send a `ReconnectPacket` which
 * contains the reconnect information for the Quest Room.
 */
export class GoToQuestRoomPacket implements Packet {

  type = PacketType.QUEST_ROOM_MSG;
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

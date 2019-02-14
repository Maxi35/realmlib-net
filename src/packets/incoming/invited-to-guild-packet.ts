import { Writer } from '../../writer';
import { Reader } from '../../reader';
import { PacketType } from '../../packet-type';
import { Packet } from '../../packet';

/**
 * Received when the player is invited to a guild.
 */
export class InvitedToGuildPacket implements Packet {

  type = PacketType.INVITEDTOGUILD;
  propagate = true;

  //#region packet-specific members
  /**
   * The name of the player who sent the invite.
   */
  name: string;
  /**
   * The name of the guild which the invite is for.
   */
  guildName: string;
  //#endregion

  read(reader: Reader): void {
    this.name = reader.readString();
    this.guildName = reader.readString();
  }

  write(writer: Writer): void {
    writer.writeString(this.name);
    writer.writeString(this.guildName);
  }
}

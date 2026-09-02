import { RoomRepository } from "../repositories/room-repository";

export class ListRoomUseCase {
  constructor(private roomReapository: RoomRepository) {}
  async handle() {
    const rooms = await this.roomReapository.findMany();
    return rooms;
  }
}

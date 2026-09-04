import { RoomRepository } from "../repositories/room-repository";
type Response = {
  id: string;
};
export class GetRoomUseCase {
  constructor(private roomReapository: RoomRepository) {}
  async handle({ id }: Response) {
    const rooms = await this.roomReapository.findById(id);
    if (!rooms) {
      return null;
    }

    return rooms;
  }
}

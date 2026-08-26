import Money from "../../shared/value-objects/money";
import Room from "../entities/room";
import { RoomRepository } from "../repositories/room-repository";

type Request = {
  name: string;
  price: number;
  image: string;
  hasWifi?: boolean;
  hasAir?: boolean;
  hasKitchen?: boolean;
  isPetFriendly?: boolean;
  isAvaliable?: boolean;
};

export class CreatRoomUseCase {
  constructor(private roomReapository: RoomRepository) {}
  handle(data: Request) {
    const price = Money.create(data.price);
    const room = Room.create({ ...data, price });
    this.roomReapository.create(room);
    return room;
  }
}

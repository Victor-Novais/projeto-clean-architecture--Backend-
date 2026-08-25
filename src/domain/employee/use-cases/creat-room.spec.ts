import Room from "../entities/room";
import Money from "../../shared/value-objects/money";

type Request = {
  name: string;
  price: number;
  image: string;
};

abstract class RoomRepository {
  abstract create(romm: Room): Room;
}

class CreatRoomUseCase {
  constructor(private roomReapository: RoomRepository) {}
  handle(data: Request) {
    const price = Money.create(data.price);
    const room = Room.create({ ...data, price });
    this.roomReapository.create(room);
    return room;
  }
}
class RoomMemory implements RoomRepository {
  private rooms: Room[] = [];
  create(room: Room) {
    this.rooms.push(room);
    return room;
  }
}
describe("Criação de quarto", () => {
  test("Deve criar um quarto", () => {
    const roomMemory = new RoomMemory();
    const useCase = new CreatRoomUseCase(roomMemory);
    const room = useCase.handle({
      name: "Suite",
      price: 120000,
      image: "room.jpg",
    });

    expect(room.name).toEqual("Suite");
  });
});

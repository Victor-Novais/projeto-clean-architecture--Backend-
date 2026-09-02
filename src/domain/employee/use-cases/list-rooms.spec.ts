import Room from "../entities/room";
import Money from "../../shared/value-objects/money";
import { InMemoryRoomMemory } from "../../../../test/repositories/in-memory-room-repository";
import { CreatRoomUseCase } from "./create-room";
import Identity from "../../../core/entities/identity";
import { ListRoomUseCase } from "./list-room copy";

let roomRepository: InMemoryRoomMemory;
let useCase: ListRoomUseCase;
describe("Listagem de quartos", () => {
  beforeEach(() => {
    roomRepository = new InMemoryRoomMemory();
    useCase = new ListRoomUseCase(roomRepository);
  });
  test("Deve retornar um array de quartos", async () => {
    const room = Room.create({
      name: "Suite",
      price: Money.create(120000),
      image: "room.jpg",
    });
    roomRepository.items.push(room);
    const response = await useCase.handle();
    expect(response).toHaveLength(1);
  });
  test("Deve retornar um array vazio quando não houver quartos", async () => {
    const response = await useCase.handle();
    expect(response).toHaveLength(0);
  });
});

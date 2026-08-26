import Room from "../entities/room";
import Money from "../../shared/value-objects/money";
import { InMemoryRoomMemory } from "../../../../test/repositories/in-memory-room-repository";
import { CreatRoomUseCase } from "./create-room";

let roomRepository: InMemoryRoomMemory;
let useCase: CreatRoomUseCase;
describe("Criação de quarto", () => {
  beforeEach(() => {
    roomRepository = new InMemoryRoomMemory();
    useCase = new CreatRoomUseCase(roomRepository);
  });
  test("Deve criar um quarto", () => {
    const room = useCase.handle({
      name: "Suite",
      price: 120000,
      image: "room.jpg",
    });

    expect(room).toBeDefined();
    expect(roomRepository.items[0]?.name).toEqual("Suite");
  });
});

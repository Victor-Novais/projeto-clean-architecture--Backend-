import Room from "../entities/room";
import Money from "../../shared/value-objects/money";
import { InMemoryRoomMemory } from "../../../../test/repositories/in-memory-room-repository";
import { GetRoomUseCase } from "./get-room";

let roomRepository: InMemoryRoomMemory;
let useCase: GetRoomUseCase;

describe("Detalhamento de quartos", () => {
  beforeEach(() => {
    roomRepository = new InMemoryRoomMemory();
    useCase = new GetRoomUseCase(roomRepository);
  });
  test("Deve retornar um  quarto pelo id", async () => {
    const room = Room.create({
      name: "Suite",
      price: Money.create(120000),
      image: "room.jpg",
    });
    roomRepository.items.push(room);
    const response = await useCase.handle({ id: room.id.toString() });
    expect(response!.name).toEqual("Suite");
  });
  test("Não deve retornar um quarto com id invalido", async () => {
    const response = await useCase.handle({ id: `1` });
    expect(response).toEqual(null);
  });
});

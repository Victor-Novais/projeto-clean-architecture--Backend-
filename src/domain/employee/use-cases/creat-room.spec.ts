import Room from "../entities/room";
import Money from "../../shared/value-objects/money";
import { InMemoryRoomMemory } from "../../../../test/repositories/in-memory-room-repository";
import { CreatRoomUseCase } from "./create-room";
import Identity from "../../../core/entities/identity";

let roomRepository: InMemoryRoomMemory;
let useCase: CreatRoomUseCase;
describe("Criação de quarto", () => {
  beforeEach(() => {
    roomRepository = new InMemoryRoomMemory();
    useCase = new CreatRoomUseCase(roomRepository);
  });
  test("Deve criar um quarto", async () => {
    const room = await useCase.handle({
      name: "Suite",
      price: 120000,
      image: "room.jpg",
    });

    expect(room).toBeDefined();
    expect(roomRepository.items[0]!.id).toBeInstanceOf(Identity);
    expect(roomRepository.items[0]!.id.toString()).toEqual(room.id.toString());
    expect(roomRepository.items[0]!.name).toEqual("Suite");
    expect(roomRepository.items[0]!.price.value).toEqual(120000);
    expect(roomRepository.items[0]!.price.formattedPriceBRL()).toEqual(
      "R$\u00A01.200,00",
    );
    expect(roomRepository.items[0]!.image).toEqual("room.jpg");
    expect(roomRepository.items[0]!.hasWifi).toBe(false);
    expect(roomRepository.items[0]!.hasKitchen).toBe(false);
    expect(roomRepository.items[0]!.hasAir).toBe(false);
    expect(roomRepository.items[0]!.isAvailable).toBe(true);
    expect(roomRepository.items[0]!.isPetFriendly).toBe(false);
  });
});

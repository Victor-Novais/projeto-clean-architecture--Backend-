import Room from "../entities/room";
import Money from "../../shared/value-objects/money";

type Request = {
  name: string;
  price: number;
  image: string;
};
class CreatRoomUseCase {
  handle(data: Request) {
    const price = Money.create(data.price);
    const room = Room.create({ ...data, price });
    return room;
  }
}
describe("Criação de quarto", () => {
  test("Deve criar um quarto", () => {
    const useCase = new CreatRoomUseCase();
    const room = useCase.handle({
      name: "Suite",
      price: 120000,
      image: "room.jpg",
    });

    expect(room.name).toEqual("Suite");
  });
});

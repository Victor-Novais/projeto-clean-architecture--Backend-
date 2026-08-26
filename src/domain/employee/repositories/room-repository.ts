import Room from "../entities/room";

export abstract class RoomRepository {
  abstract create(romm: Room): Promise<Room>;
}

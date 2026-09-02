import Room from "../../src/domain/employee/entities/room";
import { RoomRepository } from "../../src/domain/employee/repositories/room-repository";

export class InMemoryRoomMemory implements RoomRepository {
  items: Room[] = [];
  async create(room: Room) {
    this.items.push(room);
    return room;
  }

  async findMany() {
    return this.items;
  }
}

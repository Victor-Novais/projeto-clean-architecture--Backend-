import { randomUUID } from "node:crypto";
type RoomType = {
  name: string;
  price: string;
  image: string;
  hasWifi: boolean;
  hasAir: boolean;
  hasKitchen: boolean;
  isPetFriendly: boolean;
  isAvailable: boolean;
};
export default class Room {
  private id: string;
  private name: string;
  private price: string;
  private image: string;
  private hasWifi: boolean;
  private hasAir: boolean;
  private hasKitchen: boolean;
  private isPetFriendly: boolean;
  private isAvailable: boolean;
  constructor(data: RoomType, id?: string) {
    this.name = data.name;
    this.price = data.name;
    this.price = data.price;
    this.image = data.image;
    this.hasAir = data.hasAir;
    this.hasWifi = data.hasWifi;
    this.hasKitchen = data.hasKitchen;
    this.isAvailable = data.isAvailable;
    this.isPetFriendly = data.isPetFriendly;

    this.id = id ?? randomUUID;
  }
}

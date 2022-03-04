// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("tokenID", Value.fromBigInt(BigInt.zero()));
    this.set("ipfsURI", Value.fromString(""));
    this.set("image", Value.fromString(""));
    this.set("name", Value.fromString(""));
    this.set("description", Value.fromString(""));
    this.set("background", Value.fromString(""));
    this.set("head", Value.fromString(""));
    this.set("skin", Value.fromString(""));
    this.set("mouth", Value.fromString(""));
    this.set("eyes", Value.fromString(""));
    this.set("outfit", Value.fromString(""));
    this.set("updatedAtTimestamp", Value.fromBigInt(BigInt.zero()));
    this.set("owner", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Token entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Token", id.toString(), this);
    }
  }

  static load(id: string): Token | null {
    return changetype<Token | null>(store.get("Token", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenID(): BigInt {
    let value = this.get("tokenID");
    return value!.toBigInt();
  }

  set tokenID(value: BigInt) {
    this.set("tokenID", Value.fromBigInt(value));
  }

  get ipfsURI(): string {
    let value = this.get("ipfsURI");
    return value!.toString();
  }

  set ipfsURI(value: string) {
    this.set("ipfsURI", Value.fromString(value));
  }

  get image(): string {
    let value = this.get("image");
    return value!.toString();
  }

  set image(value: string) {
    this.set("image", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get description(): string {
    let value = this.get("description");
    return value!.toString();
  }

  set description(value: string) {
    this.set("description", Value.fromString(value));
  }

  get background(): string {
    let value = this.get("background");
    return value!.toString();
  }

  set background(value: string) {
    this.set("background", Value.fromString(value));
  }

  get head(): string {
    let value = this.get("head");
    return value!.toString();
  }

  set head(value: string) {
    this.set("head", Value.fromString(value));
  }

  get skin(): string {
    let value = this.get("skin");
    return value!.toString();
  }

  set skin(value: string) {
    this.set("skin", Value.fromString(value));
  }

  get mouth(): string {
    let value = this.get("mouth");
    return value!.toString();
  }

  set mouth(value: string) {
    this.set("mouth", Value.fromString(value));
  }

  get eyes(): string {
    let value = this.get("eyes");
    return value!.toString();
  }

  set eyes(value: string) {
    this.set("eyes", Value.fromString(value));
  }

  get outfit(): string {
    let value = this.get("outfit");
    return value!.toString();
  }

  set outfit(value: string) {
    this.set("outfit", Value.fromString(value));
  }

  get updatedAtTimestamp(): BigInt {
    let value = this.get("updatedAtTimestamp");
    return value!.toBigInt();
  }

  set updatedAtTimestamp(value: BigInt) {
    this.set("updatedAtTimestamp", Value.fromBigInt(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save User entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokens(): Array<string> {
    let value = this.get("tokens");
    return value!.toStringArray();
  }

  set tokens(value: Array<string>) {
    this.set("tokens", Value.fromStringArray(value));
  }
}
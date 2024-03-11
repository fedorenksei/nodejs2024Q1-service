import { v4 as uuidv4 } from 'uuid';

interface WithId {
  id: string;
}

type ItemInfo = {
  version: number;
  createdAt: number;
  updatedAt: number;
};

export class Crud<Entity extends WithId> {
  private map: Map<string, Entity & ItemInfo> = new Map();

  create(createDto: Omit<Entity, 'id'>) {
    const id = uuidv4();
    const timestamp = Date.now();
    const newItem = Object.assign(
      { id, version: 1, createdAt: timestamp, updatedAt: timestamp },
      createDto,
    ) as Entity & ItemInfo;
    this.map.set(id, newItem);
    return newItem;
  }

  findAll() {
    return Array.from(this.map.values());
  }

  findOne(id: string) {
    return this.map.get(id);
  }

  update(id: string, updateDto: Partial<Entity>) {
    if (!this.map.has(id)) throw new Error();
    const item = this.map.get(id);
    Object.assign(item, updateDto);
    item.updatedAt = Date.now();
    item.version++;
    return item;
  }

  remove(id: string) {
    return this.map.delete(id);
  }
}

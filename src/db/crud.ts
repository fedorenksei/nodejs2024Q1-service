import { v4 as uuidv4 } from 'uuid';

interface WithId {
  id: string;
}

export class Crud<Entity extends WithId> {
  protected map: Map<string, Entity> = new Map();

  create(createDto: Omit<Entity, 'id'>) {
    const id = uuidv4();
    const newItem = Object.assign({ id }, createDto) as Entity;
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
    if (!this.map.has(id)) return;
    const item = this.map.get(id);
    Object.assign(item, updateDto);
    return item;
  }

  remove(id: string) {
    return this.map.delete(id);
  }
}

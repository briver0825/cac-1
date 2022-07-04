export class Option {
  name: string = "";
  rawName: string;
  description: string;
  constructor(name: string, description: string) {
    this.rawName = name;
    this.description = description;

    const resolvedName = name.match(/--(\w+) \<(\w+)\>/)?.[1];
    if(resolvedName) this.name = resolvedName
  }
}

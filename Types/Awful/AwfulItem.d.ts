interface IAwfulItem {
  numEquipped: number;
  equipped: boolean;
  casttimeraw: number;
  casttime: number;
  name: string;
  usable: boolean;
  count: number;
  range: number;
  cooldown: number;
  id: number;
  Use(unit?: IAwfulUnit): boolean;
  UseAoe(unit: IAwfulUnit): boolean;
  UseAoe(x: number, y: number, z: number): boolean;
}
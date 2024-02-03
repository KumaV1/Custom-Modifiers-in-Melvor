import { ModMtaCompatibility } from './ModMtaCompatibility';

export class AbyssalRiftMtaCompatibility extends ModMtaCompatibility {
    protected _version: string = '1.03';

    protected _namespace: string = 'abyrift';

    protected _name: string = 'Abyssal Rift';

    protected _allocations: Map<MonsterType, string[]> = new Map([
        [MonsterType.Demon, ['Tick', 'Screamer', 'Lasher', 'Crab_Wyrm', 'Gore_Bear']]
    ]);
}
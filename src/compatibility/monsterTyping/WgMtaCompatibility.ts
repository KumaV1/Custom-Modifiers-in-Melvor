import { ModMtaCompatibility } from './ModMtaCompatibility';

export class WgMtaCompatibility extends ModMtaCompatibility {
    protected _version: string = '2.5';

    protected _namespace: string = 'Snweos_Defenders';

    protected _name: string = 'Warriors Guild (Defenders)';

    protected _allocations: Map<MonsterType, string[]> = new Map([
        [MonsterType.Human, ['Lorelai', 'Kamfreena']]
    ]);
}
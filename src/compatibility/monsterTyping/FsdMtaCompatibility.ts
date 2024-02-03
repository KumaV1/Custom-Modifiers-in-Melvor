import { ModMtaCompatibility } from './ModMtaCompatibility';

export class FsdMtaCompatibility extends ModMtaCompatibility {
    protected _version: string = '0.13';

    protected _namespace: string = 'frem';

    protected _name: string = 'Fremennik Slayer Dungeon';

    protected _allocations: Map<MonsterType, string[]> = new Map([
        [MonsterType.Demon, ['pyrefiend']]
    ]);
}
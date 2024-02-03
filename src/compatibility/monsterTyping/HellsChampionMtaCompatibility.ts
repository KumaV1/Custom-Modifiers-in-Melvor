import { ModMtaCompatibility } from './ModMtaCompatibility';

export class HellsChampionMtaCompatibility extends ModMtaCompatibility {
    protected _version: string = '1.0.1';

    protected _namespace: string = 'vespoire';

    protected _name: string = "Hell's Champion";

    protected _allocations: Map<MonsterType, string[]> = new Map([
        [MonsterType.Demon, [
            'ClayTabletSummonedDemonTier1', 'ClayTabletSummonedDemonTier2',
            'ClayTabletSummonedDemonTier3', 'ClayTabletSummonedDemonTier4',
            'ClayTabletSummonedDemonTier5', 'ClayTabletSummonedDemonTier6',
            'ClayTabletSummonedDemonTier7'
        ]]
    ]);
}
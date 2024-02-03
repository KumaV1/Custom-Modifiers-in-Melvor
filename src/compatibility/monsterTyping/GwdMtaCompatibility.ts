import { ModMtaCompatibility } from './ModMtaCompatibility';

export class GwdMtaCompatibility extends ModMtaCompatibility {
    protected _version: string = '1.4';

    protected _namespace: string = 'godwarsDungeon';

    protected _name: string = 'Godwars Recreation';

    protected _allocations: Map<MonsterType, string[]> = new Map([
        [MonsterType.Demon, ['Kril_Tsutsaroth', "Zakln_Gritch", "Tstanon_Karlak", "Balfrug_Kreeyath"]],
        [MonsterType.Human, ['Fumus', 'Umbra', 'Cruor', 'Glacies', 'Gore_Bear']],
        [MonsterType.MythicalCreature, ['Starlight']],
        [MonsterType.Undead, [
            'Spiritual_Mage_Zamorak', 'Spiritual_Ranger_Zamorak', 'Spiritual_Warrior_Zamorak',
            'Spiritual_Mage_Armadyl', 'Spiritual_Ranger_Armadyl', 'Spiritual_Warrior_Armadyl',
            'Spiritual_Mage_Bandos', 'Spiritual_Ranger_Bandos', 'Spiritual_Warrior_Bandos',
            'Spiritual_Mage_Saradomin', 'Spiritual_Ranger_Saradomin', 'Spiritual_Warrior_Saradomin'
        ]]
    ]);
}
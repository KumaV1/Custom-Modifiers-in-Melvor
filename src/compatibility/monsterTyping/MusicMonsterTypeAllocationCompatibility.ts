import { ModMonsterTypeAllocationCompatibility } from "./ModMonsterTypeAllocationCompatibility";

export class MusicMonsterTypeAllocationCompatibility extends ModMonsterTypeAllocationCompatibility {
    protected _version: string = "1.13.13";

    protected _namespace: string = "mythMusic";

    protected _name: string = "[Myth] Music";

    protected _allocations: Map<MonsterType, string[]> = new Map([
        [MonsterType.Human, ["Jester", "Enchanted_Jester", "Mystic_Jester"]]
    ]);
}
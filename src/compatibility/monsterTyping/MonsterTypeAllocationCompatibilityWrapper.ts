import { AbyssalRiftMtaCompatibility } from "./AbyssalRiftMtaCompatibility";
import { GwdMtaCompatibility } from "./GwdMtaCompatibility";
import { MusicMtaCompatibility } from "./MusicMtaCompatibility";

/** A little wrapper of all those monster type allocation compatibility */
export class MonsterTypeAllocationCompatibilityWrapper {
    public static registerMonsterTypeAllocations(ctx: Modding.ModContext) {
        const mythMusic = new MusicMtaCompatibility(ctx);
        mythMusic.allocateMonsterTypes();

        const abyRift = new AbyssalRiftMtaCompatibility(ctx);
        abyRift.allocateMonsterTypes();

        const gwd = new GwdMtaCompatibility(ctx);
        gwd.allocateMonsterTypes();
    }
}
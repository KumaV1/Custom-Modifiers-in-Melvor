import { AbyssalRiftMtaCompatibility } from "./AbyssalRiftMtaCompatibility";
import { MusicMtaCompatibility } from "./MusicMtaCompatibility";

/** A little wrapper of all those monster type allocation compatibility */
export class MonsterTypeAllocationCompatibilityWrapper {
    public static registerMonsterTypeAllocations(ctx: Modding.ModContext) {
        const mythMusicCompatibility = new MusicMtaCompatibility(ctx);
        mythMusicCompatibility.allocateMonsterTypes();

        const abyRiftCompatibility = new AbyssalRiftMtaCompatibility(ctx);
        abyRiftCompatibility.allocateMonsterTypes();
    }
}
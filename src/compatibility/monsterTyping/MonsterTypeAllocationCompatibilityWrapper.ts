import { AbyssalRiftMtaCompatibility } from "./AbyssalRiftMtaCompatibility";
import { FsdMtaCompatibility } from "./FsdMtaCompatibility";
import { GwdMtaCompatibility } from "./GwdMtaCompatibility";
import { HellsChampionMtaCompatibility } from "./HellsChampionMtaCompatibility";
import { MusicMtaCompatibility } from "./MusicMtaCompatibility";
import { WgMtaCompatibility } from "./WgMtaCompatibility";

/** A little wrapper of all those monster type allocation compatibility */
export class MonsterTypeAllocationCompatibilityWrapper {
    public static registerMonsterTypeAllocations(ctx: Modding.ModContext) {
        const mythMusic = new MusicMtaCompatibility(ctx);
        mythMusic.allocateMonsterTypes();

        const abyRift = new AbyssalRiftMtaCompatibility(ctx);
        abyRift.allocateMonsterTypes();

        const gwd = new GwdMtaCompatibility(ctx);
        gwd.allocateMonsterTypes();

        const frem = new FsdMtaCompatibility(ctx);
        frem.allocateMonsterTypes();

        const wg = new WgMtaCompatibility(ctx);
        wg.allocateMonsterTypes();

        const hc = new HellsChampionMtaCompatibility(ctx);
        hc.allocateMonsterTypes();
    }
}
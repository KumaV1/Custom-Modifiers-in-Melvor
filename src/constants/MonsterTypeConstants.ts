/**
 * List of monsters and their type allocations, for the base game and the expansions
 * Do note, that mods are only available with the full game, so no differentiation between "melvorD" and "melvorF" necessary
 */
export class MonsterTypeConstants {
    static readonly ANIMALS_BASE: MonsterIDs[] = [
        MonsterIDs.Chicken,
        MonsterIDs.Cow,
        MonsterIDs.Chick,
        MonsterIDs.MummaChicken,
        MonsterIDs.Leech,
        MonsterIDs.Bat,
        MonsterIDs.BigBat,
        MonsterIDs.ViciousSerpent,
        MonsterIDs.Spider,
        MonsterIDs.BrownSpider,
        MonsterIDs.EvilSpider,
        MonsterIDs.SpiderKing,
        MonsterIDs.Seagull,
        MonsterIDs.FrozenMammoth,
        MonsterIDs.AirGuard,
        MonsterIDs.LegaranWurm,
        MonsterIDs.NoxiousSerpent,
        MonsterIDs.VenomousSnake,
        MonsterIDs.GiantMoth,
        MonsterIDs.RancoraSpider,
        MonsterIDs.SpikedRedClaw,
    ];
    static readonly ANIMALS_TOTH: MonsterIDs[] = [
        MonsterIDs.BurningSnake,
        MonsterIDs.PolarBear,
        MonsterIDs.SpectralIceWolf,
        MonsterIDs.PoisonToad,
        MonsterIDs.Conda,
        MonsterIDs.SpectralIceWolf,
        MonsterIDs.ScouterSpider,
        MonsterIDs.TrapperSpider,
        MonsterIDs.WickedSpider,
        MonsterIDs.BasherSpider,
        MonsterIDs.EnforcerSpider,
        MonsterIDs.GuardianSpider
    ];
    static readonly ANIMALS_AOD: MonsterIDs[] = [];
    static readonly ANIMALS_ITA: MonsterIDs[] = [
        MonsterIDs.MutatingChicken,
        MonsterIDs.MutatingCow,
        MonsterIDs.AbyssalChicken,
        MonsterIDs.AbyssalCow,
        MonsterIDs.AbyssalBat,
        MonsterIDs.CrimsonViper,
        MonsterIDs.CrimsonHound,
        MonsterIDs.TangledSerpent,
        MonsterIDs.ToxicSerpent,
        MonsterIDs.BlightedMantis,
        MonsterIDs.BlightedMoth,
        MonsterIDs.BlightedShadewing,
        MonsterIDs.CatacombTerror
    ];

    static readonly DEMONS_BASE: MonsterIDs[] = [
        MonsterIDs.RedDevil,
        MonsterIDs.FierceDevil,
        MonsterIDs.FireGuard,
        MonsterIDs.Ignis,
        MonsterIDs.Ragnar
    ];
    static readonly DEMONS_TOTH: MonsterIDs[] = [
        MonsterIDs.MagicFireDemon,
        MonsterIDs.GuardianoftheHerald
    ];
    static readonly DEMONS_AOD: MonsterIDs[] = [];
    static readonly DEMONS_ITA: MonsterIDs[] = [];

    static readonly DRAGONS_BASE: MonsterIDs[] = [
        MonsterIDs.PratTheProtectorOfSecrets,
        MonsterIDs.GreenDragon,
        MonsterIDs.BlueDragon,
        MonsterIDs.RedDragon,
        MonsterIDs.BlackDragon,
        MonsterIDs.MalcsTheGuardianOfMelvor,
        MonsterIDs.ElderDragon,
        MonsterIDs.ChaoticGreaterDragon,
        MonsterIDs.HuntingGreaterDragon,
        MonsterIDs.WickedGreaterDragon,
        MonsterIDs.MalcsTheLeaderOfDragons,
        MonsterIDs.GreaterSkeletalDragon,
        MonsterIDs.MalcsTheGuardianOfStrongholds
    ];
    static readonly DRAGONS_TOTH: MonsterIDs[] = [
        MonsterIDs.TwinSeaDragonSerpent,
        MonsterIDs.RaZu
    ];
    static readonly DRAGONS_AOD: MonsterIDs[] = [];
    static readonly DRAGONS_ITA: MonsterIDs[] = [
        MonsterIDs.PetrifyingDrake,
        MonsterIDs.FracturedWyvern,
        MonsterIDs.Voidmaw
    ];

    static readonly ELEMENTALS_BASE: MonsterIDs[] = [
        MonsterIDs.Ice,
        MonsterIDs.FireSpirit,
        MonsterIDs.AirGolem,
        MonsterIDs.WaterGuard,
        MonsterIDs.WaterMonster,
        MonsterIDs.WaterGolem,
        MonsterIDs.Glacia,
        MonsterIDs.EarthGolem,
        MonsterIDs.FireGolem
    ];
    static readonly ELEMENTALS_TOTH: MonsterIDs[] = [
        MonsterIDs.InfernalGolem,
        MonsterIDs.FrostGolem,
        MonsterIDs.LightningSpirit
    ];
    static readonly ELEMENTALS_AOD: MonsterIDs[] = [];
    static readonly ELEMENTALS_ITA: MonsterIDs[] = [
        MonsterIDs.SmogGolem,
        MonsterIDs.SmogSlime,
        MonsterIDs.SmogFiend,
        MonsterIDs.SmogVirefang
    ];

    static readonly ELVES_BASE: MonsterIDs[] = [
        MonsterIDs.FrozenArcher,
        MonsterIDs.ElderWizard
    ];
    static readonly ELVES_TOTH: MonsterIDs[] = [];
    static readonly ELVES_AOD: MonsterIDs[] = [];
    static readonly ELVES_ITA: MonsterIDs[] = [];

    static readonly HUMANS_BASE: MonsterIDs[] = [
        MonsterIDs.BlackKnight,
        MonsterIDs.ConfusedPirate,
        MonsterIDs.Pirate,
        MonsterIDs.FirstMate,
        MonsterIDs.JuniorFarmer,
        MonsterIDs.AdultFarmer,
        MonsterIDs.MasterFarmer,
        MonsterIDs.Wizard,
        MonsterIDs.SteelKnight,
        MonsterIDs.MithrilKnight,
        MonsterIDs.AdamantKnight,
        MonsterIDs.RuneKnight,
        MonsterIDs.BanditTrainee,
        MonsterIDs.Bandit,
        MonsterIDs.BanditLeader,
        MonsterIDs.DarkWizard,
        MonsterIDs.MasterWizard,
        MonsterIDs.Druid,
        MonsterIDs.Thief,
        MonsterIDs.Shaman,
        MonsterIDs.Necromancer,
        MonsterIDs.Elementalist,
        MonsterIDs.Paladin,
        MonsterIDs.Priest,
        MonsterIDs.WanderingBard
    ];
    static readonly HUMANS_TOTH: MonsterIDs[] = [
        MonsterIDs.DarkKnight
    ];
    static readonly HUMANS_AOD: MonsterIDs[] = [
        MonsterIDs.BlindWarrior,
        MonsterIDs.BlindArcher,
        MonsterIDs.BlindMage,
        MonsterIDs.SoulTakerWitch
    ];
    static readonly HUMANS_ITA: MonsterIDs[] = [
        MonsterIDs.VoidDoppelganger
    ];

    static readonly MYTHICAL_CREATURES_BASE: MonsterIDs[] = [
        MonsterIDs.ElerineMage,
        MonsterIDs.ElerineWarrior,
        MonsterIDs.ElerineArcher,
        MonsterIDs.Griffin,
        MonsterIDs.Pegasus,
        MonsterIDs.Cerberus,
        MonsterIDs.Phoenix,
        MonsterIDs.Aleron,
        MonsterIDs.EarthGuard,
        MonsterIDs.EarthMonster,
        MonsterIDs.Ophidia,
        MonsterIDs.FireMonster
    ];
    static readonly MYTHICAL_CREATURES_TOTH: MonsterIDs[] = [
        MonsterIDs.Manticore
    ];
    static readonly MYTHICAL_CREATURES_AOD: MonsterIDs[] = [];
    static readonly MYTHICAL_CREATURES_ITA: MonsterIDs[] = [
        MonsterIDs.FracturedManticore
    ];

    static readonly SEA_CREATURES_BASE: MonsterIDs[] = [
        MonsterIDs.GiantCrab,
        MonsterIDs.Tentacle,
        MonsterIDs.TheKraken,
        MonsterIDs.Lissia,
        MonsterIDs.Murtia,
        MonsterIDs.Umbora,
        MonsterIDs.Rokken,
        MonsterIDs.Kutul,
        MonsterIDs.Lissia,
        MonsterIDs.Murtia,
        MonsterIDs.MioliteWarden
    ];
    static readonly SEA_CREATURES_TOTH: MonsterIDs[] = [
        MonsterIDs.Siren,
        MonsterIDs.MonsterCroc,
        MonsterIDs.Leviathan,
        MonsterIDs.TwinSeaDragonSerpent
    ];
    static readonly SEA_CREATURES_AOD: MonsterIDs[] = [
        MonsterIDs.ShipwreckBeast,
        MonsterIDs.Merman,
        MonsterIDs.MermaidArcher,
        MonsterIDs.MermanGuard,
        MonsterIDs.TreacherousJellyfish,
        MonsterIDs.Nagaia
    ];
    static readonly SEA_CREATURES_ITA: MonsterIDs[] = [
        MonsterIDs.SilentsnapGiantcrab,
        MonsterIDs.SilentsnapTortoise,
        MonsterIDs.SilentsnapSiren,
        MonsterIDs.WhisperingManta,
        MonsterIDs.WhisperingOctopus,
        MonsterIDs.WhisperingDrifter,
        MonsterIDs.HollowNightmare
    ];

    static readonly UNDEAD_BASE: MonsterIDs[] = [
        MonsterIDs.PirateCaptain,
        MonsterIDs.ZombieHand,
        MonsterIDs.Zombie,
        MonsterIDs.ZombieLeader,
        MonsterIDs.Ghost,
        MonsterIDs.Skeleton,
        MonsterIDs.UndeadWerewolf,
        MonsterIDs.CursedLich,
        MonsterIDs.GreaterSkeletalDragon
    ];
    static readonly UNDEAD_TOTH: MonsterIDs[] = [
        MonsterIDs.Phantom,
        MonsterIDs.Banshee,
        MonsterIDs.Spectre,
        MonsterIDs.CursedSkeletonWarrior,
        MonsterIDs.Fiozor,
        MonsterIDs.CursedSpirit
    ];
    static readonly UNDEAD_AOD: MonsterIDs[] = [
        MonsterIDs.BlindGhost,
        MonsterIDs.Lich,
        MonsterIDs.GhostSailor,
        MonsterIDs.GhostMercenary,
        MonsterIDs.CursedPirateCaptain
    ];
    static readonly UNDEAD_ITA: MonsterIDs[] = [
        MonsterIDs.DreadwalkerWight,
        MonsterIDs.DreadwalkerGhoul,
        MonsterIDs.DreadwalkerRevenant,
        MonsterIDs.WailingAmbusher,
        MonsterIDs.WailingPoltergeist,
        MonsterIDs.WailingShade,
        MonsterIDs.WitheringBonearcher,
        MonsterIDs.WitheringBoneguard,
        MonsterIDs.WitheringBonemage,
        MonsterIDs.CatacombWraith,
        MonsterIDs.EchoSpecter,
        MonsterIDs.EchoWalker,
        MonsterIDs.EchoDrifter,
        MonsterIDs.EldritchPhantom,
        MonsterIDs.EldritchGhoul
    ];
}
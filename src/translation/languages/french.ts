export const fr = {
    Combat_Modifier_UI_Impact_Indicator_Headline: 'Avertissement Cmim-Mod',
    Combat_Modifier_UI_Impact_Indicator_Text: "Au moins un combattant bénéficie actuellement d'un modificateur qui permet de réduire les dégâts à 0. En raison de la façon dont ce modificateur a été implémenté, il est possible que l'affichage des dégâts (par exemple, le nombre de coups maximum) indique à tort 0, même pour des ennemis qui sont trop forts pour que cela soit possible de façon réaliste.",
    Combat_Modifier_UI_Impact_Indicator_Hint: 'Cet avertissement peut être désactivé dans les paramètres du mod.',
    Combat_Area_Boss_Indicator: 'Patron',

    // ### Settings
    // #### Combat Areas Indicators section
    Settings_Section_Combat_Areas_Indicator: 'Indicateurs des zones de combat',

    // ##### Enable modifier ui impact indicator
    Settings_Setting_Label_Enable_Modifier_UI_Impact_Indicator: "Indicateur d'activation, pour les cas où certains modificateurs peuvent entraîner un affichage défectueux dans l'interface utilisateur.",
    Settings_Setting_Hint_Enable_Modifier_UI_Impact_Indicator: "N'affecte actuellement qu'un seul modificateur. L'indicateur affiché fournit plus d'informations",

    // ##### Enable boss indicators
    Settings_Setting_Label_Enable_Boss_Indicators: 'Activer les indicateurs de patron',
    Settings_Setting_Hint_Enable_Boss_Indicators: "En général, seul le dernier monstre d'un donjon est considéré comme un boss. Il peut cependant y avoir des exceptions à cette règle, lorsque les monstres des zones de combat ou de massacre peuvent également être classés comme boss, ce que ce paramètre mettra en évidence",

    // ##### Enable active monster type indicators
    Settings_Setting_Label_Enable_Active_Monster_Type_Indicators: 'Activer les indicateurs de type de monstre actif',
    Settings_Setting_Hint_Enable_Active_Monster_Type_Indicators: 'Ajout de badges verts dans les menus de sélection des monstres et des donjons, indiquant les types de monstres natifs alloués.',

    // ##### Enable inactive monster type indicators
    Settings_Setting_Label_Enable_Inactive_Monster_Type_Indicators: 'Activer les indicateurs de type de monstre inactif',
    Settings_Setting_Hint_Enable_Inactive_Monster_Type_Indicators: 'Ajout de badges orange dans les menus de sélection des monstres et des donjons, indiquant les types de monstres natifs alloués.',

    // #### Disabling section
    Settings_Section_Disabling: 'Désactivation',

    // ##### Info label
    Settings_Setting_Label_Disabling_Info: "Cette section permet de désactiver certaines parties des fonctionnalités de ce mod. En plus de rendre le contenu volontairement plus facile/difficile, l'autre raison principale pour laquelle vous voudrez faire cela, est que ce mod peut finir par ajouter une quantité notable de temps de calcul, conduisant à une augmentation notable du temps de chargement des gains hors ligne (en particulier, si le système de type de monstre est utilisé). Le fait de désactiver l'exécution de certains codes peut donc entraîner une amélioration notable des performances.",

    // ##### On-spawn modifiers
    Settings_Setting_Label_Disable_All_On_Spawn_Modifiers: "Désactiver les modificateurs d'apparition",
    Settings_Setting_Hint_Disable_All_On_Spawn_Modifiers: 'Désactive tous les modificateurs on-spawn ajoutés par ce mod',

    // ##### Keep specific monster types inactive
    Settings_Setting_Label_Keep_Specific_Monster_Types_Inactive: 'Garder certains types de monstres inactifs',
    Settings_Setting_Hint_Keep_Specific_Monster_Types_Inactive: "Force les types de monstres sélectionnés à rester inactifs, indépendamment de ce qu'un mod peut communiquer.Les types de monstres ajoutés par d'autres mods perdront leur statut de case à cocher, si vous chargez votre sauvegarde sans le mod en question.",

    // #### Enabling section
    Settings_Section_Enabling: 'Habilitation',

    // ##### Info label
    Settings_Setting_Label_Enabling_Info: "Cette section n'est probablement pas pertinente en tant qu'utilisateur. Cependant, en fonction des mods utilisés, vous pouvez vous retrouver dans la situation de devoir activer vous-même certaines fonctionnalités, parce qu'aucun mod n'en a communiqué la nécessité, bien qu'il soit utilisé. Dans ce cas, cette section vous permet de vous occuper vous-même de l'activation.",

    // ##### Force specific monster types active
    Settings_Setting_Label_Force_Specific_Monster_Types_Active: 'Forcer des types de monstres spécifiques à être actifs',
    Settings_Setting_Hint_Force_Specific_Monster_Types_Active: "Force les types de monstres sélectionnés à être actifs (évalués après le paramètre d'inactivité), indépendamment de ce qu'un mod peut communiquer. Les types de monstres ajoutés par d'autres mods perdront leur statut de case à cocher, si vous chargez votre sauvegarde sans ce mod.",

    // #### Save & Reload section
    Settings_Section_Save_And_Reload: 'Enregistrer tout et recharger',

    // ##### Save & Reload button
    Settings_Hint_Save_Reload_Required: 'Recharge nécessaire',
    Settings_Setting_Display_Save_Reload: 'Enregistrer tout et recharger',

    // ### Monster type overview
    PAGE_NAME_Monster_Types_Overview: "Types de monstres",

    Monster_Type_Overview_Remarks_Prefix: "Veuillez tenir compte des points suivants :",
    Monster_Type_Overview_Remarks_Not_Inherit_Monster_Types: "Melvor n'inclut pas de façon inhérente des définitions de types. En revanche, le mod \"Custom Modifiers in Melvor\" a jeté les bases permettant aux mods de définir et d'allouer des types de monstres.",
    Monster_Type_Overview_Remarks_Displayed_Type_Allocation: "Cet affichage montre toutes les allocations de type définies. Si un monstre n'est pas affiché dans une section, c'est qu'il n'est pas typé en tant que tel. Ceci étant dit, les définitions des types peuvent être inexactes. N'hésitez pas à nous faire part de vos commentaires sur ce que vous pensez devoir être modifié.",
    Monster_Type_Overview_Remarks_Custom_Mods_Monster_Type_Allocation: "Pour tous les monstres ajoutés par d'autres mods, ces mods doivent définir eux-mêmes les types de monstres.",

    Monster_Type_Overview_Player_Traits_Tab_Header: "Caractéristiques des joueurs",
    Monster_Type_Overview_Player_Traits_Information_Type_Allocation: "Outre l'attribution organique d'un type, un type peut également être appliqué de force par l'utilisation du modificateur correspondant, généralement par le biais de compétences, d'objets équipés ou éventuellement d'achats en boutique.",
    Monster_Type_Overview_Player_Traits_Information_Display: "Cette vue d'ensemble affiche tous les types (et la valeur du modificateur) affectant actuellement le personnage - il est possible d'obtenir plus d'informations en utilisant le mod \"Show Skill Modifiers\".",
    Monster_Type_Overview_Player_Traits_Information_Data_Loaded: "Cet affichage est statique, basé sur le moment où le personnage a été chargé.",
    Monster_Type_Overview_Player_Traits_No_Entries: "Le personnage n'est affecté par aucun modificateur d'allocation de type",

    Monster_Type_Overview_Active_Types_Tab_Header: "Types actifs",
    Monster_Type_Overview_Active_Types_Information: "Les types actifs sont ceux qui sont effectivement utilisés par au moins un des mods chargés.",
    Monster_Type_Overview_Active_Types_No_Entries: "Il n'y a pas de type actif actuellement",

    Monster_Type_Overview_Inactive_Types_Tab_Header: "Types inactifs",
    Monster_Type_Overview_Inactive_Types_Information: "Les types inactifs sont ceux qui ont été définis mais qui ne sont utilisés par aucun mod. Ils ne sont donc pas non plus vérifiés pendant les combats, ce qui signifie qu'ils n'affectent pas le temps de calcul.",
    Monster_Type_Overview_Inactive_Types_No_Entries: "Il n'y a pas de types inactifs actuellement",
    Monster_Type_Overview_Inactive_Types_Affected_By_Mod_Settings: "Ne peut devenir actif en raison de la sélection dans les paramètres du mod",

    // ### Modifiers
    // #### Directly affecting damage dealt
    MODIFIER_DATA_increasedChanceToReduceAttackDamageToZero: "+${value}% de chances (MAX : 90%) de réduire les dégâts infligés par une attaque à 0 (est toujours considéré comme touché et n'affecte pas le calcul des effets sur les coups comme les dégâts sur la durée)",
    MODIFIER_DATA_decreasedChanceToReduceAttackDamageToZero: "-${value}% de chances (MAX : 90%) de réduire les dégâts infligés par une attaque à 0 (est toujours considéré comme touché et n'affecte pas le calcul des effets sur les coups comme les dégâts sur la durée)",
    MODIFIER_DATA_increasedDamageFlatWhileTargetHasMaxHP: '+${value} de dégâts lorsque la cible a tous ses PV',
    MODIFIER_DATA_decreasedDamageFlatWhileTargetHasMaxHP: '-${value} de dégâts lorsque la cible a tous ses PV',
    MODIFIER_DATA_increasedDamagePercentWhileTargetHasMaxHP: '+${value}% de dégâts lorsque la cible a tous ses PV',
    MODIFIER_DATA_decreasedDamagePercentWhileTargetHasMaxHP: '-${value}% de dégâts lorsque la cible a tous ses PV',
    MODIFIER_DATA_increasedDamageFlatIgnoringDamageReduction: "+${value} de dégâts, qui ne sont pas affectés par la réduction des dégâts de l'ennemi",
    MODIFIER_DATA_decreasedDamageFlatIgnoringDamageReduction: "-${value} de dégâts, qui ne sont pas affectés par la réduction des dégâts de l'ennemi",
    MODIFIER_DATA_increasedGlobalDamagePreventionThreshold: '+${value} seuil global de prévention des dégâts (tout splat de dégâts inférieur au seuil est ramené à 0)',
    MODIFIER_DATA_decreasedGlobalDamagePreventionThreshold: '-${value} seuil global de prévention des dégâts (tout splat de dégâts inférieur au seuil est ramené à 0)',
    MODIFIER_DATA_increasedDamagePreventionThreshold: '+${value} seuil de prévention des dégâts (tout splat de dégâts inférieur au seuil est réduit à 0)',
    MODIFIER_DATA_decreasedDamagePreventionThreshold: '-${value} seuil de prévention des dégâts (tout splat de dégâts inférieur au seuil est réduit à 0)',
    MODIFIER_DATA_increasedBarrierDamagePreventionThreshold: '+${value} seuil de prévention des dégâts de la barrière (les dégâts infligés à une barrière en dessous du seuil sont réduits à 0)',
    MODIFIER_DATA_decreasedBarrierDamagePreventionThreshold: '-${value} seuil de prévention des dégâts de la barrière (les dégâts infligés à une barrière en dessous du seuil sont réduits à 0)',

    // #### Spawn
    MODIFIER_DATA_increasedChanceToApplySlowOnSpawn: "+${value}% de chances d'appliquer 25% d'augmentation de l'intervalle d'attaque pendant trois tours à la cible lors de l'apparition ou de la réanimation",
    MODIFIER_DATA_decreasedChanceToApplySlowOnSpawn: "-${value}% de chances d'appliquer 25% d'augmentation de l'intervalle d'attaque pendant trois tours à la cible lors de l'apparition ou de la réanimatione",
    MODIFIER_DATA_increasedChanceToApplyStunOnSpawn: "+${value}% de chances d'étourdir la cible pendant un tour lors de l'apparition ou de la réanimation",
    MODIFIER_DATA_decreasedChanceToApplyStunOnSpawn: "-${value}% de chances d'étourdir la cible pendant un tour lors de l'apparition ou de la réanimation",
    MODIFIER_DATA_applyStunOnSpawn: "Appliquer ${value} tour d'étourdissement à la cible lors de l'apparition ou de la réanimation",
    MODIFIER_DATA_applyStunOnSpawn_Plural: "Appliquer ${value} tours d'étourdissement à la cible lors de l'apparition ou de la réanimation",
    MODIFIER_DATA_increasedChanceToApplyPoisonOnSpawn: "+${value}% de chances d'appliquer du poison à la cible lors de l'apparition ou de la réanimation",
    MODIFIER_DATA_decreasedChanceToApplyPoisonOnSpawn: "-${value}% de chances d'appliquer du poison à la cible lors de l'apparition ou de la réanimation",
    MODIFIER_DATA_increasedChanceToApplyDeadlyPoisonOnSpawn: "+${value}% de chances d'appliquer un poison mortel à la cible lors de l'apparition ou de la réanimation",
    MODIFIER_DATA_decreasedChanceToApplyDeadlyPoisonOnSpawn: "-${value}% de chances d'appliquer un poison mortel à la cible lors de l'apparition ou de la réanimation",
    MODIFIER_DATA_increasedChanceToApplyAfflictionOnSpawn: "+${value}% de chances d'appliquer une pile d'affliction à la cible lors de l'apparition ou de la réanimation",
    MODIFIER_DATA_decreasedChanceToApplyAfflictionOnSpawn: "-${value}% de chances d'appliquer une pile d'affliction à la cible lors de l'apparition ou de la réanimation",
    MODIFIER_DATA_applyAfflictionOnSpawn: "Appliquer ${value} pile d'Affliction à la cible lors de l'apparition ou de la réanimation",
    MODIFIER_DATA_applyAfflictionOnSpawn_Plural: "Appliquer ${value} piles d'Affliction à la cible lors de l'apparition ou de la réanimation.",
    MODIFIER_DATA_increasedChanceToApplyBleedOnSpawn: "+${value}% de chances d'appliquer un saignement, infligeant 100% de votre maximum de points de vie en dégâts sur 10s, à la cible à l'apparition ou lors d'une réanimation",
    MODIFIER_DATA_decreasedChanceToApplyBleedOnSpawn: "-${value}% de chances d'appliquer un saignement, infligeant 100% de votre maximum de points de vie en dégâts sur 10s, à la cible à l'apparition ou lors d'une réanimation",
    MODIFIER_DATA_increasedChanceToApplyBurnOnSpawn: "+${value}% de chances d'appliquer une brûlure, infligeant 15% des PV actuels de la cible en 2,5 secondes, à la cible lors de l'apparition ou de la réanimation.",
    MODIFIER_DATA_decreasedChanceToApplyBurnOnSpawn: "-${value}% de chances d'appliquer une brûlure, infligeant 15% des PV actuels de la cible en 2,5 secondes, à la cible lors de l'apparition ou de la réanimation.",
    MODIFIER_DATA_increasedChanceToApplyFreezeOnSpawn: "+${value}% de chances d'appliquer un gel d'un tour à la cible lors de l'apparition ou de la réanimation",
    MODIFIER_DATA_decreasedChanceToApplyFreezeOnSpawn: "-${value}% de chances d'appliquer un gel d'un tour à la cible lors de l'apparition ou de la réanimation",
    MODIFIER_DATA_applyFreezeOnSpawn: "Appliquer ${value} tour de gel à la cible lors de l'apparition ou de la réanimation",
    MODIFIER_DATA_applyFreezeOnSpawn_Plural: "Applique ${value} tours de gel à la cible lors de l'apparition ou de la réanimation",
    MODIFIER_DATA_increasedChanceToApplyFrostburnOnSpawn: "+${value}% de chances d'appliquer une brûlure de givre pendant trois tours à la cible lors de l'apparition ou de la réanimation",
    MODIFIER_DATA_decreasedChanceToApplyFrostburnOnSpawn: "-${value}% de chances d'appliquer une brûlure de givre pendant trois tours à la cible lors de l'apparition ou de la réanimation",
    MODIFIER_DATA_increasedChanceToApplyShockOnSpawn: "+${value}% de chances d'appliquer une pile de choc à la cible à l'apparition ou à la réanimation",
    MODIFIER_DATA_decreasedChanceToApplyShockOnSpawn: "-${value}% de chances d'appliquer une pile de choc à la cible à l'apparition ou à la réanimation",
    MODIFIER_DATA_applyShockOnSpawn: "Appliquer ${value} pile de choc à la cible lors de l'apparition ou de la réanimation",
    MODIFIER_DATA_applyShockOnSpawn_Plural: "Appliquer ${value} pile de choc à la cible lors de l'apparition ou de la réanimation",
    MODIFIER_DATA_increasedChanceToApplySleepOnSpawn: "+${value}% de chances d'endormir la cible pendant un tour à l'apparition ou à la réanimation",
    MODIFIER_DATA_decreasedChanceToApplySleepOnSpawn: "-${value}% de chances d'endormir la cible pendant un tour à l'apparition ou à la réanimation",
    MODIFIER_DATA_applySleepOnSpawn: "Appliquer ${value} tour de sommeil à la cible lors de l'apparition ou de la réanimation",
    MODIFIER_DATA_applySleepOnSpawn_Plural: "Appliquer ${value} tours de sommeil à la cible lors de l'apparition ou de la réanimation",

    // #### On hit
    MODIFIER_DATA_increasedChanceToApplyBleed: "+${value}% de chances d'infliger un saignement, qui inflige 100% de votre maximum de points de vie en dégâts sur 10s, lorsque vous frappez avec une attaque",
    MODIFIER_DATA_decreasedChanceToApplyBleed: "-${value}% de chances d'infliger un saignement, qui inflige 100% de votre maximum de points de vie en dégâts sur 10s, lorsque vous frappez avec une attaque",

    // #### Death mark (not to be confused with mark of death)
    Death_Mark_Notification_Text: "Vous avez été exécuté par la marque de la mort",
    COMBAT_MISC_Death_Mark_Effect: "Marque de la mort",
    MODIFIER_DATA_deathMark: "Si le pourcentage de PV maximum restant est inférieur au nombre de piles (MAX 20% / 5 000), il est exécuté immédiatement.",
    MODIFIER_DATA_increasedDeathMarkOnHit: "+${value} Les piles de la marque de mort sont appliquées lors d'une attaque.",
    MODIFIER_DATA_increasedChanceToApplyStackOfDeathMark: "+${value}% de chances d'appliquer une pile de marque de mort sur l'ennemi",
    MODIFIER_DATA_decreasedChanceToApplyStackOfDeathMark: "-${value}% de chances d'appliquer une pile de marque de mort sur l'ennemi",
    MODIFIER_DATA_increasedDeathMarkImmunity: "+${value}% de chances de résister à l'application des piles de marques de mort",
    MODIFIER_DATA_decreasedDeathMarkImmunity: "-${value}% de chances de résister à l'application des piles de marques de mort",
    MODIFIER_DATA_applyDeathMarkOnSpawn: "Appliquer ${value} pile de marque de mort à la cible lors de l'apparition ou de la réanimation",
    MODIFIER_DATA_applyDeathMarkOnSpawn_Plural: "Appliquer ${value} piles de Marque de mort à la cible lors de l'apparition ou de la réanimation.",

    // #### Spell type
    MODIFIER_DATA_increasedDamageTakenFromAirSpells: "+${value}% de dégâts infligés par les sorts aériens",
    MODIFIER_DATA_decreasedDamageTakenFromAirSpells: "-${value}% de dégâts infligés par les sorts aériens",
    MODIFIER_DATA_increasedDamageTakenFromWaterSpells: "+${value}% de dégâts infligés par les sorts d'eau",
    MODIFIER_DATA_decreasedDamageTakenFromWaterSpells: "-${value}% de dégâts infligés par les sorts d'eau",
    MODIFIER_DATA_increasedDamageTakenFromEarthSpells: "+${value}% de dégâts infligés par les sorts de terre",
    MODIFIER_DATA_decreasedDamageTakenFromEarthSpells: "-${value}% de dégâts infligés par les sorts de terre",
    MODIFIER_DATA_increasedDamageTakenFromFireSpells: "+${value}% de dégâts infligés par les sorts de feu",
    MODIFIER_DATA_decreasedDamageTakenFromFireSpells: "-${value}% de dégâts infligés par les sorts de feu",

    // #### Area type
    MODIFIER_DATA_increasedMaxHitPercentToCombatAreaMonsters: "+${value}% de points de vie maximum pour combattre les monstres de la zone",
    MODIFIER_DATA_decreasedMaxHitPercentToCombatAreaMonsters: "-${value}% de points de vie maximum pour combattre les monstres de la zone",
    MODIFIER_DATA_increasedMaxHitFlatToCombatAreaMonsters: "+${value} de points de vie maximum pour combattre les monstres de la zone",
    MODIFIER_DATA_decreasedMaxHitFlatToCombatAreaMonsters: "-${value} de points de vie maximum pour combattre les monstres de la zone",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitToCombatAreaMonsters: "+${value}% de succès minimum pour les monstres de la zone de combat",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToCombatAreaMonsters: "-${value}% de succès minimum pour les monstres de la zone de combat",
    MODIFIER_DATA_increasedFlatMinHitToCombatAreaMonsters: "+${value} de succès minimum pour les monstres de la zone de combat",
    MODIFIER_DATA_decreasedFlatMinHitToCombatAreaMonsters: "-${value} de succès minimum pour les monstres de la zone de combat",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstCombatAreaMonsters: '+${value}% de précision contre les monstres de la zone de combat',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstCombatAreaMonsters: '-${value}% de précision contre les monstres de la zone de combat',
    MODIFIER_DATA_increasedDamageReductionAgainstCombatAreaMonsters: '+${value}% de réduction des dégâts contre les monstres de la zone de combat',
    MODIFIER_DATA_decreasedDamageReductionAgainstCombatAreaMonsters: '-${value}% de réduction des dégâts contre les monstres de la zone de combat',

    MODIFIER_DATA_increasedMaxHitPercentToSlayerAreaMonsters: "+${value}% Nombre maximal de points de vie pour les monstres de la zone des tueurs",
    MODIFIER_DATA_decreasedMaxHitPercentToSlayerAreaMonsters: "-${value}% Nombre maximal de points de vie pour les monstres de la zone des tueurs",
    MODIFIER_DATA_increasedMaxHitFlatToSlayerAreaMonsters: "+${value} Nombre maximal de points de vie pour les monstres de la zone des tueurs",
    MODIFIER_DATA_decreasedMaxHitFlatToSlayerAreaMonsters: "-${value} Nombre maximal de points de vie pour les monstres de la zone des tueurs",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitToSlayerAreaMonsters: "+${value}% Coup minimum pour tuer les monstres de la zone",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToSlayerAreaMonsters: "-${value}% Coup minimum pour tuer les monstres de la zone",
    MODIFIER_DATA_increasedFlatMinHitToSlayerAreaMonsters: "+${value} Coup minimum pour tuer les monstres de la zone",
    MODIFIER_DATA_decreasedFlatMinHitToSlayerAreaMonsters: "-${value} Coup minimum pour tuer les monstres de la zone",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstSlayerAreaMonsters: '+${value}% Précision contre les monstres de zone tueurs',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstSlayerAreaMonsters: '-${value}% Précision contre les monstres de zone tueurs',
    MODIFIER_DATA_increasedDamageReductionAgainstSlayerAreaMonsters: '+${value}% de réduction des dégâts contre les monstres de zone tueurs',
    MODIFIER_DATA_decreasedDamageReductionAgainstSlayerAreaMonsters: '-${value}% de réduction des dégâts contre les monstres de zone tueurs',

    MODIFIER_DATA_increasedMaxHitPercentToDungeonMonsters: "+${value}% de points de vie maximum pour les monstres de donjon",
    MODIFIER_DATA_decreasedMaxHitPercentToDungeonMonsters: "-${value}% de points de vie maximum pour les monstres de donjon",
    MODIFIER_DATA_increasedMaxHitFlatToDungeonMonsters: "+${value} Coup maximal pour les monstres de donjon",
    MODIFIER_DATA_decreasedMaxHitFlatToDungeonMonsters: "-${value} Coup maximal pour les monstres de donjon",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitToDungeonMonsters: "+${value}% de dégâts minimums sur les monstres de donjon",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToDungeonMonsters: "-${value}% de dégâts minimums sur les monstres de donjon",
    MODIFIER_DATA_increasedFlatMinHitToDungeonMonsters: "+${value} Coup minimal infligé aux monstres de donjon",
    MODIFIER_DATA_decreasedFlatMinHitToDungeonMonsters: "-${value} Coup minimal infligé aux monstres de donjon",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstDungeonMonsters: '+${value}% de précision contre les monstres de donjon',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstDungeonMonsters: '-${value}% de précision contre les monstres de donjon',
    MODIFIER_DATA_increasedDamageReductionAgainstDungeonMonsters: '+${value}% de réduction des dégâts contre les monstres de donjon',
    MODIFIER_DATA_decreasedDamageReductionAgainstDungeonMonsters: '-${value}% de réduction des dégâts contre les monstres de donjon',

    // #### Slayer task
    MODIFIER_DATA_increasedMaxHitPercentToSlayerTasks: "+${value}% de réussite maximale aux tâches de tueur",
    MODIFIER_DATA_decreasedMaxHitPercentToSlayerTasks: "-${value}% de réussite maximale aux tâches de tueur",
    MODIFIER_DATA_increasedMaxHitFlatToSlayerTasks: "+${value} de réussite maximale aux tâches de tueur",
    MODIFIER_DATA_decreasedMaxHitFlatToSlayerTasks: "-${value} de réussite maximale aux tâches de tueur",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitToSlayerTasks: "+${value}% Coup minime sur les tâches des tueurs",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToSlayerTasks: "-${value}% Coup minime sur les tâches des tueurs",
    MODIFIER_DATA_increasedFlatMinHitToSlayerTasks: "+${value} Coup minime sur les tâches des tueurs",
    MODIFIER_DATA_decreasedFlatMinHitToSlayerTasks: "-${value} Coup minime sur les tâches des tueurs",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstSlayerTasks: "+${value}% d'indice de précision contre les tâches des tueurs",
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstSlayerTasks: "-${value}% d'indice de précision contre les tâches des tueurs",
    MODIFIER_DATA_decreasedDamageReductionAgainstSlayerTasks: '-${value}% de réduction des dégâts contre les tâches de tueur',

    // #### Monster Type
    // ##### Generic; these will be used to dynamically build the ones further down below, as those also have to be dynamically built
    MONSTER_TYPE_SINGULAR_Animal: "Animaux",
    MONSTER_TYPE_PLURAL_Animal: "Animaux",
    MONSTER_TYPE_SINGULAR_Demon: "Démon",
    MONSTER_TYPE_PLURAL_Demon: "Démons",
    MONSTER_TYPE_SINGULAR_Dragon: "Dragon",
    MONSTER_TYPE_PLURAL_Dragon: "Dragons",
    MONSTER_TYPE_SINGULAR_Elemental: "Élémentaire",
    MONSTER_TYPE_PLURAL_Elemental: "Élémentaires",
    MONSTER_TYPE_SINGULAR_Human: "Humain",
    MONSTER_TYPE_PLURAL_Human: "Humains",
    MONSTER_TYPE_SINGULAR_MythicalCreature: "Créature mythique",
    MONSTER_TYPE_PLURAL_MythicalCreature: "Créatures mythiques",
    MONSTER_TYPE_SINGULAR_SeaCreature: "Créature marine",
    MONSTER_TYPE_PLURAL_SeaCreature: "Créatures marines",
    MONSTER_TYPE_SINGULAR_Undead: "Mort-vivant",
    MONSTER_TYPE_PLURAL_Undead: "Mort-vivant",

    COMBAT_MISC_Monster_Type_Trait_Modifier_Effect: "Trait de ${monsterType}",
    COMBAT_MISC_Monster_Type_Trait_Stacking_Effect: "Trait de ${monsterType}",

    MODIFIER_DATA_MonsterTypeTraitApplied: "Marque la personne affectée comme ${monsterType}",
    MODIFIER_DATA_increasedDamageAgainstMonsterType: "+${value}% de dégâts à ${monsterType}",
    MODIFIER_DATA_decreasedDamageAgainstMonsterType: "-${value}% de dégâts à ${monsterType}",
    MODIFIER_DATA_increasedDamageTakenFromMonsterType: "+${value}% de dégâts infligés par ${monsterType}",
    MODIFIER_DATA_decreasedDamageTakenFromMonsterType: "-${value}% de dégâts infligés par ${monsterType}",
    MODIFIER_DATA_increasedMaxHitPercentAgainstMonsterType: "+${value}% de réussite maximale lors du combat contre ${monsterType}",
    MODIFIER_DATA_decreasedMaxHitPercentAgainstMonsterType: "-${value}% de réussite maximale lors du combat contre ${monsterType}",
    MODIFIER_DATA_increasedMaxHitFlatAgainstMonsterType: "+${value} de réussite maximale lors du combat contre ${monsterType}",
    MODIFIER_DATA_decreasedMaxHitFlatAgainstMonsterType: "-${value} de réussite maximale lors du combat contre ${monsterType}",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitAgainstMonsterType: "+${value}% de réussite minimale lors d'un combat contre ${monsterType}",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitAgainstMonsterType: "-${value}% de réussite minimale lors d'un combat contre ${monsterType}",
    MODIFIER_DATA_increasedFlatMinHitAgainstMonsterType: "+${value} de réussite minimale lors d'un combat contre ${monsterType}",
    MODIFIER_DATA_decreasedFlatMinHitAgainstMonsterType: "-${value} de réussite minimale lors d'un combat contre ${monsterType}",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstMonsterType: '+${value}% de précision lors du combat contre ${monsterType}',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstMonsterType: '-${value}% de précision lors du combat contre ${monsterType}',
    MODIFIER_DATA_increasedDamageReductionAgainstMonsterType: '+${value}% de réduction des dégâts en combattant ${monsterType}',
    MODIFIER_DATA_decreasedDamageReductionAgainstMonsterType: '-${value}% de réduction des dégâts en combattant ${monsterType}',

    MODIFIER_DATA_increasedChanceToApplyMonsterTypeTraitInfiniteOnSpawn: "+${value}% de chances d'appliquer le trait ${Type de monstre} à l'ensemble du combat lors du spawn ou de la reviviscence",
    MODIFIER_DATA_decreasedChanceToApplyMonsterTypeTraitInfiniteOnSpawn: "-${value}% de chances d'appliquer le trait ${Type de monstre} à l'ensemble du combat lors du spawn ou de la reviviscence",
    MODIFIER_DATA_applyMonserTypeTraitTurnsOnSpawn: "Applique le trait ${monsterType} à l'ennemi pendant ${value} des tours de l'ennemi lors de l'apparition ou de la réanimation.",

    MODIFIER_DATA_increasedChanceToApplyMonsterTypeTrait: "+${value}% de chances d'appliquer le trait ${monsterType} pendant l'un des tours de l'ennemi",
    MODIFIER_DATA_decreasedChanceToApplyMonsterTypeTrait: "-${value}% de chances d'appliquer le trait ${monsterType} pendant l'un des tours de l'ennemi",
    MODIFIER_DATA_applyMonsterTypeTraitTurns: "Appliquer le trait ${monsterType} à l'ennemi pendant ${value} des tours de l'ennemi",

    // #### Bosses
    MODIFIER_DATA_increasedMaxHitPercentAgainstBosses: "+${value}% Coup maximal lors du combat contre les boss",
    MODIFIER_DATA_decreasedMaxHitPercentAgainstBosses: "-${value}% Coup maximal lors du combat contre les boss",
    MODIFIER_DATA_increasedMaxHitFlatAgainstBosses: "+${value} Coup maximal lors du combat contre les boss",
    MODIFIER_DATA_decreasedMaxHitFlatAgainstBosses: "-${value} Coup maximal lors du combat contre les boss",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitAgainstBosses: "+${value}% de coups minimums lors des combats contre les boss",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitAgainstBosses: "-${value}% de coups minimums lors des combats contre les boss",
    MODIFIER_DATA_increasedFlatMinHitAgainstBosses: "+${value} de coups minimums lors des combats contre les boss",
    MODIFIER_DATA_decreasedFlatMinHitAgainstBosses: "-${value} de coups minimums lors des combats contre les boss",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstBosses: '+${value}% de précision lors des combats contre les boss',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstBosses: '-${value}% de précision lors des combats contre les boss',

    // #### Skilling
    MODIFIER_DATA_increasedThievingDamagePreventionThreshold: '+${value} seuil de prévention des dégâts des voleurs (tout splat de dégâts inférieur au seuil est réduit à 0)',
    MODIFIER_DATA_decreasedThievingDamagePreventionThreshold: '-${value} seuil de prévention des dégâts des voleurs (tout splat de dégâts inférieur au seuil est réduit à 0)',
    MODIFIER_DATA_increasedGlobalSkillXPPerLevel: "+${value}% Global Skill XP par niveau dans la compétence en cours d'apprentissage",
    MODIFIER_DATA_decreasedGlobalSkillXPPerLevel: "-${value}% Global Skill XP par niveau dans la compétence en cours d'apprentissage",
    MODIFIER_DATA_increasedSkillXPPerSkillLevel: "+${value}% ${skillName} XP par niveau en ${skillName}",
    MODIFIER_DATA_decreasedSkillXPPerSkillLevel: "-${value}% ${skillName} XP par niveau en ${skillName}",
    MODIFIER_DATA_increasedFlatGlobalSkillXP: "+${value} XP de compétence globale (ajouté après les % de modificateurs)",
    MODIFIER_DATA_decreasedFlatGlobalSkillXP: "-${value} XP de compétence globale (ajouté après les % de modificateurs)",
    MODIFIER_DATA_increasedFlatSkillXP: "+${value} ${skillName} XP par niveau en ${skillName} (ajouté après les % de modificateurs)",
    MODIFIER_DATA_decreasedFlatSkillXP: "-${value} ${skillName} XP par niveau en ${skillName} (ajouté après les % de modificateurs)",
    MODIFIER_DATA_increasedFlatGlobalSkillXPPerSkillLevel: "+${value} XP de compétence globale (ajouté après les % de modificateurs)",
    MODIFIER_DATA_decreasedFlatGlobalSkillXPPerSkillLevel: "-${value} XP de compétence globale (ajouté après les % de modificateurs)",
    MODIFIER_DATA_increasedFlatSkillXPPerSkillLevel: "+${value} ${skillName} XP de compétence par niveau dans ${skillName} (ajouté après les modificateurs %)",
    MODIFIER_DATA_decreasedFlatSkillXPPerSkillLevel: "-${value} ${skillName} XP de compétence par niveau dans ${skillName} (ajouté après les modificateurs %)"
};
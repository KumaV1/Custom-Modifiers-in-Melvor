export const pt = {
    Combat_Modifier_UI_Impact_Indicator_Headline: 'Aviso Cmim-Mod',
    Combat_Modifier_UI_Impact_Indicator_Text: "Pelo menos um combatente beneficia atualmente de um modificador que permite reduzir os danos sofridos para 0. Devido à forma como esse modificador teve de ser implementado, é possível que as indicações de danos (por exemplo, acerto máximo) sejam erradamente apresentadas como 0, mesmo no caso de inimigos demasiado fortes para que isso seja realisticamente possível.",
    Combat_Modifier_UI_Impact_Indicator_Hint: 'Este aviso pode ser desativado nas definições do mod',
    Combat_Area_Boss_Indicator: 'Chefe',

    // ### Settings
    // #### Combat Areas Indicators section
    Settings_Section_Combat_Areas_Indicator: 'Indicadores de áreas de combate',

    // ##### Enable modifier ui impact indicator
    Settings_Setting_Label_Enable_Modifier_UI_Impact_Indicator: 'Indicador de ativação, para quando certos modificadores podem causar uma visualização defeituosa na IU',
    Settings_Setting_Hint_Enable_Modifier_UI_Impact_Indicator: 'Atualmente, afecta apenas um modificador. O indicador apresentado fornece mais informações',

    // ##### Enable active monster type indicators
    Settings_Setting_Label_Enable_Boss_Indicators: 'Ativar os indicadores de chefe',
    Settings_Setting_Hint_Enable_Boss_Indicators: "Normalmente, apenas o monstro final de uma masmorra é classificado como chefe. No entanto, pode haver excepções a esta regra, onde monstros em Áreas de Combate ou de Caça podem também ser classificados como bosses, o que esta definição irá realçar",

    // ##### Enable active monster type indicators
    Settings_Setting_Label_Enable_Active_Monster_Type_Indicators: 'Ativar os indicadores de tipo de monstro ativo',
    Settings_Setting_Hint_Enable_Active_Monster_Type_Indicators: 'Adiciona emblemas verdes aos menus de seleção de monstros/masmorras, indicando a atribuição de tipos de monstros nativos',

    // ##### Enable inactive monster type indicators
    Settings_Setting_Label_Enable_Inactive_Monster_Type_Indicators: 'Ativar os indicadores de tipo de monstro inativo',
    Settings_Setting_Hint_Enable_Inactive_Monster_Type_Indicators: 'Adiciona emblemas cor de laranja aos menus de seleção de monstros/masmorras, indicando a atribuição de tipos de monstros nativos',

    // #### Disabling section
    Settings_Section_Disabling: 'Desativação',

    // ##### Info label
    Settings_Setting_Label_Disabling_Info: "Esta secção serve como uma forma de desativar certas partes da funcionalidade deste mod. Para além de tornar o conteúdo propositadamente mais fácil/difícil, a outra razão principal pela qual pode querer fazer isto é porque este mod pode acabar por adicionar uma quantidade notável de tempo de cálculo, levando a um aumento notável no tempo de carregamento de ganhos offline (especialmente, se o sistema de tipo de monstro estiver a ser utilizado). Desativar a execução de algum código pode, portanto, resultar numa melhoria notável do desempenho.",

    // ##### On-spawn modifiers
    Settings_Setting_Label_Disable_All_On_Spawn_Modifiers: 'Desativar modificadores no surgimento',
    Settings_Setting_Hint_Disable_All_On_Spawn_Modifiers: 'Desactiva todos os modificadores no aparecimento adicionados por este mod',

    // ##### Keep specific monster types inactive
    Settings_Setting_Label_Keep_Specific_Monster_Types_Inactive: 'Manter inactivos tipos específicos de monstros',
    Settings_Setting_Hint_Keep_Specific_Monster_Types_Inactive: 'Força os tipos de monstros seleccionados a permanecerem inactivos, independentemente do que qualquer mod possa comunicar. Os tipos de monstros adicionados por outros mods perderão o seu estado de checkbox, se por acaso carregar o seu save sem esse mod',

    // #### Enabling section
    Settings_Section_Enabling: 'Ativação',

    // ##### Info label
    Settings_Setting_Label_Enabling_Info: 'Esta secção é muito provavelmente irrelevante para o utilizador. No entanto, dependendo dos mods utilizados, pode deparar-se com a situação de ter de ser você a ativar determinada funcionalidade, porque nenhum mod comunicou a sua necessidade, apesar de ser utilizado. Nesse caso, esta secção permite-lhe tratar você mesmo da ativação.',

    // ##### Force specific monster types active
    Settings_Setting_Label_Force_Specific_Monster_Types_Active: 'Forçar a ativação de tipos específicos de monstros',
    Settings_Setting_Hint_Force_Specific_Monster_Types_Active: 'Força os tipos de monstros seleccionados a estarem activos (avaliados após a definição de inatividade), independentemente do que qualquer mod possa comunicar. Os tipos de monstros adicionados por outros mods perderão o seu estado de checkbox, se por acaso carregar o seu save sem esse mod',

    // #### Save & Reload section
    Settings_Section_Save_And_Reload: 'Guardar tudo e recarregar',

    // ##### Save & Reload button
    Settings_Hint_Save_Reload_Required: 'Recarga necessária',
    Settings_Setting_Display_Save_Reload: 'Guardar tudo e recarregar',

    // ### Monster type overview
    PAGE_NAME_Monster_Types_Overview: "Tipos de monstros",

    Monster_Type_Overview_Remarks_Prefix: "Tenha em atenção os seguintes pontos:",
    Monster_Type_Overview_Remarks_Not_Inherit_Monster_Types: "Melvor não inclui inerentemente definições de tipos. Em vez disso, o mod "Custom Modifiers in Melvor" lançou as bases para que os mods definam e atribuam tipos de monstros",
    Monster_Type_Overview_Remarks_Displayed_Type_Allocation: "Este ecrã mostra todas as atribuições de tipos definidas. Se um monstro não for apresentado numa secção, então não está tipado como tal. Dito isso, as definições de tipo podem ser imprecisas. Sinta-se à vontade para dar feedback sobre qualquer coisa que ache que deva ser ajustada",
    Monster_Type_Overview_Remarks_Custom_Mods_Monster_Type_Allocation: "Para quaisquer monstros adicionados através de outros mods, esses mods têm de definir eles próprios definições de tipo para esses monstros",

    Monster_Type_Overview_Player_Traits_Tab_Header: "Características dos jogadores",
    Monster_Type_Overview_Player_Traits_Information_Type_Allocation: "Para além da atribuição orgânica de tipos, um tipo pode também ser aplicado de forma forçada através da utilização do respetivo modificador, normalmente através de itens equipados ou, eventualmente, de compras na loja",
    Monster_Type_Overview_Player_Traits_Information_Display: 'Esta visão geral mostra todos os tipos (e o valor do modificador) que afectam atualmente a Personagem - mais informação pode ser determinada usando o mod "Mostrar Modificadores de Habilidade"',
    Monster_Type_Overview_Player_Traits_Information_Data_Loaded: "Esta visualização é estática, baseada no momento em que o carácter foi carregado",
    Monster_Type_Overview_Player_Traits_No_Entries: "O carácter não é afetado por nenhum modificador de atribuição de tipo",

    Monster_Type_Overview_Active_Types_Tab_Header: "Tipos activos",
    Monster_Type_Overview_Active_Types_Information: "Os tipos activos são aqueles que estão a ser utilizados por pelo menos uma das modificações carregadas.",
    Monster_Type_Overview_Active_Types_No_Entries: "Não existem atualmente tipos activos",

    Monster_Type_Overview_Inactive_Types_Tab_Header: "Tipos inactivos",
    Monster_Type_Overview_Inactive_Types_Information: "Os tipos inactivos são aqueles que foram definidos mas que não são utilizados por nenhuma modificação. Por conseguinte, também não são verificados durante o combate, o que significa que não afectam o tempo de cálculo.",
    Monster_Type_Overview_Inactive_Types_No_Entries: "Não existem atualmente tipos inactivos",
    Monster_Type_Overview_Inactive_Types_Affected_By_Mod_Settings: "Não é possível tornar-se ativo devido à seleção nas definições do mod",

    // ### Modifiers
    // #### Directly affecting damage dealt
    MODIFIER_DATA_increasedChanceToReduceAttackDamageToZero: '+${value}% de hipótese (MÁX: 90%) de reduzir o dano recebido de um ataque para 0 (continua a ser tratado como um ataque e não afecta o cálculo de efeitos ao atingir, como dano ao longo do tempo)',
    MODIFIER_DATA_decreasedChanceToReduceAttackDamageToZero: '-${value}% de hipótese (MÁX: 90%) de reduzir o dano recebido de um ataque para 0 (continua a ser tratado como um ataque e não afecta o cálculo de efeitos ao atingir, como dano ao longo do tempo)',
    MODIFIER_DATA_increasedDamageFlatWhileTargetHasMaxHP: '+${value} de dano enquanto o alvo estiver com a vida cheia',
    MODIFIER_DATA_decreasedDamageFlatWhileTargetHasMaxHP: '-${value} de dano enquanto o alvo estiver com a vida cheia',
    MODIFIER_DATA_increasedDamagePercentWhileTargetHasMaxHP: '+${value}% de dano enquanto o alvo estiver com a vida cheia',
    MODIFIER_DATA_decreasedDamagePercentWhileTargetHasMaxHP: '-${value}% de dano enquanto o alvo estiver com a vida cheia',
    MODIFIER_DATA_increasedDamageFlatIgnoringDamageReduction: "+${value} de dano, que não é afetado pela redução de dano dos inimigos",
    MODIFIER_DATA_decreasedDamageFlatIgnoringDamageReduction: "-${value} de dano, que não é afetado pela redução de dano dos inimigos",
    MODIFIER_DATA_increasedGlobalDamagePreventionThreshold: '+${value} limiar global de prevenção de danos (qualquer dano abaixo deste limiar é reduzido para 0)',
    MODIFIER_DATA_decreasedGlobalDamagePreventionThreshold: '-${value} limiar global de prevenção de danos (qualquer dano abaixo deste limiar é reduzido para 0)',
    MODIFIER_DATA_increasedDamagePreventionThreshold: '+${value} limiar de prevenção de danos (qualquer dano abaixo do limiar é reduzido para 0)',
    MODIFIER_DATA_decreasedDamagePreventionThreshold: '-${value} limiar de prevenção de danos (qualquer dano abaixo do limiar é reduzido para 0)',
    MODIFIER_DATA_increasedBarrierDamagePreventionThreshold: '+${value} limiar de prevenção de danos de barreira (qualquer dano causado a uma barreira abaixo do limiar é reduzido para 0)',
    MODIFIER_DATA_decreasedBarrierDamagePreventionThreshold: '-${value} limiar de prevenção de danos de barreira (qualquer dano causado a uma barreira abaixo do limiar é reduzido para 0)',

    // #### Spawn
    MODIFIER_DATA_increasedChanceToApplySlowOnSpawn: "+${value}% de chance de aplicar 25% de aumento no intervalo de ataque por três turnos ao Alvo ao aparecer ou reviver",
    MODIFIER_DATA_decreasedChanceToApplySlowOnSpawn: "-${value}% de chance de aplicar 25% de aumento no intervalo de ataque por três turnos ao Alvo ao aparecer ou reviver",
    MODIFIER_DATA_increasedChanceToApplyStunOnSpawn: "+${value}% de hipótese de aplicar atordoamento durante um turno ao Alvo ao aparecer ou reviver",
    MODIFIER_DATA_decreasedChanceToApplyStunOnSpawn: "-${value}% de hipótese de aplicar atordoamento durante um turno ao Alvo ao aparecer ou reviver",
    MODIFIER_DATA_applyStunOnSpawn: "Aplica ${value} turnos de Atordoamento no Alvo ao aparecer ou reviver",
    MODIFIER_DATA_applyStunOnSpawn_Plural: "Aplica ${value} turnos de Atordoamento no Alvo ao aparecer ou reviver",
    MODIFIER_DATA_increasedChanceToApplyPoisonOnSpawn: "+${value}% de hipótese de aplicar veneno ao Alvo ao aparecer ou reviver",
    MODIFIER_DATA_decreasedChanceToApplyPoisonOnSpawn: "-${value}% de hipótese de aplicar veneno ao Alvo ao aparecer ou reviver",
    MODIFIER_DATA_increasedChanceToApplyDeadlyPoisonOnSpawn: "+${value}% de hipótese de aplicar veneno mortal ao Alvo ao aparecer ou reviver",
    MODIFIER_DATA_decreasedChanceToApplyDeadlyPoisonOnSpawn: "-${value}% de hipótese de aplicar veneno mortal ao Alvo ao aparecer ou reviver",
    MODIFIER_DATA_increasedChanceToApplyAfflictionOnSpawn: "+${value}% de hipótese de aplicar uma pilha de aflição ao Alvo ao aparecer ou reviver",
    MODIFIER_DATA_decreasedChanceToApplyAfflictionOnSpawn: "-${value}% de hipótese de aplicar uma pilha de aflição ao Alvo ao aparecer ou reviver",
    MODIFIER_DATA_applyAfflictionOnSpawn: "Aplica uma pilha de ${value} de Aflição no Alvo ao aparecer ou reviver",
    MODIFIER_DATA_applyAfflictionOnSpawn_Plural: "Aplica pilhas de ${value} de Aflição no Alvo ao aparecer ou reviver",
    MODIFIER_DATA_increasedChanceToApplyBleedOnSpawn: "+${value}% de hipótese de aplicar sangramento, causando 100% do seu máximo de acerto como dano ao longo de 10s, ao Alvo ao aparecer ou reviver",
    MODIFIER_DATA_decreasedChanceToApplyBleedOnSpawn: "-${value}% de hipótese de aplicar sangramento, causando 100% do seu máximo de acerto como dano ao longo de 10s, ao Alvo ao aparecer ou reviver",
    MODIFIER_DATA_increasedChanceToApplyBurnOnSpawn: "+${value}% de hipótese de aplicar queimadura, causando 15% do HP atual do alvo ao longo de 2,5 segundos, ao Alvo ao aparecer ou reviver",
    MODIFIER_DATA_decreasedChanceToApplyBurnOnSpawn: "-${value}% de hipótese de aplicar queimadura, causando 15% do HP atual do alvo ao longo de 2,5 segundos, ao Alvo ao aparecer ou reviver",
    MODIFIER_DATA_increasedChanceToApplyFreezeOnSpawn: "+${value}% de hipótese de aplicar congelamento por um turno ao Alvo ao aparecer ou reviver",
    MODIFIER_DATA_decreasedChanceToApplyFreezeOnSpawn: "-${value}% de hipótese de aplicar congelamento por um turno ao Alvo ao aparecer ou reviver",
    MODIFIER_DATA_applyFreezeOnSpawn: "Aplica ${value} turnos de Congelamento no Alvo ao aparecer ou reviver",
    MODIFIER_DATA_applyFreezeOnSpawn_Plural: "Aplica ${value} turnos de Congelamento no Alvo ao aparecer ou reviver",
    MODIFIER_DATA_increasedChanceToApplyFrostburnOnSpawn: "+${value}% de chance de aplicar queimadura de gelo por três turnos no Alvo ao aparecer ou reviver",
    MODIFIER_DATA_decreasedChanceToApplyFrostburnOnSpawn: "-${value}% de chance de aplicar queimadura de gelo por três turnos no Alvo ao aparecer ou reviver",
    MODIFIER_DATA_increasedChanceToApplyShockOnSpawn: "+${value}% de hipótese de aplicar uma pilha de choque ao Alvo ao aparecer ou reviver",
    MODIFIER_DATA_decreasedChanceToApplyShockOnSpawn: "-${value}% de hipótese de aplicar uma pilha de choque ao Alvo ao aparecer ou reviver",
    MODIFIER_DATA_applyShockOnSpawn: "Aplica uma pilha de ${value} de Choque no Alvo ao aparecer ou reviver",
    MODIFIER_DATA_applyShockOnSpawn_Plural: "Aplica uma pilha de ${value} de Choque no Alvo ao aparecer ou reviver",
    MODIFIER_DATA_increasedChanceToApplySleepOnSpawn: "+${value}% de hipótese de aplicar sono durante um turno ao Alvo ao aparecer ou reviver",
    MODIFIER_DATA_decreasedChanceToApplySleepOnSpawn: "-${value}% de hipótese de aplicar sono durante um turno ao Alvo ao aparecer ou reviver",
    MODIFIER_DATA_applySleepOnSpawn: "Aplica ${value} turnos de Sono no Alvo ao aparecer ou reviver",
    MODIFIER_DATA_applySleepOnSpawn_Plural: "Aplica ${value} turnos de Sono no Alvo ao aparecer ou reviver",

    // #### On hit
    MODIFIER_DATA_increasedChanceToApplyBleed: "+${value}% de hipótese de infligir Sangramento, que causa 100% do seu máximo de acerto como dano ao longo de 10s, ao acertar com um ataque",
    MODIFIER_DATA_decreasedChanceToApplyBleed: "-${value}% de hipótese de infligir Sangramento, que causa 100% do seu máximo de acerto como dano ao longo de 10s, ao acertar com um ataque",

    // #### Death mark (not to be confused with mark of death)
    Death_Mark_Notification_Text: "Foi executado com a marca da morte",
    COMBAT_MISC_Death_Mark_Effect: "Marca de morte",
    MODIFIER_DATA_deathMark: "Se a percentagem de HP máximo restante for inferior à quantidade de stacks (MAX 20% / 5,000), é executado imediatamente",
    MODIFIER_DATA_increasedDeathMarkOnHit: "+${value} Acúmulos de Marca da Morte aplicados ao acertar com um ataque",
    MODIFIER_DATA_increasedChanceToApplyStackOfDeathMark: "+${value}% de hipótese de aplicar uma pilha de marca da morte no inimigo",
    MODIFIER_DATA_decreasedChanceToApplyStackOfDeathMark: "-${value}% de hipótese de aplicar uma pilha de marca da morte no inimigo",
    MODIFIER_DATA_increasedDeathMarkImmunity: "+${value}% de hipótese de resistir à aplicação de pilhas de marca da morte",
    MODIFIER_DATA_decreasedDeathMarkImmunity: "-${value}% de hipótese de resistir à aplicação de pilhas de marca da morte",
    MODIFIER_DATA_applyDeathMarkOnSpawn: "Aplica uma pilha de ${value} de Marca da Morte no alvo ao aparecer ou reviver",
    MODIFIER_DATA_applyDeathMarkOnSpawn_Plural: "Aplica pilhas de ${value} de Marca da Morte no alvo ao aparecer ou reviver",

    // #### Spell type
    MODIFIER_DATA_increasedDamageTakenFromAirSpells: "+${value}% Dano recebido de feitiços de ar",
    MODIFIER_DATA_decreasedDamageTakenFromAirSpells: "-${value}% Dano recebido de feitiços de ar",
    MODIFIER_DATA_increasedDamageTakenFromWaterSpells: "+${value}% Dano recebido de feitiços de água",
    MODIFIER_DATA_decreasedDamageTakenFromWaterSpells: "-${value}% Dano recebido de feitiços de água",
    MODIFIER_DATA_increasedDamageTakenFromEarthSpells: "+${value}% Dano recebido de feitiços de terra",
    MODIFIER_DATA_decreasedDamageTakenFromEarthSpells: "-${value}% Dano recebido de feitiços de terra",
    MODIFIER_DATA_increasedDamageTakenFromFireSpells: "+${value}% Dano recebido de feitiços de fogo",
    MODIFIER_DATA_decreasedDamageTakenFromFireSpells: "-${value}% Dano recebido de feitiços de fogo",

    // #### Area type
    MODIFIER_DATA_increasedMaxHitPercentToCombatAreaMonsters: "+${value}% de acerto máximo para combater monstros da área",
    MODIFIER_DATA_decreasedMaxHitPercentToCombatAreaMonsters: "-${value}% de acerto máximo para combater monstros da área",
    MODIFIER_DATA_increasedMaxHitFlatToCombatAreaMonsters: "+${value} de acerto máximo para combater monstros da área",
    MODIFIER_DATA_decreasedMaxHitFlatToCombatAreaMonsters: "-${value} de acerto máximo para combater monstros da área",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitToCombatAreaMonsters: "+${value}% de acerto mínimo para combater monstros da área",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToCombatAreaMonsters: "-${value}% de acerto mínimo para combater monstros da área",
    MODIFIER_DATA_increasedFlatMinHitToCombatAreaMonsters: "+${value} de acerto mínimo para combater monstros da área",
    MODIFIER_DATA_decreasedFlatMinHitToCombatAreaMonsters: "-${value} de acerto mínimo para combater monstros da área",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstCombatAreaMonsters: '+${value}% de Precisão contra Monstros em Área de Combate',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstCombatAreaMonsters: '-${value}% de Precisão contra Monstros em Área de Combate',
    MODIFIER_DATA_increasedDamageReductionAgainstCombatAreaMonsters: '+${value}% de Redução de Dano contra Monstros em Área de Combate',
    MODIFIER_DATA_decreasedDamageReductionAgainstCombatAreaMonsters: '-${value}% de Redução de Dano contra Monstros em Área de Combate',

    MODIFIER_DATA_increasedMaxHitPercentToSlayerAreaMonsters: "+${value}% de acerto máximo para matar monstros da área",
    MODIFIER_DATA_decreasedMaxHitPercentToSlayerAreaMonsters: "-${value}% de acerto máximo para matar monstros da área",
    MODIFIER_DATA_increasedMaxHitFlatToSlayerAreaMonsters: "+${value} de acerto máximo para matar monstros da área",
    MODIFIER_DATA_decreasedMaxHitFlatToSlayerAreaMonsters: "-${value} de acerto máximo para matar monstros da área",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitToSlayerAreaMonsters: "+${value}% de acerto mínimo para matar monstros da área",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToSlayerAreaMonsters: "-${value}% de acerto mínimo para matar monstros da área",
    MODIFIER_DATA_increasedFlatMinHitToSlayerAreaMonsters: "+${value} de acerto mínimo para matar monstros da área",
    MODIFIER_DATA_decreasedFlatMinHitToSlayerAreaMonsters: "-${value} de acerto mínimo para matar monstros da área",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstSlayerAreaMonsters: '+${value}% de Precisão contra Monstros da Área de Caçadores',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstSlayerAreaMonsters: '-${value}% de Precisão contra Monstros da Área de Caçadores',
    MODIFIER_DATA_increasedDamageReductionAgainstSlayerAreaMonsters: '+${value}% de Redução de Dano contra Monstros da Área de Caçadores',
    MODIFIER_DATA_decreasedDamageReductionAgainstSlayerAreaMonsters: '-${value}% de Redução de Dano contra Monstros da Área de Caçadores',

    MODIFIER_DATA_increasedMaxHitPercentToDungeonMonsters: "+${value}% de acerto máximo nos monstros da masmorra",
    MODIFIER_DATA_decreasedMaxHitPercentToDungeonMonsters: "-${value}% de acerto máximo nos monstros da masmorra",
    MODIFIER_DATA_increasedMaxHitFlatToDungeonMonsters: "+${value} de acerto máximo nos monstros da masmorra",
    MODIFIER_DATA_decreasedMaxHitFlatToDungeonMonsters: "-${value} de acerto máximo nos monstros da masmorra",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitToDungeonMonsters: "+${value}% de acerto mínimo nos monstros da masmorra",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToDungeonMonsters: "-${value}% de acerto mínimo nos monstros da masmorra",
    MODIFIER_DATA_increasedFlatMinHitToDungeonMonsters: "+${value} de acerto mínimo nos monstros da masmorra",
    MODIFIER_DATA_decreasedFlatMinHitToDungeonMonsters: "-${value} de acerto mínimo nos monstros da masmorra",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstDungeonMonsters: '+${value}% de Precisão contra Monstros das Masmorras',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstDungeonMonsters: '-${value}% de Precisão contra Monstros das Masmorras',
    MODIFIER_DATA_increasedDamageReductionAgainstDungeonMonsters: '+${value}% de Redução de Dano contra Monstros de Masmorra',
    MODIFIER_DATA_decreasedDamageReductionAgainstDungeonMonsters: '-${value}% de Redução de Dano contra Monstros de Masmorra',

    // #### Slayer task
    MODIFIER_DATA_increasedMaxHitPercentToSlayerTasks: "+${value}% de acerto máximo nas tarefas do Caçador",
    MODIFIER_DATA_decreasedMaxHitPercentToSlayerTasks: "-${value}% de acerto máximo nas tarefas do Caçador",
    MODIFIER_DATA_increasedMaxHitFlatToSlayerTasks: "+${value} de acerto máximo nas tarefas do Caçador",
    MODIFIER_DATA_decreasedMaxHitFlatToSlayerTasks: "-${value} de acerto máximo nas tarefas do Caçador",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitToSlayerTasks: "+${value}% de acerto mínimo nas tarefas do Caçador",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToSlayerTasks: "-${value}% de acerto mínimo nas tarefas do Caçador",
    MODIFIER_DATA_increasedFlatMinHitToSlayerTasks: "+${value} de acerto mínimo nas tarefas do Caçador",
    MODIFIER_DATA_decreasedFlatMinHitToSlayerTasks: "-${value} de acerto mínimo nas tarefas do Caçador",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstSlayerTasks: '+${value}% de Precisão contra Tarefas de Caçador',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstSlayerTasks: '-${value}% de Precisão contra Tarefas de Caçador',
    MODIFIER_DATA_decreasedDamageReductionAgainstSlayerTasks: '-${value}% de Redução de Dano contra Tarefas de Caçador',

    // #### Monster Type
    // ##### Generic; these will be used to dynamically build the ones further down below, as those also have to be dynamically built
    MONSTER_TYPE_SINGULAR_Animal: "Animal",
    MONSTER_TYPE_PLURAL_Animal: "Animais",
    MONSTER_TYPE_SINGULAR_Demon: "Demónio",
    MONSTER_TYPE_PLURAL_Demon: "Demónios",
    MONSTER_TYPE_SINGULAR_Dragon: "Dragão",
    MONSTER_TYPE_PLURAL_Dragon: "Dragões",
    MONSTER_TYPE_SINGULAR_Elemental: "Elementar",
    MONSTER_TYPE_PLURAL_Elemental: "Elementais",
    MONSTER_TYPE_SINGULAR_Human: "Humano",
    MONSTER_TYPE_PLURAL_Human: "Humanos",
    MONSTER_TYPE_SINGULAR_MythicalCreature: "Criatura mítica",
    MONSTER_TYPE_PLURAL_MythicalCreature: "Criaturas míticas",
    MONSTER_TYPE_SINGULAR_SeaCreature: "Criatura do mar",
    MONSTER_TYPE_PLURAL_SeaCreature: "Criaturas marinhas",
    MONSTER_TYPE_SINGULAR_Undead: "Morto-vivo",
    MONSTER_TYPE_PLURAL_Undead: "Morto-vivo",

    COMBAT_MISC_Monster_Type_Trait_Modifier_Effect: "${monsterType} Traço",
    COMBAT_MISC_Monster_Type_Trait_Stacking_Effect: "${monsterType} Traço",

    MODIFIER_DATA_MonsterTypeTraitApplied: "Marca o afetado como ${monsterType}",
    MODIFIER_DATA_increasedDamageAgainstMonsterType: "+${value}% de dano em ${monsterType}",
    MODIFIER_DATA_decreasedDamageAgainstMonsterType: "-${value}% de dano em ${monsterType}",
    MODIFIER_DATA_increasedDamageTakenFromMonsterType: "+${value}% Dano recebido de ${monsterType}",
    MODIFIER_DATA_decreasedDamageTakenFromMonsterType: "-${value}% Dano recebido de ${monsterType}",
    MODIFIER_DATA_increasedMaxHitPercentAgainstMonsterType: "+${value}% de acerto máximo ao lutar contra ${monsterType}",
    MODIFIER_DATA_decreasedMaxHitPercentAgainstMonsterType: "-${value}% de acerto máximo ao lutar contra ${monsterType}",
    MODIFIER_DATA_increasedMaxHitFlatAgainstMonsterType: "+${value} Acerto máximo ao lutar contra ${monsterType}",
    MODIFIER_DATA_decreasedMaxHitFlatAgainstMonsterType: "-${value} Acerto máximo ao lutar contra ${monsterType}",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitAgainstMonsterType: "+${value}% de acerto mínimo ao lutar contra ${monsterType}",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitAgainstMonsterType: "-${value}% de acerto mínimo ao lutar contra ${monsterType}",
    MODIFIER_DATA_increasedFlatMinHitAgainstMonsterType: "+${value} Acerto mínimo ao lutar contra ${monsterType}",
    MODIFIER_DATA_decreasedFlatMinHitAgainstMonsterType: "-${value} Acerto mínimo ao lutar contra ${monsterType}",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstMonsterType: '+${value}% de Precisão ao lutar contra ${monsterType}',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstMonsterType: '-${value}% de Precisão ao lutar contra ${monsterType}',
    MODIFIER_DATA_increasedDamageReductionAgainstMonsterType: '+${value}% de Redução de Dano ao lutar contra ${monsterType}',
    MODIFIER_DATA_decreasedDamageReductionAgainstMonsterType: '-${value}% de Redução de Dano ao lutar contra ${monsterType}',

    MODIFIER_DATA_increasedChanceToApplyMonsterTypeTraitInfiniteOnSpawn: '+${value}% de hipótese de aplicar o traço ${monsterType} durante todo o combate ao aparecer ou reviver',
    MODIFIER_DATA_decreasedChanceToApplyMonsterTypeTraitInfiniteOnSpawn: '-${value}% de hipótese de aplicar o traço ${monsterType} durante todo o combate ao aparecer ou reviver',
    MODIFIER_DATA_applyMonserTypeTraitTurnsOnSpawn: "Aplicar o traço ${monsterType} no inimigo durante ${value} dos turnos do inimigo ao aparecer ou reviver",

    MODIFIER_DATA_increasedChanceToApplyMonsterTypeTrait: "+${value}% de hipótese de aplicar a caraterística ${monsterType} num dos turnos do inimigo",
    MODIFIER_DATA_decreasedChanceToApplyMonsterTypeTrait: "-${value}% de hipótese de aplicar a caraterística ${monsterType} num dos turnos do inimigo",
    MODIFIER_DATA_applyMonsterTypeTraitTurns: "Aplicar a caraterística ${monsterType} no inimigo durante ${value} dos turnos do inimigo",

    // #### Bosses
    MODIFIER_DATA_increasedMaxHitPercentAgainstBosses: "+${value}% de acerto máximo ao lutar contra bosses",
    MODIFIER_DATA_decreasedMaxHitPercentAgainstBosses: "-${value}% de acerto máximo ao lutar contra bosses",
    MODIFIER_DATA_increasedMaxHitFlatAgainstBosses: "+${value} Acerto máximo ao lutar contra bosses",
    MODIFIER_DATA_decreasedMaxHitFlatAgainstBosses: "-${value} Acerto máximo ao lutar contra bosses",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitAgainstBosses: "+${value}% de acerto mínimo ao lutar contra chefes",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitAgainstBosses: "-${value}% de acerto mínimo ao lutar contra chefes",
    MODIFIER_DATA_increasedFlatMinHitAgainstBosses: "+${value} Acerto mínimo ao lutar contra chefes",
    MODIFIER_DATA_decreasedFlatMinHitAgainstBosses: "-${value} Acerto mínimo ao lutar contra chefes",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstBosses: '+${value}% de Precisão na luta contra chefes',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstBosses: '-${value}% de Precisão na luta contra chefes',

    // #### Skilling
    MODIFIER_DATA_increasedThievingDamagePreventionThreshold: '+${value} limiar de prevenção de danos de ladrões (qualquer dano abaixo deste limiar é reduzido para 0)',
    MODIFIER_DATA_decreasedThievingDamagePreventionThreshold: '-${value} limiar de prevenção de danos de ladrões (qualquer dano abaixo deste limiar é reduzido para 0)',
    MODIFIER_DATA_increasedGlobalSkillXPPerLevel: "+${value}% XP de Habilidade Global por nível na habilidade atualmente em treino",
    MODIFIER_DATA_decreasedGlobalSkillXPPerLevel: "-${value}% XP de Habilidade Global por nível na habilidade atualmente em treino",
    MODIFIER_DATA_increasedSkillXPPerSkillLevel: "+${value}% ${skillName} EXP de perícia por nível em ${skillName}",
    MODIFIER_DATA_decreasedSkillXPPerSkillLevel: "-${value}% ${skillName} EXP de perícia por nível em ${skillName}",
    MODIFIER_DATA_increasedFlatGlobalSkillXP: "+${value} XP de perícia global (adicionado após modificadores %)",
    MODIFIER_DATA_decreasedFlatGlobalSkillXP: "-${value} XP de perícia global (adicionado após modificadores %)",
    MODIFIER_DATA_increasedFlatSkillXP: "+${value} ${skillName} EXP de perícia (adicionada após modificadores de %)",
    MODIFIER_DATA_decreasedFlatSkillXP: "-${value} ${skillName} EXP de perícia (adicionada após modificadores de %)",
    MODIFIER_DATA_increasedFlatGlobalSkillXPPerSkillLevel: "+${value} XP de perícia global por nível na perícia atualmente em treino (adicionado após modificadores de %)",
    MODIFIER_DATA_decreasedFlatGlobalSkillXPPerSkillLevel: "-${value} XP de perícia global por nível na perícia atualmente em treino (adicionado após modificadores de %)",
    MODIFIER_DATA_increasedFlatSkillXPPerSkillLevel: "+${value} ${skillName} EXP de perícia por nível em ${skillName} (adicionado após modificadores de %)",
    MODIFIER_DATA_decreasedFlatSkillXPPerSkillLevel: "-${value} ${skillName} EXP de perícia por nível em ${skillName} (adicionado após modificadores de %))"
};
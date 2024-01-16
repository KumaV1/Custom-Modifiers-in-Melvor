export const ptBR = {
    Combat_Modifier_UI_Impact_Indicator_Headline: 'Aviso do Cmim-Mod',
    Combat_Modifier_UI_Impact_Indicator_Text: "Pelo menos um combatente está se beneficiando de um modificador que oferece uma chance de reduzir o dano sofrido a 0. Devido a como/onde esse modificador teve de ser implementado, é possível que as exibições de dano (por exemplo, acerto máximo) sejam erroneamente renderizadas como 0, mesmo para inimigos que são fortes demais para que isso seja realisticamente possível.",
    Combat_Modifier_UI_Impact_Indicator_Hint: 'Esse aviso pode ser desativado nas configurações do mod',
    Combat_Area_Boss_Indicator: 'Chefe',

    // ### Settings
    // #### Combat Areas Indicators section
    Settings_Section_Combat_Areas_Indicator: 'Indicadores de áreas de combate',

    // ##### Enable modifier ui impact indicator
    Settings_Setting_Label_Enable_Modifier_UI_Impact_Indicator: 'Indicador de ativação, para quando determinados modificadores podem causar uma exibição defeituosa na interface do usuário',
    Settings_Setting_Hint_Enable_Modifier_UI_Impact_Indicator: 'Atualmente, afeta apenas um modificador. O indicador exibido fornece mais informações',

    // ##### Enable active monster type indicators
    Settings_Setting_Label_Enable_Boss_Indicators: 'Ativar indicadores de chefe',
    Settings_Setting_Hint_Enable_Boss_Indicators: "Normalmente, somente o monstro final de uma masmorra é classificado como chefe. No entanto, pode haver exceções a essa regra, em que monstros em áreas de combate ou de caça também podem ser classificados como chefes, o que será destacado nesta configuração",

    // ##### Enable active monster type indicators
    Settings_Setting_Label_Enable_Active_Monster_Type_Indicators: 'Ativar indicadores de tipo de monstro ativo',
    Settings_Setting_Hint_Enable_Active_Monster_Type_Indicators: 'Adiciona emblemas verdes aos menus de seleção de monstros/masmorras, indicando alocações de tipos de monstros nativos',

    // ##### Enable inactive monster type indicators
    Settings_Setting_Label_Enable_Inactive_Monster_Type_Indicators: 'Ativar indicadores de tipo de monstro inativo',
    Settings_Setting_Hint_Enable_Inactive_Monster_Type_Indicators: 'Adiciona emblemas laranja aos menus de seleção de monstros/masmorras, indicando alocações de tipos de monstros nativos',

    // #### Disabling section
    Settings_Section_Disabling: 'Desativação',

    // ##### Info label
    Settings_Setting_Label_Disabling_Info: "Esta seção serve como uma forma de desativar determinadas partes da funcionalidade deste mod. Além de tornar o conteúdo propositadamente mais fácil/difícil, o outro motivo principal pelo qual você pode querer fazer isso é porque esse mod pode acabar adicionando uma quantidade notável de tempo de cálculo, levando a um aumento notável no tempo de carregamento de ganhos off-line (especialmente se o sistema de tipo de monstro estiver sendo usado). Desativar a execução de alguns códigos pode, portanto, resultar em uma melhoria de desempenho notável.",

    // ##### On-spawn modifiers
    Settings_Setting_Label_Disable_All_On_Spawn_Modifiers: 'Desativar modificadores no surgimento',
    Settings_Setting_Hint_Disable_All_On_Spawn_Modifiers: 'Desativa todos os modificadores no surgimento adicionados por esse mod',

    // ##### Keep specific monster types inactive
    Settings_Setting_Label_Keep_Specific_Monster_Types_Inactive: 'Manter inativos tipos específicos de monstros',
    Settings_Setting_Hint_Keep_Specific_Monster_Types_Inactive: 'Força os tipos de monstros selecionados a permanecerem inativos, independentemente do que qualquer mod possa comunicar. Os tipos de monstros adicionados por outros mods perderão o estado da caixa de seleção se você carregar o arquivo salvo sem esse mod',

    // #### Enabling section
    Settings_Section_Enabling: 'Habilitação',

    // ##### Info label
    Settings_Setting_Label_Enabling_Info: 'Esta seção provavelmente é irrelevante para o usuário. No entanto, dependendo dos mods usados, você pode se deparar com a situação de ter de ativar determinada funcionalidade por conta própria, porque nenhum mod comunicou a necessidade dela, apesar de ser utilizada. Nesse caso, esta seção permite que você mesmo cuide da ativação.',

    // ##### Force specific monster types active
    Settings_Setting_Label_Force_Specific_Monster_Types_Active: 'Forçar a ativação de tipos específicos de monstros',
    Settings_Setting_Hint_Force_Specific_Monster_Types_Active: 'Força os tipos de monstros selecionados a ficarem ativos (avaliados após a configuração de inatividade), independentemente do que qualquer mod possa comunicar. Os tipos de monstros adicionados por outros mods perderão o estado da caixa de seleção se você carregar o arquivo salvo sem esse mod',

    // #### Save & Reload section
    Settings_Section_Save_And_Reload: 'Salvar tudo e recarregar',

    // ##### Save & Reload button
    Settings_Hint_Save_Reload_Required: 'Recarga necessária',
    Settings_Setting_Display_Save_Reload: 'Salvar tudo e recarregar',

    // ### Monster type overview
    PAGE_NAME_Monster_Types_Overview: "Tipos de monstros",

    Monster_Type_Overview_Remarks_Prefix: "Observe os seguintes pontos:",
    Monster_Type_Overview_Remarks_Not_Inherit_Monster_Types: "Melvor não inclui inerentemente definições de tipo. Em vez disso, o mod \"Custom Modifiers in Melvor\" (Modificadores personalizados em Melvor) estabeleceu a base para os mods definirem e alocarem tipos de monstros",
    Monster_Type_Overview_Remarks_Displayed_Type_Allocation: "Essa exibição mostra todas as alocações de tipo definidas. Se um monstro não for exibido em uma seção, então ele não é tipado como tal. Dito isso, as definições de tipo podem ser imprecisas. Sinta-se à vontade para dar feedback sobre qualquer coisa que você ache que deva ser ajustada",
    Monster_Type_Overview_Remarks_Custom_Mods_Monster_Type_Allocation: "Para quaisquer monstros adicionados por meio de outros mods, esses mods precisam definir definições de tipo para esses monstros",

    Monster_Type_Overview_Player_Traits_Tab_Header: "Características do jogador",
    Monster_Type_Overview_Player_Traits_Information_Type_Allocation: "Além da alocação de tipo orgânico, um tipo também pode ser aplicado de forma forçada pelo uso do respectivo modificador, geralmente por meio de itens equipados ou, possivelmente, de compras na loja",
    Monster_Type_Overview_Player_Traits_Information_Display: 'Essa visão geral exibe todos os tipos (e o valor do modificador) que afetam o personagem no momento - mais informações podem ser determinadas usando o mod "Show Skill Modifiers" (Mostrar modificadores de habilidade)',
    Monster_Type_Overview_Player_Traits_Information_Data_Loaded: "Essa exibição é estática, com base no momento em que o caractere foi carregado",
    Monster_Type_Overview_Player_Traits_No_Entries: "O caractere não é afetado por nenhum modificador de alocação de tipo",

    Monster_Type_Overview_Active_Types_Tab_Header: "Tipos ativos",
    Monster_Type_Overview_Active_Types_Information: "Os tipos ativos são aqueles que estão realmente sendo utilizados por pelo menos um dos mods carregados.",
    Monster_Type_Overview_Active_Types_No_Entries: "Não há tipos ativos no momento",

    Monster_Type_Overview_Inactive_Types_Tab_Header: "Tipos inativos",
    Monster_Type_Overview_Inactive_Types_Information: "Os tipos inativos são aqueles que foram definidos, mas não são de fato utilizados por nenhum mod. Portanto, eles também não são verificados de fato durante o combate, o que significa que não afetam o tempo de cálculo.",
    Monster_Type_Overview_Inactive_Types_No_Entries: "Não há tipos inativos no momento",
    Monster_Type_Overview_Inactive_Types_Affected_By_Mod_Settings: "Não é possível se tornar ativo devido à seleção nas configurações do mod",

    // ### Modifiers
    // #### Directly affecting damage dealt
    MODIFIER_DATA_increasedChanceToReduceAttackDamageToZero: '+${value}% de chance (MÁX: 90%) de reduzir o dano recebido de um ataque para 0 (ainda é tratado como um golpe e não afeta o cálculo de efeitos ao golpe, como dano ao longo do tempo)',
    MODIFIER_DATA_decreasedChanceToReduceAttackDamageToZero: '-${value}% de chance (MÁX: 90%) de reduzir o dano recebido de um ataque para 0 (ainda é tratado como um golpe e não afeta o cálculo de efeitos ao golpe, como dano ao longo do tempo)',
    MODIFIER_DATA_increasedDamageFlatWhileTargetHasMaxHP: '+${value} de dano enquanto o alvo estiver com o HP cheio',
    MODIFIER_DATA_decreasedDamageFlatWhileTargetHasMaxHP: '-${value} de dano enquanto o alvo estiver com o HP cheio',
    MODIFIER_DATA_increasedDamagePercentWhileTargetHasMaxHP: '+${value}% de dano enquanto o alvo estiver com o HP cheio',
    MODIFIER_DATA_decreasedDamagePercentWhileTargetHasMaxHP: '-${value}% de dano enquanto o alvo estiver com o HP cheio',
    MODIFIER_DATA_increasedDamageFlatIgnoringDamageReduction: "+${value} de dano, que não é afetado pela redução de dano dos inimigos",
    MODIFIER_DATA_decreasedDamageFlatIgnoringDamageReduction: "-${value} de dano, que não é afetado pela redução de dano dos inimigos",
    MODIFIER_DATA_increasedGlobalDamagePreventionThreshold: '+${value} limite global de prevenção de danos (qualquer respingo de dano abaixo do limite é reduzido a 0)',
    MODIFIER_DATA_decreasedGlobalDamagePreventionThreshold: '-${value} limite global de prevenção de danos (qualquer respingo de dano abaixo do limite é reduzido a 0)',
    MODIFIER_DATA_increasedDamagePreventionThreshold: '+Limite de prevenção de danos de ${value} (qualquer respingo de dano abaixo do limite é reduzido a 0)',
    MODIFIER_DATA_decreasedDamagePreventionThreshold: '-Limite de prevenção de danos de ${value} (qualquer respingo de dano abaixo do limite é reduzido a 0)',
    MODIFIER_DATA_increasedBarrierDamagePreventionThreshold: '+${value} limiar de prevenção de dano de barreira (qualquer dano causado contra uma barreira abaixo do limiar é reduzido a 0)',
    MODIFIER_DATA_decreasedBarrierDamagePreventionThreshold: '-${value} limiar de prevenção de dano de barreira (qualquer dano causado contra uma barreira abaixo do limiar é reduzido a 0)',

    // #### Spawn
    MODIFIER_DATA_increasedChanceToApplySlowOnSpawn: "+${value}% de chance de aplicar 25% de aumento no intervalo de ataque por três turnos ao Alvo ao surgir ou reviver",
    MODIFIER_DATA_decreasedChanceToApplySlowOnSpawn: "-${value}% de chance de aplicar 25% de aumento no intervalo de ataque por três turnos ao Alvo ao surgir ou reviver",
    MODIFIER_DATA_increasedChanceToApplyStunOnSpawn: "+${value}% de chance de aplicar atordoamento por um turno no Alvo ao aparecer ou reviver",
    MODIFIER_DATA_decreasedChanceToApplyStunOnSpawn: "-${value}% de chance de aplicar atordoamento por um turno no Alvo ao aparecer ou reviver",
    MODIFIER_DATA_applyStunOnSpawn: "Aplique ${value} turnos de Atordoamento no Alvo ao aparecer ou reviver.",
    MODIFIER_DATA_applyStunOnSpawn_Plural: "Aplique ${value} turnos de Atordoamento ao Alvo ao ser gerado ou revivido.",
    MODIFIER_DATA_increasedChanceToApplyPoisonOnSpawn: "+${value}% de chance de aplicar veneno no Alvo ao aparecer ou reviver",
    MODIFIER_DATA_decreasedChanceToApplyPoisonOnSpawn: "-${value}% de chance de aplicar veneno no Alvo ao aparecer ou reviver",
    MODIFIER_DATA_increasedChanceToApplyDeadlyPoisonOnSpawn: "+${value}% de chance de aplicar veneno mortal no Alvo ao aparecer ou reviver",
    MODIFIER_DATA_decreasedChanceToApplyDeadlyPoisonOnSpawn: "-${value}% de chance de aplicar veneno mortal no Alvo ao aparecer ou reviver",
    MODIFIER_DATA_increasedChanceToApplyAfflictionOnSpawn: "+${value}% de chance de aplicar uma pilha de aflição ao Alvo ao aparecer ou reviver",
    MODIFIER_DATA_decreasedChanceToApplyAfflictionOnSpawn: "-${value}% de chance de aplicar uma pilha de aflição ao Alvo ao aparecer ou reviver",
    MODIFIER_DATA_applyAfflictionOnSpawn: "Aplique uma pilha de ${value} de Aflição no Alvo ao aparecer ou reviver",
    MODIFIER_DATA_applyAfflictionOnSpawn_Plural: "Aplique pilhas de ${value} de Aflição no Alvo ao aparecer ou reviver",
    MODIFIER_DATA_increasedChanceToApplyBleedOnSpawn: "+${value}% de chance de aplicar sangramento, causando 100% do seu máximo de acerto como dano ao longo de 10s, ao Alvo ao surgir ou reviver",
    MODIFIER_DATA_decreasedChanceToApplyBleedOnSpawn: "-${value}% de chance de aplicar sangramento, causando 100% do seu máximo de acerto como dano ao longo de 10s, ao Alvo ao surgir ou reviver",
    MODIFIER_DATA_increasedChanceToApplyBurnOnSpawn: "+${value}% de chance de aplicar queimadura, causando 15% do HP atual do alvo ao longo de 2,5 segundos, ao Alvo ao surgir ou reviver",
    MODIFIER_DATA_decreasedChanceToApplyBurnOnSpawn: "-${value}% de chance de aplicar queimadura, causando 15% do HP atual do alvo ao longo de 2,5 segundos, ao Alvo ao surgir ou reviver",
    MODIFIER_DATA_increasedChanceToApplyFreezeOnSpawn: "+${value}% de chance de aplicar congelamento por um turno ao Alvo ao surgir ou reviver",
    MODIFIER_DATA_decreasedChanceToApplyFreezeOnSpawn: "-${value}% de chance de aplicar congelamento por um turno ao Alvo ao surgir ou reviver",
    MODIFIER_DATA_applyFreezeOnSpawn: "Aplique ${value} turnos de Congelamento no Alvo ao aparecer ou reviver",
    MODIFIER_DATA_applyFreezeOnSpawn_Plural: "Aplique ${value} turnos de Congelamento no Alvo ao ser gerado ou revivido",
    MODIFIER_DATA_increasedChanceToApplyFrostburnOnSpawn: "+${value}% de chance de aplicar queimadura de gelo por três turnos no Alvo ao surgir ou reviver",
    MODIFIER_DATA_decreasedChanceToApplyFrostburnOnSpawn: "-${value}% de chance de aplicar queimadura de gelo por três turnos no Alvo ao surgir ou reviver",
    MODIFIER_DATA_increasedChanceToApplyShockOnSpawn: "+${value}% de chance de aplicar uma pilha de choque no Alvo ao aparecer ou reviver",
    MODIFIER_DATA_decreasedChanceToApplyShockOnSpawn: "-${value}% de chance de aplicar uma pilha de choque no Alvo ao aparecer ou reviver",
    MODIFIER_DATA_applyShockOnSpawn: "Aplique uma pilha de ${value} de Choque no Alvo ao aparecer ou reviver",
    MODIFIER_DATA_applyShockOnSpawn_Plural: "Aplique uma pilha de ${value} de Choque no Alvo ao aparecer ou reviver",
    MODIFIER_DATA_increasedChanceToApplySleepOnSpawn: "+${value}% de chance de aplicar sono por um turno no Alvo ao aparecer ou reviver",
    MODIFIER_DATA_decreasedChanceToApplySleepOnSpawn: "-${value}% de chance de aplicar sono por um turno no Alvo ao aparecer ou reviver",
    MODIFIER_DATA_applySleepOnSpawn: "Aplique ${value} turnos de Sleep no Alvo ao ser gerado ou revivido.",
    MODIFIER_DATA_applySleepOnSpawn_Plural: "Aplique ${value} turnos de Sono no Alvo ao ser gerado ou revivido",

    // #### On hit
    MODIFIER_DATA_increasedChanceToApplyBleed: "+${value}% de chance de infligir Sangramento, que causa 100% do seu máximo de acerto como dano ao longo de 10s, ao ser atingido por um ataque",
    MODIFIER_DATA_decreasedChanceToApplyBleed: "-${value}% de chance de infligir Sangramento, que causa 100% do seu máximo de acerto como dano ao longo de 10s, ao ser atingido por um ataque",

    // #### Death mark (not to be confused with mark of death)
    Death_Mark_Notification_Text: "Você foi executado com a marca da morte",
    COMBAT_MISC_Death_Mark_Effect: "Marca da morte",
    MODIFIER_DATA_deathMark: "Se a porcentagem de HP máximo restante for menor do que a quantidade de pilhas (MAX 20% / 5.000), será executada imediatamente",
    MODIFIER_DATA_increasedDeathMarkOnHit: "+${value} Acúmulos de Marca da Morte aplicados ao acertar um ataque",
    MODIFIER_DATA_increasedChanceToApplyStackOfDeathMark: "+${value}% de chance de aplicar uma pilha de marca da morte no inimigo",
    MODIFIER_DATA_decreasedChanceToApplyStackOfDeathMark: "-${value}% de chance de aplicar uma pilha de marca da morte no inimigo",
    MODIFIER_DATA_increasedDeathMarkImmunity: "+${value}% de chance de resistir à aplicação de pilhas de marcas da morte",
    MODIFIER_DATA_decreasedDeathMarkImmunity: "-${value}% de chance de resistir à aplicação de pilhas de marcas da morte",
    MODIFIER_DATA_applyDeathMarkOnSpawn: "Aplique uma pilha de ${value} de Marca da Morte no alvo ao aparecer ou reviver.",
    MODIFIER_DATA_applyDeathMarkOnSpawn_Plural: "Aplique pilhas de ${value} de Marca da Morte no alvo ao aparecer ou reviver",

    // #### Spell type
    MODIFIER_DATA_increasedDamageTakenFromAirSpells: "+${value}% de dano recebido de feitiços de ar",
    MODIFIER_DATA_decreasedDamageTakenFromAirSpells: "-${value}% de dano recebido de feitiços de ar",
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
    MODIFIER_DATA_increasedGlobalAccuracyAgainstCombatAreaMonsters: '+${value}% de precisão contra monstros de área de combate',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstCombatAreaMonsters: '-${value}% de precisão contra monstros de área de combate',
    MODIFIER_DATA_increasedDamageReductionAgainstCombatAreaMonsters: '+${value}% de redução de dano contra monstros da área de combate',
    MODIFIER_DATA_decreasedDamageReductionAgainstCombatAreaMonsters: '-${value}% de redução de dano contra monstros da área de combate',

    MODIFIER_DATA_increasedMaxHitPercentToSlayerAreaMonsters: "+${value}% de acerto máximo para matar monstros da área",
    MODIFIER_DATA_decreasedMaxHitPercentToSlayerAreaMonsters: "-${value}% de acerto máximo para matar monstros da área",
    MODIFIER_DATA_increasedMaxHitFlatToSlayerAreaMonsters: "+${value} de acerto máximo para matar monstros da área",
    MODIFIER_DATA_decreasedMaxHitFlatToSlayerAreaMonsters: "-${value} de acerto máximo para matar monstros da área",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitToSlayerAreaMonsters: "+${value}% de acerto mínimo para matar monstros da área",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToSlayerAreaMonsters: "-${value}% de acerto mínimo para matar monstros da área",
    MODIFIER_DATA_increasedFlatMinHitToSlayerAreaMonsters: "+${value} de acerto mínimo para matar monstros da área",
    MODIFIER_DATA_decreasedFlatMinHitToSlayerAreaMonsters: "-${value} de acerto mínimo para matar monstros da área",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstSlayerAreaMonsters: '+${value}% de taxa de precisão contra monstros da área do Slayer',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstSlayerAreaMonsters: '-${value}% de taxa de precisão contra monstros da área do Slayer',
    MODIFIER_DATA_increasedDamageReductionAgainstSlayerAreaMonsters: '+${value}% de redução de dano contra monstros da área do Slayer',
    MODIFIER_DATA_decreasedDamageReductionAgainstSlayerAreaMonsters: '-${value}% de redução de dano contra monstros da área do Slayer',

    MODIFIER_DATA_increasedMaxHitPercentToDungeonMonsters: "+${value}% de acerto máximo em monstros de masmorra",
    MODIFIER_DATA_decreasedMaxHitPercentToDungeonMonsters: "-${value}% de acerto máximo em monstros de masmorra",
    MODIFIER_DATA_increasedMaxHitFlatToDungeonMonsters: "+${value} de acerto máximo em monstros de masmorra",
    MODIFIER_DATA_decreasedMaxHitFlatToDungeonMonsters: "-${value} de acerto máximo em monstros de masmorra",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitToDungeonMonsters: "+${value}% de acerto mínimo para monstros de masmorra",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToDungeonMonsters: "-${value}% de acerto mínimo para monstros de masmorra",
    MODIFIER_DATA_increasedFlatMinHitToDungeonMonsters: "+${value} de acerto mínimo para monstros de masmorra",
    MODIFIER_DATA_decreasedFlatMinHitToDungeonMonsters: "-${value} de acerto mínimo para monstros de masmorra",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstDungeonMonsters: '+${value}% de precisão contra monstros de masmorra',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstDungeonMonsters: '-${value}% de precisão contra monstros de masmorra',
    MODIFIER_DATA_increasedDamageReductionAgainstDungeonMonsters: '+${value}% de redução de dano contra monstros de masmorra',
    MODIFIER_DATA_decreasedDamageReductionAgainstDungeonMonsters: '-${value}% de redução de dano contra monstros de masmorra',

    // #### Slayer task
    MODIFIER_DATA_increasedMaxHitPercentToSlayerTasks: "+${value}% de acerto máximo nas tarefas do Slayer",
    MODIFIER_DATA_decreasedMaxHitPercentToSlayerTasks: "-${value}% de acerto máximo nas tarefas do Slayer",
    MODIFIER_DATA_increasedMaxHitFlatToSlayerTasks: "+${value} de acerto máximo nas tarefas do Slayer",
    MODIFIER_DATA_decreasedMaxHitFlatToSlayerTasks: "-${value} de acerto máximo nas tarefas do Slayer",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitToSlayerTasks: "+${value}% de acerto mínimo nas tarefas do Slayer",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToSlayerTasks: "-${value}% de acerto mínimo nas tarefas do Slayer",
    MODIFIER_DATA_increasedFlatMinHitToSlayerTasks: "+${value} de acerto mínimo nas tarefas do Slayer",
    MODIFIER_DATA_decreasedFlatMinHitToSlayerTasks: "-${value} de acerto mínimo nas tarefas do Slayer",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstSlayerTasks: '+${value}% de classificação de precisão contra tarefas de Slayer',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstSlayerTasks: '-${value}% de classificação de precisão contra tarefas de Slayer',
    MODIFIER_DATA_decreasedDamageReductionAgainstSlayerTasks: '-${value}% de redução de dano contra as Tarefas do Slayer',

    // #### Monster Type
    // ##### Generic; these will be used to dynamically build the ones further down below, as those also have to be dynamically built
    MONSTER_TYPE_SINGULAR_Animal: "Animal",
    MONSTER_TYPE_PLURAL_Animal: "Animais",
    MONSTER_TYPE_SINGULAR_Demon: "Demônio",
    MONSTER_TYPE_PLURAL_Demon: "Demônios",
    MONSTER_TYPE_SINGULAR_Dragon: "Dragão",
    MONSTER_TYPE_PLURAL_Dragon: "Dragões",
    MONSTER_TYPE_SINGULAR_Elemental: "Elementar",
    MONSTER_TYPE_PLURAL_Elemental: "Elementais",
    MONSTER_TYPE_SINGULAR_Human: "Humanos",
    MONSTER_TYPE_PLURAL_Human: "Humanos",
    MONSTER_TYPE_SINGULAR_MythicalCreature: "Criatura mítica",
    MONSTER_TYPE_PLURAL_MythicalCreature: "Criaturas míticas",
    MONSTER_TYPE_SINGULAR_SeaCreature: "Criatura marinha",
    MONSTER_TYPE_PLURAL_SeaCreature: "Criaturas marinhas",
    MONSTER_TYPE_SINGULAR_Undead: "Morto-vivo",
    MONSTER_TYPE_PLURAL_Undead: "Morto-vivo",

    COMBAT_MISC_Monster_Type_Trait_Modifier_Effect: "${monsterType} Traço",
    COMBAT_MISC_Monster_Type_Trait_Stacking_Effect: "${monsterType} Traço",

    MODIFIER_DATA_MonsterTypeTraitApplied: "Marca o afetado como ${monsterType}",
    MODIFIER_DATA_increasedDamageAgainstMonsterType: "+${value}% Damage To ${monsterType}",
    MODIFIER_DATA_decreasedDamageAgainstMonsterType: "-${value}% Damage To ${monsterType}",
    MODIFIER_DATA_increasedDamageTakenFromMonsterType: "+${value}% Dano recebido de ${monsterType}",
    MODIFIER_DATA_decreasedDamageTakenFromMonsterType: "-${value}% Dano recebido de ${monsterType}",
    MODIFIER_DATA_increasedMaxHitPercentAgainstMonsterType: "+${value}% de acerto máximo ao lutar contra ${monsterType}",
    MODIFIER_DATA_decreasedMaxHitPercentAgainstMonsterType: "-${value}% de acerto máximo ao lutar contra ${monsterType}",
    MODIFIER_DATA_increasedMaxHitFlatAgainstMonsterType: "+${value} de acerto máximo ao lutar contra ${monsterType}",
    MODIFIER_DATA_decreasedMaxHitFlatAgainstMonsterType: "-${value} de acerto máximo ao lutar contra ${monsterType}",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitAgainstMonsterType: "+${value}% Minimum Hit ao lutar contra ${monsterType}",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitAgainstMonsterType: "-${value}% Minimum Hit ao lutar contra ${monsterType}",
    MODIFIER_DATA_increasedFlatMinHitAgainstMonsterType: "+${value} Minimum Hit ao lutar contra ${monsterType}",
    MODIFIER_DATA_decreasedFlatMinHitAgainstMonsterType: "-${value} Minimum Hit ao lutar contra ${monsterType}",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstMonsterType: '+${value}% de precisão ao lutar contra ${monsterType}',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstMonsterType: '-${value}% de precisão ao lutar contra ${monsterType}',
    MODIFIER_DATA_increasedDamageReductionAgainstMonsterType: '+${value}% de redução de dano ao lutar contra ${monsterType}',
    MODIFIER_DATA_decreasedDamageReductionAgainstMonsterType: '-${value}% de redução de dano ao lutar contra ${monsterType}',

    MODIFIER_DATA_increasedChanceToApplyMonsterTypeTraitInfiniteOnSpawn: '+${value}% de chance de aplicar a característica ${monsterType} durante toda a luta ao aparecer ou reviver',
    MODIFIER_DATA_decreasedChanceToApplyMonsterTypeTraitInfiniteOnSpawn: '-${value}% de chance de aplicar a característica ${monsterType} durante toda a luta ao aparecer ou reviver',
    MODIFIER_DATA_applyMonserTypeTraitTurnsOnSpawn: "Aplique o traço ${monsterType} no inimigo por ${value} dos turnos do inimigo ao ser gerado ou revivido",

    MODIFIER_DATA_increasedChanceToApplyMonsterTypeTrait: "+${value}% de chance de aplicar a característica ${monsterType} em um dos turnos dos inimigos",
    MODIFIER_DATA_decreasedChanceToApplyMonsterTypeTrait: "-${value}% de chance de aplicar a característica ${monsterType} em um dos turnos dos inimigos",
    MODIFIER_DATA_applyMonsterTypeTraitTurns: "Aplique a característica ${monsterType} no inimigo por ${value} dos turnos do inimigo",

    // #### Bosses
    MODIFIER_DATA_increasedMaxHitPercentAgainstBosses: "+${value}% de acerto máximo ao lutar contra chefes",
    MODIFIER_DATA_decreasedMaxHitPercentAgainstBosses: "-${value}% de acerto máximo ao lutar contra chefes",
    MODIFIER_DATA_increasedMaxHitFlatAgainstBosses: "+${value} de acerto máximo ao lutar contra chefes",
    MODIFIER_DATA_decreasedMaxHitFlatAgainstBosses: "-${value} de acerto máximo ao lutar contra chefes",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitAgainstBosses: "+${value}% de acerto mínimo ao lutar contra chefes",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitAgainstBosses: "-${value}% de acerto mínimo ao lutar contra chefes",
    MODIFIER_DATA_increasedFlatMinHitAgainstBosses: "+${value} de acerto mínimo ao lutar contra chefes",
    MODIFIER_DATA_decreasedFlatMinHitAgainstBosses: "-${value} de acerto mínimo ao lutar contra chefes",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstBosses: '+${value}% de precisão ao lutar contra chefes',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstBosses: '-${value}% de precisão ao lutar contra chefes',

    // #### Skilling
    MODIFIER_DATA_increasedThievingDamagePreventionThreshold: '+${value} limiar de prevenção de dano de ladrão (qualquer dano abaixo do limiar é reduzido a 0)',
    MODIFIER_DATA_decreasedThievingDamagePreventionThreshold: '-${value} limiar de prevenção de dano de ladrão (qualquer dano abaixo do limiar é reduzido a 0)',
    MODIFIER_DATA_increasedGlobalSkillXPPerLevel: "+${value}% de EXP de habilidade global por nível na habilidade que está sendo treinada",
    MODIFIER_DATA_decreasedGlobalSkillXPPerLevel: "-${value}% de EXP de habilidade global por nível na habilidade que está sendo treinada",
    MODIFIER_DATA_increasedSkillXPPerSkillLevel: "+${value}% ${skillName} Skill XP por nível em ${skillName}",
    MODIFIER_DATA_decreasedSkillXPPerSkillLevel: "-${value}% ${skillName} Skill XP por nível em ${skillName}",
    MODIFIER_DATA_increasedFlatGlobalSkillXP: "+${value} Global Skill XP (adicionado após modificadores de %)",
    MODIFIER_DATA_decreasedFlatGlobalSkillXP: "-${value} Global Skill XP (adicionado após modificadores de %)",
    MODIFIER_DATA_increasedFlatSkillXP: "+${value} ${skillName} Skill XP (adicionado após % de modificadores)",
    MODIFIER_DATA_decreasedFlatSkillXP: "-${value} ${skillName} Skill XP (adicionado após % de modificadores)",
    MODIFIER_DATA_increasedFlatGlobalSkillXPPerSkillLevel: "+${value} Global Skill XP por nível na habilidade atualmente em treinamento (adicionado após modificadores de %)",
    MODIFIER_DATA_decreasedFlatGlobalSkillXPPerSkillLevel: "-${value} Global Skill XP por nível na habilidade atualmente em treinamento (adicionado após modificadores de %)",
    MODIFIER_DATA_increasedFlatSkillXPPerSkillLevel: "+${value} ${skillName} EXP de habilidade por nível em ${skillName} (adicionado após modificadores de %)",
    MODIFIER_DATA_decreasedFlatSkillXPPerSkillLevel: "-${value} ${skillName} EXP de habilidade por nível em ${skillName} (adicionado após modificadores de %)"
};
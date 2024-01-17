export const es = {
    "Combat_Modifier_UI_Impact_Indicator_Headline": "Advertencia Cmim-Mod",
    "Combat_Modifier_UI_Impact_Indicator_Text": "Al menos un combatiente se beneficia actualmente de un modificador que ofrece la posibilidad de reducir el daño recibido a 0. Debido a cómo/dónde se ha implementado ese modificador, es posible que las indicaciones de daño (por ejemplo, impacto máximo) se muestren erróneamente como 0, incluso para enemigos que son demasiado fuertes para que eso sea posible de forma realista.",
    "Combat_Modifier_UI_Impact_Indicator_Hint": "Esta advertencia puede desactivarse en la configuración del mod.",
    "Combat_Area_Boss_Indicator": "Jefe",

    // ### Settings
    // #### Combat Areas Indicators section
    "Settings_Section_Indicators": "Indicadores",

    // ##### Enable modifier ui impact indicator
    "Settings_Setting_Label_Enable_Modifier_UI_Impact_Indicator": "Indicador de activación, para cuando ciertos modificadores pueden causar una visualización defectuosa en la interfaz de usuario.",
    "Settings_Setting_Hint_Enable_Modifier_UI_Impact_Indicator": "Actualmente sólo afecta a un modificador. El indicador mostrado proporciona más información",

    // ##### Enable boss indicators
    "Settings_Setting_Label_Enable_Boss_Indicators": "Activar indicadores de jefe",
    "Settings_Setting_Hint_Enable_Boss_Indicators": "Normalmente, sólo el monstruo final de una mazmorra se clasifica como jefe. Puede haber excepciones a esta regla, sin embargo, donde los monstruos en Combat- o Slayer Áreas también puede ser clasificado como un jefe, que este ajuste se destacan",

    // ##### Enable active monster type indicators
    "Settings_Setting_Label_Enable_Active_Monster_Type_Indicators": "Activar indicadores de tipo de monstruo activo",
    "Settings_Setting_Hint_Enable_Active_Monster_Type_Indicators": "Añade insignias verdes a los menús de selección de monstruos/mazmorras, indicando las asignaciones de tipos de monstruos nativos.",

    // ##### Enable inactive monster type indicators
    "Settings_Setting_Label_Enable_Inactive_Monster_Type_Indicators": "Activar indicadores de tipo de monstruo inactivo",
    "Settings_Setting_Hint_Enable_Inactive_Monster_Type_Indicators": "Añade insignias naranjas a los menús de selección de monstruos/mazmorras, indicando las asignaciones de tipos de monstruos nativos.",

    // #### Disabling section
    "Settings_Section_Disabling": "Desactivación de",

    // ##### Info label
    "Settings_Setting_Label_Disabling_Info": "Esta sección sirve para desactivar ciertas partes de la funcionalidad de este mod. Aparte de hacer el contenido más fácil/difícil a propósito, la otra razón principal por la que puede querer hacer esto, es porque este mod puede acabar añadiendo una cantidad notable de tiempo de cálculo, lo que lleva a un aumento notable en el tiempo de carga de las ganancias fuera de línea (especialmente, si se hace uso del sistema de tipos de monstruos). Deshabilitar la ejecución de algún código puede resultar en una mejora notable del rendimiento.",

    // ##### On-spawn modifiers
    "Settings_Setting_Label_Disable_All_On_Spawn_Modifiers": "Desactivar modificadores al aparecer",
    "Settings_Setting_Hint_Disable_All_On_Spawn_Modifiers": "Desactiva todos los modificadores on-spawn añadidos por este mod",

    // ##### Keep specific monster types inactive
    "Settings_Setting_Label_Keep_Specific_Monster_Types_Inactive": "Mantener inactivos determinados tipos de monstruos",
    "Settings_Setting_Hint_Keep_Specific_Monster_Types_Inactive": "Fuerza a los tipos de monstruos seleccionados a permanecer inactivos, independientemente de lo que comunique cualquier mod. Los tipos de monstruos añadidos por otros mods perderán su estado de casilla de verificación, si por casualidad cargas tu partida guardada sin dicho mod.",

    // #### Enabling section
    "Settings_Section_Enabling": "Habilitar",

    // ##### Info label
    "Settings_Setting_Label_Enabling_Info": "Lo más probable es que esta sección sea irrelevante como usuario. Sin embargo, dependiendo de los mods utilizados, puedes encontrarte en la situación de tener que activar ciertas funcionalidades tú mismo, porque ningún mod comunicó la necesidad de ello, a pesar de ser utilizado. En ese caso, esta sección le permite ocuparse usted mismo de la activación.",

    // ##### Force specific monster types active
    "Settings_Setting_Label_Force_Specific_Monster_Types_Active": "Forzar tipos de monstruos específicos activos",
    "Settings_Setting_Hint_Force_Specific_Monster_Types_Active": "Fuerza a los tipos de monstruos seleccionados a estar activos (evaluados después del ajuste de inactividad), independientemente de lo que comunique cualquier mod. Los tipos de monstruos añadidos por otros mods perderán su estado de casilla de verificación, si por casualidad cargas tu partida guardada sin dicho mod.",

    // #### Save & Reload section
    "Settings_Section_Save_And_Reload": "Guardar todo y volver a cargar",

    // ##### Save & Reload button
    "Settings_Hint_Save_Reload_Required": "Recarga necesaria",
    "Settings_Setting_Display_Save_Reload": "Guardar todo y volver a cargar",

    // ### Monster type overview
    "PAGE_NAME_Monster_Types_Overview": "Tipos de monstruos",
    "Monster_Type_Overview_Remarks_Prefix": "Tenga en cuenta los siguientes puntos:",
    "Monster_Type_Overview_Remarks_Not_Inherit_Monster_Types": "Melvor no incluye definiciones de tipos de forma inherente. En su lugar, el mod \"Custom Modifiers in Melvor\" ha sentado las bases para que los mods definan y asignen tipos de monstruos",
    "Monster_Type_Overview_Remarks_Displayed_Type_Allocation": "Esta pantalla muestra todas las asignaciones de tipos definidas. Si un monstruo no se muestra en una sección, entonces no está tipado como tal. Dicho esto, las definiciones de tipos pueden ser inexactas. No dudes en comentar cualquier cosa que creas que debería ajustarse.",
    "Monster_Type_Overview_Remarks_Custom_Mods_Monster_Type_Allocation": "Para cualquier monstruo añadido a través de otros mods, dichos mods tienen que establecer ellos mismos las definiciones de tipo para esos monstruos.",
    "Monster_Type_Overview_Player_Traits_Tab_Header": "Rasgos del jugador",
    "Monster_Type_Overview_Player_Traits_Information_Type_Allocation": "Aparte de la asignación orgánica de tipos, un tipo también puede aplicarse de forma forzada mediante el uso del modificador correspondiente, normalmente a través de habilidades, objetos equipados o, posiblemente, compras en la tienda.",
    "Monster_Type_Overview_Player_Traits_Information_Display": "Esta vista general muestra todos los tipos (y el valor del modificador) que afectan actualmente al Personaje - puede determinarse más información usando el mod \"Mostrar modificadores de habilidad\".",
    "Monster_Type_Overview_Player_Traits_Information_Data_Loaded": "Esta visualización es estática, basada en el momento en que se cargó el personaje",
    "Monster_Type_Overview_Player_Traits_No_Entries": "El personaje no se ve afectado por ningún modificador de asignación de tipo",
    "Monster_Type_Overview_Active_Types_Tab_Header": "Tipos activos",
    "Monster_Type_Overview_Active_Types_Information": "Los tipos activos son aquellos que están siendo utilizados por al menos uno de los mods cargados.",
    "Monster_Type_Overview_Active_Types_No_Entries": "Actualmente no hay tipos activos",
    "Monster_Type_Overview_Inactive_Types_Tab_Header": "Tipos inactivos",
    "Monster_Type_Overview_Inactive_Types_Information": "Los tipos inactivos son aquellos que han sido definidos pero que en realidad no son utilizados por ningún mod. Por lo tanto, tampoco se comprueban durante el combate, lo que significa que no afectan al tiempo de cálculo.",
    "Monster_Type_Overview_Inactive_Types_No_Entries": "Actualmente no hay tipos inactivos",
    "Monster_Type_Overview_Inactive_Types_Affected_By_Mod_Settings": "No se puede activar debido a la selección en la configuración del mod",

    // ### Modifiers
    // #### Directly affecting damage dealt
    "MODIFIER_DATA_increasedChanceToReduceAttackDamageToZero": "+${value}% de probabilidad (MÁX\": 90%) de reducir a 0 el daño recibido por un ataque (se sigue considerando que se ha recibido un impacto y no afecta al cálculo de los efectos del impacto, como la prolongación del daño).",
    "MODIFIER_DATA_decreasedChanceToReduceAttackDamageToZero": "",
    "MODIFIER_DATA_increasedDamageFlatWhileTargetHasMaxHP": "+${value} de daño mientras el objetivo tenga todos sus PS",
    "MODIFIER_DATA_decreasedDamageFlatWhileTargetHasMaxHP": "-${value} de daño mientras el objetivo tiene todos sus PS",
    "MODIFIER_DATA_increasedDamagePercentWhileTargetHasMaxHP": "+${value}% de daño mientras el objetivo tenga todos sus PS",
    "MODIFIER_DATA_decreasedDamagePercentWhileTargetHasMaxHP": "-${value}% de daño mientras el objetivo tiene todos sus PS",
    "MODIFIER_DATA_increasedDamageFlatIgnoringDamageReduction": "+${value} de daño, que no se ve afectado por la reducción de daño de los enemigos.",
    "MODIFIER_DATA_decreasedDamageFlatIgnoringDamageReduction": "-${value} de daño, que no se ve afectado por la reducción de daño de los enemigos.",
    "MODIFIER_DATA_increasedGlobalDamagePreventionThreshold": "+${value} umbral global de prevención de daños (cualquier salpicadura de daño por debajo del umbral se reduce a 0)",
    "MODIFIER_DATA_decreasedGlobalDamagePreventionThreshold": "-${value} umbral global de prevención de daños (cualquier salpicadura de daño por debajo del umbral se reduce a 0)",
    "MODIFIER_DATA_increasedDamagePreventionThreshold": "+${value} umbral de prevención de daño (cualquier salpicadura de daño por debajo del umbral se reduce a 0)",
    "MODIFIER_DATA_decreasedDamagePreventionThreshold": "-${value} umbral de prevención de daño (cualquier salpicadura de daño por debajo del umbral se reduce a 0)",
    "MODIFIER_DATA_increasedBarrierDamagePreventionThreshold": "+${value} umbral de prevención de daño de barrera (cualquier impacto de daño contra una barrera por debajo del umbral se reduce a 0)",
    "MODIFIER_DATA_decreasedBarrierDamagePreventionThreshold": "-${value} umbral de prevención de daño de barrera (cualquier impacto de daño contra una barrera por debajo del umbral se reduce a 0)",

    // #### Spawn
    "MODIFIER_DATA_increasedChanceToApplySlowOnSpawn": "+${value}% de probabilidad de aplicar un 25% de intervalo de ataque aumentado durante tres turnos al objetivo al aparecer o revivir.",
    "MODIFIER_DATA_decreasedChanceToApplySlowOnSpawn": "-${value}% de probabilidad de aplicar un 25% de intervalo de ataque aumentado durante tres turnos al objetivo al aparecer o revivir",
    "MODIFIER_DATA_increasedChanceToApplyStunOnSpawn": "+${value}% de probabilidad de aturdir durante un turno al objetivo al aparecer o revivir.",
    "MODIFIER_DATA_decreasedChanceToApplyStunOnSpawn": "-${value}% de probabilidad de aturdir durante un turno al objetivo al aparecer o revivir",
    "MODIFIER_DATA_applyStunOnSpawn": "Aplica ${value} de aturdimiento al objetivo al aparecer o revivir.",
    "MODIFIER_DATA_applyStunOnSpawn_Plural": "Aplica ${value} turnos de aturdimiento al objetivo al aparecer o revivir.",
    "MODIFIER_DATA_increasedChanceToApplyPoisonOnSpawn": "+${value}% de probabilidad de aplicar veneno al objetivo al aparecer o revivir",
    "MODIFIER_DATA_decreasedChanceToApplyPoisonOnSpawn": "-${value}% de probabilidad de aplicar veneno al objetivo al aparecer o revivir",
    "MODIFIER_DATA_increasedChanceToApplyDeadlyPoisonOnSpawn": "+${value}% de probabilidad de aplicar veneno mortal al objetivo al aparecer o revivir.",
    "MODIFIER_DATA_decreasedChanceToApplyDeadlyPoisonOnSpawn": "-${value}% de probabilidad de aplicar veneno mortal al objetivo al aparecer o revivir",
    "MODIFIER_DATA_increasedChanceToApplyAfflictionOnSpawn": "+${value}% de probabilidad de aplicar una pila de aflicción al objetivo al aparecer o revivir.",
    "MODIFIER_DATA_decreasedChanceToApplyAfflictionOnSpawn": "-${value}% de probabilidad de aplicar una pila de aflicción al objetivo al aparecer o revivir.",
    "MODIFIER_DATA_applyAfflictionOnSpawn": "Aplica una pila de ${value} de Aflicción al objetivo al aparecer o revivir.",
    "MODIFIER_DATA_applyAfflictionOnSpawn_Plural": "Aplica pilas de ${value} de Aflicción al objetivo al aparecer o revivir.",
    "MODIFIER_DATA_increasedChanceToApplyBleedOnSpawn": "+${value}% de probabilidad de aplicar hemorragia, que inflige el 100% de tu impacto máximo como daño durante 10 s, al objetivo al aparecer o revivir.",
    "MODIFIER_DATA_decreasedChanceToApplyBleedOnSpawn": "-${value}% de probabilidad de aplicar hemorragia, que inflige el 100% de tu impacto máximo como daño durante 10 s, al objetivo al aparecer o revivir.",
    "MODIFIER_DATA_increasedChanceToApplyBurnOnSpawn": "+${value}% de probabilidad de aplicar quemadura, que inflige un 15% de los PS actuales del objetivo durante 2,5 segundos, al objetivo al aparecer o revivir.",
    "MODIFIER_DATA_decreasedChanceToApplyBurnOnSpawn": "-Probabilidad de aplicar quemadura, que inflige un 15% de los PS actuales del objetivo durante 2,5 segundos, al objetivo al aparecer o revivir.",
    "MODIFIER_DATA_increasedChanceToApplyFreezeOnSpawn": "+${value}% de probabilidad de congelar durante un turno al objetivo al aparecer o revivir.",
    "MODIFIER_DATA_decreasedChanceToApplyFreezeOnSpawn": "-${value}% de probabilidad de aplicar congelación durante un turno al objetivo al aparecer o revivir",
    "MODIFIER_DATA_applyFreezeOnSpawn": "Aplica ${value} de turno de Congelación al objetivo al aparecer o revivir.",
    "MODIFIER_DATA_applyFreezeOnSpawn_Plural": "Aplica ${value} turnos de Congelación al objetivo al aparecer o revivir.",
    "MODIFIER_DATA_increasedChanceToApplyFrostburnOnSpawn": "+${value}% de probabilidad de aplicar quemadura de escarcha durante tres turnos al objetivo al aparecer o revivir.",
    "MODIFIER_DATA_decreasedChanceToApplyFrostburnOnSpawn": "-${value}% de probabilidad de aplicar quemadura de escarcha durante tres turnos al objetivo al aparecer o revivir",
    "MODIFIER_DATA_increasedChanceToApplyShockOnSpawn": "+${value}% de probabilidad de aplicar una pila de descarga al objetivo al aparecer o revivir.",
    "MODIFIER_DATA_decreasedChanceToApplyShockOnSpawn": "-${value}% de probabilidad de aplicar una pila de choque al objetivo al aparecer o revivir.",
    "MODIFIER_DATA_applyShockOnSpawn": "Aplica una pila de ${value} de Descarga al objetivo al aparecer o revivir.",
    "MODIFIER_DATA_applyShockOnSpawn_Plural": "Aplica una pila de ${value} de Descarga al objetivo al aparecer o revivir.",
    "MODIFIER_DATA_increasedChanceToApplySleepOnSpawn": "+${value}% de probabilidad de aplicar sueño durante un turno al objetivo al aparecer o revivir.",
    "MODIFIER_DATA_decreasedChanceToApplySleepOnSpawn": "-${value}% de probabilidad de aplicar sueño durante un turno al objetivo al aparecer o revivir",
    "MODIFIER_DATA_applySleepOnSpawn": "Aplica ${value} de turno de Sueño al objetivo al aparecer o revivir.",
    "MODIFIER_DATA_applySleepOnSpawn_Plural": "Aplica ${value} turnos de Sueño al objetivo al aparecer o revivir.",

    // #### On hit
    "MODIFIER_DATA_increasedChanceToApplyBleed": "+${value}% de probabilidad de infligir Hemorragia, que inflige el 100% de tu impacto máximo como daño durante 10 s, al golpear con un ataque.",
    "MODIFIER_DATA_decreasedChanceToApplyBleed": "-${value}% de probabilidad de infligir Hemorragia, que inflige el 100% de tu impacto máximo como daño durante 10 s, al golpear con un ataque.",

    // #### Death mark (not to be confused with mark of death)
    "Death_Mark_Notification_Text": "Has sido ejecutado con la marca de la muerte",
    "COMBAT_MISC_Death_Mark_Effect": "Marca de muerte",
    "MODIFIER_DATA_deathMark": "Si el porcentaje de HP máximo restante es inferior a la cantidad de pilas (MAX 20% / 5.000), se ejecuta inmediatamente",
    "MODIFIER_DATA_increasedDeathMarkOnHit": "+${value} Las pilas de la Marca de la Muerte se aplican al golpear con un ataque",
    "MODIFIER_DATA_increasedChanceToApplyStackOfDeathMark": "+${value}% de probabilidad de aplicar una pila de marca de muerte al enemigo",
    "MODIFIER_DATA_decreasedChanceToApplyStackOfDeathMark": "-${value}% de probabilidad de aplicar una pila de marca de muerte al enemigo",
    "MODIFIER_DATA_increasedDeathMarkImmunity": "+${value}% de probabilidad de resistir la aplicación de pilas de marcas de muerte",
    "MODIFIER_DATA_decreasedDeathMarkImmunity": "-${value}% de probabilidad de resistir la aplicación de pilas de marcas de muerte",
    "MODIFIER_DATA_applyDeathMarkOnSpawn": "Aplica una pila de ${value} de Marca de muerte al objetivo al aparecer o revivir.",
    "MODIFIER_DATA_applyDeathMarkOnSpawn_Plural": "Aplica pilas de ${value} de Marca de muerte al objetivo al aparecer o revivir.",

    // #### Spell type
    "MODIFIER_DATA_increasedDamageTakenFromAirSpells": "+${value}% Daño recibido de hechizos aéreos",
    "MODIFIER_DATA_decreasedDamageTakenFromAirSpells": "-${value}% Daño recibido de hechizos aéreos",
    "MODIFIER_DATA_increasedDamageTakenFromWaterSpells": "+${value}% Daño causado por hechizos de agua",
    "MODIFIER_DATA_decreasedDamageTakenFromWaterSpells": "-${value}% Daño causado por hechizos de agua",
    "MODIFIER_DATA_increasedDamageTakenFromEarthSpells": "+${value}% Daño recibido de hechizos de tierra",
    "MODIFIER_DATA_decreasedDamageTakenFromEarthSpells": "-${value}% Daño recibido de hechizos de tierra",
    "MODIFIER_DATA_increasedDamageTakenFromFireSpells": "+${value}% Daño recibido de hechizos de fuego",
    "MODIFIER_DATA_decreasedDamageTakenFromFireSpells": "-${value}% Daño recibido de hechizos de fuego",

    // #### Area type
    "MODIFIER_DATA_increasedMaxHitPercentToCombatAreaMonsters": "+${value}% Impacto Máximo Para Combatir Monstruos de Área",
    "MODIFIER_DATA_decreasedMaxHitPercentToCombatAreaMonsters": "-${value}% Impacto Máximo Para Combatir Monstruos de Área",
    "MODIFIER_DATA_increasedMaxHitFlatToCombatAreaMonsters": "+${value} Impacto Máximo Para Combatir Monstruos de Área",
    "MODIFIER_DATA_decreasedMaxHitFlatToCombatAreaMonsters": "-${value} Impacto Máximo Para Combatir Monstruos de Área",
    "MODIFIER_DATA_increasedMinHitBasedOnMaxHitToCombatAreaMonsters": "+${value}% Impacto Mínimo Para Combatir Monstruos de Área",
    "MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToCombatAreaMonsters": "-${value}% Impacto Mínimo Para Combatir Monstruos de Área",
    "MODIFIER_DATA_increasedFlatMinHitToCombatAreaMonsters": "+${value} Golpe Mínimo Para Combatir Monstruos de Área",
    "MODIFIER_DATA_decreasedFlatMinHitToCombatAreaMonsters": "-${value} Golpe Mínimo Para Combatir Monstruos de Área",
    "MODIFIER_DATA_increasedGlobalAccuracyAgainstCombatAreaMonsters": "+${value}% Índice de Precisión contra Monstruos de Área de Combate",
    "MODIFIER_DATA_decreasedGlobalAccuracyAgainstCombatAreaMonsters": "-${value}% Índice de Precisión contra Monstruos de Área de Combate",
    "MODIFIER_DATA_increasedDamageReductionAgainstCombatAreaMonsters": "+${value}% Reducción de Daño contra Monstruos de Área de Combate",
    "MODIFIER_DATA_decreasedDamageReductionAgainstCombatAreaMonsters": "-${value}% Reducción de Daño contra Monstruos de Área de Combate",

    "MODIFIER_DATA_increasedMaxHitPercentToSlayerAreaMonsters": "+${value}% Impacto Máximo Para Matar Monstruos de Área",
    "MODIFIER_DATA_decreasedMaxHitPercentToSlayerAreaMonsters": "-${value}% Impacto Máximo Para Matar Monstruos de Área",
    "MODIFIER_DATA_increasedMaxHitFlatToSlayerAreaMonsters": "+${value} Golpe Máximo A Monstruos De Área De Matanza",
    "MODIFIER_DATA_decreasedMaxHitFlatToSlayerAreaMonsters": "-${value} Golpe Máximo A Monstruos De Área De Matanza",
    "MODIFIER_DATA_increasedMinHitBasedOnMaxHitToSlayerAreaMonsters": "+${value}% Impacto Mínimo Para Matar Monstruos de Área",
    "MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToSlayerAreaMonsters": "-${value}% Impacto Mínimo Para Matar Monstruos de Área",
    "MODIFIER_DATA_increasedFlatMinHitToSlayerAreaMonsters": "+${value} Golpe Mínimo Para Matar Monstruos de Área",
    "MODIFIER_DATA_decreasedFlatMinHitToSlayerAreaMonsters": "-${value} Golpe Mínimo Para Matar Monstruos de Área",
    "MODIFIER_DATA_increasedGlobalAccuracyAgainstSlayerAreaMonsters": "+${value}% Índice de Precisión contra Monstruos de Área Cazadores",
    "MODIFIER_DATA_decreasedGlobalAccuracyAgainstSlayerAreaMonsters": "-${value}% Índice de Precisión contra Monstruos de Área Cazadores",
    "MODIFIER_DATA_increasedDamageReductionAgainstSlayerAreaMonsters": "+${value}% Reducción de Daño contra Monstruos de Área Asesinos",
    "MODIFIER_DATA_decreasedDamageReductionAgainstSlayerAreaMonsters": "-${value}% Reducción de Daño contra Monstruos de Área Asesinos",

    "MODIFIER_DATA_increasedMaxHitPercentToDungeonMonsters": "+${value}% Impacto Máximo A Monstruos De Mazmorra",
    "MODIFIER_DATA_decreasedMaxHitPercentToDungeonMonsters": "-${value}% Impacto Máximo A Monstruos De Mazmorra",
    "MODIFIER_DATA_increasedMaxHitFlatToDungeonMonsters": "+${value} Golpe Máximo A Monstruos De Mazmorra",
    "MODIFIER_DATA_decreasedMaxHitFlatToDungeonMonsters": "-${value} Golpe Máximo A Monstruos De Mazmorra",
    "MODIFIER_DATA_increasedMinHitBasedOnMaxHitToDungeonMonsters": "+${value}% Impacto Mínimo A Monstruos De Mazmorra",
    "MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToDungeonMonsters": "-${value}% Impacto Mínimo A Monstruos De Mazmorra",
    "MODIFIER_DATA_increasedFlatMinHitToDungeonMonsters": "+${value} Golpe Mínimo A Monstruos De Mazmorra",
    "MODIFIER_DATA_decreasedFlatMinHitToDungeonMonsters": "-${value} Golpe Mínimo A Monstruos De Mazmorra",
    "MODIFIER_DATA_increasedGlobalAccuracyAgainstDungeonMonsters": "+${value}% Índice de Precisión contra Monstruos de Mazmorra",
    "MODIFIER_DATA_decreasedGlobalAccuracyAgainstDungeonMonsters": "-${value}% Índice de Precisión contra Monstruos de Mazmorra",
    "MODIFIER_DATA_increasedDamageReductionAgainstDungeonMonsters": "+${value}% Reducción de Daño contra Monstruos de Mazmorra",
    "MODIFIER_DATA_decreasedDamageReductionAgainstDungeonMonsters": "-${value}% Reducción de Daño contra Monstruos de Mazmorra",

    // #### Slayer task
    "MODIFIER_DATA_increasedMaxHitPercentToSlayerTasks": "+${value}% Golpe Máximo A Tareas De Cazador",
    "MODIFIER_DATA_decreasedMaxHitPercentToSlayerTasks": "-${value}% Golpe Máximo A Tareas De Cazador",
    "MODIFIER_DATA_increasedMaxHitFlatToSlayerTasks": "+${value} Golpe Máximo A Tareas De Cazador",
    "MODIFIER_DATA_decreasedMaxHitFlatToSlayerTasks": "-${value} Golpe Máximo A Tareas De Cazador",
    "MODIFIER_DATA_increasedMinHitBasedOnMaxHitToSlayerTasks": "+${value}% Golpe Mínimo A Tareas De Cazador",
    "MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToSlayerTasks": "-${value}% Golpe Mínimo A Tareas De Cazador",
    "MODIFIER_DATA_increasedFlatMinHitToSlayerTasks": "+${value} Golpe Mínimo A Tareas De Cazador",
    "MODIFIER_DATA_decreasedFlatMinHitToSlayerTasks": "-${value} Golpe Mínimo A Tareas De Cazador",
    "MODIFIER_DATA_increasedGlobalAccuracyAgainstSlayerTasks": "+${value}% Índice de Precisión contra Tareas de Asesino",
    "MODIFIER_DATA_decreasedGlobalAccuracyAgainstSlayerTasks": "-${value}% Índice de Precisión contra Tareas de Asesino",
    "MODIFIER_DATA_decreasedDamageReductionAgainstSlayerTasks": "-${value}% Reducción de Daño contra Tareas de Asesino",

    // #### Monster Type
    // ##### Generic; these will be used to dynamically build the ones further down below, as those also have to be dynamically built
    "MONSTER_TYPE_SINGULAR_Animal": "Animales",
    "MONSTER_TYPE_PLURAL_Animal": "Animales",
    "MONSTER_TYPE_SINGULAR_Demon": "Demonio",
    "MONSTER_TYPE_PLURAL_Demon": "Demonios",
    "MONSTER_TYPE_SINGULAR_Dragon": "Dragón",
    "MONSTER_TYPE_PLURAL_Dragon": "Dragones",
    "MONSTER_TYPE_SINGULAR_Elemental": "Elemental",
    "MONSTER_TYPE_PLURAL_Elemental": "Elementales",
    "MONSTER_TYPE_SINGULAR_Human": "Humano",
    "MONSTER_TYPE_PLURAL_Human": "Humanos",
    "MONSTER_TYPE_SINGULAR_MythicalCreature": "Criatura mítica",
    "MONSTER_TYPE_PLURAL_MythicalCreature": "Criaturas míticas",
    "MONSTER_TYPE_SINGULAR_SeaCreature": "Criatura marina",
    "MONSTER_TYPE_PLURAL_SeaCreature": "Criaturas marinas",
    "MONSTER_TYPE_SINGULAR_Undead": "No muertos",
    "MONSTER_TYPE_PLURAL_Undead": "No muertos",

    "COMBAT_MISC_Monster_Type_Trait_Modifier_Effect": "${monsterType} Rasgo",
    "COMBAT_MISC_Monster_Type_Trait_Stacking_Effect": "${monsterType} Rasgo",

    "MODIFIER_DATA_MonsterTypeTraitApplied": "Marca al afectado como ${monsterType}",
    "MODIFIER_DATA_increasedDamageAgainstMonsterType": "+${value}% Daño a ${monsterType}",
    "MODIFIER_DATA_decreasedDamageAgainstMonsterType": "-${value}% Daño a ${monsterType}",
    "MODIFIER_DATA_increasedDamageTakenFromMonsterType": "+${value}% Daño causado por ${monsterType}",
    "MODIFIER_DATA_decreasedDamageTakenFromMonsterType": "-${value}% Daño recibido de ${monsterType}",
    "MODIFIER_DATA_increasedMaxHitPercentAgainstMonsterType": "+${value}% Impacto máximo al luchar contra ${monsterType}",
    "MODIFIER_DATA_decreasedMaxHitPercentAgainstMonsterType": "-${value}% Impacto máximo al luchar contra ${monsterType}",
    "MODIFIER_DATA_increasedMaxHitFlatAgainstMonsterType": "+${value} Impacto máximo al luchar contra ${monsterType}",
    "MODIFIER_DATA_decreasedMaxHitFlatAgainstMonsterType": "-${value} Impacto máximo al luchar contra ${monsterType}",
    "MODIFIER_DATA_increasedMinHitBasedOnMaxHitAgainstMonsterType": "+${value}% Impacto mínimo al luchar contra ${monsterType}",
    "MODIFIER_DATA_decreasedMinHitBasedOnMaxHitAgainstMonsterType": "-${value}% Golpe mínimo al luchar contra ${monsterType}",
    "MODIFIER_DATA_increasedFlatMinHitAgainstMonsterType": "+${value} Golpe mínimo al luchar contra ${monsterType}",
    "MODIFIER_DATA_decreasedFlatMinHitAgainstMonsterType": "-${value} Golpe mínimo al luchar contra ${monsterType}",
    "MODIFIER_DATA_increasedGlobalAccuracyAgainstMonsterType": "+${value}% Índice de Precisión al luchar contra ${monsterType}",
    "MODIFIER_DATA_decreasedGlobalAccuracyAgainstMonsterType": "-${value}% Índice de Precisión al luchar contra ${monsterType}",
    "MODIFIER_DATA_increasedDamageReductionAgainstMonsterType": "+${value}% Reducción de Daño al luchar contra ${monsterType}",
    "MODIFIER_DATA_decreasedDamageReductionAgainstMonsterType": "-${value}% Reducción de Daño al luchar contra ${monsterType}",

    "MODIFIER_DATA_increasedChanceToApplyMonsterTypeTraitInfiniteOnSpawn": "+${value}% de probabilidad de aplicar el rasgo ${monsterType} durante todo el combate al aparecer o revivir.",
    "MODIFIER_DATA_decreasedChanceToApplyMonsterTypeTraitInfiniteOnSpawn": "-${value}% de probabilidad de aplicar el rasgo ${monsterType} durante todo el combate al aparecer o revivir",
    "MODIFIER_DATA_applyMonserTypeTraitTurnsOnSpawn": "Aplica el rasgo ${monsterType} al enemigo durante ${value} de los turnos del enemigo al aparecer o revivir.",

    "MODIFIER_DATA_increasedChanceToApplyMonsterTypeTrait": "+${value}% de probabilidad de aplicar el rasgo ${monsterType} durante uno de los turnos de los enemigos",
    "MODIFIER_DATA_decreasedChanceToApplyMonsterTypeTrait": "-${value}% de probabilidad de aplicar el rasgo ${monsterType} durante uno de los turnos de los enemigos",
    "MODIFIER_DATA_applyMonsterTypeTraitTurns": "Aplica el rasgo ${monsterType} al enemigo durante ${value} de los turnos del enemigo.",

    // #### Bosses
    "MODIFIER_DATA_increasedMaxHitPercentAgainstBosses": "+${value}% Impacto máximo al luchar contra jefes",
    "MODIFIER_DATA_decreasedMaxHitPercentAgainstBosses": "-${value}% Impacto máximo al luchar contra jefes",
    "MODIFIER_DATA_increasedMaxHitFlatAgainstBosses": "+${value} Impacto máximo al luchar contra jefes",
    "MODIFIER_DATA_decreasedMaxHitFlatAgainstBosses": "-${value} Impacto máximo al luchar contra jefes",
    "MODIFIER_DATA_increasedMinHitBasedOnMaxHitAgainstBosses": "+${value}% Impacto mínimo al luchar contra jefes",
    "MODIFIER_DATA_decreasedMinHitBasedOnMaxHitAgainstBosses": "-${value}% Impacto mínimo al luchar contra jefes",
    "MODIFIER_DATA_increasedFlatMinHitAgainstBosses": "+${value} Golpe mínimo al luchar contra jefes",
    "MODIFIER_DATA_decreasedFlatMinHitAgainstBosses": "-${value} Golpe mínimo al luchar contra jefes",
    "MODIFIER_DATA_increasedGlobalAccuracyAgainstBosses": "+${value}% Índice de Precisión al luchar contra jefes",
    "MODIFIER_DATA_decreasedGlobalAccuracyAgainstBosses": "-${value}% Índice de precisión al luchar contra jefes",

    // #### Skilling
    "MODIFIER_DATA_increasedThievingDamagePreventionThreshold": "+${value} umbral de prevención de daño de ladrón (cualquier salpicadura de daño por debajo del umbral se reduce a 0)",
    "MODIFIER_DATA_decreasedThievingDamagePreventionThreshold": "-${value} umbral de prevención de daño de ladrón (cualquier salpicadura de daño por debajo del umbral se reduce a 0)",
    "MODIFIER_DATA_increasedGlobalSkillXPPerLevel": "+${value}% Global Skill XP por nivel en la habilidad actualmente en formación",
    "MODIFIER_DATA_decreasedGlobalSkillXPPerLevel": "-${value}% Global Skill XP por nivel en la habilidad actualmente en formación",
    "MODIFIER_DATA_increasedSkillXPPerSkillLevel": "+${value}% ${skillName} Habilidad XP por nivel en ${skillName}",
    "MODIFIER_DATA_decreasedSkillXPPerSkillLevel": "-${value}% ${skillName} Habilidad XP por nivel en ${skillName}",
    "MODIFIER_DATA_increasedFlatGlobalSkillXP": "+${value} XP de habilidad global (añadida después de los modificadores %)",
    "MODIFIER_DATA_decreasedFlatGlobalSkillXP": "-${value} XP de habilidad global (añadida después de modificadores %)",
    "MODIFIER_DATA_increasedFlatSkillXP": "+${value} ${skillName} Habilidad XP (añadida después de modificadores %)",
    "MODIFIER_DATA_decreasedFlatSkillXP": "-${value} ${skillName} Habilidad XP (añadida después de modificadores %)",
    "MODIFIER_DATA_increasedFlatGlobalSkillXPPerSkillLevel": "+${value} XP de habilidad global por nivel en la habilidad que se está entrenando (se añade después de los modificadores %)",
    "MODIFIER_DATA_decreasedFlatGlobalSkillXPPerSkillLevel": "-${value} XP de habilidad global por nivel en la habilidad que se está entrenando actualmente (se añade después de los modificadores %)",
    "MODIFIER_DATA_increasedFlatSkillXPPerSkillLevel": "+${value} ${skillName} Habilidad XP por nivel en ${skillName} (añadido después de modificadores %)",
    "MODIFIER_DATA_decreasedFlatSkillXPPerSkillLevel": "-${value} ${skillName} Habilidad XP por nivel en ${skillName} (añadido después de modificadores %)"
};
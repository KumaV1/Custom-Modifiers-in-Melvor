export const it = {
    Combat_Modifier_UI_Impact_Indicator_Headline: 'Avviso Cmim-Mod',
    Combat_Modifier_UI_Impact_Indicator_Text: "Almeno un combattente sta attualmente beneficiando di un modificatore che offre la possibilità di ridurre a 0 i danni subiti. A causa di come/dove tale modificatore ha dovuto essere implementato, è possibile che le visualizzazioni dei danni (ad esempio il colpo massimo) vengano erroneamente visualizzate come 0, anche per nemici troppo forti perché ciò sia realisticamente possibile.",
    Combat_Modifier_UI_Impact_Indicator_Hint: 'Questo avviso può essere disattivato nelle impostazioni della mod.',
    Combat_Area_Boss_Indicator: 'Capo',

    // ### Settings
    // #### Combat Areas Indicators section
    Settings_Section_Combat_Areas_Indicator: 'Indicatori delle aree di combattimento',

    // ##### Enable modifier ui impact indicator
    Settings_Setting_Label_Enable_Modifier_UI_Impact_Indicator: "Indicatore di abilitazione, per i casi in cui alcuni modificatori possono causare una visualizzazione errata nell'interfaccia utente.",
    Settings_Setting_Hint_Enable_Modifier_UI_Impact_Indicator: "Attualmente influisce solo su un modificatore. L'indicatore visualizzato fornisce maggiori informazioni",

    // ##### Enable boss indicators
    Settings_Setting_Label_Enable_Boss_Indicators: 'Abilitare gli indicatori del capo',
    Settings_Setting_Hint_Enable_Boss_Indicators: "Di solito, solo il mostro finale di un dungeon viene classificato come boss. Tuttavia, ci possono essere delle eccezioni a questa regola, in cui anche i mostri delle aree di combattimento o di uccisione possono essere classificati come boss.",

    // ##### Enable active monster type indicators
    Settings_Setting_Label_Enable_Active_Monster_Type_Indicators: 'Abilita gli indicatori del tipo di mostro attivo',
    Settings_Setting_Hint_Enable_Active_Monster_Type_Indicators: "Aggiunge badge verdi ai menu di selezione dei mostri/dungeon, indicando l'allocazione del tipo di mostro nativo.",

    // ##### Enable inactive monster type indicators
    Settings_Setting_Label_Enable_Inactive_Monster_Type_Indicators: 'Abilita gli indicatori del tipo di mostro inattivo',
    Settings_Setting_Hint_Enable_Inactive_Monster_Type_Indicators: 'Aggiunge badge arancioni ai menu di selezione dei mostri/dungeon, indicando le allocazioni dei tipi di mostri nativi.',

    // #### Disabling section
    Settings_Section_Disabling: 'Disabilitazione',

    // ##### Info label
    Settings_Setting_Label_Disabling_Info: "Questa sezione serve a disabilitare alcune parti delle funzionalità di questa mod. Oltre a rendere il contenuto volutamente più facile/più difficile, l'altra ragione principale per cui si vuole fare questo è che questa mod potrebbe aggiungere una quantità notevole di tempo di calcolo, portando a un notevole aumento del tempo di caricamento dei guadagni offline (specialmente se si utilizza il sistema dei tipi di mostro). Disabilitare l'esecuzione di alcuni codici può quindi portare a un notevole miglioramento delle prestazioni.",

    // ##### On-spawn modifiers
    Settings_Setting_Label_Disable_All_On_Spawn_Modifiers: 'Disattivare i modificatori al momento della nascita',
    Settings_Setting_Hint_Disable_All_On_Spawn_Modifiers: 'Disattiva tutti i modificatori on-spawn aggiunti da questa mod.',

    // ##### Keep specific monster types inactive
    Settings_Setting_Label_Keep_Specific_Monster_Types_Inactive: 'Mantenere inattivi tipi specifici di mostri',
    Settings_Setting_Hint_Keep_Specific_Monster_Types_Inactive: 'Impone che i tipi di mostro selezionati rimangano inattivi, indipendentemente da quanto comunicato da qualsiasi mod. I tipi di mostro aggiunti da altre mod perderanno il loro stato di checkbox, se vi capita di caricare il vostro salvataggio senza la suddetta mod.',

    // #### Enabling section
    Settings_Section_Enabling: 'Abilitazione',

    // ##### Info label
    Settings_Setting_Label_Enabling_Info: "Questa sezione è molto probabilmente irrilevante come utente. Tuttavia, a seconda delle mod utilizzate, ci si può trovare nella situazione di dover attivare da soli alcune funzionalità, perché nessuna mod ne ha comunicato la necessità, pur essendo utilizzata. In tal caso, questa sezione consente di occuparsi personalmente dell'attivazione.",

    // ##### Force specific monster types active
    Settings_Setting_Label_Force_Specific_Monster_Types_Active: 'Forza tipi di mostri specifici attivi',
    Settings_Setting_Hint_Force_Specific_Monster_Types_Active: "Forza i tipi di mostro selezionati ad essere attivi (valutati dopo l'impostazione di inattività), indipendentemente da ciò che qualsiasi mod può comunicare. I tipi di mostro aggiunti da altre mod perderanno il loro stato di checkbox, se vi capita di caricare il vostro salvataggio senza la suddetta mod.",

    // #### Save & Reload section
    Settings_Section_Save_And_Reload: 'Salvare tutto e ricaricare',

    // ##### Save & Reload button
    Settings_Hint_Save_Reload_Required: 'Richiede una ricarica',
    Settings_Setting_Display_Save_Reload: 'Salvare tutto e ricaricare',

    // ### Monster type overview
    PAGE_NAME_Monster_Types_Overview: "Tipi di mostri",

    Monster_Type_Overview_Remarks_Prefix: "Tenere presente i seguenti punti:",
    Monster_Type_Overview_Remarks_Not_Inherit_Monster_Types: "Melvor non include intrinsecamente le definizioni dei tipi. Invece, la mod \"Custom Modifiers in Melvor\" ha gettato le basi per la definizione e l'assegnazione dei tipi di mostro da parte delle mod.",
    Monster_Type_Overview_Remarks_Displayed_Type_Allocation: "Questa visualizzazione mostra tutte le allocazioni di tipo definite. Se un mostro non viene visualizzato in una sezione, significa che non è stato tipizzato come tale. Detto questo, le definizioni dei tipi possono essere imprecise. Sentitevi liberi di dare un feedback su tutto ciò che pensate debba essere modificato.",
    Monster_Type_Overview_Remarks_Custom_Mods_Monster_Type_Allocation: "Per tutti i mostri aggiunti tramite altre mod, tali mod devono impostare loro stessi le definizioni dei tipi per tali mostri.",

    Monster_Type_Overview_Player_Traits_Tab_Header: "Tratti del giocatore",
    Monster_Type_Overview_Player_Traits_Information_Type_Allocation: "Oltre all'assegnazione del tipo organico, un tipo può anche essere applicato forzatamente tramite l'uso del rispettivo modificatore, di solito attraverso oggetti equipaggiati o eventualmente acquisti in negozio.",
    Monster_Type_Overview_Player_Traits_Information_Display: 'Questa panoramica mostra tutti i tipi (e il valore del modificatore) che attualmente influenzano il personaggio - ulteriori informazioni possono essere determinate utilizzando la modalità "Show Skill Modifiers".',
    Monster_Type_Overview_Player_Traits_Information_Data_Loaded: "Questa visualizzazione è statica e si basa sul momento in cui il carattere è stato caricato.",
    Monster_Type_Overview_Player_Traits_No_Entries: "Il carattere non è influenzato da alcun modificatore di assegnazione del tipo.",

    Monster_Type_Overview_Active_Types_Tab_Header: "Tipi attivi",
    Monster_Type_Overview_Active_Types_Information: "I tipi attivi sono quelli che vengono effettivamente utilizzati da almeno uno dei mod caricati.",
    Monster_Type_Overview_Active_Types_No_Entries: "Non ci sono tipi attivi al momento",

    Monster_Type_Overview_Inactive_Types_Tab_Header: "Tipi inattivi",
    Monster_Type_Overview_Inactive_Types_Information: "I tipi inattivi sono quelli che sono stati definiti ma che non vengono utilizzati da nessun mod. Pertanto, non vengono nemmeno controllati durante il combattimento, il che significa che non influiscono sul tempo di calcolo.",
    Monster_Type_Overview_Inactive_Types_No_Entries: "Attualmente non ci sono tipi inattivi",
    Monster_Type_Overview_Inactive_Types_Affected_By_Mod_Settings: "Non può diventare attivo a causa della selezione nelle impostazioni della mod.",

    // ### Modifiers
    // #### Directly affecting damage dealt
    MODIFIER_DATA_increasedChanceToReduceAttackDamageToZero: '+${value}% di possibilità (MAX: 90%) di ridurre a 0 i danni subiti da un attacco (viene comunque considerato come se fosse stato colpito e non influisce sul calcolo degli effetti on-hit come il damage-over-time).',
    MODIFIER_DATA_decreasedChanceToReduceAttackDamageToZero: '-${value}% di possibilità (MAX: 90%) di ridurre a 0 i danni subiti da un attacco (viene comunque considerato come se fosse stato colpito e non influisce sul calcolo degli effetti on-hit come il damage-over-time).',
    MODIFIER_DATA_increasedDamageFlatWhileTargetHasMaxHP: '+${value} danni quando il bersaglio ha gli HP pieni',
    MODIFIER_DATA_decreasedDamageFlatWhileTargetHasMaxHP: '-${value} danni quando il bersaglio ha gli HP pieni',
    MODIFIER_DATA_increasedDamagePercentWhileTargetHasMaxHP: '+${value}% danni quando il bersaglio ha gli HP pieni',
    MODIFIER_DATA_decreasedDamagePercentWhileTargetHasMaxHP: '-${value}% danni quando il bersaglio ha gli HP pieni',
    MODIFIER_DATA_increasedDamageFlatIgnoringDamageReduction: "+${value} danno, che non è influenzato dalla riduzione del danno dei nemici.",
    MODIFIER_DATA_decreasedDamageFlatIgnoringDamageReduction: "-${value} danno, che non è influenzato dalla riduzione del danno dei nemici.",
    MODIFIER_DATA_increasedGlobalDamagePreventionThreshold: '+${value} soglia globale di prevenzione del danno (qualsiasi danno splat al di sotto della soglia viene ridotto a 0)',
    MODIFIER_DATA_decreasedGlobalDamagePreventionThreshold: '-${value} soglia globale di prevenzione del danno (qualsiasi danno splat al di sotto della soglia viene ridotto a 0)',
    MODIFIER_DATA_increasedDamagePreventionThreshold: '+${value} soglia di prevenzione del danno (qualsiasi danno splat al di sotto della soglia viene ridotto a 0)',
    MODIFIER_DATA_decreasedDamagePreventionThreshold: '-${value} soglia di prevenzione del danno (qualsiasi danno splat al di sotto della soglia viene ridotto a 0)',
    MODIFIER_DATA_increasedBarrierDamagePreventionThreshold: '+${value} soglia di prevenzione del danno da barriera (qualsiasi danno splittato contro una barriera al di sotto della soglia viene ridotto a 0)',
    MODIFIER_DATA_decreasedBarrierDamagePreventionThreshold: '-${value} soglia di prevenzione del danno da barriera (qualsiasi danno splittato contro una barriera al di sotto della soglia viene ridotto a 0)',

    // #### Spawn
    MODIFIER_DATA_increasedChanceToApplySlowOnSpawn: "+${value}% possibilità di applicare un intervallo di attacco aumentato del 25% per tre turni al bersaglio al momento dello spawn o della rianimazione",
    MODIFIER_DATA_decreasedChanceToApplySlowOnSpawn: "-${value}% possibilità di applicare un intervallo di attacco aumentato del 25% per tre turni al bersaglio al momento dello spawn o della rianimazione",
    MODIFIER_DATA_increasedChanceToApplyStunOnSpawn: "+${value}% possibilità di applicare lo stordimento per un turno al bersaglio al momento dello spawn o della rianimazione",
    MODIFIER_DATA_decreasedChanceToApplyStunOnSpawn: "-${value}% possibilità di applicare lo stordimento per un turno al bersaglio al momento dello spawn o della rianimazione",
    MODIFIER_DATA_applyStunOnSpawn: "Applica ${value} di turno di Stun al bersaglio al momento dello spawn o della rianimazione",
    MODIFIER_DATA_applyStunOnSpawn_Plural: "Applica ${value} di turni di Stun al bersaglio al momento dello spawn o della rianimazione",
    MODIFIER_DATA_increasedChanceToApplyPoisonOnSpawn: "+${value}% di possibilità di applicare veleno al bersaglio al momento dello spawn o della rianimazione",
    MODIFIER_DATA_decreasedChanceToApplyPoisonOnSpawn: "-${value}% di possibilità di applicare veleno al bersaglio al momento dello spawn o della rianimazione",
    MODIFIER_DATA_increasedChanceToApplyDeadlyPoisonOnSpawn: "+${value}% di possibilità di applicare un veleno mortale al bersaglio al momento dello spawn o della rianimazione",
    MODIFIER_DATA_decreasedChanceToApplyDeadlyPoisonOnSpawn: "-${value}% di possibilità di applicare un veleno mortale al bersaglio al momento dello spawn o della rianimazione",
    MODIFIER_DATA_increasedChanceToApplyAfflictionOnSpawn: "+${value}% di possibilità di applicare una pila di afflizione al bersaglio al momento dello spawn o della rianimazione",
    MODIFIER_DATA_decreasedChanceToApplyAfflictionOnSpawn: "-${value}% di possibilità di applicare una pila di afflizione al bersaglio al momento dello spawn o della rianimazione",
    MODIFIER_DATA_applyAfflictionOnSpawn: "Applica ${value} pila di Afflizione al bersaglio al momento dello spawn o della rianimazione",
    MODIFIER_DATA_applyAfflictionOnSpawn_Plural: "Applica ${value} stack di Afflizione al bersaglio al momento dello spawn o della rianimazione",
    MODIFIER_DATA_increasedChanceToApplyBleedOnSpawn: "+${value}% di possibilità di applicare un'emorragia, che infligge il 100% del tuo colpo massimo come danno per 10s, al bersaglio al momento dello spawn o della rianimazione",
    MODIFIER_DATA_decreasedChanceToApplyBleedOnSpawn: "-${value}% di possibilità di applicare un'emorragia, che infligge il 100% del tuo colpo massimo come danno per 10s, al bersaglio al momento dello spawn o della rianimazione",
    MODIFIER_DATA_increasedChanceToApplyBurnOnSpawn: "+${value}% di possibilità di applicare un'ustione, che infligge il 15% degli HP correnti del bersaglio per 2,5 secondi, al bersaglio al momento dello spawn o della rianimazione",
    MODIFIER_DATA_decreasedChanceToApplyBurnOnSpawn: "-${value}% di possibilità di applicare un'ustione, che infligge il 15% degli HP correnti del bersaglio per 2,5 secondi, al bersaglio al momento dello spawn o della rianimazione",
    MODIFIER_DATA_increasedChanceToApplyFreezeOnSpawn: "+${value}% possibilità di applicare il congelamento per un turno al bersaglio al momento dello spawn o della rianimazione",
    MODIFIER_DATA_decreasedChanceToApplyFreezeOnSpawn: "-${value}% possibilità di applicare il congelamento per un turno al bersaglio al momento dello spawn o della rianimazione",
    MODIFIER_DATA_applyFreezeOnSpawn: "Applica un turno di congelamento di ${value} al bersaglio al momento dello spawn o della rianimazione",
    MODIFIER_DATA_applyFreezeOnSpawn_Plural: "Applica ${value} di turni di congelamento al bersaglio al momento dello spawn o della rianimazione",
    MODIFIER_DATA_increasedChanceToApplyFrostburnOnSpawn: "+${value}% di possibilità di applicare il bruciore di ghiaccio per tre turni al bersaglio al momento dello spawn o della rianimazione",
    MODIFIER_DATA_decreasedChanceToApplyFrostburnOnSpawn: "-${value}% di possibilità di applicare il bruciore di ghiaccio per tre turni al bersaglio al momento dello spawn o della rianimazione",
    MODIFIER_DATA_increasedChanceToApplyShockOnSpawn: "+${value}% di possibilità di applicare una pila di shock al bersaglio al momento dello spawn o della rianimazione",
    MODIFIER_DATA_decreasedChanceToApplyShockOnSpawn: "-${value}% di possibilità di applicare una pila di shock al bersaglio al momento dello spawn o della rianimazione",
    MODIFIER_DATA_applyShockOnSpawn: "Applica ${value} di stack di Shock al bersaglio al momento dello spawn o della rianimazione",
    MODIFIER_DATA_applyShockOnSpawn_Plural: "Applica ${value} di stack di Shock al bersaglio al momento dello spawn o della rianimazione",
    MODIFIER_DATA_increasedChanceToApplySleepOnSpawn: "+${value}% possibilità di applicare il sonno per un turno al bersaglio al momento dello spawn o della rianimazione.",
    MODIFIER_DATA_decreasedChanceToApplySleepOnSpawn: "-${value}% possibilità di applicare il sonno per un turno al bersaglio al momento dello spawn o della rianimazione.",
    MODIFIER_DATA_applySleepOnSpawn: "Applica un turno di sonno di ${value} al bersaglio al momento dello spawn o della rianimazione",
    MODIFIER_DATA_applySleepOnSpawn_Plural: "Applica ${value} turni di Sonno al bersaglio al momento dello spawn o della rianimazione",

    // #### On hit
    MODIFIER_DATA_increasedChanceToApplyBleed: "+${value}% di probabilità di infliggere un'emorragia, che infligge il 100% dei danni massimi subiti in 10 secondi, quando si colpisce con un attacco",
    MODIFIER_DATA_decreasedChanceToApplyBleed: "-${value}% di probabilità di infliggere un'emorragia, che infligge il 100% dei danni massimi subiti in 10 secondi, quando si colpisce con un attacco.",

    // #### Death mark (not to be confused with mark of death)
    Death_Mark_Notification_Text: "Sei stato giustiziato con il marchio della morte",
    COMBAT_MISC_Death_Mark_Effect: "Marchio di morte",
    MODIFIER_DATA_deathMark: "Se la percentuale di HP massimi rimasti è inferiore alla quantità di pile (MAX 20% / 5.000), viene eseguita immediatamente",
    MODIFIER_DATA_increasedDeathMarkOnHit: "+${value} Il marchio della morte viene applicato quando si colpisce con un attacco",
    MODIFIER_DATA_increasedChanceToApplyStackOfDeathMark: "+${value}% di possibilità di applicare una pila di segno di morte al nemico",
    MODIFIER_DATA_decreasedChanceToApplyStackOfDeathMark: "-${value}% di possibilità di applicare una pila di segno di morte al nemico",
    MODIFIER_DATA_increasedDeathMarkImmunity: "+${value}% di possibilità di resistere all'applicazione dei marchi della morte",
    MODIFIER_DATA_decreasedDeathMarkImmunity: "-${value}% di possibilità di resistere all'applicazione dei marchi della morte",
    MODIFIER_DATA_applyDeathMarkOnSpawn: "Applica una pila di ${value} di Segno della Morte al bersaglio al momento dello spawn o della rianimazione",
    MODIFIER_DATA_applyDeathMarkOnSpawn_Plural: "Applica ${value} stack di Segno della Morte al bersaglio al momento dello spawn o della rianimazione",

    // #### Spell type
    MODIFIER_DATA_increasedDamageTakenFromAirSpells: "+${value}% Danni subiti da incantesimi aerei",
    MODIFIER_DATA_decreasedDamageTakenFromAirSpells: "-${value}% Danni subiti da incantesimi aerei",
    MODIFIER_DATA_increasedDamageTakenFromWaterSpells: "+${value}% Danni subiti dagli incantesimi d'acqua",
    MODIFIER_DATA_decreasedDamageTakenFromWaterSpells: "-${value}% Danni subiti dagli incantesimi d'acqua",
    MODIFIER_DATA_increasedDamageTakenFromEarthSpells: "+${value}% Danni subiti dagli incantesimi di terra",
    MODIFIER_DATA_decreasedDamageTakenFromEarthSpells: "-${value}% Danni subiti dagli incantesimi di terra",
    MODIFIER_DATA_increasedDamageTakenFromFireSpells: "+${value}% Danni subiti da incantesimi di fuoco",
    MODIFIER_DATA_decreasedDamageTakenFromFireSpells: "-${value}% Danni subiti da incantesimi di fuoco",

    // #### Area type
    MODIFIER_DATA_increasedMaxHitPercentToCombatAreaMonsters: "+${value}% Colpo massimo per combattere i mostri ad area",
    MODIFIER_DATA_decreasedMaxHitPercentToCombatAreaMonsters: "-${value}% Colpo massimo per combattere i mostri ad area",
    MODIFIER_DATA_increasedMaxHitFlatToCombatAreaMonsters: "+${value} Colpo massimo per combattere i mostri dell'area",
    MODIFIER_DATA_decreasedMaxHitFlatToCombatAreaMonsters: "-${value} Colpo massimo per combattere i mostri dell'area",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitToCombatAreaMonsters: "+${value}% Colpo minimo per combattere i mostri ad area",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToCombatAreaMonsters: "-${value}% Colpo minimo per combattere i mostri ad area",
    MODIFIER_DATA_increasedFlatMinHitToCombatAreaMonsters: "+${value} Colpo minimo per combattere i mostri ad area",
    MODIFIER_DATA_decreasedFlatMinHitToCombatAreaMonsters: "-${value} Colpo minimo per combattere i mostri ad area",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstCombatAreaMonsters: "+${value}% Valutazione della precisione contro i mostri dell'Area di Combattimento",
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstCombatAreaMonsters: "-${value}% Valutazione della precisione contro i mostri dell'Area di Combattimento",
    MODIFIER_DATA_increasedDamageReductionAgainstCombatAreaMonsters: "+${value}% Riduzione del danno contro i mostri dell'Area di Combattimento",
    MODIFIER_DATA_decreasedDamageReductionAgainstCombatAreaMonsters: "-${value}% Riduzione del danno contro i mostri dell'Area di Combattimento",

    MODIFIER_DATA_increasedMaxHitPercentToSlayerAreaMonsters: "+${value}% Colpo Massimo per Uccidere Mostri d'Area",
    MODIFIER_DATA_decreasedMaxHitPercentToSlayerAreaMonsters: "-${value}% Colpo Massimo per Uccidere Mostri d'Area",
    MODIFIER_DATA_increasedMaxHitFlatToSlayerAreaMonsters: "+${value} Colpo Massimo per Uccidere Mostri d'Area",
    MODIFIER_DATA_decreasedMaxHitFlatToSlayerAreaMonsters: "-${value} Colpo Massimo per Uccidere Mostri d'Area",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitToSlayerAreaMonsters: "+${value}% Colpo Minimo per Uccidere Mostri d'Area",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToSlayerAreaMonsters: "-${value}% Colpo Minimo per Uccidere Mostri d'Area",
    MODIFIER_DATA_increasedFlatMinHitToSlayerAreaMonsters: "+${value} Colpo Minimo per Uccidere Mostri d'Area",
    MODIFIER_DATA_decreasedFlatMinHitToSlayerAreaMonsters: "-${value} Colpo Minimo per Uccidere Mostri d'Area",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstSlayerAreaMonsters: "+${value}% Valutazione della precisione contro i mostri dell'Area Slayer",
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstSlayerAreaMonsters: "-${value}% Valutazione della precisione contro i mostri dell'Area Slayer",
    MODIFIER_DATA_increasedDamageReductionAgainstSlayerAreaMonsters: "+${value}% Riduzione del danno contro i mostri dell'Area Slayer",
    MODIFIER_DATA_decreasedDamageReductionAgainstSlayerAreaMonsters: "-${value}% Riduzione del danno contro i mostri dell'Area Slayer",

    MODIFIER_DATA_increasedMaxHitPercentToDungeonMonsters: "+${value}% Colpo massimo ai mostri del Dungeon",
    MODIFIER_DATA_decreasedMaxHitPercentToDungeonMonsters: "-${value}% Colpo massimo ai mostri del Dungeon",
    MODIFIER_DATA_increasedMaxHitFlatToDungeonMonsters: "+${value} Colpo massimo ai mostri del Dungeon",
    MODIFIER_DATA_decreasedMaxHitFlatToDungeonMonsters: "-${value} Colpo massimo ai mostri del Dungeon",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitToDungeonMonsters: "+${value}% Colpo Minimo ai Mostri del Dungeon",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToDungeonMonsters: "-${value}% Colpo Minimo ai Mostri del Dungeon",
    MODIFIER_DATA_increasedFlatMinHitToDungeonMonsters: "+${value} Colpo minimo ai mostri del Dungeon",
    MODIFIER_DATA_decreasedFlatMinHitToDungeonMonsters: "-${value} Colpo minimo ai mostri del Dungeon",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstDungeonMonsters: '+${value}% Valutazione della precisione contro i mostri del Dungeon',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstDungeonMonsters: '-${value}% Valutazione della precisione contro i mostri del Dungeon',
    MODIFIER_DATA_increasedDamageReductionAgainstDungeonMonsters: '+${value}% Riduzione del danno contro i mostri delle prigioni.',
    MODIFIER_DATA_decreasedDamageReductionAgainstDungeonMonsters: '-${value}% Riduzione del danno contro i mostri delle prigioni.',

    // #### Slayer task
    MODIFIER_DATA_increasedMaxHitPercentToSlayerTasks: "+${value}% Colpo massimo ai compiti dell'Uccisore",
    MODIFIER_DATA_decreasedMaxHitPercentToSlayerTasks: "-${value}% Colpo massimo ai compiti dell'Uccisore",
    MODIFIER_DATA_increasedMaxHitFlatToSlayerTasks: "+${value} Colpo massimo ai compiti dell'Uccisore",
    MODIFIER_DATA_decreasedMaxHitFlatToSlayerTasks: "-${value} Colpo massimo ai compiti dell'Uccisore",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitToSlayerTasks: "+${value}% Colpo minimo ai compiti dell'uccisore",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToSlayerTasks: "-${value}% Colpo minimo ai compiti dell'uccisore",
    MODIFIER_DATA_increasedFlatMinHitToSlayerTasks: "+${value} Colpo minimo ai compiti dell'uccisore",
    MODIFIER_DATA_decreasedFlatMinHitToSlayerTasks: "-${value} Colpo minimo ai compiti dell'uccisore",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstSlayerTasks: "+${value}% Valutazione della precisione contro i compiti dell'Assassino",
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstSlayerTasks: "-${value}% Valutazione della precisione contro i compiti dell'Assassino",
    MODIFIER_DATA_decreasedDamageReductionAgainstSlayerTasks: "-${value}% Riduzione del danno contro i Compiti dell'Ammazzadraghi.",

    // #### Monster Type
    // ##### Generic; these will be used to dynamically build the ones further down below, as those also have to be dynamically built
    MONSTER_TYPE_SINGULAR_Animal: "Animale",
    MONSTER_TYPE_PLURAL_Animal: "Animali",
    MONSTER_TYPE_SINGULAR_Demon: "Demone",
    MONSTER_TYPE_PLURAL_Demon: "Demoni",
    MONSTER_TYPE_SINGULAR_Dragon: "Drago",
    MONSTER_TYPE_PLURAL_Dragon: "Draghi",
    MONSTER_TYPE_SINGULAR_Elemental: "Elementare",
    MONSTER_TYPE_PLURAL_Elemental: "Elementali",
    MONSTER_TYPE_SINGULAR_Human: "Umano",
    MONSTER_TYPE_PLURAL_Human: "Umani",
    MONSTER_TYPE_SINGULAR_MythicalCreature: "Creatura mitica",
    MONSTER_TYPE_PLURAL_MythicalCreature: "Creature mitiche",
    MONSTER_TYPE_SINGULAR_SeaCreature: "Creatura marina",
    MONSTER_TYPE_PLURAL_SeaCreature: "Creature marine",
    MONSTER_TYPE_SINGULAR_Undead: "Non morti",
    MONSTER_TYPE_PLURAL_Undead: "Non morti",

    COMBAT_MISC_Monster_Type_Trait_Modifier_Effect: "Tratto ${monsterType}",
    COMBAT_MISC_Monster_Type_Trait_Stacking_Effect: "Tratto ${monsterType}",

    MODIFIER_DATA_MonsterTypeTraitApplied: "Contrassegna l'oggetto colpito come ${monsterType}",
    MODIFIER_DATA_increasedDamageAgainstMonsterType: "+${value}% Danno a ${monsterType}",
    MODIFIER_DATA_decreasedDamageAgainstMonsterType: "-${value}% Danno a ${monsterType}",
    MODIFIER_DATA_increasedDamageTakenFromMonsterType: "+${value}% Danni subiti da ${monsterType}",
    MODIFIER_DATA_decreasedDamageTakenFromMonsterType: "-${value}% Danni subiti da ${monsterType}",
    MODIFIER_DATA_increasedMaxHitPercentAgainstMonsterType: "+${value}% Colpo massimo quando si combatte contro ${monsterType}",
    MODIFIER_DATA_decreasedMaxHitPercentAgainstMonsterType: "-${value}% Colpo massimo quando si combatte contro ${monsterType}",
    MODIFIER_DATA_increasedMaxHitFlatAgainstMonsterType: "+${value} Colpo massimo quando si combatte contro ${monsterType}",
    MODIFIER_DATA_decreasedMaxHitFlatAgainstMonsterType: "-${value} Colpo massimo quando si combatte contro ${monsterType}",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitAgainstMonsterType: "+${value}% Colpo minimo quando si combatte contro ${monsterType}",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitAgainstMonsterType: "-${value}% Colpo minimo quando si combatte contro ${monsterType}",
    MODIFIER_DATA_increasedFlatMinHitAgainstMonsterType: "+${value} Colpo minimo quando si combatte contro ${monsterType}",
    MODIFIER_DATA_decreasedFlatMinHitAgainstMonsterType: "-${value} Colpo minimo quando si combatte contro ${monsterType}",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstMonsterType: '+${value}% Valutazione della precisione quando si combatte contro ${monsterType}',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstMonsterType: '-${value}% Valutazione della precisione quando si combatte contro ${monsterType}',
    MODIFIER_DATA_increasedDamageReductionAgainstMonsterType: '+${value}% Riduzione del danno quando si combatte contro ${tipo di mostro}',
    MODIFIER_DATA_decreasedDamageReductionAgainstMonsterType: '-${value}% Riduzione del danno quando si combatte contro ${tipo di mostro}',

    MODIFIER_DATA_increasedChanceToApplyMonsterTypeTraitInfiniteOnSpawn: "+${value}% di possibilità di applicare il tratto ${monsterType} per l'intero combattimento al momento dello spawn o della rianimazione",
    MODIFIER_DATA_decreasedChanceToApplyMonsterTypeTraitInfiniteOnSpawn: "-${value}% di possibilità di applicare il tratto ${monsterType} per l'intero combattimento al momento dello spawn o della rianimazione",
    MODIFIER_DATA_applyMonserTypeTraitTurnsOnSpawn: "Applica il tratto ${monsterType} al nemico per ${value} dei turni del nemico al momento dello spawn o della rianimazione",

    MODIFIER_DATA_increasedChanceToApplyMonsterTypeTrait: "+${value}% di possibilità di applicare il tratto ${monsterType} per uno dei turni dei nemici.",
    MODIFIER_DATA_decreasedChanceToApplyMonsterTypeTrait: "-${value}% di possibilità di applicare il tratto ${monsterType} per uno dei turni dei nemici.",
    MODIFIER_DATA_applyMonsterTypeTraitTurns: "Applica il tratto ${monsterType} al nemico per ${value} dei turni del nemico.",

    // #### Bosses
    MODIFIER_DATA_increasedMaxHitPercentAgainstBosses: "+${value}% Colpo massimo quando si affrontano i boss",
    MODIFIER_DATA_decreasedMaxHitPercentAgainstBosses: "-${value}% Colpo massimo quando si affrontano i boss",
    MODIFIER_DATA_increasedMaxHitFlatAgainstBosses: "+${value} Colpo massimo quando si affrontano i boss",
    MODIFIER_DATA_decreasedMaxHitFlatAgainstBosses: "-${value} Colpo massimo quando si affrontano i boss",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitAgainstBosses: "+${value}% Colpo minimo quando si affrontano i boss",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitAgainstBosses: "-${value}% Colpo minimo quando si affrontano i boss",
    MODIFIER_DATA_increasedFlatMinHitAgainstBosses: "+${value} Colpo minimo quando si affrontano i boss",
    MODIFIER_DATA_decreasedFlatMinHitAgainstBosses: "-${value} Colpo minimo quando si affrontano i boss",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstBosses: '+${value}% Valutazione della precisione nei combattimenti con i boss',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstBosses: '-${value}% Valutazione della precisione nei combattimenti con i boss',

    // #### Skilling
    MODIFIER_DATA_increasedThievingDamagePreventionThreshold: '+${value} soglia di prevenzione dei danni da ladro (qualsiasi danno splatter al di sotto della soglia viene ridotto a 0)',
    MODIFIER_DATA_decreasedThievingDamagePreventionThreshold: '-${value} soglia di prevenzione dei danni da ladro (qualsiasi danno splatter al di sotto della soglia viene ridotto a 0)',
    MODIFIER_DATA_increasedGlobalSkillXPPerLevel: "+${value}% XP globali dell'abilità per ogni livello dell'abilità in corso di allenamento.",
    MODIFIER_DATA_decreasedGlobalSkillXPPerLevel: "-${value}% XP globali dell'abilità per ogni livello dell'abilità in corso di allenamento.",
    MODIFIER_DATA_increasedSkillXPPerSkillLevel: "+${value}% ${skillName} XP di abilità per livello in ${skillName}",
    MODIFIER_DATA_decreasedSkillXPPerSkillLevel: "-${value}% ${skillName} XP di abilità per livello in ${skillName}",
    MODIFIER_DATA_increasedFlatGlobalSkillXP: "+${value} XP globale dell'abilità (aggiunto dopo i modificatori %)",
    MODIFIER_DATA_decreasedFlatGlobalSkillXP: "-${value} XP globale dell'abilità (aggiunto dopo i modificatori %)",
    MODIFIER_DATA_increasedFlatSkillXP: "+${value} ${skillName} XP dell'abilità (aggiunto dopo i modificatori %)",
    MODIFIER_DATA_decreasedFlatSkillXP: "-${value} ${skillName} XP dell'abilità (aggiunto dopo i modificatori %)",
    MODIFIER_DATA_increasedFlatGlobalSkillXPPerSkillLevel: "+${value} Global Skill XP per livello nell'abilità che si sta allenando (aggiunto dopo i modificatori %)",
    MODIFIER_DATA_decreasedFlatGlobalSkillXPPerSkillLevel: "-${value} Global Skill XP per livello nell'abilità che si sta allenando (aggiunto dopo i modificatori %)",
    MODIFIER_DATA_increasedFlatSkillXPPerSkillLevel: "+${value} ${skillName} XP di abilità per livello in ${skillName} (aggiunto dopo i modificatori %)",
    MODIFIER_DATA_decreasedFlatSkillXPPerSkillLevel: "-${value} ${skillName} XP di abilità per livello in ${skillName} (aggiunto dopo i modificatori %)"
};
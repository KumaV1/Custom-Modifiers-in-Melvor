export const ko = {
    Combat_Modifier_UI_Impact_Indicator_Headline: 'Cmim-Mod 경고',
    Combat_Modifier_UI_Impact_Indicator_Text: "현재 최소 한 명의 전투원이 받는 피해를 0으로 줄일 수 있는 기회를 제공하는 수식어의 혜택을 받고 있습니다. 해당 수식어를 구현하는 방법/위치로 인해, 현실적으로 불가능할 정도로 강한 적의 피해 표시(예: 최대 타격)가 0으로 잘못 표시될 가능성이 있습니다.",
    Combat_Modifier_UI_Impact_Indicator_Hint: '이 경고는 모드 설정에서 끌 수 있습니다.',
    Combat_Area_Boss_Indicator: '보스',

    // ### Settings
    // #### Combat Areas Indicators section
    Settings_Section_Combat_Areas_Indicator: '전투 지역 표시기',

    // ##### Enable modifier ui impact indicator
    Settings_Setting_Label_Enable_Modifier_UI_Impact_Indicator: '특정 수정자가 사용자 인터페이스에 오류를 일으킬 수 있는 경우 표시기를 활성화합니다.',
    Settings_Setting_Hint_Enable_Modifier_UI_Impact_Indicator: '현재 하나의 수정자에만 영향을 줍니다. 표시된 표시기는 자세한 정보를 제공합니다.',

    // ##### Enable boss indicators
    Settings_Setting_Label_Enable_Boss_Indicators: '보스 표시기 사용',
    Settings_Setting_Hint_Enable_Boss_Indicators: "일반적으로 던전의 최종 몬스터만 보스로 분류됩니다. 하지만 이 규칙에 예외가 있을 수 있는데, 전투 또는 처치 구역에 있는 몬스터도 보스로 분류될 수 있으며, 이 설정은 이를 강조합니다.",

    // ##### Enable active monster type indicators
    Settings_Setting_Label_Enable_Active_Monster_Type_Indicators: '활성 몬스터 유형 표시기 활성화',
    Settings_Setting_Hint_Enable_Active_Monster_Type_Indicators: '몬스터/던전 선택 메뉴에 기본 몬스터 유형 할당을 나타내는 녹색 배지를 추가합니다.',

    // ##### Enable inactive monster type indicators
    Settings_Setting_Label_Enable_Inactive_Monster_Type_Indicators: '비활성 몬스터 유형 표시기 활성화',
    Settings_Setting_Hint_Enable_Inactive_Monster_Type_Indicators: '몬스터/던전 선택 메뉴에 주황색 배지를 추가하여 기본 몬스터 유형 할당을 표시합니다.',

    // #### Disabling section
    Settings_Section_Disabling: '비활성화',

    // ##### Info label
    Settings_Setting_Label_Disabling_Info: "이 섹션에서는 이 모드 기능의 특정 부분을 비활성화할 수 있습니다. 콘텐츠를 의도적으로 더 쉽게/더 어렵게 만드는 것 외에도, 이 모드를 사용하려는 또 다른 주된 이유는 이 모드로 인해 상당한 양의 계산 시간이 추가되어 오프라인 이득의 로딩 시간이 눈에 띄게 증가할 수 있기 때문입니다(특히 몬스터 유형 시스템을 사용하는 경우). 따라서 일부 코드를 전혀 실행하지 않도록 설정하면 성능이 눈에 띄게 향상될 수 있습니다.",

    // ##### On-spawn modifiers
    Settings_Setting_Label_Disable_All_On_Spawn_Modifiers: '스폰 시 수정자 비활성화',
    Settings_Setting_Hint_Disable_All_On_Spawn_Modifiers: '이 모드로 추가된 모든 온스폰 모디파이어를 비활성화합니다.',

    // ##### Keep specific monster types inactive
    Settings_Setting_Label_Keep_Specific_Monster_Types_Inactive: '특정 몬스터 유형을 비활성 상태로 유지',
    Settings_Setting_Hint_Keep_Specific_Monster_Types_Inactive: '모드의 통신 내용과 상관없이 선택한 몬스터 유형을 강제로 비활성 상태로 유지합니다. 다른 모드가 추가한 몬스터 유형은 해당 모드 없이 세이브를 불러올 경우 체크박스 상태가 사라집니다.',

    // #### Enabling section
    Settings_Section_Enabling: '활성화',

    // ##### Info label
    Settings_Setting_Label_Enabling_Info: '이 섹션은 사용자와는 관련이 없을 가능성이 높습니다. 그러나 사용하는 모드에 따라 특정 기능을 사용하고 있음에도 불구하고 그 필요성을 알려준 모드가 없어 직접 활성화해야 하는 상황이 발생할 수 있습니다. 이 경우 이 섹션을 통해 직접 활성화할 수 있습니다.',

    // ##### Force specific monster types active
    Settings_Setting_Label_Force_Specific_Monster_Types_Active: '특정 몬스터 유형 강제 활성화',
    Settings_Setting_Hint_Force_Specific_Monster_Types_Active: '모드의 통신 내용과 상관없이 선택한 몬스터 유형을 강제로 활성화합니다(비활성화 설정 이후 평가). 다른 모드가 추가한 몬스터 유형은 해당 모드 없이 세이브를 불러올 경우 체크박스 상태가 사라집니다.',

    // #### Save & Reload section
    Settings_Section_Save_And_Reload: '모두 저장 및 다시 로드',

    // ##### Save & Reload button
    Settings_Hint_Save_Reload_Required: '재장전 필요',
    Settings_Setting_Display_Save_Reload: '모두 저장 및 다시 로드',

    // ### Monster type overview
    PAGE_NAME_Monster_Types_Overview: "몬스터 유형",

    Monster_Type_Overview_Remarks_Prefix: "다음 사항에 유의하세요:",
    Monster_Type_Overview_Remarks_Not_Inherit_Monster_Types: "멜버에는 원래 유형 정의가 포함되어 있지 않습니다. 대신, \"Custom Modifiers in Melvor\" 모드를 통해 모드에서 몬스터 유형을 정의하고 할당할 수 있는 기반을 마련했습니다.",
    Monster_Type_Overview_Remarks_Displayed_Type_Allocation: "이 표시에는 정의된 모든 유형 할당이 표시됩니다. 몬스터가 섹션에 표시되지 않는다면 해당 몬스터는 유형이 정의되지 않은 것입니다. 즉, 유형 정의가 부정확할 수 있습니다. 조정이 필요하다고 생각되는 부분이 있으면 언제든지 피드백을 주세요.",
    Monster_Type_Overview_Remarks_Custom_Mods_Monster_Type_Allocation: "다른 모드를 통해 추가된 몬스터의 경우, 해당 모드가 해당 몬스터에 대한 유형 정의를 직접 설정해야 합니다.",

    Monster_Type_Overview_Player_Traits_Tab_Header: "플레이어 특성",
    Monster_Type_Overview_Player_Traits_Information_Type_Allocation: "유기적인 유형 할당 외에도, 일반적으로 장착 아이템이나 상점 구매를 통해 해당 수식어를 사용하여 유형을 강제로 적용할 수도 있습니다.",
    Monster_Type_Overview_Player_Traits_Information_Display: '이 개요에는 현재 캐릭터에 영향을 미치는 모든 유형(및 수식어 값)이 표시되며, 자세한 정보는 "Show Skill Modifiers" 모드를 사용하여 확인할 수 있습니다.',
    Monster_Type_Overview_Player_Traits_Information_Data_Loaded: "이 표시는 캐릭터가 로드된 시점을 기준으로 정적으로 표시됩니다.",
    Monster_Type_Overview_Player_Traits_No_Entries: "캐릭터는 유형 할당 수정자의 영향을 받지 않습니다.",

    Monster_Type_Overview_Active_Types_Tab_Header: "활성 유형",
    Monster_Type_Overview_Active_Types_Information: "활성 유형은 로드된 모드 중 하나 이상에서 실제로 사용 중인 모드를 말합니다.",
    Monster_Type_Overview_Active_Types_No_Entries: "현재 활성화된 유형이 없습니다.",

    Monster_Type_Overview_Inactive_Types_Tab_Header: "비활성 유형",
    Monster_Type_Overview_Inactive_Types_Information: "비활성 유형은 정의는 되어 있지만 실제로 어떤 모드에서도 사용되지 않는 유형입니다. 따라서 전투 중에도 실제로 확인되지 않으므로 계산 시간에 영향을 미치지 않습니다.",
    Monster_Type_Overview_Inactive_Types_No_Entries: "현재 비활성화된 유형이 없습니다.",
    Monster_Type_Overview_Inactive_Types_Affected_By_Mod_Settings: "모드 설정에서 선택한 항목으로 인해 활성화할 수 없습니다.",

    // ### Modifiers
    // #### Directly affecting damage dealt
    MODIFIER_DATA_increasedChanceToReduceAttackDamageToZero: '확률 +${value}%(최대: 90%)로 공격으로 받는 피해를 0으로 감소시킵니다(여전히 명중된 것으로 간주되며 시간 경과에 따른 피해와 같은 적중 효과 계산에는 영향을 미치지 않습니다).',
    MODIFIER_DATA_decreasedChanceToReduceAttackDamageToZero: '확률 -${value}%(최대: 90%)로 공격으로 받는 피해를 0으로 감소시킵니다(여전히 명중된 것으로 간주되며 시간 경과에 따른 피해와 같은 적중 효과 계산에는 영향을 미치지 않습니다).',
    MODIFIER_DATA_increasedDamageFlatWhileTargetHasMaxHP: '대상의 체력이 최대치인 동안 +${value} 피해',
    MODIFIER_DATA_decreasedDamageFlatWhileTargetHasMaxHP: '대상의 체력이 최대치인 동안 -${value} 피해',
    MODIFIER_DATA_increasedDamagePercentWhileTargetHasMaxHP: '대상의 체력이 최대치인 동안 +${value}% 피해',
    MODIFIER_DATA_decreasedDamagePercentWhileTargetHasMaxHP: '대상의 체력이 최대치인 동안 -${value}% 피해',
    MODIFIER_DATA_increasedDamageFlatIgnoringDamageReduction: "적의 피해 감소에 영향을 받지 않는 +${value}의 피해를 입힙니다.",
    MODIFIER_DATA_decreasedDamageFlatIgnoringDamageReduction: "적의 피해 감소에 영향을 받지 않는 -${value}의 피해를 입힙니다.",
    MODIFIER_DATA_increasedGlobalDamagePreventionThreshold: '+값} 전역 피해 방지 임계값(임계값 미만의 피해 스플랫은 0으로 감소)',
    MODIFIER_DATA_decreasedGlobalDamagePreventionThreshold: '-값} 전역 피해 방지 임계값(임계값 미만의 피해 스플랫은 0으로 감소)',
    MODIFIER_DATA_increasedDamagePreventionThreshold: '+값} 피해 방지 임계값(임계값 미만의 피해는 0으로 감소)',
    MODIFIER_DATA_decreasedDamagePreventionThreshold: '-값} 피해 방지 임계값(임계값 미만의 피해는 0으로 감소)',
    MODIFIER_DATA_increasedBarrierDamagePreventionThreshold: '방벽 피해 방지 임계값 +${value} (임계값 미만의 방벽에 대한 모든 피해는 0으로 감소합니다).',
    MODIFIER_DATA_decreasedBarrierDamagePreventionThreshold: '방벽 피해 방지 임계값 -${value} (임계값 미만의 방벽에 대한 모든 피해는 0으로 감소합니다).',

    // #### Spawn
    MODIFIER_DATA_increasedChanceToApplySlowOnSpawn: "대상 생성 또는 부활 시 +${value}% 확률로 대상에게 3턴 동안 25% 증가된 공격 간격을 적용합니다.",
    MODIFIER_DATA_decreasedChanceToApplySlowOnSpawn: "대상 생성 또는 부활 시 -${value}% 확률로 대상에게 3턴 동안 25% 증가된 공격 간격을 적용합니다.",
    MODIFIER_DATA_increasedChanceToApplyStunOnSpawn: "대상 생성 또는 부활 시 +${value}% 확률로 대상에게 1턴 동안 기절 효과를 부여합니다.",
    MODIFIER_DATA_decreasedChanceToApplyStunOnSpawn: "대상 생성 또는 부활 시 -${value}% 확률로 대상에게 1턴 동안 기절 효과를 부여합니다.",
    MODIFIER_DATA_applyStunOnSpawn: "생성 또는 부활 시 대상에게 ${value} 턴의 기절 효과를 부여합니다.",
    MODIFIER_DATA_applyStunOnSpawn_Plural: "생성 또는 부활 시 대상에게 ${value} 턴의 기절 효과를 부여합니다.",
    MODIFIER_DATA_increasedChanceToApplyPoisonOnSpawn: "대상 생성 또는 부활 시 +${value}% 확률로 대상에게 독을 부여합니다.",
    MODIFIER_DATA_decreasedChanceToApplyPoisonOnSpawn: "대상 생성 또는 부활 시 -${value}% 확률로 대상에게 독을 부여합니다.",
    MODIFIER_DATA_increasedChanceToApplyDeadlyPoisonOnSpawn: "대상 생성 또는 부활 시 +${value}% 확률로 대상에게 치명적인 독을 부여합니다.",
    MODIFIER_DATA_decreasedChanceToApplyDeadlyPoisonOnSpawn: "대상 생성 또는 부활 시 -${value}% 확률로 대상에게 치명적인 독을 부여합니다.",
    MODIFIER_DATA_increasedChanceToApplyAfflictionOnSpawn: "대상 생성 또는 부활 시 +${value}% 확률로 대상에게 고통 중첩을 한 번 적용합니다.",
    MODIFIER_DATA_decreasedChanceToApplyAfflictionOnSpawn: "대상 생성 또는 부활 시 -${value}% 확률로 대상에게 고통 중첩을 한 번 적용합니다.",
    MODIFIER_DATA_applyAfflictionOnSpawn: "생성 또는 부활 시 대상에게 ${value}의 고통 중첩을 적용합니다.",
    MODIFIER_DATA_applyAfflictionOnSpawn_Plural: "생성 또는 부활 시 대상에게 ${value}의 고통 중첩을 적용합니다.",
    MODIFIER_DATA_increasedChanceToApplyBleedOnSpawn: "확률 +${value}%만큼 대상에게 10초에 걸쳐 최대 공격력의 100%만큼 피해를 주는 출혈을 생성 또는 부활할 때 적용합니다.",
    MODIFIER_DATA_decreasedChanceToApplyBleedOnSpawn: "확률 -${value}%만큼 대상에게 10초에 걸쳐 최대 공격력의 100%만큼 피해를 주는 출혈을 생성 또는 부활할 때 적용합니다.",
    MODIFIER_DATA_increasedChanceToApplyBurnOnSpawn: "대상 생성 또는 부활 시 +${value}% 확률로 대상에게 2.5초에 걸쳐 대상의 현재 HP의 15%를 소모하는 화상을 입힙니다.",
    MODIFIER_DATA_decreasedChanceToApplyBurnOnSpawn: "대상 생성 또는 부활 시 -${value}% 확률로 대상에게 2.5초에 걸쳐 대상의 현재 HP의 15%를 소모하는 화상을 입힙니다.",
    MODIFIER_DATA_increasedChanceToApplyFreezeOnSpawn: "부활 또는 스폰 시 대상에게 한 턴 동안 동결을 적용할 확률이 +${value}%입니다.",
    MODIFIER_DATA_decreasedChanceToApplyFreezeOnSpawn: "부활 또는 스폰 시 대상에게 한 턴 동안 동결을 적용할 확률이 -${value}%입니다.",
    MODIFIER_DATA_applyFreezeOnSpawn: "생성 또는 부활 시 대상에게 ${value} 턴의 동결 효과를 적용합니다.",
    MODIFIER_DATA_applyFreezeOnSpawn_Plural: "생성 또는 부활 시 대상에게 ${value} 턴의 동결 효과를 적용합니다.",
    MODIFIER_DATA_increasedChanceToApplyFrostburnOnSpawn: "대상 생성 또는 부활 시 +${value}% 확률로 대상에게 3턴 동안 동상을 입힙니다.",
    MODIFIER_DATA_decreasedChanceToApplyFrostburnOnSpawn: "대상 생성 또는 부활 시 -${value}% 확률로 대상에게 3턴 동안 동상을 입힙니다.",
    MODIFIER_DATA_increasedChanceToApplyShockOnSpawn: "대상 생성 또는 부활 시 +${value}% 확률로 대상에게 충격 중첩을 한 번 부여합니다.",
    MODIFIER_DATA_decreasedChanceToApplyShockOnSpawn: "대상 생성 또는 부활 시 -${value}% 확률로 대상에게 충격 중첩을 한 번 부여합니다.",
    MODIFIER_DATA_applyShockOnSpawn: "생성 또는 부활 시 대상에게 ${value}의 충격 중첩을 적용합니다.",
    MODIFIER_DATA_applyShockOnSpawn_Plural: "생성 또는 부활 시 대상에게 ${value}의 충격 중첩을 적용합니다.",
    MODIFIER_DATA_increasedChanceToApplySleepOnSpawn: "대상 생성 또는 부활 시 한 턴 동안 대상에게 +${value}% 확률로 수면을 적용합니다.",
    MODIFIER_DATA_decreasedChanceToApplySleepOnSpawn: "대상 생성 또는 부활 시 한 턴 동안 대상에게 -${value}% 확률로 수면을 적용합니다.",
    MODIFIER_DATA_applySleepOnSpawn: "생성 또는 부활 시 대상에게 ${value}의 수면 턴을 적용합니다.",
    MODIFIER_DATA_applySleepOnSpawn_Plural: "생성 또는 부활 시 대상에게 ${value} 턴의 수면을 적용합니다.",

    // #### On hit
    MODIFIER_DATA_increasedChanceToApplyBleed: "공격 시 +${value}% 확률로 최대 타격의 100%를 10초에 걸쳐 피해로 주는 출혈 피해를 입힙니다.",
    MODIFIER_DATA_decreasedChanceToApplyBleed: "공격 시 -${value}% 확률로 최대 타격의 100%를 10초에 걸쳐 피해로 주는 출혈 피해를 입힙니다.",

    // #### Death mark (not to be confused with mark of death)
    Death_Mark_Notification_Text: "데스 마크에 의해 처형되었습니다.",
    COMBAT_MISC_Death_Mark_Effect: "데스 마크",
    MODIFIER_DATA_deathMark: "남은 최대 체력의 비율이 중첩량(최대 20%/5,000)보다 낮으면 즉시 처형됩니다.",
    MODIFIER_DATA_increasedDeathMarkOnHit: "공격으로 적중 시 +${value} 죽음의 표식 중첩 적용",
    MODIFIER_DATA_increasedChanceToApplyStackOfDeathMark: "+${value}% 확률로 적에게 데스 마크 중첩 1중첩을 적용합니다.",
    MODIFIER_DATA_decreasedChanceToApplyStackOfDeathMark: "-${value}% 확률로 적에게 데스 마크 중첩 1중첩을 적용합니다.",
    MODIFIER_DATA_increasedDeathMarkImmunity: "데스 마크 스택 적용에 저항할 확률 +${value}%",
    MODIFIER_DATA_decreasedDeathMarkImmunity: "데스 마크 스택 적용에 저항할 확률 -${value}%",
    MODIFIER_DATA_applyDeathMarkOnSpawn: "생성 또는 부활 시 대상에게 ${value}의 데스 마크 중첩을 적용합니다.",
    MODIFIER_DATA_applyDeathMarkOnSpawn_Plural: "생성 또는 부활 시 대상에게 ${value}의 데스 마크 중첩을 적용합니다.",

    // #### Spell type
    MODIFIER_DATA_increasedDamageTakenFromAirSpells: "공중 주문으로 받는 피해 +${value}%",
    MODIFIER_DATA_decreasedDamageTakenFromAirSpells: "공중 주문으로 받는 피해 -${value}%",
    MODIFIER_DATA_increasedDamageTakenFromWaterSpells: "물 마법으로 받는 피해 +${value}%",
    MODIFIER_DATA_decreasedDamageTakenFromWaterSpells: "물 마법으로 받는 피해 -${value}%",
    MODIFIER_DATA_increasedDamageTakenFromEarthSpells: "대지 주문으로 받는 피해 +${value}%",
    MODIFIER_DATA_decreasedDamageTakenFromEarthSpells: "대지 주문으로 받는 피해 -${value}%",
    MODIFIER_DATA_increasedDamageTakenFromFireSpells: "화염 주문으로 받는 피해 +${value}%",
    MODIFIER_DATA_decreasedDamageTakenFromFireSpells: "화염 주문으로 받는 피해 -${value}%",

    // #### Area type
    MODIFIER_DATA_increasedMaxHitPercentToCombatAreaMonsters: "전투 지역 몬스터 최대 명중률 +${value}%",
    MODIFIER_DATA_decreasedMaxHitPercentToCombatAreaMonsters: "전투 지역 몬스터 최대 명중률 -${value}%",
    MODIFIER_DATA_increasedMaxHitFlatToCombatAreaMonsters: "전투 지역 몬스터 최대 명중률 +${value}",
    MODIFIER_DATA_decreasedMaxHitFlatToCombatAreaMonsters: "전투 지역 몬스터 최대 명중률 -${value}",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitToCombatAreaMonsters: "전투 지역 몬스터에 대한 최소 명중 +${value}%",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToCombatAreaMonsters: "전투 지역 몬스터에 대한 최소 명중 -${value}%",
    MODIFIER_DATA_increasedFlatMinHitToCombatAreaMonsters: "전투 지역 몬스터에 대한 최소 명중 +${value}",
    MODIFIER_DATA_decreasedFlatMinHitToCombatAreaMonsters: "전투 지역 몬스터에 대한 최소 명중 -${value}",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstCombatAreaMonsters: '전투 지역 몬스터에 대한 명중률 +${value}%',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstCombatAreaMonsters: '전투 지역 몬스터에 대한 명중률 -${value}%',
    MODIFIER_DATA_increasedDamageReductionAgainstCombatAreaMonsters: '전투 지역 몬스터 대상 피해 감소 +${value}%',
    MODIFIER_DATA_decreasedDamageReductionAgainstCombatAreaMonsters: '전투 지역 몬스터 대상 피해 감소 -${value}%',

    MODIFIER_DATA_increasedMaxHitPercentToSlayerAreaMonsters: "지역 몬스터 처치 시 최대 공격력 +${value}%",
    MODIFIER_DATA_decreasedMaxHitPercentToSlayerAreaMonsters: "지역 몬스터 처치 시 최대 공격력 -${value}%",
    MODIFIER_DATA_increasedMaxHitFlatToSlayerAreaMonsters: "지역 몬스터 처치 시 최대 공격력 +${value}",
    MODIFIER_DATA_decreasedMaxHitFlatToSlayerAreaMonsters: "지역 몬스터 처치 시 최대 공격력 -${value}",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitToSlayerAreaMonsters: "지역 몬스터 처치 시 최소 명중 +${value}%",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToSlayerAreaMonsters: "지역 몬스터 처치 시 최소 명중 -${value}%",
    MODIFIER_DATA_increasedFlatMinHitToSlayerAreaMonsters: "지역 몬스터 처치 시 최소 명중 +${value}",
    MODIFIER_DATA_decreasedFlatMinHitToSlayerAreaMonsters: "지역 몬스터 처치 시 최소 명중 -${value}",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstSlayerAreaMonsters: '슬레이어 지역 몬스터에 대한 명중률 +${value}%',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstSlayerAreaMonsters: '슬레이어 지역 몬스터에 대한 명중률 -${value}%',
    MODIFIER_DATA_increasedDamageReductionAgainstSlayerAreaMonsters: '처치 지역 몬스터에 대한 피해 감소 +${value}%',
    MODIFIER_DATA_decreasedDamageReductionAgainstSlayerAreaMonsters: '처치 지역 몬스터에 대한 피해 감소 -${value}%',

    MODIFIER_DATA_increasedMaxHitPercentToDungeonMonsters: "던전 몬스터 최대 적중률 +${value}%",
    MODIFIER_DATA_decreasedMaxHitPercentToDungeonMonsters: "던전 몬스터 최대 적중률 -${value}%",
    MODIFIER_DATA_increasedMaxHitFlatToDungeonMonsters: "던전 몬스터 최대 적중률 +${value}",
    MODIFIER_DATA_decreasedMaxHitFlatToDungeonMonsters: "던전 몬스터 최대 적중률 -${value}",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitToDungeonMonsters: "던전 몬스터에 대한 최소 명중 +${value}%",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToDungeonMonsters: "던전 몬스터에 대한 최소 명중 -${value}%",
    MODIFIER_DATA_increasedFlatMinHitToDungeonMonsters: "던전 몬스터에 대한 최소 명중 +${value}",
    MODIFIER_DATA_decreasedFlatMinHitToDungeonMonsters: "던전 몬스터에 대한 최소 명중 -${value}",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstDungeonMonsters: '던전 몬스터에 대한 명중률 +${value}%',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstDungeonMonsters: '던전 몬스터에 대한 명중률 -${value}%',
    MODIFIER_DATA_increasedDamageReductionAgainstDungeonMonsters: '던전 몬스터 공격력 +${value}% 감소',
    MODIFIER_DATA_decreasedDamageReductionAgainstDungeonMonsters: '던전 몬스터 공격력 -${value}% 감소',

    // #### Slayer task
    MODIFIER_DATA_increasedMaxHitPercentToSlayerTasks: "슬레이어 작업 최대 적중률 +${value}%",
    MODIFIER_DATA_decreasedMaxHitPercentToSlayerTasks: "슬레이어 작업 최대 적중률 -${value}%",
    MODIFIER_DATA_increasedMaxHitFlatToSlayerTasks: "슬레이어 작업 최대 적중률 +${value}",
    MODIFIER_DATA_decreasedMaxHitFlatToSlayerTasks: "슬레이어 작업 최대 적중률 -${value}",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitToSlayerTasks: "슬레이어 작업에 대한 최소 적중률 +${value}%",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToSlayerTasks: "슬레이어 작업에 대한 최소 적중률 -${value}%",
    MODIFIER_DATA_increasedFlatMinHitToSlayerTasks: "슬레이어 작업에 대한 최소 적중률 +${value}",
    MODIFIER_DATA_decreasedFlatMinHitToSlayerTasks: "슬레이어 작업에 대한 최소 적중률 -${value}",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstSlayerTasks: '슬레이어 작업에 대한 정확도 등급 +${value}%',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstSlayerTasks: '슬레이어 작업에 대한 정확도 등급 -${value}%',
    MODIFIER_DATA_decreasedDamageReductionAgainstSlayerTasks: '슬레이어 임무에 대한 피해 감소 -${value}%',

    // #### Monster Type
    // ##### Generic; these will be used to dynamically build the ones further down below, as those also have to be dynamically built
    MONSTER_TYPE_SINGULAR_Animal: "동물",
    MONSTER_TYPE_PLURAL_Animal: "동물",
    MONSTER_TYPE_SINGULAR_Demon: "악마",
    MONSTER_TYPE_PLURAL_Demon: "악마",
    MONSTER_TYPE_SINGULAR_Dragon: "드래곤",
    MONSTER_TYPE_PLURAL_Dragon: "드래곤",
    MONSTER_TYPE_SINGULAR_Elemental: "원소",
    MONSTER_TYPE_PLURAL_Elemental: "원소",
    MONSTER_TYPE_SINGULAR_Human: "인간",
    MONSTER_TYPE_PLURAL_Human: "인간",
    MONSTER_TYPE_SINGULAR_MythicalCreature: "신화 생물",
    MONSTER_TYPE_PLURAL_MythicalCreature: "신화 생물",
    MONSTER_TYPE_SINGULAR_SeaCreature: "바다 생물",
    MONSTER_TYPE_PLURAL_SeaCreature: "바다 생물",
    MONSTER_TYPE_SINGULAR_Undead: "언데드",
    MONSTER_TYPE_PLURAL_Undead: "언데드",

    COMBAT_MISC_Monster_Type_Trait_Modifier_Effect: "${monsterType} 특성",
    COMBAT_MISC_Monster_Type_Trait_Stacking_Effect: "${monsterType} 특성",

    MODIFIER_DATA_MonsterTypeTraitApplied: "영향을 받은 대상을 ${monsterType}으로 표시합니다.",
    MODIFIER_DATA_increasedDamageAgainstMonsterType: "+${value}% 대미지 대상 ${monsterType}",
    MODIFIER_DATA_decreasedDamageAgainstMonsterType: "-${value}% 대미지 대상 ${monsterType}",
    MODIFIER_DATA_increasedDamageTakenFromMonsterType: "${monsterType} 으로 받는 피해 +${value}%",
    MODIFIER_DATA_decreasedDamageTakenFromMonsterType: "${monsterType} 으로 받는 피해 -${value}%",
    MODIFIER_DATA_increasedMaxHitPercentAgainstMonsterType: "${monsterType}과 싸울 때 +${value}% 최대 적중률",
    MODIFIER_DATA_decreasedMaxHitPercentAgainstMonsterType: "${monsterType}과 싸울 때 -${value}% 최대 적중률",
    MODIFIER_DATA_increasedMaxHitFlatAgainstMonsterType: "${monsterType}과 싸울 때 +${value} 최대 적중률",
    MODIFIER_DATA_decreasedMaxHitFlatAgainstMonsterType: "${monsterType}과 싸울 때 -${value} 최대 적중률",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitAgainstMonsterType: "${monsterType}과 싸울 때 +${value}% 최소 명중률",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitAgainstMonsterType: "${monsterType}과 싸울 때 -${value}% 최소 명중률",
    MODIFIER_DATA_increasedFlatMinHitAgainstMonsterType: "${monsterType}과 싸울 때 +${value} 최소 명중률",
    MODIFIER_DATA_decreasedFlatMinHitAgainstMonsterType: "${monsterType}과 싸울 때 -${value} 최소 명중률",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstMonsterType: '${monsterType}과 싸울 때의 명중률 +${value}%',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstMonsterType: '${monsterType}과 싸울 때의 명중률 -${value}%',
    MODIFIER_DATA_increasedDamageReductionAgainstMonsterType: '${monsterType}과 싸울 때 +${value}% 피해량 감소',
    MODIFIER_DATA_decreasedDamageReductionAgainstMonsterType: '${monsterType}과 싸울 때 -${value}% 피해량 감소',

    MODIFIER_DATA_increasedChanceToApplyMonsterTypeTraitInfiniteOnSpawn: '생성 또는 부활 시 전체 전투에 ${monsterType} 특성을 적용할 확률 +${value}%.',
    MODIFIER_DATA_decreasedChanceToApplyMonsterTypeTraitInfiniteOnSpawn: '생성 또는 부활 시 전체 전투에 ${monsterType} 특성을 적용할 확률 -${value}%.',
    MODIFIER_DATA_applyMonserTypeTraitTurnsOnSpawn: "몬스터가 생성 또는 부활하는 턴의 ${value}만큼 적에게 ${monsterType} 특성을 적용합니다.",

    MODIFIER_DATA_increasedChanceToApplyMonsterTypeTrait: "적의 턴 중 하나에 ${monsterType} 특성을 적용할 확률 +${value}%.",
    MODIFIER_DATA_decreasedChanceToApplyMonsterTypeTrait: "적의 턴 중 하나에 ${monsterType} 특성을 적용할 확률 -${value}%.",
    MODIFIER_DATA_applyMonsterTypeTraitTurns: "적 턴의 ${value}만큼 적에게 ${monsterType} 특성을 적용합니다.",

    // #### Bosses
    MODIFIER_DATA_increasedMaxHitPercentAgainstBosses: "보스와의 전투 시 최대 공격력 +${value}%",
    MODIFIER_DATA_decreasedMaxHitPercentAgainstBosses: "보스와의 전투 시 최대 공격력 -${value}%",
    MODIFIER_DATA_increasedMaxHitFlatAgainstBosses: "보스와의 전투 시 최대 공격력 +${value}",
    MODIFIER_DATA_decreasedMaxHitFlatAgainstBosses: "보스와의 전투 시 최대 공격력 -${value}",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitAgainstBosses: "보스와의 전투 시 최소 명중 +${value}%",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitAgainstBosses: "보스와의 전투 시 최소 명중 -${value}%",
    MODIFIER_DATA_increasedFlatMinHitAgainstBosses: "보스와의 전투 시 최소 명중 +${value}",
    MODIFIER_DATA_decreasedFlatMinHitAgainstBosses: "보스와의 전투 시 최소 명중 -${value}",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstBosses: '보스와의 전투 시 명중률 +${value}%',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstBosses: '보스와의 전투 시 명중률 -${value}%',

    // #### Skilling
    MODIFIER_DATA_increasedThievingDamagePreventionThreshold: '도둑질 피해 방지 한계치 +${value} (한계치 미만의 피해는 0으로 감소합니다.)',
    MODIFIER_DATA_decreasedThievingDamagePreventionThreshold: '도둑질 피해 방지 한계치 -${value} (한계치 미만의 피해는 0으로 감소합니다.)',
    MODIFIER_DATA_increasedGlobalSkillXPPerLevel: "현재 훈련 중인 스킬의 레벨당 글로벌 스킬 경험치 +${value}%",
    MODIFIER_DATA_decreasedGlobalSkillXPPerLevel: "현재 훈련 중인 스킬의 레벨당 글로벌 스킬 경험치 -${value}%",
    MODIFIER_DATA_increasedSkillXPPerSkillLevel: "${skillName}의 레벨당 스킬 경험치 +${value}% ${skillName} 스킬 경험치",
    MODIFIER_DATA_decreasedSkillXPPerSkillLevel: "${skillName}의 레벨당 스킬 경험치 -${value}% ${skillName} 스킬 경험치",
    MODIFIER_DATA_increasedFlatGlobalSkillXP: "+{값} 전역 기술 경험치(% 수식어 뒤에 추가)",
    MODIFIER_DATA_decreasedFlatGlobalSkillXP: "-{값} 전역 기술 경험치(% 수식어 뒤에 추가)",
    MODIFIER_DATA_increasedFlatSkillXP: "+${value} ${skillName} 스킬 경험치(% 수식어 뒤에 추가)",
    MODIFIER_DATA_decreasedFlatSkillXP: "-${value} ${skillName} 스킬 경험치(% 수식어 뒤에 추가)",
    MODIFIER_DATA_increasedFlatGlobalSkillXPPerSkillLevel: "현재 훈련 중인 스킬의 레벨당 +${value} 글로벌 스킬 경험치(% 수식어 뒤에 추가)",
    MODIFIER_DATA_decreasedFlatGlobalSkillXPPerSkillLevel: "현재 훈련 중인 스킬의 레벨당 -${value} 글로벌 스킬 경험치(% 수식어 뒤에 추가)",
    MODIFIER_DATA_increasedFlatSkillXPPerSkillLevel: "스킬 이름} 레벨당 +${value} ${skillName} 스킬 경험치 (% 수식어 뒤에 추가)",
    MODIFIER_DATA_decreasedFlatSkillXPPerSkillLevel: "스킬 이름} 레벨당 -${value} ${skillName} 스킬 경험치 (% 수식어 뒤에 추가)"
};
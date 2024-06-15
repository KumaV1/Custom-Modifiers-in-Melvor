declare global {
    interface CloudManager {
        hasTotHEntitlement: boolean;
        hasTotHEntitlementAndIsEnabled: boolean;
        hasAoDEntitlement: boolean;
        hasAoDEntitlementAndIsEnabled: boolean;
        hasItAEntitlement: boolean;
        hasItAEntitlementAndIsEnabled: boolean;
    }

    const cloudManager: CloudManager;
}

export { };
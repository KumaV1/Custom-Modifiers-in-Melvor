declare global {
    interface CloudManager {
        hasTotHEntitlement: boolean;
        hasTotHEntitlementAndIsEnabled: boolean;
        hasAoDEntitlement: boolean;
        hasAoDEntitlementAndIsEnabled: boolean;
    }

    const cloudManager: CloudManager;
}

export { };
// emulate backend process to get user profile data
const apiKey = "tJG7tTeuoVIg2FsM6eqodDIRjTG1Cp5WYCdL1K1OmUddxpihVmoZaqngeW-_0sptzbWK5r3_GDUA08HNGjKBeXmDRKE9k6dpyicx2k7RCQxBjqh4Gf8o7gxSCzTktQ2HJf26lB9UjgASm0VmEJVT5PWdUC0LfD3-w9mzd5qa1GXW8hy7w-3Mqt1vpDKaML-yZMKVLwm-681DKwQOknkgNDwKFz-53uoSCnz-7AimRAL1zAcA7fG78ChLRrda1G0KXr_MFkmsg7AWbAD6Y2uHFLTw9UM=";
const spaceID = "spa_oqGiLFuBGk6jXBsbVZfSZv";
// const endpoint = "https://profiles.segment.com";

async function getUserProfile() {
    const userID = analytics.user().id();
    const anonymousID = analytics.user().anonymousId();
    if (userID) {
        const response = await fetch(`https://profiles.segment.com/v1/spaces/${spaceID}/collections/users/profiles/userId:${userID}`, {
            headers: {
                Authorization: `Bearer ${btoa(apiKey+":")}`,
            },
        });
        return response.json();
    }
    if (anonymousID) {
        const response = await fetch(`https://profiles.segment.com/v1/spaces/${spaceID}/collections/users/profiles/anonymousId:${anonymousID}`, {
            headers: {
                Authorization: `Bearer ${btoa(apiKey+":")}`,
            },
        });
        return response.json();
    }
    return null;
}

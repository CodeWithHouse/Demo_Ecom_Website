
async function getUserProfile() {
    const userID = analytics.user().id();
    const anonymousID = analytics.user().anonymousId();
    let endpoint = 'https://backend-ecom-demo.firdhousejapri.workers.dev/';
    const param = new URLSearchParams({ userID, anonymousID });
    endpoint += `?${param.toString()}`;
    const response = await fetch(endpoint);
    if (response.ok) {
        return response.json();
    }
    return null;
}


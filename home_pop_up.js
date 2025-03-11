async function waitForAnalytic (){
    return new Promise ((resolve, reject) => {
        const interval = setInterval(() => {
            if (analytics.user().id() || analytics.user().anonymousId()) {
                clearInterval(interval);
                resolve();
            }
        }, 100);
    });
}


async function renderPopUP() {
    await waitForAnalytic();
    const profile = await getUserProfile();
    if (profile) {
       console.log (profile);
    }
}
renderPopUP();

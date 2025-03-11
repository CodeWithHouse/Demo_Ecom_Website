async function renderPopUP() {
    const profile = await getUserProfile();
    if (profile) {
       console.log (profile);
    }
}
renderPopUP();

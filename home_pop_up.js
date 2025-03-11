async function waitForAnalytic (){
    return new Promise ((resolve, reject) => {
        const interval = setInterval(() => {
            if (!analytics) {
                return;
            }
            if (analytics.user().id() || analytics.user().anonymousId()) {
                clearInterval(interval);
                resolve();
            }
        }, 100);
    });
}

const messages = {
    "Nutrition": "We have the best nutrition for your pet",
    "Toys": "Your pet will love our toys",
    "Dog": "We have everything for your dog",
    "Cat": "We have everything for your cat",
}


async function renderPopUP() {
    await waitForAnalytic();
    const profile = await getUserProfile();
    if (profile) {
        const most_frequent_tags = profile.traits.most_frequent_tags;
    if (most_frequent_tags) {
        const message = messages[most_frequent_tags];
        if (message) {
            const popup = document.createElement("div");
            popup.classList.add("popup");
            popup.innerHTML = `
                <div class="popup-content">
                    <span class="close">&times;</span>
                    <p>${message}</p>
                </div>
            `;
            document.body.appendChild(popup);
            document.querySelector(".close").addEventListener("click", () => {
                popup.style.display = "none";
            });
        }}
    }
}
renderPopUP();

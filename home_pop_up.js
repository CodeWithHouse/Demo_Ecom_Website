async function waitForAnalytic() {
    return new Promise((resolve, reject) => {
        const interval = setInterval(() => {
            if (!analytics || !analytics.user) {
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
    "Nutrition": {
        text: "We have the best nutrition for your pet",
        icon: "fas fa-bone",
        color: "#8bc34a"
    },
    "Toys": {
        text: "Your pet will love our toys",
        icon: "fas fa-basketball-ball",
        color: "#ff9800"
    },
    "Dog": {
        text: "We have everything for your dog",
        icon: "fas fa-dog",
        color: "#2196f3"
    },
    "Cat": {
        text: "We have everything for your cat",
        icon: "fas fa-cat",
        color: "#9c27b0"
    }
};

async function renderPopUP() {
    await waitForAnalytic();
    const profile = await getUserProfile();
    
    if (profile && profile.traits && profile.traits.most_frequent_tags) {
        const most_frequent_tags = profile.traits.most_frequent_tags;
        const messageData = messages[most_frequent_tags];
        
        if (messageData) {
            // Create popup container
            const popup = document.createElement("div");
            
            // Popup container styling
            popup.style.position = "fixed";
            popup.style.bottom = "20px";
            popup.style.right = "20px";
            popup.style.zIndex = "9999";
            popup.style.opacity = "0";
            popup.style.transform = "translateY(20px)";
            popup.style.transition = "opacity 0.3s ease, transform 0.3s ease";
            
            // Popup content HTML
            popup.innerHTML = `
                <div style="
                    background-color: white;
                    border-radius: 8px;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
                    padding: 20px;
                    width: 300px;
                    max-width: 90vw;
                    display: flex;
                    position: relative;
                    border-left: 5px solid ${messageData.color};
                ">
                    <!-- Icon -->
                    <div style="
                        background-color: ${messageData.color};
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-right: 15px;
                        color: white;
                    ">
                        <i class="${messageData.icon}"></i>
                    </div>
                    
                    <!-- Message content -->
                    <div style="flex: 1;">
                        <h3 style="
                            margin: 0 0 5px 0;
                            color: #333;
                            font-size: 16px;
                            font-weight: 600;
                        ">PetCircle Recommends</h3>
                        <p style="
                            margin: 0;
                            color: #666;
                            font-size: 14px;
                            line-height: 1.4;
                        ">${messageData.text}</p>
                    </div>
                    
                    <!-- Close button -->
                    <button class="popup-close" style="
                        position: absolute;
                        top: 10px;
                        right: 10px;
                        background: none;
                        border: none;
                        color: #999;
                        cursor: pointer;
                        font-size: 18px;
                        padding: 0;
                        width: 20px;
                        height: 20px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: color 0.2s;
                    ">&times;</button>
                </div>
            `;
            
            // Add popup to the DOM
            document.body.appendChild(popup);
            
            // Add animation with slight delay
            setTimeout(() => {
                popup.style.opacity = "1";
                popup.style.transform = "translateY(0)";
            }, 300);
            
            // Add event listener to close button
            popup.querySelector(".popup-close").addEventListener("click", () => {
                popup.style.opacity = "0";
                popup.style.transform = "translateY(20px)";
                
                // Remove element after animation completes
                setTimeout(() => {
                    popup.remove();
                }, 300);
            });
            
            // Auto-close after 8 seconds
            setTimeout(() => {
                if (popup.parentNode) {
                    popup.style.opacity = "0";
                    popup.style.transform = "translateY(20px)";
                    
                    setTimeout(() => {
                        if (popup.parentNode) {
                            popup.remove();
                        }
                    }, 300);
                }
            }, 8000);
        }
    }
}

// Check if user has seen the popup recently
function shouldShowPopup() {
    const lastShown = localStorage.getItem('lastPopupShown');
    const now = new Date().getTime();
    
    // Show popup if user hasn't seen it in the last 24 hours
    if (!lastShown || (now - parseInt(lastShown) > 24 * 60 * 60 * 1000)) {
        localStorage.setItem('lastPopupShown', now);
        return true;
    }
    
    return false;
}

// Initialize popup if conditions are met
if (shouldShowPopup()) {
    renderPopUP();
}
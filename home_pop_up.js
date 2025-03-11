// Mock getUserProfile if it doesn't exist (for testing purposes)
if (typeof getUserProfile !== 'function') {
    window.getUserProfile = async function() {
        console.log("Using mock getUserProfile function");
        return {
            traits: {
                most_frequent_tags: "default"
            }
        };
    };
}

async function waitForAnalytic() {
    // For testing - if analytics doesn't exist, create a mock
    if (typeof analytics === 'undefined') {
        console.log("Creating mock analytics object for testing");
        window.analytics = {
            user: function() {
                return {
                    id: function() { return "test-id"; },
                    anonymousId: function() { return "anon-id"; }
                };
            }
        };
    }

    return new Promise((resolve, reject) => {
        // Timeout after 3 seconds to prevent hanging
        const timeout = setTimeout(() => {
            console.log("Analytics wait timed out - proceeding anyway");
            resolve();
        }, 3000);

        const interval = setInterval(() => {
            if (!analytics || !analytics.user) {
                return;
            }
            if (analytics.user().id() || analytics.user().anonymousId()) {
                clearInterval(interval);
                clearTimeout(timeout);
                resolve();
            }
        }, 100);
    });
}

const formThemes = {
    "Nutrition": {
        title: "Get Nutrition Recommendations",
        buttonText: "Get Recommendations",
        icon: "fas fa-bone",
        color: "#8bc34a"
    },
    "Toys": {
        title: "Find Perfect Toys For Your Pet",
        buttonText: "Find Toys",
        icon: "fas fa-basketball-ball",
        color: "#ff9800"
    },
    "Dog": {
        title: "Enjoy 10% Off For Your Dog Fur Baby",
        buttonText: "Get Discounts",
        icon: "fas fa-dog",
        color: "#2196f3"
    },
    "Cat": {
        title: "Personalize Your Cat's Experience",
        buttonText: "Personalize",
        icon: "fas fa-cat",
        color: "#9c27b0"
    },
    "default": {
        title: "Personalize Your Pet's Experience",
        buttonText: "Submit",
        icon: "fas fa-paw",
        color: "#3f51b5"
    }
};

async function renderPopUP() {
    try {
        console.log("Starting popup rendering process");
        await waitForAnalytic();
        
        let profile;
        try {
            profile = await getUserProfile();
            console.log("Got user profile:", profile);
        } catch (e) {
            console.warn("Error getting user profile, using default:", e);
            profile = { traits: { most_frequent_tags: "default" } };
        }
        
        // Get most frequent tags or use default
        let most_frequent_tags = "default";
        if (profile && profile.traits && profile.traits.most_frequent_tags) {
            most_frequent_tags = profile.traits.most_frequent_tags;
        }

        if (most_frequent_tags === "default") {
            console.warn("No tags found, using default theme");
            return
        }
        
        console.log("Using theme:", most_frequent_tags);
        const themeData = formThemes[most_frequent_tags] || formThemes["default"];
        
        // Create popup overlay (background)
        const overlay = document.createElement("div");
        overlay.id = "pet-form-overlay";
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.zIndex = "9998";
        overlay.style.opacity = "0";
        overlay.style.transition = "opacity 0.3s ease";
        
        // Create popup container
        const popup = document.createElement("div");
        popup.id = "pet-form-popup";
        popup.style.backgroundColor = "white";
        popup.style.borderRadius = "8px";
        popup.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.2)";
        popup.style.width = "400px";
        popup.style.maxWidth = "90vw";
        popup.style.maxHeight = "90vh";
        popup.style.overflowY = "auto";
        popup.style.position = "relative";
        popup.style.opacity = "0";
        popup.style.transform = "scale(0.9)";
        popup.style.transition = "opacity 0.3s ease, transform 0.3s ease";
        
        // Form HTML content
        popup.innerHTML = `
            <div style="
                border-top: 5px solid ${themeData.color};
                padding: 25px;
            ">
                <!-- Header -->
                <div style="
                    display: flex;
                    align-items: center;
                    margin-bottom: 20px;
                ">
                    <!-- Icon -->
                    <div style="
                        background-color: ${themeData.color};
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-right: 15px;
                        color: white;
                    ">
                        <i class="${themeData.icon}"></i>
                    </div>
                    
                    <h2 style="
                        margin: 0;
                        color: #333;
                        font-size: 20px;
                        font-weight: 600;
                    ">${themeData.title}</h2>
                </div>
                
                <!-- Form -->
                <form id="pet-details-form">                    
                    <div style="margin-bottom: 15px;">
                        <label style="
                            display: block;
                            margin-bottom: 5px;
                            font-weight: 500;
                            color: #555;
                            font-size: 14px;
                        ">Pet Age</label>
                        <select 
                            name="petAge" 
                            required 
                            style="
                                width: 100%;
                                padding: 10px;
                                border-radius: 4px;
                                border: 1px solid #ddd;
                                box-sizing: border-box;
                                font-size: 14px;
                                background-color: white;
                            "
                        >
                            <option value="">Select age</option>
                            <option value="puppy_kitten">Less than 1 year</option>
                            <option value="young">1-3 years</option>
                            <option value="adult">4-7 years</option>
                            <option value="senior">8+ years</option>
                        </select>
                    </div>
                    
                    <div style="
                        margin: 25px 0;
                        border-top: 1px solid #eee;
                        padding-top: 20px;
                    ">
                        <h3 style="
                            margin: 0 0 15px 0;
                            color: #333;
                            font-size: 16px;
                            font-weight: 500;
                        ">Your Information</h3>
                        
                        <div style="margin-bottom: 15px;">
                            <label style="
                                display: block;
                                margin-bottom: 5px;
                                font-weight: 500;
                                color: #555;
                                font-size: 14px;
                            ">First Name</label>
                            <input 
                                type="text" 
                                name="firstName" 
                                required 
                                style="
                                    width: 100%;
                                    padding: 10px;
                                    border-radius: 4px;
                                    border: 1px solid #ddd;
                                    box-sizing: border-box;
                                    font-size: 14px;
                                "
                            >
                        </div>
                        
                        <div style="margin-bottom: 15px;">
                            <label style="
                                display: block;
                                margin-bottom: 5px;
                                font-weight: 500;
                                color: #555;
                                font-size: 14px;
                            ">Last Name</label>
                            <input 
                                type="text" 
                                name="lastName" 
                                required 
                                style="
                                    width: 100%;
                                    padding: 10px;
                                    border-radius: 4px;
                                    border: 1px solid #ddd;
                                    box-sizing: border-box;
                                    font-size: 14px;
                                "
                            >
                        </div>
                        
                        <div style="margin-bottom: 15px;">
                            <label style="
                                display: block;
                                margin-bottom: 5px;
                                font-weight: 500;
                                color: #555;
                                font-size: 14px;
                            ">Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                required 
                                style="
                                    width: 100%;
                                    padding: 10px;
                                    border-radius: 4px;
                                    border: 1px solid #ddd;
                                    box-sizing: border-box;
                                    font-size: 14px;
                                "
                            >
                        </div>
                    </div>
                    
                    <button 
                        type="submit" 
                        style="
                            background-color: ${themeData.color};
                            color: white;
                            border: none;
                            border-radius: 4px;
                            padding: 12px 20px;
                            font-size: 16px;
                            font-weight: 500;
                            cursor: pointer;
                            width: 100%;
                            margin-top: 10px;
                            transition: background-color 0.2s;
                        "
                    >${themeData.buttonText}</button>
                </form>
                
                <!-- Success message (hidden initially) -->
                <div id="success-message" style="display: none; text-align: center; padding: 20px 0;">
                    <div style="
                        background-color: ${themeData.color};
                        width: 60px;
                        height: 60px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: 0 auto 20px;
                        color: white;
                    ">
                        <i class="fas fa-check" style="font-size: 28px;"></i>
                    </div>
                    <h3 style="
                        margin: 0 0 10px 0;
                        color: #333;
                        font-size: 20px;
                    ">Thank You!</h3>
                    <p style="
                        margin: 0;
                        color: #666;
                        font-size: 15px;
                        line-height: 1.5;
                    ">We've received your information and will send personalized recommendations to your email.</p>
                </div>
                
                <!-- Close button -->
                <button class="popup-close" style="
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    background: none;
                    border: none;
                    color: #999;
                    cursor: pointer;
                    font-size: 20px;
                    padding: 0;
                    width: 24px;
                    height: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: color 0.2s;
                ">&times;</button>
            </div>
        `;
        
        // Remove any existing popups
        const existingOverlay = document.getElementById("pet-form-overlay");
        if (existingOverlay) {
            existingOverlay.remove();
        }
        
        // Add popup to the overlay, then add overlay to the DOM
        overlay.appendChild(popup);
        document.body.appendChild(overlay);
        
        // Show the popup with animation
        setTimeout(() => {
            overlay.style.opacity = "1";
            popup.style.opacity = "1";
            popup.style.transform = "scale(1)";
        }, 100);
        
        // Close popup function
        const closePopup = () => {
            overlay.style.opacity = "0";
            popup.style.opacity = "0";
            popup.style.transform = "scale(0.9)";
            
            // Remove element after animation completes
            setTimeout(() => {
                if (overlay.parentNode) {
                    overlay.remove();
                }
            }, 300);
        };
        
        // Add event listener to close button
        popup.querySelector(".popup-close").addEventListener("click", closePopup);
        
        // Close when clicking outside the popup
        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) {
                closePopup();
            }
        });
        
        // Handle form submission
        const form = popup.querySelector("#pet-details-form");
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const userData = {
                petType: formData.get("petType"),
                petName: formData.get("petName"),
                petAge: formData.get("petAge"),
                firstName: formData.get("firstName"),
                lastName: formData.get("lastName"),
                email: formData.get("email")
            };
            
            // Log the data (replace with your actual submission logic)
            console.log("Form submitted:", userData);
            
            // You would typically send this data to your server here
            // Example: fetch('/api/pet-details', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(userData)
            // })
            
            // Store user data in localStorage
            localStorage.setItem('petCircleUserData', JSON.stringify(userData));
            
            // Show success message
            form.style.display = "none";
            document.getElementById("success-message").style.display = "block";
            
            // Update analytics if available
            if (typeof analytics !== 'undefined') {
                try {
                    analytics.identify(userData.email, {
                        firstName: userData.firstName,
                        lastName: userData.lastName,
                        email: userData.email,
                        petType: userData.petType,
                        petName: userData.petName,
                        petAge: userData.petAge
                    });
                    
                    analytics.track('Pet Details Submitted', userData);
                } catch (e) {
                    console.warn("Error tracking analytics:", e);
                }
            }
            
            // Close popup after success (5 seconds)
            setTimeout(closePopup, 5000);
        });
        
    } catch (error) {
        console.error("Error rendering popup:", error);
    }
}

// Always show popup during development (remove for production)
function showPopupNow() {
    console.log("Forcing popup to show");
    localStorage.removeItem('lastPopupShown');
    renderPopUP();
}

// Initialize popup
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded, initializing popup");
    
    // For immediate testing, uncomment this line:
    showPopupNow();
    
    // For production use this instead:
    // if (shouldShowPopup()) {
    //     setTimeout(() => {
    //         renderPopUP();
    //     }, 3000);
    // }
});

// Check if user has seen the popup recently
function shouldShowPopup() {
    const lastShown = localStorage.getItem('lastPopupShown');
    const now = new Date().getTime();
    
    // Show popup if user hasn't seen it in the last 3 days
    if (!lastShown || (now - parseInt(lastShown) > 3 * 24 * 60 * 60 * 1000)) {
        localStorage.setItem('lastPopupShown', now);
        return true;
    }
    
    return false;
}

// Add a global function to manually trigger the popup (for testing)
window.showPetFormPopup = showPopupNow;
// Mock getUserProfile if it doesn't exist (for testing purposes)
if (typeof getUserProfile !== 'function') {
    window.getUserProfile = async function() {
        console.log("Using mock getUserProfile function");
        // Include last_product_viewed in the mock profile
        const lastProductId = localStorage.getItem('lastViewedProductId');
        
        // Only return a complete profile if we have a last viewed product
        if (lastProductId && window.productDatabase && window.productDatabase[lastProductId]) {
            const product = window.productDatabase[lastProductId];
            const lastProductViewed = {
                id: lastProductId,
                name: product.name,
                image: product.mainImage
            };
            
            return {
                traits: {
                    most_frequent_tags: "Dog",
                    most_frequent_pet_category: "Dog",
                    last_product_viewed: lastProductViewed
                }
            };
        } else {
            // Return incomplete profile to test the validation
            return {
                traits: {
                    most_frequent_tags: "Dog",
                    most_frequent_pet_category: "Dog",
                    // Intentionally missing last_product_viewed
                }
            };
        }
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

// Helper function to get last viewed product from localStorage
function getLastViewedProduct() {
    const lastProductId = localStorage.getItem('lastViewedProductId');
    
    if (lastProductId && window.productDatabase && window.productDatabase[lastProductId]) {
        return {
            id: lastProductId,
            ...window.productDatabase[lastProductId]
        };
    }
    
    return null;
}

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
            profile = { 
                traits: {} 
            };
        }
        
        // Check if all required traits are available
        if (!profile || !profile.traits) {
            console.warn("User profile or traits not available, popup will not be shown");
            return;
        }
        
        // Extract required traits
        const { most_frequent_tags, most_frequent_pet_category, last_product_viewed } = profile.traits;
        
        // Check if all required traits are present
        if (!most_frequent_tags || !most_frequent_pet_category || !last_product_viewed) {
            console.warn("Missing required traits for popup:", {
                has_tags: !!most_frequent_tags,
                has_pet_category: !!most_frequent_pet_category,
                has_last_product: !!last_product_viewed
            });
            return;
        }
        
        // Verify last_product_viewed has required properties
        if (!last_product_viewed.name || !last_product_viewed.image) {
            console.warn("Last product viewed is missing required properties");
            return;
        }
        
        // All traits are available, proceed with popup rendering
        console.log("All required traits available, rendering popup");
        
        // Use the traits directly since we've verified they exist
        const themeTag = most_frequent_tags;
        
        console.log("Using theme:", themeTag);
        console.log("Using pet category:", most_frequent_pet_category);
        console.log("Last product viewed:", last_product_viewed);
        
        const themeData = formThemes[themeTag] || formThemes["default"];
        
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
        
        // Create last viewed product HTML (we know it's available since we checked earlier)
        const lastProductHTML = `
            <div style="
                margin: 20px 0;
                padding: 15px;
                background-color: #f9f9f9;
                border-radius: 6px;
                border: 1px solid #eee;
            ">
                <h3 style="
                    margin: 0 0 10px 0;
                    color: #333;
                    font-size: 16px;
                    font-weight: 500;
                ">Recently Viewed</h3>
                <div style="
                    display: flex;
                    align-items: center;
                ">
                    <div style="
                        width: 60px;
                        height: 60px;
                        min-width: 60px;
                        margin-right: 15px;
                        border-radius: 4px;
                        overflow: hidden;
                    ">
                        <img src="${last_product_viewed.image}" 
                            alt="${last_product_viewed.name}" 
                            style="
                                width: 100%;
                                height: 100%;
                                object-fit: contain;
                            "
                        >
                    </div>
                    <div>
                        <h4 style="
                            margin: 0 0 5px 0;
                            font-size: 14px;
                            color: #333;
                        ">${last_product_viewed.name}</h4>
                        <a href="product.html?id=${last_product_viewed.id}" style="
                            font-size: 12px;
                            color: ${themeData.color};
                            text-decoration: none;
                        ">View again</a>
                    </div>
                </div>
            </div>
        `;
        
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
                
                ${lastProductHTML}
                
                <!-- Form -->
                <form id="pet-details-form">
                    <div style="margin-bottom: 15px;">
                        <label style="
                            display: block;
                            margin-bottom: 5px;
                            font-weight: 500;
                            color: #555;
                            font-size: 14px;
                        ">Pet Type</label>
                        <div style="display: flex; gap: 10px;">
                            <label style="
                                display: flex;
                                align-items: center;
                                cursor: pointer;
                            ">
                                <input type="radio" name="petType" value="Dog" ${most_frequent_pet_category === "Dog" ? "checked" : ""} style="margin-right: 5px;">
                                <span>Dog</span>
                            </label>
                            <label style="
                                display: flex;
                                align-items: center;
                                cursor: pointer;
                            ">
                                <input type="radio" name="petType" value="Cat" ${most_frequent_pet_category === "Cat" ? "checked" : ""} style="margin-right: 5px;">
                                <span>Cat</span>
                            </label>
                            <label style="
                                display: flex;
                                align-items: center;
                                cursor: pointer;
                            ">
                                <input type="radio" name="petType" value="Other" ${most_frequent_pet_category !== "Dog" && most_frequent_pet_category !== "Cat" ? "checked" : ""} style="margin-right: 5px;">
                                <span>Other</span>
                            </label>
                        </div>
                    </div>

                    <div style="margin-bottom: 15px;">
                        <label style="
                            display: block;
                            margin-bottom: 5px;
                            font-weight: 500;
                            color: #555;
                            font-size: 14px;
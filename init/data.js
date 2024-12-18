const sampleproduct =  [
    {
        image: "https://images.unsplash.com/photo-1519668963014-2308b08e5e9b?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Hydrating Face Cream
        name: "Hydrating Face Cream",
        quantity_ml: 50,
        cost_in_rupees: 499,
        description: "A lightweight cream that deeply hydrates and nourishes the skin, leaving it soft and supple.",
         $push:  { review: "This cream is amazing! It keeps my skin hydrated all day long." } 
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1673628167560-9b972845039a?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Revitalizing Serum
        name: "Revitalizing Serum",
        quantity_ml: 30,
        cost_in_rupees: 799,
        description: "An energizing serum that revitalizes dull skin, promoting a radiant and youthful glow."
    },
    {
        image: "https://images.unsplash.com/photo-1556227834-09f1de7a7d14?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Nourishing Night Cream
        name: "Nourishing Night Cream",
        quantity_ml: 60,
        cost_in_rupees: 899,
        description: "A rich night cream that nourishes and repairs the skin while you sleep, ensuring a fresh morning."
    },
    {
        image: "https://images.unsplash.com/photo-1673793954857-74781fb93f5b?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Soothing Gel
        name: "Soothing Gel",
        quantity_ml: 100,
        cost_in_rupees: 399,
        description: "A calming gel that soothes irritated skin, providing instant relief and hydration."
    },
    {
        image: "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJyaWdodGVuaW5nJTIwbG90aW9ufGVufDB8fDB8fHww", // Brightening Lotion
        name: "Brightening Lotion",
        quantity_ml: 200,
        cost_in_rupees: 1099,
        description: "A lightweight lotion that brightens the skin tone and reduces dark spots for a luminous complexion."
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1680859126131-d91874d9f5e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW50aSUyMGFnaW5nJTIwY3JlYW18ZW58MHx8MHx8fDA%3D", // Anti-Aging Cream
        name: "Anti-Aging Cream",
        quantity_ml: 50,
        cost_in_rupees: 1299,
        description: "An advanced cream formulated to reduce the appearance of fine lines and wrinkles for youthful skin."
    },
    {
        image: "https://images.unsplash.com/photo-1677176430993-3115a2278b74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZSUyMHNjcnVifGVufDB8fDB8fHww", // Exfoliating Scrub
        name: "Exfoliating Scrub",
        quantity_ml: 150,
        cost_in_rupees: 699,
        description: "A gentle scrub that removes dead skin cells, revealing smoother and brighter skin."
    },
    {
        image: "https://images.unsplash.com/photo-1597931752949-98c74b5b159f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG1vaXN0dXJpemVyfGVufDB8fDB8fHww", // Moisturizing Lotion
        name: "Moisturizing Lotion",
        quantity_ml: 250,
        cost_in_rupees: 899,
        description: "A deeply hydrating lotion that locks in moisture for all-day softness."
    },
    {
        image: "https://images.unsplash.com/photo-1591135108731-615592cf231b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRvbmVyfGVufDB8fDB8fHww", // Clarifying Toner
        name: "Clarifying Toner",
        quantity_ml: 200,
        cost_in_rupees: 499,
        description: "An alcohol-free toner that balances the skin's pH and removes impurities."
    },
    {
        image: "https://images.unsplash.com/photo-1598662957563-ee4965d4d72c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3Vuc2NyZWVufGVufDB8fDB8fHww", // Sunscreen SPF 50
        name: "Sunscreen SPF 50",
        quantity_ml: 100,
        cost_in_rupees: 799,
        description: "A broad-spectrum sunscreen that protects against harmful UV rays while keeping the skin hydrated."
    }
    , {
        image: "https://images.pexels.com/photos/8490182/pexels-photo-8490182.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Deep Cleansing Oil",
        quantity_ml: 150,
        cost_in_rupees: 799,
        description: "A gentle oil cleanser that effectively removes makeup and impurities without stripping the skin."
    },
    {
        image: "https://images.pexels.com/photos/15327097/pexels-photo-15327097/free-photo-of-woman-with-beauty-product-on-face-recommending-cosmetics.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Brightening Peel Pads",
        quantity_ml: 60,
        cost_in_rupees: 899,
        description: "Exfoliating pads that brighten the skin and improve texture with regular use."
    },
    {
        image: "https://images.pexels.com/photos/4056460/pexels-photo-4056460.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Hydrating Overnight Mask",
        quantity_ml: 100,
        cost_in_rupees: 999,
        description: "An overnight mask that deeply hydrates and revitalizes the skin while you sleep."
    },
    {
        image: "https://images.pexels.com/photos/8015483/pexels-photo-8015483.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Nourishing Body Butter",
        quantity_ml: 200,
        cost_in_rupees: 1299,
        description: "A rich body butter that provides intense hydration and leaves the skin feeling soft and smooth."
    },
    {
        image: "https://images.pexels.com/photos/14836428/pexels-photo-14836428.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Gentle Exfoliating Gel",
        quantity_ml: 100,
        cost_in_rupees: 699,
        description: "A gentle exfoliating gel that removes dead skin cells, revealing a brighter complexion."
    },
    {
        image: "https://images.pexels.com/photos/8140899/pexels-photo-8140899.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Skin Firming Lotion",
        quantity_ml: 250,
        cost_in_rupees: 999,
        description: "An advanced lotion that firms and tones the skin, enhancing elasticity and smoothness."
    },
    {
        image: "https://images.pexels.com/photos/7321505/pexels-photo-7321505.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Smoothing Hand Cream",
        quantity_ml: 75,
        cost_in_rupees: 399,
        description: "A nourishing hand cream that hydrates and softens dry hands, leaving them smooth and supple."
    },
    {
        image: "https://images.pexels.com/photos/12322955/pexels-photo-12322955.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Revitalizing Foot Cream",
        quantity_ml: 100,
        cost_in_rupees: 499,
        description: "An intensive foot cream that softens rough skin and provides lasting hydration."
    },
    {
        image: "https://images.pexels.com/photos/7234622/pexels-photo-7234622.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Repairing Cuticle Oil",
        quantity_ml: 15,
        cost_in_rupees: 299,
        description: "A nourishing cuticle oil that strengthens and repairs nails while hydrating the cuticles."
    },
    {
        image: "https://www.pexels.com/photo/small-vial-on-white-background-17220085/",
        name: "Calming Lavender Mist",
        quantity_ml: 100,
        cost_in_rupees: 399,
        description: "A soothing mist infused with lavender to calm the senses and refresh the skin."
    }
];

module.exports = { data: sampleproduct };


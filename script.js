// Recipe datafiles
let recipeData = {
    indian_dishes: [],
    desserts: []
};

let allRecipes = [];

// Loading JSON data
async function loadRecipeData() {
    try {
        console.log('📄 Attempting to load data files...');
        
        const indianResponse = await fetch('./data/indian_dishes.json');
        if (!indianResponse.ok) {
            throw new Error('Indian dishes file not found');
        }
        const indianData = await indianResponse.json();
        recipeData.indian_dishes = indianData;
        
        const dessertsResponse = await fetch('./data/desserts.json');
        if (!dessertsResponse.ok) {
            throw new Error('Desserts file not found');
        }
        const dessertsData = await dessertsResponse.json();
        recipeData.desserts = dessertsData;
        
        console.log('✅ Data loaded from files successfully!');
        console.log('Indian dishes:', recipeData.indian_dishes.length);
        console.log('Desserts:', recipeData.desserts.length);
        
    } catch (error) {
        console.error("❌ Error loading files:", error);
        console.log('📦 Loading embedded data as fallback...');
        loadEmbeddedData();
        return;
    }
    
    allRecipes = [
        ...recipeData.indian_dishes,
        ...recipeData.desserts
    ];
    
    initializePage();
}

// Embedded data as fallback - Load from provided JSON files
function loadEmbeddedData() {
    recipeData.indian_dishes = [
        {"name":"Butter Chicken","time":"45 mins","difficulty":"Medium","ingredients":"Chicken, butter, tomato, cream, spices","steps":"Cook marinated chicken in buttery tomato gravy until tender.","img":"https://images.unsplash.com/photo-1617196037885-3099b8c4b7cb","video":"https://www.youtube.com/watch?v=vA7wK4M1C_U"},
        {"name":"Hyderabadi Biryani","time":"60 mins","difficulty":"Hard","ingredients":"Basmati rice, meat, saffron, herbs, yogurt, fried onions","steps":"Layer par-cooked rice and spiced meat, seal and cook on dum.","img":"https://images.unsplash.com/photo-1603890125637-075b1f04d6c2","video":"https://www.youtube.com/watch?v=tbd7Yb5bEwI"},
        {"name":"Paneer Butter Masala","time":"30 mins","difficulty":"Easy","ingredients":"Paneer, tomato puree, cream, butter, spices","steps":"Simmer tomato gravy with butter and cream, add paneer cubes.","img":"https://images.unsplash.com/photo-1599785209707-28d1dac3d924","video":"https://www.youtube.com/watch?v=C8e6zCe118U"},
        {"name":"Masala Dosa","time":"40 mins","difficulty":"Medium","ingredients":"Rice, urad dal, potatoes, onions, spices","steps":"Make dosa batter, cook on tawa, and fill with spiced potato.","img":"https://images.unsplash.com/photo-1671894457690-03214ce2e7cd","video":"https://www.youtube.com/watch?v=PtrWyn6UqfE"},
        {"name":"Dal Tadka","time":"25 mins","difficulty":"Easy","ingredients":"Lentils, garlic, cumin, ghee, onions, tomatoes","steps":"Cook lentils, pour tempered ghee and spices over it.","img":"https://images.unsplash.com/photo-1590080875832-13b63b8f8d8f","video":"https://www.youtube.com/watch?v=oFfGO_r3Sgg"},
        {"name":"Rajma Masala","time":"45 mins","difficulty":"Medium","ingredients":"Kidney beans, onions, tomatoes, spices","steps":"Cook beans and prepare onion tomato gravy, mix and simmer.","img":"https://images.unsplash.com/photo-1613322433701-3aeb2f0b9d2b","video":"https://www.youtube.com/watch?v=HjzZbvRVQg8"},
        {"name":"Biryani","img":"https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400","time":"90 mins","ingredients":"Basmati rice, chicken/mutton, yogurt, saffron, spices","steps":"1. Marinate meat in yogurt and spices. 2. Par-cook rice. 3. Layer meat and rice. 4. Cook on dum (slow steam) for 30 mins.","video":"https://www.youtube.com/watch?v=pYwKbMLHmuE"},
        {"name":"Paneer Tikka","img":"https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400","time":"30 mins","ingredients":"Paneer, yogurt, bell peppers, onions, tikka masala","steps":"1. Marinate paneer in spiced yogurt. 2. Thread onto skewers with vegetables. 3. Grill or bake at 200°C for 20 mins. 4. Serve hot.","video":"https://www.youtube.com/watch?v=r8rDC7Y5OzE"},
        {"name":"Chole Bhature","img":"https://images.unsplash.com/photo-1626074353765-517a681e40be?w=400","time":"60 mins","ingredients":"Chickpeas, flour, yogurt, tomatoes, Indian spices","steps":"1. Soak and pressure cook chickpeas. 2. Make spicy tomato gravy. 3. Prepare bhature dough with flour and yogurt. 4. Deep fry bhature until puffy.","video":"https://www.youtube.com/watch?v=yZpVlZkczHk"},
        {"name":"Palak Paneer","img":"https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=400","time":"35 mins","ingredients":"Spinach, paneer, onions, tomatoes, cream, spices","steps":"1. Blanch and puree spinach. 2. Sauté onions and tomatoes. 3. Add spinach puree and spices. 4. Add paneer cubes and cream.","video":"https://www.youtube.com/watch?v=EXT7R-RhXz8"},
        {"name":"Dosa","img":"https://images.unsplash.com/photo-1630383249896-424e482df921?w=400","time":"20 mins (+ fermentation)","ingredients":"Rice, urad dal, fenugreek seeds, salt","steps":"1. Soak rice and dal overnight. 2. Grind to smooth batter. 3. Ferment for 8-12 hours. 4. Spread thin on hot griddle and cook until crispy.","video":"https://www.youtube.com/watch?v=jKDtLxE7TYU"},
        {"name":"Rogan Josh","img":"https://images.unsplash.com/photo-1585937421612-70a008356737?w=400","time":"75 mins","ingredients":"Lamb, yogurt, Kashmiri chilies, fennel, ginger-garlic","steps":"1. Marinate lamb in yogurt and spices. 2. Brown meat in oil. 3. Add tomato gravy and Kashmiri chilies. 4. Slow cook until tender.","video":"https://www.youtube.com/watch?v=hLY-dYXkfQk"},
        {"name":"Tandoori Chicken","img":"https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=400","time":"50 mins","ingredients":"Chicken, yogurt, tandoori masala, lemon, ginger-garlic","steps":"1. Marinate chicken in yogurt and spices for 4 hours. 2. Skewer the chicken pieces. 3. Grill or bake at 220°C for 30-35 mins. 4. Baste with butter.","video":"https://www.youtube.com/watch?v=HZWKöppen1Bg"},
        {"name":"Samosa","img":"https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400","time":"40 mins","ingredients":"Potatoes, peas, flour, cumin, coriander, spices","steps":"1. Make dough with flour and oil. 2. Prepare spiced potato-pea filling. 3. Fill triangular pockets. 4. Deep fry until golden brown.","video":"https://www.youtube.com/watch?v=vFUYfiKJCK4"},
        {"name":"Dal Makhani","img":"https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400","time":"90 mins","ingredients":"Black lentils, kidney beans, butter, cream, tomatoes","steps":"1. Soak lentils overnight and pressure cook. 2. Prepare tomato-butter gravy. 3. Simmer lentils in gravy for 30 mins. 4. Add cream and butter.","video":"https://www.youtube.com/watch?v=EQvf1KQVN-U"},
        {"name":"Aloo Gobi","img":"https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400","time":"30 mins","ingredients":"Potatoes, cauliflower, tomatoes, turmeric, cumin","steps":"1. Cut potatoes and cauliflower into florets. 2. Sauté with cumin and turmeric. 3. Add tomatoes and spices. 4. Cook covered until tender.","video":"https://www.youtube.com/watch?v=ZuFjNjh4s80"},
        {"name":"Fish Curry","img":"https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400","time":"35 mins","ingredients":"Fish, coconut milk, tamarind, curry leaves, spices","steps":"1. Marinate fish with turmeric and salt. 2. Prepare coconut-tamarind gravy. 3. Add fish pieces gently. 4. Simmer for 15 mins without stirring.","video":"https://www.youtube.com/watch?v=gRK1v6KjAdk"},
        {"name":"Pav Bhaji","img":"https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400","time":"45 mins","ingredients":"Mixed vegetables, butter, pav bhaji masala, bread rolls","steps":"1. Boil and mash vegetables. 2. Cook in butter with pav bhaji masala. 3. Toast bread rolls in butter. 4. Serve with lemon and onions.","video":"https://www.youtube.com/watch?v=a8L1Yqrx5W4"},
        {"name":"Malai Kofta","img":"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400","time":"55 mins","ingredients":"Paneer, potatoes, cashews, cream, tomato gravy","steps":"1. Make kofta balls with paneer and potatoes. 2. Deep fry koftas. 3. Prepare creamy tomato gravy. 4. Add koftas just before serving.","video":"https://www.youtube.com/watch?v=GqKl2JBkHqE"},
        {"name":"Chicken Tikka Masala","img":"https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400","time":"50 mins","ingredients":"Chicken, yogurt, tomatoes, cream, tikka masala spices","steps":"1. Marinate and grill chicken tikka. 2. Prepare creamy tomato gravy. 3. Add grilled chicken to gravy. 4. Simmer and add cream.","video":"https://www.youtube.com/watch?v=mVfhF4zxC_A"},
        {"name":"Vada Pav","img":"https://images.unsplash.com/photo-1626074353765-517a681e40be?w=400","time":"35 mins","ingredients":"Potatoes, bread buns, gram flour, garlic chutney","steps":"1. Make spiced potato balls. 2. Dip in gram flour batter. 3. Deep fry until golden. 4. Serve in bun with chutney.","video":"https://www.youtube.com/watch?v=vFNq3hd1hv4"},
        {"name":"Rajma","img":"https://images.unsplash.com/photo-1585937421612-70a008356737?w=400","time":"60 mins","ingredients":"Kidney beans, tomatoes, onions, ginger-garlic, spices","steps":"1. Soak kidney beans overnight. 2. Pressure cook beans. 3. Prepare tomato-onion gravy. 4. Simmer beans in gravy with spices.","video":"https://www.youtube.com/watch?v=g9j_eI-Bo50"},
        {"name":"Idli","img":"https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400","time":"25 mins (+ fermentation)","ingredients":"Rice, urad dal, fenugreek, salt","steps":"1. Soak rice and dal separately. 2. Grind to smooth batter. 3. Ferment overnight. 4. Steam in idli molds for 10-12 mins.","video":"https://www.youtube.com/watch?v=SAcf3i2WOz4"}
    ];
    
    recipeData.desserts = [
        {"name":"Gulab Jamun","time":"25 mins","difficulty":"Easy","ingredients":"Milk powder, ghee, sugar syrup, cardamom","steps":"Make dough, deep fry golden, soak in warm sugar syrup.","img":"https://images.unsplash.com/photo-1617196037885-3099b8c4b7cb","video":"https://www.youtube.com/watch?v=0UY2A1vTrxE"},
        {"name":"Chocolate Cake","time":"35 mins","difficulty":"Easy","ingredients":"Flour, cocoa powder, sugar, eggs, butter","steps":"Mix dry and wet ingredients, bake, then frost with chocolate.","img":"https://images.unsplash.com/photo-1578985545062-69928b1d9587","video":"https://www.youtube.com/watch?v=8P3AqtK89U8"},
        {"name":"Brownie","time":"25 mins","difficulty":"Easy","ingredients":"Flour, cocoa powder, eggs, sugar, butter","steps":"Mix ingredients and bake until soft and fudgy.","img":"https://images.unsplash.com/photo-1565958011705-44e211f53947","video":"https://www.youtube.com/watch?v=sZlmz4OPqLk"},
        {"name":"Tiramisu","time":"35 mins","difficulty":"Medium","ingredients":"Mascarpone, coffee, eggs, sugar, ladyfingers","steps":"Layer coffee-soaked ladyfingers with mascarpone cream.","img":"https://images.unsplash.com/photo-1601758174626-2e8266ef6ac3","video":"https://www.youtube.com/watch?v=tHCMpEO_eQc"},
        {"name":"Cheesecake","time":"45 mins","difficulty":"Medium","ingredients":"Cream cheese, sugar, eggs, biscuit base","steps":"Blend ingredients and bake on biscuit crust until set.","img":"https://images.unsplash.com/photo-1547592180-24f25a34ac51","video":"https://www.youtube.com/watch?v=On7WUjfSoOw"},
        {"name":"Rasmalai","img":"https://images.unsplash.com/photo-1606312619070-d48b4cbc4577?w=400","time":"60 mins","ingredients":"Paneer, milk, sugar, saffron, cardamom, pistachios","steps":"1. Make soft paneer discs and cook in sugar syrup. 2. Prepare thickened sweetened milk. 3. Soak paneer in milk. 4. Garnish with nuts and saffron.","video":"https://www.youtube.com/watch?v=sVwmfKjVcrI"},
        {"name":"Jalebi","img":"https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400","time":"30 mins","ingredients":"Flour, yogurt, saffron, sugar, cardamom","steps":"1. Prepare fermented batter. 2. Pipe batter in circular shapes in hot ghee. 3. Fry until crispy. 4. Dip in warm sugar syrup.","video":"https://www.youtube.com/watch?v=D5jfEqGVY8g"},
        {"name":"Kheer","img":"https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400","time":"45 mins","ingredients":"Rice, milk, sugar, cardamom, saffron, nuts","steps":"1. Cook rice in milk until soft. 2. Add sugar and cardamom. 3. Simmer until thickened. 4. Garnish with nuts and saffron.","video":"https://www.youtube.com/watch?v=FAlE-3_F-Lk"},
        {"name":"Ladoo","img":"https://images.unsplash.com/photo-1589301773859-342b9be95c4d?w=400","time":"30 mins","ingredients":"Gram flour, ghee, sugar, cardamom, nuts","steps":"1. Roast gram flour in ghee. 2. Add powdered sugar and cardamom. 3. Mix well and form balls. 4. Garnish with chopped nuts.","video":"https://www.youtube.com/watch?v=xwkz5vCH3iY"},
        {"name":"Barfi","img":"https://images.unsplash.com/photo-1606312619070-d48b4cbc4577?w=400","time":"35 mins","ingredients":"Condensed milk, milk powder, ghee, cardamom, nuts","steps":"1. Mix milk powder and condensed milk. 2. Cook in ghee until thick. 3. Spread in greased tray. 4. Cut into diamond shapes.","video":"https://www.youtube.com/watch?v=VfQRVFhQrU8"},
        {"name":"Kulfi","img":"https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400","time":"6 hours (freezing)","ingredients":"Full cream milk, sugar, cardamom, pistachios, saffron","steps":"1. Reduce milk to half. 2. Add sugar and cardamom. 3. Pour into molds. 4. Freeze for 6 hours.","video":"https://www.youtube.com/watch?v=Ztjj0YxJEMc"},
        {"name":"Halwa","img":"https://images.unsplash.com/photo-1576866209830-589e1bfbaa4d?w=400","time":"40 mins","ingredients":"Semolina/carrot, ghee, sugar, milk, cardamom, nuts","steps":"1. Roast semolina in ghee. 2. Add hot milk and sugar. 3. Cook until mixture leaves pan sides. 4. Garnish with nuts.","video":"https://www.youtube.com/watch?v=Tb0MZaeb1T8"},
        {"name":"Mysore Pak","img":"https://images.unsplash.com/photo-1589301773859-342b9be95c4d?w=400","time":"35 mins","ingredients":"Gram flour, ghee, sugar, cardamom","steps":"1. Roast gram flour in ghee. 2. Make sugar syrup of one-string consistency. 3. Mix flour and syrup. 4. Pour in greased tray and cut.","video":"https://www.youtube.com/watch?v=b7P0K5Ysf8g"},
        {"name":"Payasam","img":"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400","time":"50 mins","ingredients":"Vermicelli, milk, sugar, cardamom, cashews, raisins","steps":"1. Roast vermicelli in ghee. 2. Cook in milk until soft. 3. Add sugar and cardamom. 4. Garnish with fried nuts.","video":"https://www.youtube.com/watch?v=q8YyqfAhLAQ"},
        {"name":"Sandesh","img":"https://images.unsplash.com/photo-1606312619070-d48b4cbc4577?w=400","time":"25 mins","ingredients":"Fresh paneer, sugar, cardamom, saffron","steps":"1. Knead fresh paneer until smooth. 2. Mix with powdered sugar. 3. Cook briefly on low heat. 4. Shape into decorative molds.","video":"https://www.youtube.com/watch?v=HqGr-OIJcLc"},
        {"name":"Peda","img":"https://images.unsplash.com/photo-1589301773859-342b9be95c4d?w=400","time":"30 mins","ingredients":"Milk powder, condensed milk, cardamom, saffron","steps":"1. Mix milk powder and condensed milk. 2. Cook until thick dough forms. 3. Cool slightly and shape into rounds. 4. Press with thumb and garnish.","video":"https://www.youtube.com/watch?v=nh8L6TJPUkI"},
        {"name":"Shrikhand","img":"https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400","time":"4 hours (straining)","ingredients":"Yogurt, sugar, cardamom, saffron, pistachios","steps":"1. Hang yogurt in cloth for 4 hours. 2. Mix thick yogurt with sugar. 3. Add cardamom and saffron. 4. Chill and garnish with nuts.","video":"https://www.youtube.com/watch?v=gOhHjmDtkv0"},
        {"name":"Rasgulla","img":"https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400","time":"50 mins","ingredients":"Paneer, sugar, water, cardamom, rose water","steps":"1. Make soft paneer balls. 2. Boil in sugar syrup for 20 mins. 3. Let cool in syrup. 4. Serve chilled with rose water.","video":"https://www.youtube.com/watch?v=F7IM7dw6TqY"},
        {"name":"Coconut Burfi","img":"https://images.unsplash.com/photo-1606312619070-d48b4cbc4577?w=400","time":"30 mins","ingredients":"Fresh coconut, condensed milk, cardamom, food color","steps":"1. Grate fresh coconut. 2. Cook with condensed milk. 3. Add cardamom. 4. Set in tray and cut into pieces.","video":"https://www.youtube.com/watch?v=LsC39L1Y8ow"},
        {"name":"Basundi","img":"https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400","time":"60 mins","ingredients":"Full cream milk, sugar, cardamom, saffron, almonds","steps":"1. Boil milk and reduce to half. 2. Add sugar and cardamom. 3. Stir continuously. 4. Chill and garnish with nuts and saffron.","video":"https://www.youtube.com/watch?v=QmhE5pUDHXg"},
        {"name":"Khaja","img":"https://images.unsplash.com/photo-1589301773859-342b9be95c4d?w=400","time":"45 mins","ingredients":"Flour, ghee, sugar, cardamom","steps":"1. Make layered dough with ghee. 2. Cut and deep fry until crispy. 3. Dip in sugar syrup. 4. Drain and serve.","video":"https://www.youtube.com/watch?v=HhFNd8Q8Spc"},
        {"name":"Besan Ladoo","img":"https://images.unsplash.com/photo-1589301773859-342b9be95c4d?w=400","time":"35 mins","ingredients":"Gram flour, ghee, powdered sugar, cardamom, almonds","steps":"1. Roast gram flour in ghee until aromatic. 2. Cool and add powdered sugar. 3. Add cardamom powder. 4. Shape into round balls.","video":"https://www.youtube.com/watch?v=T7EFr07t29E"},
        {"name":"Phirni","img":"https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400","time":"40 mins","ingredients":"Rice, milk, sugar, cardamom, saffron, rose water","steps":"1. Soak and grind rice to coarse paste. 2. Cook in milk until thick. 3. Add sugar and cardamom. 4. Serve in clay bowls with saffron.","video":"https://www.youtube.com/watch?v=Db1pKPL0J4Y"},
        {"name":"Modak","img":"https://images.unsplash.com/photo-1589301773859-342b9be95c4d?w=400","time":"50 mins","ingredients":"Rice flour, jaggery, coconut, cardamom, ghee","steps":"1. Make dough with rice flour. 2. Prepare coconut-jaggery filling. 3. Shape into dumplings. 4. Steam for 10-12 mins.","video":"https://www.youtube.com/watch?v=N1AE59QDVBA"}
    ];
    
    allRecipes = [...recipeData.indian_dishes, ...recipeData.desserts];
    initializePage();
}

function initializePage() {
    console.log('🏠 Loading home page with limited items...');
    showHome();
}

// Showing only 2-2 items to display
function showHome() {
    document.getElementById('homeContent').style.display = 'block';
    document.getElementById('allIndianDishes').style.display = 'none';
    document.getElementById('allDesserts').style.display = 'none';
    document.getElementById('recipeResult').style.display = 'none';
    
    displayCategory('indianGrid', recipeData.indian_dishes.slice(0, 2));
    displayCategory('dessertGrid', recipeData.desserts.slice(0, 2));
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showIndianDishes() {
    document.getElementById('homeContent').style.display = 'none';
    document.getElementById('allIndianDishes').style.display = 'block';
    document.getElementById('allDesserts').style.display = 'none';
    document.getElementById('recipeResult').style.display = 'none';
    
    displayCategory('allIndianGrid', recipeData.indian_dishes);
    
    setTimeout(() => {
        document.getElementById('allIndianDishes').scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

function showDesserts() {
    document.getElementById('homeContent').style.display = 'none';
    document.getElementById('allIndianDishes').style.display = 'none';
    document.getElementById('allDesserts').style.display = 'block';
    document.getElementById('recipeResult').style.display = 'none';
    
    displayCategory('allDessertGrid', recipeData.desserts);
    
    setTimeout(() => {
        document.getElementById('allDesserts').scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

// Display recipes in a category
function displayCategory(containerId, items) {
    const container = document.getElementById(containerId);
    
    if (!container) {
        console.error(`❌ Container with ID: ${containerId} not found in HTML!`);
        return;
    }
    
    if (!items || items.length === 0) {
        container.innerHTML = '<p>No recipes available.</p>';
        console.warn(`⚠️ No items to display in ${containerId}`);
        return;
    }
    
    container.innerHTML = '';
    
    console.log(`📋 Displaying ${items.length} items in ${containerId}`);
    
    items.forEach((recipe, index) => {
        const card = createRecipeCard(recipe);
        container.appendChild(card);
    });
}

// Create a recipe card element
function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.className = 'card';
    
    const safeName = recipe.name.replace(/'/g, "\\'");
    
    card.innerHTML = `
        <h4>${recipe.name}</h4>
        <p>⏱️ ${recipe.time}</p>
        <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
        <button onclick="viewRecipe('${safeName}')">View Recipe</button>
    `;
    
    return card;
}

// Search functionality
function searchRecipe() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase().trim();
    const recipeResult = document.getElementById('recipeResult');
    const recipeContainer = document.getElementById('recipeContainer');

    console.log('🔍 User searched for:', searchTerm);

    if (searchTerm === '') {
        console.log('⚠️ Empty search - showing home');
        showHome();
        return;
    }

    let results = [];

    if (searchTerm.includes('indian food') || searchTerm.includes('indian dish')) {
        console.log('📋 Showing all Indian dishes');
        results = [...recipeData.indian_dishes];
    }
    else if (searchTerm.includes('indian dessert') || searchTerm.includes('indian sweet') || searchTerm.includes('dessert') || searchTerm.includes('sweet')) {
        console.log('📋 Showing all desserts');
        results = [...recipeData.desserts];
    }
    else if (searchTerm === 'indian') {
        console.log('📋 Showing all recipes');
        results = [...allRecipes];
    }
    else {
        console.log('📋 Searching by keyword');
        results = allRecipes.filter(recipe => 
            recipe.name.toLowerCase().includes(searchTerm) ||
            recipe.ingredients.toLowerCase().includes(searchTerm)
        );
    }

    console.log('✅ Found', results.length, 'results');

    // Hide other sections
    document.getElementById('homeContent').style.display = 'none';
    document.getElementById('allIndianDishes').style.display = 'none';
    document.getElementById('allDesserts').style.display = 'none';

    if (results.length > 0) {
        recipeContainer.innerHTML = `<p style="font-size: 1.1rem; color: #ffa500; font-weight: bold; margin-bottom: 1rem;">Found ${results.length} recipe(s) for "${searchInput.value}"</p>`;
        
        results.forEach(recipe => {
            const card = createRecipeCard(recipe);
            recipeContainer.appendChild(card);
        });
        
        recipeResult.style.display = 'block';
        
        setTimeout(() => {
            recipeResult.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    } else {
        recipeContainer.innerHTML = `
            <p style="color: #ff6b6b; font-size: 1.1rem;">No recipes found for "${searchInput.value}"</p>
            <p>Try searching for:</p>
            <ul style="text-align: left; display: inline-block;">
                <li>"indian food" - to see all Indian dishes</li>
                <li>"indian desserts" - to see all desserts</li>
                <li>Dish names like "Butter Chicken", "Biryani", "Gulab Jamun"</li>
                <li>Ingredients like "paneer", "chicken", "rice"</li>
            </ul>
        `;
        recipeResult.style.display = 'block';
    }
}

// View recipe details
function viewRecipe(recipeName) {
    console.log('👁️ Viewing recipe:', recipeName);
    
    const recipe = allRecipes.find(r => r.name === recipeName);
    
    if (!recipe) {
        alert('Recipe not found!');
        console.error('❌ Recipe not found:', recipeName);
        return;
    }
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="closeModal()">&times;</span>
            <h2>${recipe.name}</h2>
            <p><strong>⏱️ Time:</strong> ${recipe.time}</p>
            ${recipe.difficulty ? `<p><strong>📊 Difficulty:</strong> ${recipe.difficulty}</p>` : ''}
            <p><strong>🥘 Ingredients:</strong> ${recipe.ingredients}</p>
            <p><strong>📝 Steps:</strong> ${recipe.steps}</p>
            ${recipe.video ? `<p><strong>🎥 Video Tutorial:</strong> <a href="${recipe.video}" target="_blank" style="color: #ffa500;">Watch on YouTube</a></p>` : ''}
            <button onclick="closeModal()" style="margin-top:1rem; padding:0.5rem 1rem; background:#ffa500; color:white; border:none; border-radius:5px; cursor:pointer;">Close</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    if (!document.getElementById('modalStyles')) {
        const style = document.createElement('style');
        style.id = 'modalStyles';
        style.textContent = `
            .modal {
                display: block;
                position: fixed;
                z-index: 1000;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                overflow: auto;
                background-color: rgba(0,0,0,0.5);
            }
            .modal-content {
                background-color: #fefefe;
                margin: 5% auto;
                padding: 20px;
                border: 1px solid #888;
                border-radius: 10px;
                width: 80%;
                max-width: 600px;
                position: relative;
                max-height: 80vh;
                overflow-y: auto;
            }
            .close {
                color: #aaa;
                float: right;
                font-size: 28px;
                font-weight: bold;
                cursor: pointer;
            }
            .close:hover,
            .close:focus {
                color: #000;
            }
            body.dark .modal-content {
                background-color: #2a2a2a;
                color: white;
            }
            body.dark .close:hover {
                color: #fff;
            }
        `;
        document.head.appendChild(style);
    }
}

// Close modal
function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// Toggle dark/light mode
function toggleMode() {
    document.body.classList.toggle('dark');
    const modeButton = document.querySelector('.mode-toggle');
    
    if (document.body.classList.contains('dark')) {
        modeButton.textContent = '☀️';
    } else {
        modeButton.textContent = '🌙';
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Food Recipe Finder - Starting...');
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                searchRecipe();
            }
        });
        console.log('✅ Search input ready');
    }
    
    loadRecipeData();
});

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.querySelector('.modal');
    if (event.target === modal) {
        closeModal();
    }
}
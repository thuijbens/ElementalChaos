// Master list of all Echoed Spells
const SPELLS_DATA = [
    {
        name: "Immolating Arrow/Strike",
        rank: 1,
        element: "Fire",
        cost: { fire: 4 },
        action: "Reaction",
        description: "During your attack action, after you hit, but before you rolled the damage dice, you can use your reaction and expend 4 Fire EP. The attack deals an extra 2d6 fire damage."
    },
    {
        name: "Grasping Tide",
        rank: 1,
        element: "Water",
        cost: { water: 4 },
        action: "Action",
        description: "Choose one creature within 30 feet. It must succeed on a Strength saving throw or have its speed halved and cannot take reactions until the start of your next turn."
    },
    {
        name: "Stone Endurance",
        rank: 1,
        element: "Earth",
        cost: { earth: 4 },
        action: "Reaction",
        description: "When you take damage from an attack or spell that targets you alone, you can use your reaction and expend 4 Earth EP to halve the incoming damage. This does not reduce psychic or thunder damage."
    },
    {
        name: "Zephyr's Lift/Push",
        rank: 1,
        element: "Air",
        cost: { air: 4 },
        action: "Bonus Action",
        description: "Choose yourself or a creature within 30 feet. The target can immediately move 15 feet horizontally without provoking opportunity attacks, or you can move an object weighing up to 10 lbs by 10 feet."
    },
    {
        name: "Controlled Burst",
        rank: 2,
        element: "Fire",
        cost: { fire: 8, spellSlot: 1 },
        action: "Action",
        description: "As an action, fire erupts from you in a 10-foot radius. Creatures in the area must make a Dexterity saving throw, taking 3d6 fire damage on a failed save, or half as much on a successful one."
    },
    {
        name: "Suffocating Globe",
        rank: 2,
        element: "Water",
        cost: { water: 8, spellSlot: 1 },
        action: "Action",
        description: "As an action, target one creature within 60 feet. It must make a Constitution saving throw. On a failure, it is enveloped in a sphere of water, is restrained, and begins to suffocate. It can repeat the save at the end of each of its turns."
    },
    {
        name: "Earthen Ward",
        rank: 2,
        element: "Earth",
        cost: { earth: 8, spellSlot: 1 },
        action: "Action",
        description: "As an action, you grant yourself or an ally within 30 feet temporary hit points equal to your 5 + your Wisdom modifier. While these temporary HP last, the creature's AC increases by 1."
    },
    {
        name: "Expeditious Gale",
        rank: 2,
        element: "Air",
        cost: { air: 8, spellSlot: 1 },
        action: "Action",
        description: "As an action, you create a powerful gust of wind. You and up to 3 willing creatures of your choice within 30 feet gain the benefits of the Dash and Disengage actions for this turn."
    },
    {
        name: "Scalding Burst",
        rank: 2,
        element: "Fire + Water",
        cost: { fire: 4, water: 4, spellSlot: 1 },
        action: "Action",
        description: "As an action, you unleash a 15-foot cone of steam. Creatures in the area must make a Dexterity saving throw, taking 2d6 fire damage and 2d6 bludgeoning damage (from the force of the steam) and are pushed 10 feet back on a failed save, or half damage and no push on a successful one."
    },
    {
        name: "Heated Carapace",
        rank: 2,
        element: "Fire + Earth",
        cost: { fire: 4, earth: 4, spellSlot: 1 },
        action: "Bonus Action",
        description: "As a bonus action, you grant a creature you touch a protective, molten shell. The creature gains 2d6 temporary hit points for 1 minute. Any creature that hits the protected target with a melee attack while these temporary HP are active takes 1d6 fire damage."
    },
    {
        name: "Obscuring Mist",
        rank: 2,
        element: "Water + Air",
        cost: { water: 4, air: 4, spellSlot: 1 },
        action: "Action",
        description: "As an action, you create a 20-foot-radius sphere of dense fog centered on a point within 60 feet. The area is heavily obscured. A moderate wind (at least 10 miles per hour) disperses the fog in 4 rounds; a strong wind (at least 20 miles per hour) disperses it in 1 round. Otherwise, it lasts for 10 minutes."
    },
    {
        name: "Clinging Mud",
        rank: 2,
        element: "Water + Earth",
        cost: { water: 4, earth: 4, spellSlot: 1 },
        action: "Action",
        description: "As an action, you target a 20-foot square on the ground within 60 feet. That area becomes difficult terrain for 1 minute. A creature that starts its turn in the area or enters it for the first time on a turn must make a Strength saving throw or have its speed reduced to 0 until the start of its next turn."
    },
    {
        name: "Fiery Aegis",
        rank: 3,
        element: "Fire",
        cost: { fire: 12, spellSlot: 2 },
        action: "Bonus Action",
        description: "As a bonus action, flames wreathe your body for 1 minute. You shed bright light in 20ft and dim light for another 20ft. Any creature that hits you with a melee attack while within 5 feet of you takes 1d10 fire damage."
    },
    {
        name: "Drowning Aura",
        rank: 3,
        element: "Water",
        cost: { water: 12, spellSlot: 2 },
        action: "Action",
        description: "As an action, you create an aura of debilitating moisture in a 15-foot radius around you for 1 minute. All  creatures in the aura subtract 1d4 from their attack rolls and saving throws."
    },
    {
        name: "Stoneform",
        rank: 3,
        element: "Earth",
        cost: { earth: 12, spellSlot: 2 },
        action: "Action",
        description: "As an action, your skin hardens like stone for 1 minute. You gain resistance to bludgeoning, piercing, and slashing damage, and your AC becomes 18 if it was lower. Your speed is reduced by 10 feet."
    },
    {
        name: "Vortex Shield",
        rank: 3,
        element: "Air",
        cost: { air: 12, spellSlot: 2 },
        action: "Reaction",
        description: "As a reaction when you are targeted by a ranged attack (weapon or spell), you create a swirling vortex of wind. Impose disadvantage on the attack roll. If the attack misses, you can redirect it to another creature (including the attacker) within 30 feet of you. You make the new attack roll using your spellcasting modifier."
    },
    {
        name: "Magma Wave",
        rank: 3,
        element: "Earth + Fire",
        cost: { earth: 6, fire: 6, spellSlot: 2 },
        action: "Action",
        description: "As an action, a wave of magma erupts in a 20-foot cone. Creatures make a Dex save, taking 3d6 fire and 3d6 bludgeoning, and the area becomes difficult terrain. Half damage on success."
    },
    {
        name: "Smoke Suffocation",
        rank: 3,
        element: "Fire + Air",
        cost: { fire: 6, air: 6, spellSlot: 2 },
        action: "Action",
        description: "As an action, you create a 10-foot radius globe of choking black smoke at a point within 60 feet. Any creature that starts its turn in the smoke must make a Constitution saving throw. On a failed save, it spends its action that turn coughing and retching and takes 3d8 poison damage. Creatures that don't need to breathe are immune. The smoke is heavily obscured and lasts for 1 minute or until a strong wind disperses it."
    },
    {
        name: "Charged Cloud",
        rank: 3,
        element: "Water + Air",
        cost: { water: 6, air: 6, spellSlot: 2 },
        action: "Action",
        description: "As an action, you conjure a small, dark storm cloud that follows a target you choose within 60 feet for 1 minute. As a reaction whenever that target is hit with a weapon attack, you can call down a bolt of lightning to strike the attacker. The attacker must make a Dexterity saving throw, taking 2d8 lightning damage on a failed save, or half as much on a successful one."
    },
    {
        name: "Flame Funnel",
        rank: 4,
        element: "Fire",
        cost: { fire: 16, spellSlot: 3 },
        action: "Action",
        description: "make a ranged spell attack against a target you can see within 40 ft. of you. The target takes 6d6 fire damage on a hit."
    },
    {
        name: "Seafarer",
        rank: 4,
        element: "Water",
        cost: { water: 16, spellSlot: 3 },
        action: "Action",
        description: "Choose 5 willing targets. Each target can breath underwater for 6 hours and does not receive any penalties to movement, skill checks, attack rolls and saving throws while underwater. Targets can also speak underwater as if above the water's surface."
    },
    {
        name: "Stone Shell",
        rank: 4,
        element: "Earth",
        cost: { earth: 16, spellSlot: 3 },
        action: "Reaction",
        description: "When you or one of your allies is attacked, you can encase the target of the attack in a rocky confinement of one 6ft. squared feet. The confinement has 18 AC and 20 HP before losing integrity and crumbling. It is vulnerable to bludgeoning damage. The attack is now made against the shell instead. When inside the shell, you can not see outside of the shell and your movement speed is 0."
    },
    {
        name: "Tailwind",
        rank: 4,
        element: "Air",
        cost: { air: 16, spellSlot: 3 },
        action: "Action",
        description: "you can target one creature and give it the power of air; the affected creature has double movement speed and gains an additional bonus action and reaction on their turns. It also gains advantage on dexterity based skill checks and dexterity saving throws. This effect lasts until 3 rounds."
    },
    {
        name: "Sandstorm",
        rank: 4,
        element: "Earth + Air",
        cost: { earth: 8, air: 8, spellSlot: 3 },
        action: "Action",
        description: "You summon a pelting sandstorm with a 30 ft. radius, originating from you as its center. Every creature within the sandstorm (except for you), takes 3d6 bludgeoning damage whenever they first enter the sandstorm, and an additional 3d6 when they end their turns within the sandstorm. Every turn, the radius of the sandstorm shrinks by 5 ft."
    },
    {
        name: "Erupting Geyser",
        rank: 4,
        element: "Fire + Water",
        cost: { fire: 8, water: 8, spellSlot: 3 },
        action: "Action",
        description: "You choose a point on the ground within 60 feet. A geyser of scalding water erupts in a 10-foot radius, 30-foot high cylinder. All creatures in the cylinder must make a Strength saving throw. On a failure, they take 3d6 fire damage and 3d6 cold damage and are thrown 20 feet into the air into a specific direction (DM's discretion). On a success, they take half damage and are not thrown."
    },
    {
        name: "Flash Freeze",
        rank: 4,
        element: "Water + Earth",
        cost: { water: 8, earth: 8, spellSlot: 3 },
        action: "Action",
        description: "Choose a space you can see within 60ft. of you. Everything within a 30ft. radius of the chosen space is engulfed in roiling flames. The All creatures within the space must succeed on a Dexterity saving throw or take 10d6 fire damage. Creatures take half damage on a success. All flammable objects within the area are set on fire and if the ground is hit, it becomes difficult terrain. The flames remain within the space for 1d4 turns. For every 5ft. a creature moves within the burned space, they take 2d6 fire damage."
    },
    {
        name: "Inferno",
        rank: 5,
        element: "Fire",
        cost: { fire: 20, spellSlot: 4 },
        action: "Action",
        description: "Choose a space you can see within 60ft. of you. Everything within a 30ft. radius of the chosen space is engulfed in roiling flames. The All creatures within the space must succeed on a Dexterity saving throw or take 10d6 fire damage. Creatures take half damage on a success. All flammable objects within the area are set on fire and if the ground is hit, it becomes difficult terrain. The flames remain within the space for 1d4 turns. For every 5ft. a creature moves within the burned space, they take 2d6 fire damage."
    },
    {
        name: "Ice Prison",
        rank: 5,
        element: "Water",
        cost: { water: 20, spellSlot: 4 },
        action: "Reaction",
        description: "Whenever you're attacked by a melee or ranged attack that doesn't require a saving throw, you can attempt to imprison your attacker in a solid block of ice. The creature must succeed on a Constitution saving throw or be frozen in ice. If the creature fails its saving throw, it takes 6d8 cold damage, becomes incapacitated and has its movement speed reduced to 0 until the block breaks or melts. The ice prison has 15 AC and 40 hit points and is vulnerable to fire and piercing damage, but resistant to cold and slashing. Whenever a creature ends their turn within the ice block they can attempt to escape. They must succeed on a DC 18 strength check, or remain imprisoned and take an additional 2d8 cold damage. When they succeed on their escape attempt, the block breaks and the creature within is freed."
    },
    {
        name: "Boulderfist",
        rank: 5,
        element: "Earth",
        cost: { earth: 20, spellSlot: 4 },
        action: "Bonus Action",
        description: "Concentration. You can harden the skin on your arms to turn them into large fists of pure concrete. When you have these fists, your unarmed melee attacks deal 2d12 + your strength modifier bludgeoning damage. You are considered proficient with these fists (meaning you can add your proficiency bonus to your attack role: D20 + Prof. + Strength Mod). Whenever you hit a creature with an unarmed strike they have to succeed on a Strength saving throw or fall prone. If they fail the DC with 5 or more they are also stunned until the end of your next turn. This spell ends in 1 minute (or whenever you lose concentration)."
    },
    {
        name: "Stormrider",
        rank: 5,
        element: "Air",
        cost: { air: 20, spellSlot: 4 },
        action: "Action",
        description: "You can discharge the air within your body to target up to 4 willing creatures. Each targeted creature's legs are engulfed by small tornado's that will cover the lower part of their body. Each target's flying speed becomes 40ft. and they get advantage on all dexterity saving throws. They ignore difficult terrain and their movement speed cannot be reduced. The affected creatures can 'ride' these cyclones using their willpower. The effects of Stormrider last for 1 hour. At any point during the affected creatures' turn, as long as they are still under the effects of Stormrider, they can use an action to end the effect on themselves. If they do so in this way, they fall to the ground and deal 1d10 thunder damage to every creature within 15 ft if they fell at least 10ft. This damage is increased by 1d10 for every additional 10ft. fallen."
    },
    {
        name: "Firestorm",
        rank: 5,
        element: "Fire + Air",
        cost: { fire: 10, air: 10, spellSlot: 4 },
        action: "Action",
        description: "Concentration. Choose a point within 100 feet. A 40 ft. tall swirling vortex of flame with a 20-foot radius appears. When a creature enters the area for the first time on a turn or starts its turn there, it must make a Dexterity saving throw. It takes 8d6 fire damage on a failed save, or half as much on a successful one. Any creature that fails its save is also pulled 10 feet toward the center of the storm. The area within the storm is difficult terrain. The storm lasts for 1 minute or until you lose concentration."
    },
    {
        name: "Primal Tsunami",
        rank: 5,
        element: "Water + Earth",
        cost: { water: 10, earth: 10, spellSlot: 4 },
        action: "Action",
        description: "You conjure and send forth a 50-foot long, 15-foot wide, and 15-foot high wave of water, mud, and rock. Creatures in the line must make a Strength saving throw. On a failure, they take 4d10 bludgeoning damage and are pushed to the nearest unoccupied space outside the line and knocked prone. If they hit a solid wall as they are being pushed, they come to a halt, fall prone, and take an additional 1d6 damage for every 10ft. traveled. On a success, they take half damage and are not pushed or knocked prone."
    },
    {
        name: "Solar Flare",
        rank: 6,
        element: "Fire",
        cost: { fire: 25, spellSlot: 5, exhaustion: 1 },
        action: "Action",
        description: "You become a living sun. You unleash a blinding explosion of energy in a 60-foot radius. All other creatures in the area must make a Constitution saving throw. On a failed save, they take 12d6 fire damage and 6d6 radiant damage and are blinded for 1d8 turns. On a successful save, they take half damage and are not blinded. The intense heat vaporizes non-magical objects and melts solid stone in the area."
    },
    {
        name: "Tidal Recall",
        rank: 6,
        element: "Water",
        cost: { water: 25, spellSlot: 5, exhaustion: 1 },
        action: "Action",
        description: "You gain absolute command of the water of life for one moment. You target a 60-foot radius area. You choose any number of creatures in the area. For each chosen creature, you can either have them regain 10d6 hit points, or force them to make a Constitution saving throw, taking 10d6 cold damage on a failed save (half on success) as the water is ripped from their bodies. "
    },
    {
        name: "Aspect of the Colossus",
        rank: 6,
        element: "Earth",
        cost: { earth: 25, spellSlot: 5, exhaustion: 1 },
        action: "Action",
        description: "You absorb the strength of the earth itself, transforming into a giant made of stone and living wood for 1 minute. You gain the following benefits: Your size becomes Huge. You gain 100 temporary hit points. You have resistance to all damage except psychic and thunder. Your unarmed strikes deal 4d10 + your Strength modifier bludgeoning damage, and you can make two attacks as a single action. When the transformation ends (either after 1 minute or if the temporary HP are depleted), the borrowed life force violently leaves your body. You take 10d6 necrotic damage and you are stunned until the end of your next turn."
    },
    {
        name: "Eye of the Hurricane",
        rank: 6,
        element: "Air",
        cost: { air: 25, spellSlot: 5, exhaustion: 1 },
        action: "Action",
        description: "You create two zones of wind for 1 minute (concentration). The first is a 30-foot-radius sphere of calm centered on you, which moves with you. Allied creatures in this sphere are immune to any targeted ranged or melee attacks originating from outside the sphere. The second zone is a raging storm in the area between the 30-foot sphere and a 100-foot-radius sphere, also centered on you. This area is difficult terrain. Any hostile creature that starts its turn in the storm or enters it for the first time on a turn takes 8d8 bludgeoning damage. You are immobile and incapacitated while concentrating on this ability. If you lose concentration, the storm collapses, and every creature within 100 feet (including you and your allies) must make a Dexterity saving throw, taking 10d10 thunder damage on a failed save, or half on a success. You can also lose concentration on purpose on your turn, making sure the storm is removed without endangering anyone."
    }
    
];

// Character state
let characterState = {
    fire: 0,
    water: 0,
    earth: 0,
    air: 0,
    wisdomMod: 0,
    proficiencyBonus: 2,
    featureUses: {
        'spell-slot-recovery': [false, false], // 2 uses, both unused
        'lunas-urging': [false] // 1 use, unused
    }
};

// DOM elements
const epInputs = document.querySelectorAll('.ep-input');
const plusButtons = document.querySelectorAll('.btn-plus');
const minusButtons = document.querySelectorAll('.btn-minus');
const totalEpDisplay = document.getElementById('total-ep');
const dominantElementDisplay = document.getElementById('dominant-element');
const penaltiesList = document.getElementById('penalties-list');
const spellsContainer = document.getElementById('spells-container');
const showAllSpellsCheckbox = document.getElementById('show-all-spells');
const wisdomModInput = document.getElementById('wisdom-mod');
const proficiencyBonusInput = document.getElementById('proficiency-bonus');
const spellcastingModifierDisplay = document.getElementById('spellcasting-modifier');
const spellSaveDcDisplay = document.getElementById('spell-save-dc');
const resetEpBtn = document.getElementById('reset-ep-btn');

// Initialize the application
function init() {
    loadFromLocalStorage();
    setupEventListeners();
    updateDisplay();
    renderSpells();
    loadChecklistStates();
}

// Load character state from localStorage
function loadFromLocalStorage() {
    const saved = localStorage.getItem('lingeringEchoCharacter');
    if (saved) {
        const loadedState = JSON.parse(saved);
        
        // Ensure featureUses is always present
        if (!loadedState.featureUses) {
            loadedState.featureUses = {
                'spell-slot-recovery': [false, false],
                'lunas-urging': [false]
            };
        }
        
        characterState = loadedState;
        
        // Update input values
        Object.keys(characterState).forEach(element => {
            if (element === 'wisdomMod') {
                wisdomModInput.value = characterState[element];
            } else if (element === 'proficiencyBonus') {
                proficiencyBonusInput.value = characterState[element];
            } else if (element !== 'featureUses') { // Skip featureUses for input updates
                const input = document.querySelector(`.ep-input[data-element="${element}"]`);
                if (input) {
                    input.value = characterState[element];
                }
            }
        });
    } else {
        // If no saved data, ensure featureUses is initialized
        if (!characterState.featureUses) {
            characterState.featureUses = {
                'spell-slot-recovery': [false, false],
                'lunas-urging': [false]
            };
        }
    }
    // Update spellcasting stats display
    updateSpellcastingStats();
}

// Save character state to localStorage
function saveToLocalStorage() {
    localStorage.setItem('lingeringEchoCharacter', JSON.stringify(characterState));
}

// Setup event listeners
function setupEventListeners() {
    // EP input changes
    epInputs.forEach(input => {
        input.addEventListener('input', handleEpChange);
        input.addEventListener('blur', validateEpInput);
    });

    // Plus/minus buttons
    plusButtons.forEach(btn => {
        btn.addEventListener('click', handlePlusClick);
    });

    minusButtons.forEach(btn => {
        btn.addEventListener('click', handleMinusClick);
    });

    // Show all spells toggle
    showAllSpellsCheckbox.addEventListener('change', renderSpells);
    
    // Spellcasting stats inputs
    wisdomModInput.addEventListener('input', handleSpellcastingStatsChange);
    proficiencyBonusInput.addEventListener('input', handleSpellcastingStatsChange);

    // Reset EP button
    resetEpBtn.addEventListener('click', resetEp);
    
    // Checklist buttons
    setupChecklistEventListeners();
}

// Setup checklist event listeners
function setupChecklistEventListeners() {
    const checklistItems = document.querySelectorAll('.checklist-item');
    console.log('Found checklist items:', checklistItems.length);
    
    checklistItems.forEach((item, index) => {
        console.log(`Setting up listener for item ${index}:`, item);
        item.addEventListener('click', handleChecklistClick);
    });
}

// Handle checklist button clicks
function handleChecklistClick(event) {
    console.log('Checklist clicked:', event.target);
    const button = event.target;
    const feature = button.dataset.feature;
    const useIndex = parseInt(button.dataset.use) - 1; // Convert to 0-based index
    
    console.log('Feature:', feature, 'Use index:', useIndex);
    console.log('Current feature uses:', characterState.featureUses);
    
    if (characterState.featureUses[feature] && characterState.featureUses[feature][useIndex] !== undefined) {
        // Toggle the use state
        characterState.featureUses[feature][useIndex] = !characterState.featureUses[feature][useIndex];
        
        console.log('Toggled to:', characterState.featureUses[feature][useIndex]);
        
        // Update button appearance
        if (characterState.featureUses[feature][useIndex]) {
            button.classList.add('used');
            console.log('Added used class');
        } else {
            button.classList.remove('used');
            console.log('Removed used class');
        }
        
        // Save to localStorage
        saveToLocalStorage();
    } else {
        console.log('Feature or use index not found');
    }
}

// Load checklist states from localStorage
function loadChecklistStates() {
    console.log('Loading checklist states...');
    if (characterState.featureUses) {
        Object.keys(characterState.featureUses).forEach(feature => {
            characterState.featureUses[feature].forEach((used, index) => {
                const button = document.querySelector(`[data-feature="${feature}"][data-use="${index + 1}"]`);
                if (button) {
                    if (used) {
                        button.classList.add('used');
                        console.log(`Marked ${feature} use ${index + 1} as used`);
                    } else {
                        button.classList.remove('used');
                        console.log(`Marked ${feature} use ${index + 1} as unused`);
                    }
                } else {
                    console.log(`Button not found for ${feature} use ${index + 1}`);
                }
            });
        });
    } else {
        console.log('No featureUses found in characterState');
    }
}

// Validate and sync all EP displays with backend state
function validateAndSyncEpDisplays() {
    const elements = ['fire', 'water', 'earth', 'air'];
    
    elements.forEach(element => {
        const input = document.querySelector(`.ep-input[data-element="${element}"]`);
        if (input) {
            const displayedValue = parseInt(input.value) || 0;
            const backendValue = characterState[element] || 0;
            
            // If there's a mismatch, fix it
            if (displayedValue !== backendValue) {
                console.log(`Fixing ${element} EP mismatch: display=${displayedValue}, backend=${backendValue}`);
                characterState[element] = displayedValue;
                input.value = displayedValue;
            }
        }
    });
    
    // Recalculate total EP
    const calculatedTotal = getTotalEp();
    const displayedTotal = parseInt(totalEpDisplay.textContent) || 0;
    
    if (calculatedTotal !== displayedTotal) {
        console.log(`Fixing total EP mismatch: calculated=${calculatedTotal}, displayed=${displayedTotal}`);
        totalEpDisplay.textContent = calculatedTotal;
    }
}

// Enhanced EP input change handler with validation
function handleEpChange(event) {
    const element = event.target.dataset.element;
    const value = parseInt(event.target.value) || 0;
    
    // Ensure value is within bounds
    const clampedValue = Math.max(0, Math.min(25, value));
    
    // Update both display and backend
    characterState[element] = clampedValue;
    event.target.value = clampedValue;
    
    // Validate and sync all displays
    validateAndSyncEpDisplays();
    
    updateDisplay();
    saveToLocalStorage();
}

// Validate EP input on blur
function validateEpInput(event) {
    const element = event.target.dataset.element;
    const value = parseInt(event.target.value) || 0;
    const clampedValue = Math.max(0, Math.min(25, value));
    
    if (value !== clampedValue) {
        characterState[element] = clampedValue;
        event.target.value = clampedValue;
        updateDisplay();
        saveToLocalStorage();
    }
}

// Enhanced plus button handler with validation
function handlePlusClick(event) {
    const element = event.target.dataset.element;
    const currentValue = characterState[element] || 0;
    const totalEp = getTotalEp();
    
    if (totalEp < 25) {
        const newValue = Math.min(25, currentValue + 1);
        characterState[element] = newValue;
        
        // Update the input display
        const input = document.querySelector(`.ep-input[data-element="${element}"]`);
        if (input) {
            input.value = newValue;
        }
        
        // Validate and sync all displays
        validateAndSyncEpDisplays();
        
        updateDisplay();
        saveToLocalStorage();
    }
}

// Enhanced minus button handler with validation
function handleMinusClick(event) {
    const element = event.target.dataset.element;
    const currentValue = characterState[element] || 0;
    
    if (currentValue > 0) {
        const newValue = Math.max(0, currentValue - 1);
        characterState[element] = newValue;
        
        // Update the input display
        const input = document.querySelector(`.ep-input[data-element="${element}"]`);
        if (input) {
            input.value = newValue;
        }
        
        // Validate and sync all displays
        validateAndSyncEpDisplays();
        
        updateDisplay();
        saveToLocalStorage();
    }
}

// Update EP input value
function updateEpInput(element) {
    const input = document.querySelector(`.ep-input[data-element="${element}"]`);
    if (input) {
        input.value = characterState[element];
    }
}

// Enhanced getTotalEp with validation
function getTotalEp() {
    const epValues = [
        characterState.fire || 0,
        characterState.water || 0,
        characterState.earth || 0,
        characterState.air || 0
    ];
    
    const total = epValues.reduce((sum, value) => {
        const numValue = parseInt(value) || 0;
        return sum + numValue;
    }, 0);
    
    // Ensure total doesn't exceed 25
    return Math.min(25, Math.max(0, total));
}

// Get dominant element
function getDominantElement() {
    const elements = ['fire', 'water', 'earth', 'air'];
    let maxEp = 0;
    let dominant = 'None';
    
    elements.forEach(element => {
        if (characterState[element] > maxEp) {
            maxEp = characterState[element];
            dominant = element.charAt(0).toUpperCase() + element.slice(1);
        }
    });
    
    return dominant;
}

// Update all displays
function updateDisplay() {
    // First validate and sync all displays
    validateAndSyncEpDisplays();
    
    const totalEp = getTotalEp();
    const dominantElements = getDominantElements();
    
    // Update total EP display
    totalEpDisplay.textContent = totalEp;
    
    // Update dominant element display
    dominantElementDisplay.textContent = dominantElements.join(', ');
    
    // Update button states
    updateButtonStates();
    
    // Update penalties
    updatePenalties();
    
    // Update spell list
    renderSpells();
}

// Update button states based on total EP
function updateButtonStates() {
    const totalEp = getTotalEp();
    const isAtMax = totalEp >= 25;
    
    plusButtons.forEach(btn => {
        btn.disabled = isAtMax;
    });
    
    epInputs.forEach(input => {
        input.disabled = isAtMax;
    });
}

// Update penalties display
function updatePenalties() {
    const totalEp = getTotalEp();
    const dominantElements = getDominantElements();
    const penalties = [];
    
    // Rank 1 penalties (totalEP >= 5)
    if (totalEp >= 5) {
        penalties.push({
            text: "Your appearance subtly shifts to reflect the elements you hold. (Rank 1)",
            rank: 1
        });
        penalties.push({
            text: "Disadvantage on Dexterity (Stealth) checks. (Rank 1)",
            rank: 1
        });
        penalties.push({
            text: `Take 1d4 ${getElementDamageType(dominantElements[0])} damage when casting one of your Echoed Spells. (Rank 1)`,
            rank: 1
        });
    }
    
    // Rank 2 penalties (totalEP >= 10)
    if (totalEp >= 10) {
        // Show vulnerabilities for all dominant elements
        dominantElements.forEach(dominantElement => {
            let vulnerability = "";
            switch (dominantElement.toLowerCase()) {
                case 'fire':
                    vulnerability = "Vulnerability to Cold damage. Negates resistances. (Rank 2)";
                    break;
                case 'water':
                    vulnerability = "Vulnerability to Lightning damage. Negates resistances. (Rank 2)";
                    break;
                case 'earth':
                    vulnerability = "Vulnerability to Thunder damage. Negates resistances. (Rank 2)";
                    break;
                case 'air':
                    vulnerability = "Vulnerability to Bludgeoning damage. Negates resistances. (Rank 2)";
                    break;
            }
            penalties.push({
                text: vulnerability,
                rank: 2
            });
        });
        
        // Add the healing penalty only once
        penalties.push({
            text: "Subtract 1d8 for every 10 hit points of magical healing you receive. (Rank 2)",
            rank: 2
        });
    }
    
    // Rank 3 penalties (totalEP >= 15)
    if (totalEp >= 15) {
        penalties.push({
            text: "All magical healing received is halved. (Rank 3)",
            rank: 3
        });
        penalties.push({
            text: "Outside of combat, must succeed an hourly DC 13 Constitution save or gain 1 level of Exhaustion. DC increases by 2 on every success. (Rank 3)",
            rank: 3
        });
    }
    
    // Rank 4 penalties (totalEP >= 20)
    if (totalEp >= 20) {
        penalties.push({
            text: "Disadvantage on attack rolls and ability checks that are not Echoed Spells. (Rank 4)",
            rank: 4
        });
        penalties.push({
            text: "Disadvantage on Wisdom (Perception) checks. (Rank 4)",
            rank: 4
        });
        penalties.push({
            text: "Your maximum hit points are reduced by half. (Rank 4)",
            rank: 4
        });
    }
    
    // Rank 5 penalties (totalEP == 25)
    if (totalEp === 25) {
        penalties.push({
            text: "The hourly Constitution save to avoid Exhaustion becomes DC 18. (Rank 5)",
            rank: 5
        });
        penalties.push({
            text: `Any creature that ends its turn within 10ft of you takes 2d6 ${getElementDamageType(dominantElements[0])} damage. (Rank 5)`,
            rank: 5
        });
        penalties.push({
            text: "You have disadvantage on all saving throws (cannot be countered by advantages). (Rank 5)",
            rank: 5
        });
        penalties.push({
            text: "This amount of EP will leave permanent scars on your body. (Rank 5)",
            rank: 1
        });
        penalties.push({
            text: `Take an additional 1d6 ${getElementDamageType(dominantElements[0])} damage when casting one of your Echoed Spells. (Rank 5)`,
            rank: 1
        });
    }
    
    // Render penalties
    renderPenalties(penalties);
}

// Get all dominant elements (handles ties)
function getDominantElements() {
    const elements = ['fire', 'water', 'earth', 'air'];
    let maxEp = 0;
    let dominantElements = [];
    
    // Find the maximum EP value
    elements.forEach(element => {
        if (characterState[element] > maxEp) {
            maxEp = characterState[element];
        }
    });
    
    // Find all elements with the maximum EP value
    elements.forEach(element => {
        if (characterState[element] === maxEp && maxEp > 0) {
            dominantElements.push(element.charAt(0).toUpperCase() + element.slice(1));
        }
    });
    
    return dominantElements.length > 0 ? dominantElements : ['None'];
}

// Render penalties list
function renderPenalties(penalties) {
    penaltiesList.innerHTML = '';
    
    if (penalties.length === 0) {
        penaltiesList.innerHTML = '<li class="no-penalties">No penalties at current EP level.</li>';
        return;
    }
    
    penalties.forEach(penalty => {
        const li = document.createElement('li');
        li.textContent = penalty.text;
        li.className = `rank-${penalty.rank}`;
        penaltiesList.appendChild(li);
    });
}

// Check if a spell is castable
function isSpellCastable(spell) {
    const cost = spell.cost;
    
    // Check EP requirements
    if (cost.fire && characterState.fire < cost.fire) return false;
    if (cost.water && characterState.water < cost.water) return false;
    if (cost.earth && characterState.earth < cost.earth) return false;
    if (cost.air && characterState.air < cost.air) return false;
    
    return true;
}

// Cast a spell (subtract EP cost)
function castSpell(spellIndex) {
    const spell = SPELLS_DATA[spellIndex];
    if (!isSpellCastable(spell)) return;
    
    const cost = spell.cost;
    
    // Subtract EP costs
    if (cost.fire) characterState.fire -= cost.fire;
    if (cost.water) characterState.water -= cost.water;
    if (cost.earth) characterState.earth -= cost.earth;
    if (cost.air) characterState.air -= cost.air;
    
    // Update displays
    Object.keys(characterState).forEach(element => {
        updateEpInput(element);
    });
    
    updateDisplay();
    saveToLocalStorage();
    renderSpells();
}

// Format spell cost for display
function formatSpellCost(cost) {
    const parts = [];
    
    if (cost.fire) parts.push(`${cost.fire} Fire EP`);
    if (cost.water) parts.push(`${cost.water} Water EP`);
    if (cost.earth) parts.push(`${cost.earth} Earth EP`);
    if (cost.air) parts.push(`${cost.air} Air EP`);
    if (cost.spellSlot) parts.push(`${cost.spellSlot}${getOrdinalSuffix(cost.spellSlot)} Level Slot`);
    if (cost.exhaustion) parts.push(`${cost.exhaustion} Level Exhaustion`);
    
    return parts.join(' + ');
}

// Get ordinal suffix
function getOrdinalSuffix(num) {
    if (num === 1) return 'st';
    if (num === 2) return 'nd';
    if (num === 3) return 'rd';
    return 'th';
}

// Render spells
function renderSpells() {
    const showAll = showAllSpellsCheckbox.checked;
    const castableSpells = SPELLS_DATA.filter(spell => isSpellCastable(spell));
    const spellsToShow = showAll ? SPELLS_DATA : castableSpells;
    
    spellsContainer.innerHTML = '';
    
    spellsToShow.forEach((spell, displayIndex) => {
        // Find the actual index in the original SPELLS_DATA array
        const actualIndex = SPELLS_DATA.findIndex(s => s.name === spell.name);
        const isCastable = isSpellCastable(spell);
        const spellCard = document.createElement('div');
        spellCard.className = `spell-card ${!isCastable ? 'uncastable' : ''}`;
        
        spellCard.innerHTML = `
            <div class="spell-header">
                <div class="spell-name">${spell.name}</div>
                <div class="spell-rank">Rank ${spell.rank} ${spell.element}</div>
            </div>
            <div class="spell-cost">Cost: ${formatSpellCost(spell.cost)}</div>
            <div class="spell-action">${spell.action}</div>
            <div class="spell-description">${spell.description}</div>
            <button class="cast-btn" ${!isCastable ? 'disabled' : ''} data-spell-index="${actualIndex}">
                Cast
            </button>
        `;
        
        // Add event listener to cast button
        const castBtn = spellCard.querySelector('.cast-btn');
        castBtn.addEventListener('click', () => castSpell(actualIndex));
        
        spellsContainer.appendChild(spellCard);
    });
}

// Handle spellcasting stats changes
function handleSpellcastingStatsChange(event) {
    const value = parseInt(event.target.value) || 0;
    const field = event.target.id;
    
    if (field === 'wisdom-mod') {
        characterState.wisdomMod = value;
    } else if (field === 'proficiency-bonus') {
        characterState.proficiencyBonus = value;
    }
    
    updateSpellcastingStats();
    saveToLocalStorage();
}

// Calculate and update spellcasting stats
function updateSpellcastingStats() {
    const wisdomMod = characterState.wisdomMod || 0;
    const proficiencyBonus = characterState.proficiencyBonus || 2;
    
    // Calculate spellcasting modifier
    const spellcastingModifier = proficiencyBonus + wisdomMod;
    
    // Calculate spell save DC
    const spellSaveDc = 8 + proficiencyBonus + wisdomMod;
    
    // Update displays
    spellcastingModifierDisplay.textContent = spellcastingModifier >= 0 ? `+${spellcastingModifier}` : `${spellcastingModifier}`;
    spellSaveDcDisplay.textContent = `DC ${spellSaveDc}`;
}

// Reset character state (for fixing corrupted data)
function resetCharacterState() {
    characterState = {
        fire: 0,
        water: 0,
        earth: 0,
        air: 0,
        wisdomMod: 0,
        proficiencyBonus: 2,
        featureUses: {
            'spell-slot-recovery': [false, false], // 2 uses, both unused
            'lunas-urging': [false] // 1 use, unused
        }
    };
    
    // Clear localStorage
    localStorage.removeItem('lingeringEchoCharacter');
    
    // Update all displays
    Object.keys(characterState).forEach(element => {
        if (element === 'wisdomMod') {
            wisdomModInput.value = characterState[element];
        } else if (element === 'proficiencyBonus') {
            proficiencyBonusInput.value = characterState[element];
        } else {
            const input = document.querySelector(`.ep-input[data-element="${element}"]`);
            if (input) {
                input.value = characterState[element];
            }
        }
    });
    
    updateDisplay();
    updateSpellcastingStats();
    saveToLocalStorage();
}

// Reset EP button
function resetEp() {
    console.log('Starting EP reset...');
    console.log('Before reset - characterState:', JSON.stringify(characterState, null, 2));
    
    // Reset EP values to 0 - be more explicit
    characterState.fire = 0;
    characterState.water = 0;
    characterState.earth = 0;
    characterState.air = 0;
    
    // Preserve featureUses
    if (!characterState.featureUses) {
        characterState.featureUses = {
            'spell-slot-recovery': [false, false],
            'lunas-urging': [false]
        };
    }
    
    console.log('After setting to 0 - characterState:', JSON.stringify(characterState, null, 2));
    
    // Update all input fields - be more explicit
    const fireInput = document.querySelector('.ep-input[data-element="fire"]');
    const waterInput = document.querySelector('.ep-input[data-element="water"]');
    const earthInput = document.querySelector('.ep-input[data-element="earth"]');
    const airInput = document.querySelector('.ep-input[data-element="air"]');
    
    if (fireInput) fireInput.value = 0;
    if (waterInput) waterInput.value = 0;
    if (earthInput) earthInput.value = 0;
    if (airInput) airInput.value = 0;
    
    console.log('After updating inputs - fire:', fireInput?.value, 'water:', waterInput?.value, 'earth:', earthInput?.value, 'air:', airInput?.value);
    
    // Force recalculation of total
    const calculatedTotal = getTotalEp();
    console.log('Calculated total after reset:', calculatedTotal);
    
    // Explicitly update total EP display
    totalEpDisplay.textContent = calculatedTotal;
    
    // Update dominant element
    dominantElementDisplay.textContent = 'None';
    
    // Validate and sync all displays
    validateAndSyncEpDisplays();
    
    // Update button states
    updateButtonStates();
    
    // Update penalties
    updatePenalties();
    
    // Update spell list
    renderSpells();
    
    // Update spellcasting stats
    updateSpellcastingStats();
    
    // Save to localStorage
    saveToLocalStorage();
    
    console.log('EP reset completed. Final characterState:', JSON.stringify(characterState, null, 2));
    console.log('Final total EP display:', totalEpDisplay.textContent);
}

// Convert element name to damage type
function getElementDamageType(element) {
    switch (element.toLowerCase()) {
        case 'fire':
            return 'fire';
        case 'water':
            return 'cold';
        case 'earth':
            return 'bludgeoning';
        case 'air':
            return 'force';
        default:
            return element.toLowerCase();
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init); 
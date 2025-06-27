# Circle of the Lingering Echo - Character Sheet

A mobile-first, single-page web application for tracking Elemental Points (EP) and managing Echoed Spells for the "Circle of the Lingering Echo" Druid subclass in Dungeons & Dragons.

## Features

### 🔥 Siphoned Elements Tracker
- Track Elemental Points for all four elements: Fire, Water, Earth, and Air
- Individual number inputs (0-25) for each element
- Quick adjustment buttons (+/-) for each element
- Total EP display with 25-point maximum constraint
- Automatic disabling of controls when maximum is reached
- Real-time validation and constraint enforcement
- **Reset EP button** to quickly clear all EP values
- **Comprehensive data validation** to prevent display/backend mismatches

### ⚠️ Elemental Overload Penalties
- Dynamic penalty calculation based on total EP
- Real-time dominant element detection with **tie support**
- Cumulative penalty system with 5 ranks:
  - **Rank 1** (≥5 EP): Appearance changes, stealth disadvantages, and elemental damage when casting spells
  - **Rank 2** (≥10 EP): Element-specific vulnerabilities (Fire→Cold, Water→Lightning, Earth→Thunder, Air→Bludgeoning) and healing reduction
  - **Rank 3** (≥15 EP): Healing reduction and exhaustion risk with increasing DC
  - **Rank 4** (≥20 EP): Attack/ability check disadvantages, perception disadvantages, and HP reduction
  - **Rank 5** (25 EP): Increased exhaustion DC, area damage, saving throw disadvantages, and permanent scarring
- **Proper damage type conversion** (Water→Cold, Earth→Bludgeoning, Air→Force)
- **Multiple dominant elements** supported (shows all relevant vulnerabilities)

### 🎯 Spellcasting Stats
- **Compact, inline section** with Wisdom Modifier and Proficiency Bonus inputs
- **Real-time calculations**:
  - Spellcasting Modifier = Prof. + Wis (displayed with "+" prefix)
  - Spell Save DC = 8 + Prof. + Wis (displayed with "DC" prefix)
- **Data persistence** across browser sessions
- **Responsive design** that fits on one line

### 🪄 Available Echoed Spells
- Complete spell library with **40+ unique spells** across 6 ranks
- **Real-time filtering** based on available EP
- **Mixed-element spells** supported (Fire+Water, Earth+Air, etc.)
- **Advanced spell costs** including EP, spell slots, and exhaustion
- Spell cards showing:
  - Name and rank
  - Element type (including mixed elements)
  - EP and spell slot costs
  - Action type (Action, Bonus Action, Reaction)
  - Full spell descriptions
- **"Cast" functionality** that automatically deducts EP costs
- **"Show All Spells" toggle** to view unavailable spells (grayed out)
- **Dynamic spell list updates** when EP values change

### 📋 Additional Features Section
- **Core Class Features** documentation
- **Siphon Element** ability description
- **Elemental Points** mechanics explanation
- **Spell Slot Recovery** with **2-use checklist** (circular buttons)
- **Luna's Urging** with **1-use checklist** (circular button)
- **Visual checklist system** with empty/filled circles
- **Persistent checklist states** saved to localStorage

### 💾 Data Persistence
- All EP values, spellcasting stats, and feature uses automatically saved to browser localStorage
- Data persists across browser sessions and page refreshes
- **Robust error handling** and data validation
- **Self-healing system** that fixes data corruption automatically

## Technical Implementation

### Core Technologies
- **HTML5**: Semantic structure and accessibility
- **CSS3**: Mobile-first responsive design with Flexbox and Grid
- **Vanilla JavaScript**: No frameworks or dependencies required

### Design Features
- **Mobile-First**: Optimized for mobile devices with responsive breakpoints
- **Modern UI**: Clean, intuitive interface with smooth animations
- **Element-Specific Styling**: Color-coded elements for easy identification
- **Progressive Enhancement**: Works on all modern browsers
- **Visual Feedback**: Hover effects, transitions, and clear state indicators

### Responsive Breakpoints
- **Mobile**: Single-column layout (default)
- **Tablet** (768px+): Two-column element grid, improved spell layout
- **Desktop** (1024px+): Four-column element grid, optimized spell cards

## Usage

### Getting Started
1. Open `index.html` in any modern web browser
2. The application will automatically load any previously saved values
3. Start tracking your Elemental Points using the controls at the top

### Managing Elemental Points
- **Direct Input**: Click on any number field to enter a value (0-25)
- **Quick Adjustments**: Use the + and - buttons for incremental changes
- **Automatic Constraints**: The system prevents exceeding 25 total EP
- **Real-time Updates**: All displays update immediately as you make changes
- **Reset Button**: Click "Reset EP" to clear all EP values to 0

### Understanding Penalties
- Penalties appear automatically as your total EP increases
- **Multiple dominant elements** are supported (e.g., 10 Fire + 10 Water shows both vulnerabilities)
- All penalties are cumulative and stack with EP increases
- **Element priority for ties**: Fire > Water > Earth > Air
- **Proper damage types** are displayed (Water→Cold, Earth→Bludgeoning, Air→Force)

### Using Echoed Spells
- Available spells are automatically filtered based on your current EP
- Click "Cast" to automatically deduct the spell's EP cost
- Use "Show All Spells" to see unavailable spells (grayed out)
- Spell costs include EP, spell slots, and exhaustion requirements
- **Mixed-element spells** require EP from multiple elements

### Spellcasting Stats
- Enter your **Wisdom Modifier** and **Proficiency Bonus**
- **Spellcasting Modifier** and **Spell Save DC** are calculated automatically
- Values persist across browser sessions

### Additional Features
- **Informational features** provide reference for class abilities
- **Checklist features** have circular buttons to track uses
- Click empty circles to mark features as used
- Click filled circles to mark features as unused
- All checklist states are saved automatically

## File Structure

```
├── index.html          # Main HTML structure
├── styles.css          # Mobile-first responsive CSS
├── script.js           # Application logic and functionality
└── README.md           # This documentation
```

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Local Storage

The application uses `localStorage` with the key `lingeringEchoCharacter` to store:
```json
{
  "fire": 0,
  "water": 0,
  "earth": 0,
  "air": 0,
  "wisdomMod": 0,
  "proficiencyBonus": 2,
  "featureUses": {
    "spell-slot-recovery": [false, false],
    "lunas-urging": [false]
  }
}
```

## Spell Library

The application includes 40+ unique Echoed Spells across 6 ranks:

### Rank 1 Spells (4 EP)
- **Immolating Arrow/Strike** (Fire)
- **Grasping Tide** (Water)
- **Stone Endurance** (Earth)
- **Zephyr's Lift/Push** (Air)

### Rank 2 Spells (8 EP + 1st Level Slot)
- **Controlled Burst** (Fire)
- **Suffocating Globe** (Water)
- **Earthen Ward** (Earth)
- **Expeditious Gale** (Air)
- **Mixed Element Spells**: Scalding Burst (Fire+Water), Heated Carapace (Fire+Earth), Obscuring Mist (Water+Air), Clinging Mud (Water+Earth)

### Rank 3 Spells (12 EP + 2nd Level Slot)
- **Fiery Aegis** (Fire)
- **Drowning Aura** (Water)
- **Stoneform** (Earth)
- **Vortex Shield** (Air)
- **Mixed Element Spells**: Magma Wave (Earth+Fire), Smoke Suffocation (Fire+Air), Charged Cloud (Water+Air)

### Rank 4 Spells (16 EP + 3rd Level Slot)
- **Flame Funnel** (Fire)
- **Seafarer** (Water)
- **Stone Shell** (Earth)
- **Tailwind** (Air)
- **Mixed Element Spells**: Sandstorm (Earth+Air), Erupting Geyser (Fire+Water), Flash Freeze (Water+Earth)

### Rank 5 Spells (20 EP + 4th Level Slot)
- **Inferno** (Fire)
- **Ice Prison** (Water)
- **Boulderfist** (Earth)
- **Stormrider** (Air)
- **Mixed Element Spells**: Firestorm (Fire+Air), Primal Tsunami (Water+Earth)

### Rank 6 Spells (25 EP + 5th Level Slot + Exhaustion)
- **Solar Flare** (Fire)
- **Tidal Recall** (Water)
- **Aspect of the Colossus** (Earth)
- **Eye of the Hurricane** (Air)

## Development

This is a vanilla JavaScript application with no build process required. Simply open `index.html` in a browser to run the application.

### Key Functions
- `init()`: Application initialization
- `updateDisplay()`: Updates all UI elements with validation
- `updatePenalties()`: Calculates and displays penalties with damage type conversion
- `renderSpells()`: Filters and displays available spells
- `castSpell()`: Handles spell casting and EP deduction
- `validateAndSyncEpDisplays()`: Ensures display/backend synchronization
- `updateSpellcastingStats()`: Calculates spellcasting modifier and save DC
- `handleChecklistClick()`: Manages feature use tracking

### Data Validation
- **Comprehensive validation** prevents data corruption
- **Automatic synchronization** between display and backend state
- **Self-healing system** fixes mismatches automatically
- **Robust error handling** for all user interactions

## License

This project is created for educational and gaming purposes. Feel free to use and modify for your D&D campaigns. 

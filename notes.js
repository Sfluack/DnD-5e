/*  -- Dark Mode based on browser settings
@media (prefers-color-scheme: dark) {
    body {
        background-color: var(--dark-grey);
        border-color: var(--medium-grey);
        color: var(--light-grey);
    }
}
*/

/* D&D Skills
    1) Acrobatics (Dex)
    2) Animal Handling (Wis)
    3) Arcana (Int)
    4) Athletics (Str)
    5) Deception (Cha)
    6) History (Int)
    7) Insight (Wis)
    8) Intimidation (Cha)
    9) Investigation (Int)
    10) Medicine (Wis)
    11) Nature (Int)
    12) Perception (Wis)
    13) Performance (Cha)
    14) Persuasion (Cha)
    15) Religion (Wis)
    16) Sleight of Hand (Dex)
    17) Stealth (Dex)
    18) Survival (Wis)
*/

/* ABILITY SCORES TINKERING
<section class="body-section">
    <fieldset>
        <legend>Ability Scores</legend>
        <div class="grid grid-cols-repeat3-100px grid-rows-auto-auto grid-gap-3px">
            <!-- Con -->
            <div class="stat-box" data-stat="con">
                <header class="bold border-bottom">Constitution</header>
                <div class="md-font"><input type="number" value="0" min="1" max="30"></div>
                <div class="relative clear-both">
                    <div class="float-left">
                        <div data-stat-bonus="0">+0</div>
                        <div class="italic">Bonus</div>
                    </div>
                    <div class="float-right">
                        <div data-stat-save="0">+0</div>
                        <div class="italic"><input type="checkbox"> Save</div>
                    </div>
                </div>
            </div>
            <!-- Str -->
            <div class="stat-box" data-stat="str">
                <header class="bold border-bottom">Strength</header>
                <div class="md-font"><input type="number" value="0" min="1" max="30"></div>
                <div class="relative clear-both">
                    <div class="float-left">
                        <div data-stat-bonus="0">+0</div>
                        <div class="italic">Bonus</div>
                    </div>
                    <div class="float-right">
                        <div data-stat-save="0">+0</div>
                        <div class="italic"><input type="checkbox"> Save</div>
                    </div>
                </div>
            </div>
            <!-- Dex -->
            <div class="stat-box" data-stat="dex">
                <header class="bold border-bottom">Dexterity</header>
                <div class="md-font"><input type="number" value="0" min="1" max="30"></div>
                <div class="relative clear-both">
                    <div class="float-left">
                        <div data-stat-bonus="0">+0</div>
                        <div class="italic">Bonus</div>
                    </div>
                    <div class="float-right">
                        <div data-stat-save="0">+0</div>
                        <div class="italic"><input type="checkbox"> Save</div>
                    </div>
                </div>
            </div>
            <!-- Int -->
            <div class="stat-box" data-stat="int">
                <header class="bold border-bottom">Intelligence</header>
                <div class="md-font"><input type="number" value="0" min="1" max="30"></div>
                <div class="relative clear-both">
                    <div class="float-left">
                        <div data-stat-bonus="0">+0</div>
                        <div class="italic">Bonus</div>
                    </div>
                    <div class="float-right">
                        <div data-stat-save="0">+0</div>
                        <div class="italic"><input type="checkbox"> Save</div>
                    </div>
                </div>
            </div>
            <!-- Wis -->
            <div class="stat-box" data-stat="wis">
                <header class="bold border-bottom">Wisdom</header>
                <div class="md-font"><input type="number" value="0" min="1" max="30"></div>
                <div class="relative clear-both">
                    <div class="float-left">
                        <div data-stat-bonus="0">+0</div>
                        <div class="italic">Bonus</div>
                    </div>
                    <div class="float-right">
                        <div data-stat-save="0">+0</div>
                        <div class="italic"><input type="checkbox"> Save</div>
                    </div>
                </div>
            </div>
            <!-- Cha -->
            <div class="stat-box" data-stat="cha">
                <header class="bold border-bottom">Charisma</header>
                <div class="md-font"><input type="number" value="0" min="1" max="30"></div>
                <div class="relative clear-both">
                    <div class="float-left">
                        <div data-stat-bonus="0">+0</div>
                        <div class="italic">Bonus</div>
                    </div>
                    <div class="float-right">
                        <div data-stat-save="0">+0</div>
                        <div class="italic"><input type="checkbox"> Save</div>
                    </div>
                </div>
            </div>
        </div>
    </fieldset>
</section>

.grid {
    display: grid;
}

.grid-cols-auto-auto {
    grid-template-columns: auto auto;
}

.grid-cols-repeat3-100px {
    grid-template-columns: repeat(3, 100px);
}

.grid-rows-auto-auto {
    grid-template-rows: auto auto;
}

.grid-gap-3px {
    grid-gap: 3px;
}

.stat-box {
    border-radius: 10px;
    font-size: 0.75rem;
    text-align: center;
    border: 1px solid;

    header {
        font-size: 0.9rem;
        padding: 3px;
    }

    input[type=checkbox] {
        vertical-align: middle;
    }
}

.stat-box > div:nth-of-type(1) {
    padding: 3px;
}

.stat-box > div:nth-of-type(2) {
    border-top: 1px solid;
}

.stat-box > div:nth-of-type(2) > div {
    padding: 3px;
}

.stat-box > div:nth-of-type(2) > div:nth-of-type(2) {
    border-left: 1px solid;
}
*/


/*
<!-- Ability Score Section -->
<section class="body-section">
    <fieldset>
        <legend>Ability Scores</legend>
        <table id="ability-scores-0">
            <tr>
                <td></td>
                <td>Con</td>
                <td>Str</td>
                <td>Dex</td>
                <td>Int</td>
                <td>Wis</td>
                <td>Cha</td>
            </tr>
            <tr>
                <td>Score</td>
                <td><input id="c-0-con" type="number" placeholder="0" min="1" max="30"></td>
                <td><input id="c-0-str" type="number" placeholder="0" min="1" max="30"></td>
                <td><input id="c-0-dex" type="number" placeholder="0" min="1" max="30"></td>
                <td><input id="c-0-int" type="number" placeholder="0" min="1" max="30"></td>
                <td><input id="c-0-wis" type="number" placeholder="0" min="1" max="30"></td>
                <td><input id="c-0-cha" type="number" placeholder="0" min="1" max="30"></td>
            </tr>
            <tr>
                <td>Mod</td>
                <td id="c-0-con-mod">0</td>
                <td id="c-0-str-mod">0</td>
                <td id="c-0-dex-mod">0</td>
                <td id="c-0-int-mod">0</td>
                <td id="c-0-wis-mod">0</td>
                <td id="c-0-cha-mod">0</td>
            </tr>
            <tr>
                <td>Save</td>
                <td><input id="c-0-con-save-chk" type="checkbox"><span id="c-0-con-save">0</span></td>
                <td><input id="c-0-str-save-chk" type="checkbox"><span id="c-0-str-save">0</span></td>
                <td><input id="c-0-dex-save-chk" type="checkbox"><span id="c-0-dex-save">0</span></td>
                <td><input id="c-0-int-save-chk" type="checkbox"><span id="c-0-int-save">0</span></td>
                <td><input id="c-0-wis-save-chk" type="checkbox"><span id="c-0-wis-save">0</span></td>
                <td><input id="c-0-cha-save-chk" type="checkbox"><span id="c-0-cha-save">0</span></td>
            </tr>
        </table>
    </fieldset>
</section>
*/

/*
<!-- Misc Section -->
<section class="body-section">
    <fieldset class="text-center">
        <legend>Passive<br>Perception</legend>
        <span id="c-0-passperc">10</span>
    </fieldset>
    <fieldset class="text-center">
        <legend>Inspiration</legend>
        <span id="c-0-insp">0</span>
    </fieldset>
    <fieldset class="text-center">
        <legend>Proficiency</legend>
        +<span id="c-0-prof">1</span>
    </fieldset>
    <fieldset class="text-center">
        <legend>Speed</legend>
        <span id="c-0-speed">30</span>ft
    </fieldset>
    <fieldset class="text-center">
        <legend>Initiative</legend>
        +<span id="c-0-init">1</span>
    </fieldset>
    <fieldset class="text-center">
        <legend>Armor</legend>
        <span id="c-0-ac">12</span>
    </fieldset>
</section>
*/
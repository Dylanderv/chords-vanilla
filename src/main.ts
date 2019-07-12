import { init, initInstrumentSelector } from "./chordViewHandlers/selectorHandler";
import { initLangButton } from "./helpers/chordEnFr";
import { authenticate, logout } from "./backendHandler";
import { getAuthenticatedUser } from "./backendHandler/graphql";

// Initialisation des variables de base
const langSelector = document.getElementById('langSelector') as HTMLDivElement;
const instrumentSelector = document.getElementById('instrumentSelector') as HTMLDivElement;
const chordTypeSelector = document.getElementById('chordTypeSelector') as HTMLDivElement;
const chordSelector = document.getElementById('chordSelector') as HTMLDivElement;
const chordShow = document.getElementById('chordShow') as HTMLDivElement;
const authButton = document.getElementById('auth') as HTMLButtonElement;
const queryButton = document.getElementById('query') as HTMLButtonElement;
const logoutButton = document.getElementById('logout') as HTMLButtonElement;

authButton.addEventListener('click', async (ev) => console.log(await authenticate('dylanderv', '1234')));
logoutButton.addEventListener('click', async (ev) => console.log(await logout()));

queryButton.addEventListener('click', async (ev) => console.log(await getAuthenticatedUser()))

// Lancement des fonctions d'initialisation
initLangButton(langSelector);
init(instrumentSelector, chordTypeSelector, chordSelector, chordShow);
initInstrumentSelector();

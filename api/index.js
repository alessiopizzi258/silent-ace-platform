const express = require('express');
const app = express();

// Componenti UI modulari
const head = (title) => `
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Silent Ace | ${title}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body { background-color: #050505; color: #ededed; font-family: 'Inter', -apple-system, sans-serif; }
        .hero-gradient { background: radial-gradient(circle at 50% 0%, #1a1a2e 0%, #050505 70%); }
    </style>
</head>
<body class="antialiased flex flex-col min-h-screen">
`;

const footer = `
    <footer class="mt-auto border-t border-gray-800 py-12 text-sm text-gray-400">
        <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
                <h4 class="text-white font-bold mb-4 uppercase tracking-widest text-xs">Informazioni Aziendali</h4>
                <p>Nome commerciale: <strong>Silent Ace</strong></p>
                <p>Titolare: Alessio Pizzi</p>
                <p>Indirizzo: Via Palermo, 89030 Condofuri (RC), IT</p>
                <p>CF/P.IVA: PZZLSS04M25F112L</p>
                <p>Email Assistenza: <a href="mailto:alessiopizzi258@gmail.com" class="text-blue-400">alessiopizzi258@gmail.com</a></p>
            </div>
            <div>
                <h4 class="text-white font-bold mb-4 uppercase tracking-widest text-xs">Legal & Compliance</h4>
                <ul class="space-y-2">
                    <li><a href="/termini" class="hover:text-white transition">Termini e Condizioni</a></li>
                    <li><a href="/privacy" class="hover:text-white transition">Privacy & Cookie Policy</a></li>
                    <li><a href="/rimborsi" class="hover:text-white transition">Politica di Rimborso e Annullamento</a></li>
                </ul>
            </div>
        </div>
    </footer>
</body>
</html>
`;

const nav = `
    <nav class="p-6 max-w-6xl mx-auto w-full flex justify-between items-center">
        <div class="font-bold text-xl tracking-tighter"><a href="/">SILENT ACE.</a></div>
        <a href="mailto:alessiopizzi258@gmail.com" class="text-sm font-medium border border-gray-700 px-4 py-2 rounded hover:bg-white hover:text-black transition">Richiedi Accesso</a>
    </nav>
`;

// Rotta Principale (Landing Page)
app.get('/', (req, res) => {
    res.send(`
        ${head('Ingegneria del Dominio Assoluto')}
        <div class="hero-gradient flex-grow">
            ${nav}
            <main class="max-w-4xl mx-auto px-6 py-24 text-center">
                <h1 class="text-5xl md:text-7xl font-bold tracking-tight mb-8">Ingegneria del<br><span class="text-gray-500">Dominio Assoluto.</span></h1>
                <p class="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">Costruiamo ecosistemi web e sistemi avanzati di acquisizione che trasformano il traffico in liquidità immediata. Nessun sito vetrina. Architettiamo infrastrutture blindate.</p>
                
                <div class="grid md:grid-cols-3 gap-6 text-left mt-20">
                    <div class="p-6 border border-gray-800 rounded-lg bg-black/50">
                        <h3 class="text-white font-bold mb-2">I. Frontend Immersivo</h3>
                        <p class="text-gray-500 text-sm">Interfacce focalizzate sulla psicologia dell'utente. Spazio negativo e tipografia rigorosa per guidare all'azione.</p>
                    </div>
                    <div class="p-6 border border-gray-800 rounded-lg bg-black/50">
                        <h3 class="text-white font-bold mb-2">II. Backend Blindato</h3>
                        <p class="text-gray-500 text-sm">Flussi di dati gestiti con precisione militare. Scalabilità immediata e zero tempi di inattività.</p>
                    </div>
                    <div class="p-6 border border-gray-800 rounded-lg bg-black/50">
                        <h3 class="text-white font-bold mb-2">III. Acquisizione Attiva</h3>
                        <p class="text-gray-500 text-sm">Raggiungiamo i decisori aziendali, trasformando contatti freddi in negoziazioni ad alto margine.</p>
                    </div>
                </div>
            </main>
        </div>
        ${footer}
    `);
});

// Rotte Compliance Stripe
app.get('/termini', (req, res) => {
    res.send(`
        ${head('Termini e Condizioni')}
        ${nav}
        <main class="max-w-3xl mx-auto px-6 py-12 flex-grow text-gray-300">
            <h1 class="text-3xl font-bold text-white mb-6">Termini e Condizioni</h1>
            <p class="mb-4">I presenti Termini e Condizioni regolano l'acquisto e l'utilizzo dei servizi digitali e di sviluppo software forniti da Silent Ace.</p>
            <h2 class="text-xl text-white mt-6 mb-2">1. Erogazione dei servizi</h2>
            <p class="mb-4">L'erogazione dei servizi software o digitali avviene in modalità remota. I tempi di consegna verranno concordati in fase di contatto iniziale.</p>
            <h2 class="text-xl text-white mt-6 mb-2">2. Pagamenti e Fatturazione</h2>
            <p class="mb-4">I pagamenti vengono processati in modo sicuro tramite Stripe. Tutti i costi sono espressi in Euro. Per i piani in abbonamento, l'addebito avviene automaticamente su base ricorrente (mensile o annuale) fino ad annullamento.</p>
        </main>
        ${footer}
    `);
});

app.get('/privacy', (req, res) => {
    res.send(`
        ${head('Privacy Policy')}
        ${nav}
        <main class="max-w-3xl mx-auto px-6 py-12 flex-grow text-gray-300">
            <h1 class="text-3xl font-bold text-white mb-6">Privacy & Cookie Policy</h1>
            <p class="mb-4">Silent Ace ("Titolare del trattamento") si impegna a proteggere i dati personali degli utenti nel rispetto del Regolamento UE 2016/679 (GDPR).</p>
            <h2 class="text-xl text-white mt-6 mb-2">Dati raccolti e finalità</h2>
            <p class="mb-4">Raccogliamo unicamente i dati necessari alla fatturazione e all'erogazione del servizio (Email, Nome, Dati di fatturazione). I dati non vengono ceduti a terze parti. I pagamenti sono gestiti esternamente da Stripe, pertanto nessun dato relativo alle carte di credito viene salvato sui nostri server.</p>
        </main>
        ${footer}
    `);
});

app.get('/rimborsi', (req, res) => {
    res.send(`
        ${head('Politica di Rimborso e Annullamento')}
        ${nav}
        <main class="max-w-3xl mx-auto px-6 py-12 flex-grow text-gray-300">
            <h1 class="text-3xl font-bold text-white mb-6">Politica di Rimborso e Annullamento</h1>
            <h2 class="text-xl text-white mt-6 mb-2">1. Annullamento degli abbonamenti</h2>
            <p class="mb-4">I clienti possono annullare i propri abbonamenti ricorrenti in qualsiasi momento contattando l'assistenza all'indirizzo email alessiopizzi258@gmail.com. L'annullamento sarà effettivo dal ciclo di fatturazione successivo. Non verranno addebitati ulteriori costi.</p>
            <h2 class="text-xl text-white mt-6 mb-2">2. Prodotti Digitali e Licenze</h2>
            <p class="mb-4">A causa della natura digitale e immateriale dei beni forniti (codice sorgente, servizi di hosting e software custom), e nel rispetto delle normative sulle vendite a distanza per i contenuti digitali scaricabili, <strong>non sono previsti rimborsi</strong> una volta che il servizio è stato erogato, a meno di gravi inadempienze tecniche dimostrabili da parte nostra.</p>
        </main>
        ${footer}
    `);
});

module.exports = app;
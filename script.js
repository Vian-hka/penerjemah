document.getElementById('translator-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const inputText = document.getElementById('input-text').value;
    const sourceLang = document.getElementById('source-lang').value;
    const targetLang = document.getElementById('target-lang').value;

    const translatedText = translateText(inputText, sourceLang, targetLang);
    document.getElementById('translated-text').textContent = translatedText;
});

function translateText(text, sourceLang, targetLang) {
    const dictionary = {
        'en': {
            'es': { 'Hello': 'Hola', 'How are you?': '¿Cómo estás?' },
            'fr': { 'Hello': 'Bonjour', 'How are you?': 'Comment ça va?' },
            'id': { 'Hello': 'Halo', 'How are you?': 'Apa kabar?' }
        },
        'es': {
            'en': { 'Hola': 'Hello', '¿Cómo estás?': 'How are you?' },
            'fr': { 'Hola': 'Bonjour', '¿Cómo estás?': 'Comment ça va?' },
            'id': { 'Hola': 'Halo', '¿Cómo estás?': 'Apa kabar?' }
        },
        // Add more language pairs and translations
    };

    if (dictionary[sourceLang] && dictionary[sourceLang][targetLang]) {
        return dictionary[sourceLang][targetLang][text] || text;
    }

    return text;
}

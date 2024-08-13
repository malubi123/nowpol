async function generateContent() {
    const inputText = document.getElementById('inputText').value;
    const contentDiv = document.getElementById('content');
    const styleElement = document.getElementById('dynamic-style');

    if (!inputText.trim()) {
        contentDiv.innerHTML = '<p>Proszę wprowadzić tekst.</p>';
        return;
    }

    try {
        // Wstaw URL darmowego API, które generuje losowe kolory i teksty
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();

        // Generowanie dynamicznego stylu
        const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        styleElement.innerHTML = `
            body {
                background-color: ${randomColor};
                color: ${randomColor};
                font-family: Arial, sans-serif;
                margin: 20px;
            }
        `;

        // Uaktualnianie treści
        contentDiv.innerHTML = `
            <h2>${inputText}</h2>
            <p>${data.slip.advice}</p>
        `;
    } catch (error) {
        console.error('Błąd:', error);
        contentDiv.innerHTML = '<p>Wystąpił błąd. Spróbuj ponownie później.</p>';
    }
}

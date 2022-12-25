const quote = document.querySelector(".quote");


async function getQuote() {
    try {
        const response = await fetch('https://api-quotes-sofi.vercel.app/quote');

        if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result)
        quote.textContent = result.quote;
    } catch (err) {
        console.log(err);
    }
}

getQuote();

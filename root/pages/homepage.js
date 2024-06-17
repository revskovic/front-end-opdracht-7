function runSeoChecker() {
    let results = '';

    // Check title
    const title = document.querySelector('title');
    if (title && title.textContent.length > 0) {
        results += `<p>✅ Titel is aanwezig: ${title.textContent}</p>`;
    } else {
        results += '<p>❌ Titel ontbreekt</p>';
    }

    // Check meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && metaDescription.content.length > 0) {
        results += `<p>✅ Meta description is aanwezig: ${metaDescription.content}</p>`;
    } else {
        results += '<p>❌ Meta description ontbreekt</p>';
    }

    // Check headers
    const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    if (headers.length > 0) {
        results += '<p>✅ Headers zijn aanwezig</p>';
    } else {
        results += '<p>❌ Headers ontbreken</p>';
    }

    // Check images for alt attributes
    const images = document.querySelectorAll('img');
    let allImagesHaveAlt = true;
    images.forEach(img => {
        if (!img.hasAttribute('alt') || img.getAttribute('alt').trim() === '') {
            allImagesHaveAlt = false;
        }
    });
    if (allImagesHaveAlt) {
        results += '<p>✅ Alle afbeeldingen hebben alt-attributen</p>';
    } else {
        results += '<p>❌ Sommige afbeeldingen missen alt-attributen</p>';
    }

    // Check for internal links
    const links = document.querySelectorAll('a');
    if (links.length > 0) {
        results += '<p>✅ Er zijn interne links aanwezig</p>';
    } else {
        results += '<p>❌ Er ontbreken interne links</p>';
    }

    // Display results
    document.getElementById('seo-results').innerHTML = results;
}

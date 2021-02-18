import DirectusSDK from '@directus/sdk-js';

const directus = new DirectusSDK('https://gita-db.azurewebsites.net/');

async function fetchDataFromDirectus() {
	// Wait for login to be done...
	await directus.auth.login({ email: 'api@bhagavad-gita.site', password: 'APIP@ssw0rd' });

	// ... before fetching items
	return await directus.items('recordings').read({
        limit: 1000
    });
}

export default fetchDataFromDirectus

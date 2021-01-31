import DirectusSDK from '@directus/sdk-js';

const directus = new DirectusSDK('http://localhost:8055/');

async function fetchDataFromDirectus() {
	// Wait for login to be done...
	await directus.auth.login({ email: 'api@bhagavad-gita.site', password: 'APIP@ssw0rd' });

	// ... before fetching items
	return await directus.items('recordings').read({
        limit: 1000
    });
}

export default fetchDataFromDirectus

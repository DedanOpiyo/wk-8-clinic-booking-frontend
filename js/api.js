const BASE_URL = 'https://database-wk-8-complete-database-management-syste-production.up.railway.app'; // Railway

export async function fetchData(endpoint) {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`);
    return await res.json();
  } catch (err) {
    console.error(`Error fetching ${endpoint}:`, err);
    return null;
  }
}

export async function postData(endpoint, data) {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return await res.json();
  } catch (err) {
    console.error(`Error posting to ${endpoint}:`, err);
    return null;
  }
}

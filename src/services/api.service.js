import {API_URL} from "../common/config";

const ApiService = {
  store: async (resource, data) => {
    const response = await fetch(`${API_URL}/${resource}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/ld+json'
      }
    });

    return await response.json();
  }
};

export default ApiService;

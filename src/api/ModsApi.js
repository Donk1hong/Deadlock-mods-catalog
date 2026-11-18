export class ModsApi {
  async getMods() {
    const response = await fetch('/api/v2/mods', {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const mods = await response.json();

    if (!Array.isArray(mods)) {
      throw new Error(`The API returned unadjusted data`);
    }

    return mods;
  }
}

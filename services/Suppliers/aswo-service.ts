import { PartsSupplier } from './types';

const aswoSupplier: PartsSupplier = {
    fetchParts: async (search: string) => {
    const key = process.env.EXPO_PUBLIC_ASWO_KEY;
    const response = await fetch(`https://aswoshop.aswo.com/service/customerapi/devicesearch?devicesearchterms=${search}&format=FFFF?key=${key}`, {
        method: 'GET',
        headers: { "Content-Type": "application/json" },
    });
    return await response.json();
}
};
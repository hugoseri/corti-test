/**
 * Based on https://stackoverflow.com/a/38622545
 * Generate random 5-character string
 * @returns 5-character long string
 */
export const generateRandomId = () => {
    return Math.random().toString(36).slice(2, 7);
}
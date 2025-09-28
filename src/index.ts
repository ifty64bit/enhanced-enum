/**
 * Create a frozen, enum-like object that supports reverse lookups by value.
 *
 * @template {Record<string, number>} T
 * @param {T} obj - The forward mapping of enum keys to numeric values.
 * @returns {Readonly<T & { reverse: { [V in T[keyof T]]: keyof T } }>} A read-only object containing the original mapping and a reverse index.
 */
export function createEnum<const T extends Record<string, number>>(obj: T) {
    const reverse = Object.fromEntries(
        Object.entries(obj).map(([k, v]) => [v, k])
    ) as { [V in T[keyof T]]: keyof T };

    return Object.freeze({
        ...obj,
        reverse,
    });
}

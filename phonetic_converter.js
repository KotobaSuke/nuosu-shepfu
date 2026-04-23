import { initials, finals, tones } from './data_phonetics.js';

/**
 * @param {string} latinSyllable
 * @returns {string|null}
 */

export function toIPA(latinSyllable) {
    let remaining = latinSyllable;
    let initialIPA = "";
    let finalIPA = "";
    let toneMark = tones["­"];

    const lastChar = remaining.slice(-1);
    if (["t", "x", "p"].includes(lastChar)) {
        toneMark = tones[lastChar];
        remaining = remaining.slice(0, -1);
    }

    const initialKeys = Object.keys(initials).sort((a, b) => b.length - a.length);
    for (const key of initialKeys) {
        if (remaining.startsWith(key)) {
            initialIPA = initials[key];
            remaining = remaining.slice(key.length);
            break;
        }
    }

    if (finals[remaining]) {
        finalIPA = finals[remaining];
    } else {
        console.warn(`Unknown final: "${remaining}" in syllable "${latinSyllable}"`);
        return null;
    }

    return initialIPA + finalIPA + toneMark;
}
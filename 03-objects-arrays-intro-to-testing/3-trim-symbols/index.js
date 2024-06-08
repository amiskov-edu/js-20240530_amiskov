/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
    if (size === undefined) {
        return string;
    }

    let count = 1;
    let prev = '';
    let res = '';
    for (const cur of string) {
        if (prev === cur) {
            count += 1;
        } else {
            prev = cur;
            count = 1;
        }
        if (count > size) {
            continue;
        }
        res += cur;
    }
    return res;
}

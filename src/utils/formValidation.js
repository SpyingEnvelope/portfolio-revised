export function isPhone(num) {
    const regex = /[a-zA-Z]/;
    const containsLetters = num.match(regex);

    if (containsLetters) {
        return false;
    } else {
        return true;
    }
}
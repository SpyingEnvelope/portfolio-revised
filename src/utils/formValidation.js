/* This function is used to check if Phone section of the contact form does not have any letters in it. 
PARAMETERS:
NUM: STRING the phone number to check for letters in. */
export function isPhone(num) {
    const regex = /[a-zA-Z]/;
    const containsLetters = num.match(regex);

    if (containsLetters) {
        return false;
    } else {
        return true;
    }
}
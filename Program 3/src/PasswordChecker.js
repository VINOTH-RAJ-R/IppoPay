function isStrong(password) {
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasDigit = /\d/.test(password);
    const noRepeatingChars = /^(?!.*(.)\1\1).*$/.test(password);

    return (
        password.length >= 6 &&
        password.length <= 20 &&
        hasLowerCase &&
        hasUpperCase &&
        hasDigit &&
        noRepeatingChars
    );
}


function minStepsToMakeStrong(password) {
    let steps = 0;

    if (password.length < 6) {
        steps += 6 - password.length;
    } else if (password.length > 20) {
        steps += password.length - 20;
    }


    if (!/[a-z]/.test(password)) {
        steps++;
    }

    for (let i = 0; i < password.length - 2; i++) {
        if (password[i] === password[i + 1] && password[i] === password[i + 2]) {
            steps++;
            i += 2; 
        }
    }


    return Math.max(steps, 6 - password.length);
}


module.exports = { isStrong, minStepsToMakeStrong };

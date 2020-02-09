export function checkUsername(username: string) {
  if (username.length > 20 || username.length < 3) {
    return { helperText: "Username need to have between 3 and 20 caracteres.", state: false };
  }
  return { helperText: "", state: true };
}

export function checkEmail(email: string) {
  const reggex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValidate = reggex.test(email);
  if (!isValidate) {
    return { helperText: "Email not respect email verification.", state: false };
  }
  return { helperText: "", state: true };
}

export function checkPassword(password: string) {
  const reggex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  const isValidate = reggex.test(password);

  if (!isValidate) {
    return {
      helperText:
        "Passowrd need to have : 1 uppercase and lowercase letter, 1 number, 8 caractères.",
      state: false
    };
  }
  return { helperText: "", state: true };
}

export function checkConfirmPassword(password: string, confirmPassword: string) {
  if (password !== confirmPassword) {
    return { helperText: "Confirm password doesn't match with password.", state: false };
  }
  return { helperText: "", state: true };
}

// The `ts-ignore` comments here are necessary because we're importing this file inside the `astro:components`
// virtual module's types, which means that `tsc` will try to resolve these imports. Don't mind the editor errors.
// @ts-ignore
export { default as SignInButton } from './SignInButton.astro';
// @ts-ignore
export { default as SignUpButton } from './SignUpButton.astro';
// @ts-ignore
export { default as SignOutButton } from './SignOutButton.astro';

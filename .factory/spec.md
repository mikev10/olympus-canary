# slugify

Add `slugify(text: string): string`, exported from `src/index.ts`, that turns
arbitrary text into a URL slug:

1. Letters with diacritics lose them: `é` becomes `e`, `ñ` becomes `n`
   (Unicode NFKD, then combining marks removed).
2. The result is lower case.
3. Every run of characters that is not `a`–`z` or `0`–`9` becomes one `-`.
4. No `-` at the start or the end.
5. Text with no letter or digit gives the empty string.

The implementation goes in `src/slugify.ts`. Nothing outside `src/` changes.
The acceptance test is `test/slugify.test.ts`; it is locked and is not edited.

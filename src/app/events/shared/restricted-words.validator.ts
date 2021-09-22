import { AbstractControl, FormControl } from '@angular/forms';

// CUSTOM VALIDATOR
export function restrictedWords(words: any) {
  return (control: AbstractControl): { [key: string]: any } => {
    // If words to restrict, return nothing
    if (!words) return {};

    // Map through restricted words and find if form field contains them, return those words if so
    var invalidWords = words
      .map((w: string) => (control.value.includes(w) ? w : null))
      .filter((w: string) => w != null);

    // Join words together to be outputted to user
    return invalidWords && invalidWords.length > 0
      ? { restrictedWords: invalidWords.join(', ') }
      : {};
  };
}

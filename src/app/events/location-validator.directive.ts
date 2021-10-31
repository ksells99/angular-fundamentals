import { Directive } from '@angular/core';
import { FormGroup, Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[validateLocation]',
  // Add this to NG_VALIDATORS list
  providers: [
    { provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true },
  ],
})
export class LocationValidator implements Validator {
  validate(formGroup: FormGroup): { [key: string]: any } {
    const addressControl = formGroup.controls['address'];
    const cityControl = formGroup.controls['city'];
    const countryControl = formGroup.controls['country'];
    // Online url is a sibling to location so need to go up to root
    const onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];

    // If either location OR online URL present, return null as validation has passed
    if (
      (addressControl &&
        addressControl.value &&
        cityControl &&
        cityControl.value &&
        countryControl &&
        countryControl.value) ||
      (onlineUrlControl && onlineUrlControl.value)
    ) {
      return null as any;
      // Otherwise return false
    } else {
      return { validateLocation: false };
    }
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg/keg.model';

@Pipe({
  name: 'fullness',
  pure: false
})
export class FullnessPipe implements PipeTransform {

  transform(kegs: Keg[]) {
    return kegs.filter(function(keg){
      return Number(keg.ounces) > 0;
    });
  }

}

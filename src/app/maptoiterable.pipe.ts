import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maptoiterable'
})
export class MaptoiterablePipe implements PipeTransform {

  transform(map: {}, args: any[] = null): any {
    if (!map)
      return null;
    return Object.keys(map)
      .map((key) => ({'key': key, 'value': map[key]}));
  }

}

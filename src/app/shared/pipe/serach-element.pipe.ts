import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serachElement'
})
export class SerachElementPipe implements PipeTransform {

  transform(value: unknown, searchInput: string): unknown {

    // console.log(value.data);

    // if (!searchInput) {
    //   console.log('empty');

    //   return valuez

    // }

    // if (!value) {
    //   return value
    // }


    // let filterArray = value.data.filter(e => {
    //   return e.name.toLowerCase().startsWith(searchInput.toLowerCase())
    // })

    // console.log(filterArray);




    return value

  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: any[], ...args: any[]): any {
    if(values == null){
      console.log("no ha cargado a un")
      return
    }else{
      console.log("ya cargo")
      return  values.filter(item => item.type == args);
    }
  }

}

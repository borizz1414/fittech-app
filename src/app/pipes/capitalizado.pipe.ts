import { Pipe, PipeTransform } from '@angular/core';
/*
 * Capitalize the first letter of the string
 * Takes a string as a value.
 * Usage:
 *  value | capitalizefirst
 * Example:
 *  // value.name = daniel
 *  {{ value.name | capitalizefirst  }}
 *  fromats to: Daniel
*/
@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {
  transform(value: string, args: any[]): string {

    if (value === null || value === undefined) return 'Hubo un error con la conexion';
    return value.charAt(0).toUpperCase() + value.slice(1);

  }
}
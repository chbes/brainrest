import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'leftPad'
})
export class LeftPadPipe implements PipeTransform {

  transform(input: any, length: number = 0, character: string = ' '): string {

    input = input.toString();

    let pad = '';

    for (let i = 0; i < length - input.length; i++) {
      pad += character;
    }

    return pad + input;
  }

}

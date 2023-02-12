import {Pipe, PipeTransform} from "@angular/core";

@Pipe(
    {
        name: 'customPipe'
    }
)
export class ConvertToDash implements PipeTransform {
    transform(value: string, character: string): string {
        return value.replace(character, '-');
    }
}

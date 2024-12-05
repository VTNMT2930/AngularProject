import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'upperCasePipe',
    standalone: true,
})
export class upperCasePipe implements PipeTransform {
    transform(value: string) {
        return value.toUpperCase();
    }
}
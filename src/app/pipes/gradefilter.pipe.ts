import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gradefilter',
})
export class GradefilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const grade1 = args[0];
    const grade2 = args[1];
    const filteredStudents = value.filter((student: any) => {
      return student.grade === grade1 || student.grade === grade2;
    });
    return filteredStudents;
  }

}

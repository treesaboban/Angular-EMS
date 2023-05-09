import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform
{
  // allEmployee-array,searchKey-diya,propName-name
  transform(allEmployee:any= [], searchKey: string,propName:string): any[] 
  {
    const result:any=[] //transform output
    if(!allEmployee||searchKey==''||propName=='')
    {
        return allEmployee
    }
    //searching
    allEmployee.forEach((employee:any) => {
      if(employee[propName].trim().toLowerCase().includes(searchKey.toLowerCase()))
      {
       result.push(employee)
      }
    });
    return result;
  }

}

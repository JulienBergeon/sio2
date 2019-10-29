import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  /*
    Retourne un tableau d'élément du même type
  */
 paginateElements<T>(elements: T[], paginator: PageEvent): T[] {
  return elements.filter((element, index) => {//index est l'indice de l'elem
    const start = paginator.pageIndex * paginator.pageSize; //On construit l'indice de départ.
    const end = start + paginator.pageSize - 1; // On construit l'indice de fin.
    return index >= start && index <= end; // On conserve que les éléments qui sont compris entre les indices de départ et de fin.
  });
}
}

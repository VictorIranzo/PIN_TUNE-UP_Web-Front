import {Injectable} from '@angular/core';

@Injectable()
export class FilterService {
  filter(uts, filtro) {
    let filteredUts = uts.filter(
      (ut) => {
        let isActivity = filtro.IdActividad === 'ALL'|| ut.IdActividad === filtro.IdActividad;
        let isAgente = filtro.IdAgente === 'ALL' || ut.IdAgente === filtro.IdAgente || ut.IdAgente === null;
        let isProducto = filtro.IdProducto === 'ALL' || ut.IdProducto === filtro.IdProducto;
        let isVersion = filtro.IdVersion === 'ALL' || ut.IdVersion === filtro.IdVersion;
        let isProyecto = filtro.IdProyecto === 'ALL' || ut.IdProyecto === filtro.IdProyecto;
        return isActivity && isAgente && isProducto && isVersion && isProyecto;
      }
    );
    return filteredUts;
  }
}

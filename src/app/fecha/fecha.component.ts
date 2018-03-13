import{ Component } from '@angular/core';

@Component({                            //Decorador
    selector: 'app-fecha',
    templateUrl: './fecha.component.html',
    styleUrls: ['./fecha.component.css'],
})   

export class FechaComponent {
    hoy:object = new Date();      // Elemento de JS que te devuelve la fecha.
}

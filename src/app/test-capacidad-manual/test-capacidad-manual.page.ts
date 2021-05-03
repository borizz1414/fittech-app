import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-capacidad-manual',
  templateUrl: './test-capacidad-manual.page.html',
  styleUrls: ['./test-capacidad-manual.page.scss'],
})
export class TestCapacidadManualPage implements OnInit {
  title: string;
  content: string;
  option: number;

  constructor(private ruta:Router) { }

  ngOnInit() {
  
  }

  test(option) {
    this.option = option;
    switch (option) {
      case 0:
            {
              this.title = 'Tu nivel es BÁSICO';
              this.content = 'Felicidades por empezar un nuevo estilo de vida con hábitos saludables, mucho esfuerzo para alcanzar el siguiente nivel.';
              this.ruta.navigateByUrl(`mensajecapacidad/0`)
            }
        break;

      case 1:
        {
          this.title = 'Tu nivel es PRINCIPIANTE';
          this.content = 'Sigue esforzándote y continua esta carrera con mucha disciplina en tu plan, estás a un nivel de tener grandes cambios';
          this.ruta.navigateByUrl(`mensajecapacidad/4`)

        }
        break;

      case 2:
        {
          this.title = 'Tu nivel es INTERMEDIO';
          this.content = 'Excelente estás a mitad de la carrera, un poco más de esfuerzo y dedicación para llegar a un nivel envidiable.';
          this.ruta.navigateByUrl(`mensajecapacidad/1`)

        }
        break;

      case 3:
        {
          this.title = 'Tu nivel es AVANZADO';
          this.content = 'No estás aquí por casualidad, muchas sesiones de entreno duro has pasado, ahora enfocate en dar tu máximo, solo así llegarás al siguiente nivel.';
          this.ruta.navigateByUrl(`mensajecapacidad/2`)
        }
        break;

        case 4:
        {
          this.title = 'Tu nivel es PRO';
          this.content = 'Estás en una minoría privilegiada, que llevan el fitness cómo estilo de vida, admiración, aplausos y solo yendo al límite podrás alcanzar un nivel insuperable.';
          this.ruta.navigateByUrl(`mensajecapacidad/3`)
        }
        break;

      default:
        break;
    }
  }

}

// this.ruta.navigateByUrl(`mensajecapacidad/${this.nivel}`)

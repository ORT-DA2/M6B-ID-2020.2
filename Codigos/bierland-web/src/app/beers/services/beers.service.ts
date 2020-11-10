import { Injectable } from '@angular/core';
import { Beer } from 'src/Models/Beer';

@Injectable({
  providedIn: 'root',
})
export class BeersService {
  beers: Beer[] = new Array();
  constructor() {
    this.beers.push(
      new Beer(
        1,
        'Scottish ALE',
        'Estilo originario de Escocia. De color ámbar profundo. Aroma dulce, maltoso con un toque de frutos secos. Dominante sabor a malta y caramelo, balanceado por el ligero amargor del lúpulo.',
        5
      )
    );
    this.beers.push(
      new Beer(
        2,
        'Sabotaje',
        'Estilo Oatmeal Stout, originario de las Islas Británicas. Color negro intenso. Espuma sumamente cremosa. Aroma a café y chocolate amargo. Cuerpo pleno y sedoso. El sabor dulce de la malta contrasta con el amargo del grano tostado y el calor del alcohol.',
        4
      )
    );
    this.beers.push(
      new Beer(
        3,
        'Brown Porter',
        'Originario de Inglaterra. De color marrón con reflejos cobrizos. Espuma cremosa. Sutil aroma a malta tostada, con notas a chocolate. Sabor maltoso y algo dulce, con marcada presencia de caramelo. Final levemente amargo.',
        2
      )
    );
    this.beers.push(
      new Beer(
        4,
        'Barbara',
        'Estilo Weizen, originario de Bavaria. Color amarillo pálido, con turbidez pronunciada, producto de la levadura especial y de no ser filtrada. Aroma a clavo de olor y banana. Sabor dulce y frutado. Muy refrescante.',
        2
      )
    );
    this.beers.push(
      new Beer(
        5,
        'Doble IPA',
        'Este estilo surge en los años 90 en EEUU, fruto de la revolución Artesanal que celebra y expresa la grandeza del lúpulo, llevando el estilo IPA al extremo. Robusta. Intensamente lupulada. Espuma abundante y persistente. En aroma y sabor se destacan las resinas y aceites esenciales del lúpulo, con notas cítricas, frutales y a pino. La base maltosa equilibra la intensidad del lúpulo y el alto contenido de alcohol, resultando en una excelente drinkability.',
        5
      )
    );
    this.beers.push(
      new Beer(
        6,
        'IPA Atomica',
        'Cerveza fuerte, estilo India Pale Ale, originario de Inglaterra. De color cobre. Espuma cremosa y persistente. Aroma cítrico y frutado. Sabor amargo balanceado por el dulzor de la malta acentuado por el proceso de decocción. Su prolongada maduración le otorga un final amargo suave no astringente.',
        3
      )
    );
    this.beers.push(
      new Beer(
        7,
        'APA Revolution',
        'Estilo American Pale Ale. De color ámbar claro, espuma blanca y voluminosa. Cuerpo medio. Sabor suave con marcados caracteres cítricos y baja maltosidad. Aroma cítrico y tropical intenso. La combinación de su riqueza en nariz y boca, con su ligereza al tomarla la hacen ideal para disfrutarla a lo largo de una tarde de verano.',
        2
      )
    );
    this.beers.push(
      new Beer(
        8,
        'Blonde ALE',
        'Estilo de origen americano. Color dorado, aroma frutado con notas cítricas. Redondeado sabor a malta, equilibrado por el toque amargo del lúpulo, destacándose un final cítrico que la hace muy refrescante y agradable al paladar.',
        1
      )
    );
    this.beers.push(
      new Beer(
        9,
        'Cabutina',
        'Elaborada con zapallo cabutiá, variedad local que le da a la cerveza un carácter típico del lugar. Aroma a especias. Sabor delicadamente dulce con un final que nos recuerda al dulce de zapallo de nuestras abuelas.',
        3
      )
    );
  }

  getBeers(): Beer[] {
    return this.beers;
  }

  getBeerById(id: number): Beer {
    return this.beers.filter(x => x.id === id)[0];
  }
}

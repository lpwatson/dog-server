import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private async getMockData() {
    return {
      dogs: [
        'https://images.dog.ceo/breeds/bullterrier-staffordshire/n02093256_2748.jpg',
        'https://images.dog.ceo/breeds/segugio-italian/n02090722_002.jpg',
        'https://images.dog.ceo/breeds/kuvasz/n02104029_3942.jpg',
        'https://images.dog.ceo/breeds/weimaraner/n02092339_3212.jpg',
        'https://images.dog.ceo/breeds/collie-border/n02106166_1426.jpg',
        'https://images.dog.ceo/breeds/newfoundland/n02111277_7395.jpg',
        'https://images.dog.ceo/breeds/dhole/n02115913_3875.jpg',
        'https://images.dog.ceo/breeds/beagle/n02088364_13630.jpg',
        'https://images.dog.ceo/breeds/husky/n02110185_10844.jpg',
        'https://images.dog.ceo/breeds/bullterrier-staffordshire/n02093256_5808.jpg',
        'https://images.dog.ceo/breeds/malamute/n02110063_3853.jpg',
        'https://images.dog.ceo/breeds/kuvasz/n02104029_3942.jpg',
        'https://images.dog.ceo/breeds/mountain-bernese/n02107683_4473.jpg',
        'https://images.dog.ceo/breeds/clumber/n02101556_3896.jpg',
        'https://images.dog.ceo/breeds/african/n02116738_4796.jpg',
        'https://images.dog.ceo/breeds/cockapoo/Guri2.jpg',
        'https://images.dog.ceo/breeds/mountain-swiss/n02107574_1491.jpg',
        'https://images.dog.ceo/breeds/havanese/00100trPORTRAIT_00100_BURST20191222103956878_COVER.jpg',
        'https://images.dog.ceo/breeds/schipperke/n02104365_169.jpg',
        'https://images.dog.ceo/breeds/australian-shepherd/pepper2.jpg',
        'https://images.dog.ceo/breeds/labrador/Lucy.jpg',
        'https://images.dog.ceo/breeds/papillon/n02086910_6207.jpg',
        'https://images.dog.ceo/breeds/cockapoo/bubbles2.jpg',
        'https://images.dog.ceo/breeds/dhole/n02115913_3465.jpg',
        'https://images.dog.ceo/breeds/doberman/n02107142_1073.jpg',
        'https://images.dog.ceo/breeds/whippet/n02091134_18140.jpg',
        'https://images.dog.ceo/breeds/setter-irish/n02100877_1669.jpg',
        'https://images.dog.ceo/breeds/collie-border/n02106166_3296.jpg',
        'https://images.dog.ceo/breeds/bullterrier-staffordshire/n02093256_6077.jpg',
        'https://images.dog.ceo/breeds/setter-gordon/n02101006_296.jpg',
        'https://images.dog.ceo/breeds/borzoi/n02090622_6372.jpg',
        'https://images.dog.ceo/breeds/keeshond/n02112350_9780.jpg',
        'https://images.dog.ceo/breeds/mix/Kibble-min2-min.jpg',
        'https://images.dog.ceo/breeds/cockapoo/Guri5.jpg',
        'https://images.dog.ceo/breeds/shiba/shiba-8.jpg',
        'https://images.dog.ceo/breeds/papillon/n02086910_5560.jpg',
        'https://images.dog.ceo/breeds/beagle/1374053345_Milo.jpg',
        'https://images.dog.ceo/breeds/pomeranian/n02112018_6832.jpg',
        'https://images.dog.ceo/breeds/pyrenees/n02111500_882.jpg',
        'https://images.dog.ceo/breeds/doberman/n02107142_16429.jpg',
        'https://images.dog.ceo/breeds/chihuahua/n02085620_3928.jpg',
        'https://images.dog.ceo/breeds/papillon/n02086910_6682.jpg',
        'https://images.dog.ceo/breeds/clumber/n02101556_4281.jpg',
        'https://images.dog.ceo/breeds/labradoodle/Cali.jpg',
        'https://images.dog.ceo/breeds/akita/512px-Akita_inu.jpg',
        'https://images.dog.ceo/breeds/pomeranian/n02112018_3666.jpg',
        'https://images.dog.ceo/breeds/boxer/n02108089_1690.jpg',
        'https://images.dog.ceo/breeds/pekinese/n02086079_8074.jpg',
        'https://images.dog.ceo/breeds/doberman/n02107142_16217.jpg',
        'https://images.dog.ceo/breeds/pyrenees/n02111500_2522.jpg',
      ],
    };
  }

  private fiveRandomDogs(sourceArray) {
    const result = [];
    for (let i = 0; i < 5; i++) {
      result.push({
        image_url: sourceArray[Math.floor(Math.random() * sourceArray.length)],
      });
    }
    return result;
  }

  async getDogs() {
    const data = await this.getMockData();
    const dogs = this.fiveRandomDogs(data.dogs);
    return dogs;
  }
}

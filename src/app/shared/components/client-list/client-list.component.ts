import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
clientes: string[] = ["Atosa","Agrona","Alona","Arganeo","Art Decó","Astrofálicos","Ayuntamiento de San Javier","Bastilla","Bookuh","Chimi-Churri","Cinesol Audivisual","CM Flags","Colegio Casablanca","Círculo Vélico","Depilaman","Despeinados","Distorsión","Don Valium","Éxito PYME","Ecolownia","Eityr","El Balneario","Enrique Gallego","Evohe Resorts","Fooders","Gestiona 21"," Kiki","La encañizada","Asociación gastronómica","La piraña","Logo Express","Luca Baldereschi","Luna Yoga","Luxme","Mail & Boxes etc.","Manjar.Digital","Mondo tarantino","Factory","Noa","Observatorio Empleo Juvenil","OIJ","OISS","Piñero","Planes en casa","Plusplus","Pulveragro","Quierola","Quota","Racum Consulting","Rock Experience","Santa María","Santa Rosalía Resorts","Sarnur Gestíón","Sempli","Seven Lawyers","SUPPS","Tandoor Masala","Turbo Rock","TWCI","Unplott","Vael","Valover","Zai Fotografía", "Ninja delivery", "Rookfy", "Almas de Mujer", "Headon Metal", "Ostara", "HJL", "Carcelén", "B-brand", "Pio del Ramo", "Isio", "Encicle", "Hotel Villa Ceutí", "Carlos Pou", "Servigestión", "Offtopic", "David Gracía Compositor", "Juegos del Agua"].sort();
fPart?: string[];
sPart?: string[];
tPart?: string[];

constructor() { }

  ngOnInit(): void {
    this.divideInThree(this.clientes);
  }


  divideInThree(arr: string[]){
  const threePartIndex = Math.ceil(arr.length / 3);
     this.fPart = arr.splice(-threePartIndex);
     this.sPart = arr.splice(-threePartIndex);
     this.tPart= arr;
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos = [
    {
      url: "https://www.flaresenha.com/wp-content/uploads/2021/01/arrascaeta-fumando.jpg",
      description: "Arrascaeta"
    },
    {
      url: "https://s2.glbimg.com/Rv9DSjUtkg3yMPFIa1-YQswWDqg=/0x0:1024x1280/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/c/n/zGWQikQRGuScLMBFYl0A/gabigol-com-taca.jpg",
      description: "Gabigol"
    }
  ]
}

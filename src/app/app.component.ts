import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-test-valentino';

  logoSize: "small" | "medium" | "large" = "medium";


  changeSize(size: "small" | "medium" | "large", event: MouseEvent) {
    this.logoSize = size;

    console.log(event)
  }

  onNewItemEvent(event: string) {

    console.log("onNewItemEvent", event)

    if (event.includes("cliccata")) {
      alert("immagine cliccata")

    }
  }
}

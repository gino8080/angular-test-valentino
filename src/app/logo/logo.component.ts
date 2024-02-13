import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  @Input("dimensione") size: "small" | "medium" | "large" = "medium";
  @Input() mode: "color" | "gray" = "color";
  @Input() showTitle: boolean = false;

  @Output() newItemEvent = new EventEmitter<string>();

  constructor() {


  }

  ngOnInit(): void {
    this.emitEvent("mi sono costruito")
  }

  emitEvent(string: string = "") {
    this.newItemEvent.emit(string)
  }



}

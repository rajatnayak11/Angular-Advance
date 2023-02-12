import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-change-title',
  templateUrl: './change-title.component.html',
  styleUrls: ['./change-title.component.css']
})

export class ChangeTitleComponent {

  
  @Output() public childEvent = new EventEmitter();

  changeTitle(value: string)
  {
      this.childEvent.emit(value);
  }

}

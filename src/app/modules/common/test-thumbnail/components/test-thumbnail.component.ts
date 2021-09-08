import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Test } from '../../../../models/interfaces';

@Component({
  selector: 'app-test-thumbnail',
  templateUrl: './test-thumbnail.component.html',
  styleUrls: ['./test-thumbnail.component.scss']
})
export class TestThumbnailComponent {

  @Input()
  test: Partial<Test>;

  @Output()
  onThumbnailClicked = new EventEmitter();

  clicked(): void {
    this.onThumbnailClicked.emit(this.test.id);
  }
}

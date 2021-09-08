import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TestPreview } from '../../../../models/interfaces';

@Component({
  selector: 'app-test-thumbnails',
  templateUrl: './test-thumbnails.component.html',
  styleUrls: ['./test-thumbnails.component.scss']
})
export class TestThumbnailsComponent {
  @Input()
  tests: TestPreview[];

  @Output()
  onThumbnailSelected = new EventEmitter();

  thumbnailClicked(selectedId: string): void {
    this.onThumbnailSelected.emit(selectedId);
  }

}

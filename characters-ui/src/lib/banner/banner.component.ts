import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-banner',
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerComponent {
  addCharacter = output<void>();
  loadMore = output<void>();

  onAddCharacter() {
    this.addCharacter.emit();
  }

  onLoadMore() {
    this.loadMore.emit();
  }

}

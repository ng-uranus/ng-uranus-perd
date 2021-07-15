import { Clipboard } from '@angular/cdk/clipboard';
import {
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  HostListener,
  Inject,
  Input,
  Optional,
  Output,
  Renderer2,
  ViewContainerRef,
  OnDestroy,
} from '@angular/core';
import { NzTSType } from 'ng-zorro-antd/core/types';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';
import { NuI18nService, LocaleData } from 'ng-uranus-perd/i18n';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { NuClipboardCopyResult } from './common.types';

@Directive({
  // tslint:disable-next-line
  selector: '[nu-clipboard]',
  exportAs: 'nuClipboard',
})
export class NuClipboardDirective extends NzTooltipDirective implements OnDestroy {
  @Input() nuClipboardContent: string | undefined;
  @Input() nuClipboardSuccessToolTipTitle: NzTSType;
  @Input() nuClipboardTooltipPlacement = 'top';
  // tslint:disable-next-line:no-input-rename
  @Input('nzTooltipPlacement') specificPlacement = 'top';
  @Output() nuClipboardCopyResultEvent = new EventEmitter<NuClipboardCopyResult>();

  private langUnsubscribe$ = new Subject<void>();
  private locale: LocaleData = {};

  constructor(
    elementRef: ElementRef,
    hostView: ViewContainerRef,
    resolver: ComponentFactoryResolver,
    renderer: Renderer2,
    private clipboard: Clipboard,
    private nuI18nService: NuI18nService,
    @Host() @Optional() noAnimation?: NzNoAnimationDirective,
  ) {
    super(elementRef, hostView, resolver, renderer, noAnimation);
    renderer.setStyle(
      elementRef.nativeElement,
      'cursor',
      'pointer'
    );
    this.updateI18n();
  }

  @HostListener('mouseleave')
  onMouseLeaveEvent() {
    if (this.component.nzTitle) {
      this.component.nzTitle = null;
    }
  }

  @HostListener('click')
  onMouseClickEvent() {
    const supported = !!document.queryCommandSupported && !!document.queryCommandSupported('copy') && !!window;
    if (supported && this.nuClipboardContent) {
      if (this.component.nzPlacement !== this.nuClipboardTooltipPlacement) {
        this.component.nzPlacement = this.nuClipboardTooltipPlacement;
      }
      if (!this.nuClipboardSuccessToolTipTitle) {
        this.nuClipboardSuccessToolTipTitle = this.locale.copy_tip;
      }
      this.clipboard.copy(this.nuClipboardContent);
      this.component.nzTitle = this.nuClipboardSuccessToolTipTitle;
      this.component.show();
    }
    const result = { isSupported: supported, content: this.nuClipboardContent };
    this.nuClipboardCopyResultEvent.emit(result);
  }

  private updateI18n(): void {
    this.nuI18nService.change.pipe(takeUntil(this.langUnsubscribe$)).subscribe((data) => {
      this.locale = this.nuI18nService.getData('common');
    });
  }

  ngOnDestroy() {
    this.langUnsubscribe$.next();
    this.langUnsubscribe$.complete();
  }
}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeButtonComponent } from './like-button.component';
import {viewAttached} from '@angular/core/src/render3/instructions';

describe('LikeButtonComponent', () => {
  let component: LikeButtonComponent;
  let fixture: ComponentFixture<LikeButtonComponent>;
  let view;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeButtonComponent);
    component = fixture.componentInstance;
    view = fixture.elementRef.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should print 0 like by default', () => {
  //   expect(view.innerHTML).toContain('0 like');
  // });
  // it('should print 1 like', () => {
  //   component.nbLikes = 1;
  //   fixture.detectChanges();
  //   expect(view.innerHTML).toContain('1 like');
  // });
  // it('should print 2 likest', () => {
  //   component.nbLikes = 2;
  //   fixture.detectChanges();
  //   expect(view.innerHTML).toContain('2 like');
  // });
});

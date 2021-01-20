import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroListElementsComponent } from './hero-list-elements.component';

describe('HeroListElementsComponent', () => {
  let component: HeroListElementsComponent;
  let fixture: ComponentFixture<HeroListElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroListElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

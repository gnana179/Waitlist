import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicCardsComponent } from './public-cards.component';

describe('PublicCardsComponent', () => {
  let component: PublicCardsComponent;
  let fixture: ComponentFixture<PublicCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

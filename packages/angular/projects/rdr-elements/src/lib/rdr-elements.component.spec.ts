import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdrElementsComponent } from './rdr-elements.component';

describe('RdrElementsComponent', () => {
  let component: RdrElementsComponent;
  let fixture: ComponentFixture<RdrElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RdrElementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdrElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

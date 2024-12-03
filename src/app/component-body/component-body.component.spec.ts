import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentBodyComponent } from './component-body.component';

describe('ComponentBodyComponent', () => {
  let component: ComponentBodyComponent;
  let fixture: ComponentFixture<ComponentBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

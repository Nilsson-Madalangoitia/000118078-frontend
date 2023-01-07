import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarCentroComponent } from './registrar-centro.component';

describe('RegistrarCentroComponent', () => {
  let component: RegistrarCentroComponent;
  let fixture: ComponentFixture<RegistrarCentroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarCentroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

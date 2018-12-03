import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyeksiComponent } from './proyeksi.component';

describe('ProyeksiComponent', () => {
  let component: ProyeksiComponent;
  let fixture: ComponentFixture<ProyeksiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyeksiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyeksiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuruFormComponent } from './guru-form.component';

describe('GuruFormComponent', () => {
  let component: GuruFormComponent;
  let fixture: ComponentFixture<GuruFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuruFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuruFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

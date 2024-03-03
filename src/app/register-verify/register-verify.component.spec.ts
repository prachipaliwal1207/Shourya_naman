import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterVerifyComponent } from './register-verify.component';

describe('RegisterVerifyComponent', () => {
  let component: RegisterVerifyComponent;
  let fixture: ComponentFixture<RegisterVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterVerifyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

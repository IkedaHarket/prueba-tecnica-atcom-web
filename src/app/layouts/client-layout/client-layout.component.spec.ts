import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLayoutComponent } from './client-layout.component';
import { HeaderComponent } from './header/header.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ClientLayoutComponent', () => {
  let component: ClientLayoutComponent;
  let fixture: ComponentFixture<ClientLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientLayoutComponent],
      imports:[HeaderComponent, RouterTestingModule]
    });
    fixture = TestBed.createComponent(ClientLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

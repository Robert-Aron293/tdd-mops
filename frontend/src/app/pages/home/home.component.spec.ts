import { ComponentFixture, TestBed } from '@angular/core/testing';
import Utils from 'src/app/utils';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close "need to authenticate" pop-up', () => {
    const hireButton = compiled.querySelector(
      '#home #hirebtn .btn'
    ) as HTMLButtonElement;
    expect(hireButton?.textContent).toContain('Hire Handyman');
    hireButton.click();
    expect(
      (compiled.querySelector('.overlay') as HTMLDivElement)?.style.visibility
    ).toBe('');
    expect(compiled.querySelector('.overlay .popup h2')?.textContent).toContain(
      'You need to authenticate in order to proceed!'
    );
    component.closePopup();
    fixture.detectChanges();
    expect(
      (compiled.querySelector('.overlay') as HTMLDivElement)?.style.visibility
    ).toBe('hidden');
  });

  it('should jwt token be parsed correctly', () => {
    const dummyJwt =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    expect(Utils.getInstance().parseJwt(dummyJwt)).toEqual(
      Object({ sub: '1234567890', name: 'John Doe', iat: 1516239022 })
    );
  });

  it('should parse null token', () => {
    expect(Utils.getInstance().parseJwt(null)).toBe(null);
  });

  it('should parse undefined token', () => {
    expect(Utils.getInstance().parseJwt(undefined)).toBe(null);
  });

  it('test hire', () => {
    component.hire();
  });

  it('test earnMoney', () => {
    component.earnMoney();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUtilitiesComponent } from './page-utilities.component';

describe('PageUtilitiesComponent', () => {
  let component: PageUtilitiesComponent;
  let fixture: ComponentFixture<PageUtilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageUtilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUtilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

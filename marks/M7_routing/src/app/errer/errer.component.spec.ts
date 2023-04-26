import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrerComponent } from './errer.component';

describe('ErrerComponent', () => {
  let component: ErrerComponent;
  let fixture: ComponentFixture<ErrerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

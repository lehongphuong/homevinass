import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCompleComponent } from './project-comple.component';

describe('ProjectCompleComponent', () => {
  let component: ProjectCompleComponent;
  let fixture: ComponentFixture<ProjectCompleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCompleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCompleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboratorAboutComponent } from './collaborator-about.component';

describe('CollaboratorAboutComponent', () => {
  let component: CollaboratorAboutComponent;
  let fixture: ComponentFixture<CollaboratorAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollaboratorAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollaboratorAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

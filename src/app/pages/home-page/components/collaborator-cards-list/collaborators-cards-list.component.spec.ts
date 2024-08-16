import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboratorsCardsListComponent } from './collaborators-cards-list.component';

describe('WorkersCardsListComponent', () => {
  let component: CollaboratorsCardsListComponent;
  let fixture: ComponentFixture<CollaboratorsCardsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollaboratorsCardsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollaboratorsCardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

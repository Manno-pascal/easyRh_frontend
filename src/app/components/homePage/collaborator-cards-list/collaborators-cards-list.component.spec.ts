import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersCardsListComponent } from './collaborators-cards-list.component';

describe('WorkersCardsListComponent', () => {
  let component: WorkersCardsListComponent;
  let fixture: ComponentFixture<WorkersCardsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkersCardsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkersCardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

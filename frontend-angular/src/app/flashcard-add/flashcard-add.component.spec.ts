import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardAddComponent } from './flashcard-add.component';

describe('FlashcardAddComponent', () => {
  let component: FlashcardAddComponent;
  let fixture: ComponentFixture<FlashcardAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlashcardAddComponent]
    });
    fixture = TestBed.createComponent(FlashcardAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

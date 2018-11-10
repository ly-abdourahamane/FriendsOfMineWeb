import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurNewComponent } from './utilisateur-new.component';

describe('UtilisateurNewComponent', () => {
  let component: UtilisateurNewComponent;
  let fixture: ComponentFixture<UtilisateurNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilisateurNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilisateurNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

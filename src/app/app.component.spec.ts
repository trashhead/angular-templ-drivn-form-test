import { MaterialModule } from './app.module';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
describe('AppComponent', () => {
  let fixture;
  let component;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        FormsModule,
        MaterialModule,
        NoopAnimationsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('This one does not work', () => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      let component = fixture.componentInstance;
      expect(component.form.invalid).toBeTruthy();
      component.myobject.value = "ABC";
      expect(component.form.valid).toBeTruthy();

    });
  });

  it('This one works', (done) => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      let component = fixture.componentInstance;
      expect(component.form.invalid).toBeTruthy();
      component.myobject.value = "ABC"; 
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(component.form.valid).toBe(true);
        done();
      })
    });
  });


});

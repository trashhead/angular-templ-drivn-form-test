import { MaterialModule } from './app.module';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports:[
        FormsModule,
        MaterialModule,
        NoopAnimationsModule
      ]
    }).compileComponents();
  }));
  it('should create the app', () => {
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
});

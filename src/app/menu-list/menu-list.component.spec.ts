import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { CardModule } from 'primeng-lts/card';
import { MenuService } from '../menu.service';

import { MenuListComponent } from './menu-list.component';

describe('MenuListComponent', () => {
  let component: MenuListComponent;
  let fixture: ComponentFixture<MenuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuListComponent ],
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        CardModule
      ],
      providers: [
        {
          provide: MenuService,
          useValue: {
            getGloriaMenu: () => {
              return {
                currency: 'test',
                categories: [],
              }
            }
          }
        }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MenuListComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Menu');
  });
});

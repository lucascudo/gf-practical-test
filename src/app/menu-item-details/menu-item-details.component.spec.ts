import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { CardModule } from 'primeng-lts/card';
import { ListboxModule } from 'primeng-lts/listbox';
import { MenuModule } from 'primeng-lts/menu';
import { MenuService } from '../menu.service';

import { MenuItemDetailsComponent } from './menu-item-details.component';

describe('MenuItemDetailsComponent', () => {
  let component: MenuItemDetailsComponent;
  let fixture: ComponentFixture<MenuItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuItemDetailsComponent ],
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        MenuModule,
        CardModule,
        ListboxModule,
        FormsModule,
      ],
      providers: [
        {
          provide: MenuService,
          useValue: {
            getCurrency: () => 'test',
            getItemById: () => {},
            getExtrasByItemId: () => [],
          }
        },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

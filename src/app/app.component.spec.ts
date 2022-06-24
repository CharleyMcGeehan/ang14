import { BankFixture } from 'cypress/bank.fixture';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  const bank = BankFixture.getDefault();

  beforeEach(() => {
    component = new AppComponent();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});

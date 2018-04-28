import { AngularReservacionesVuelosPage } from './app.po';

describe('angular-reservaciones-vuelos App', function() {
  let page: AngularReservacionesVuelosPage;

  beforeEach(() => {
    page = new AngularReservacionesVuelosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

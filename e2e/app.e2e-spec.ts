import { ApfelweinhausPage } from './app.po';

describe('apfelweinhaus App', () => {
  let page: ApfelweinhausPage;

  beforeEach(() => {
    page = new ApfelweinhausPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

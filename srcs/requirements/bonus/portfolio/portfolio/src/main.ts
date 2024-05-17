import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { PortfolioModule } from './app/portfolio.module';


platformBrowserDynamic().bootstrapModule(PortfolioModule)
  .catch(err => console.error(err));

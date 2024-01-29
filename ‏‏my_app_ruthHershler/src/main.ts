import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.moudle';



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

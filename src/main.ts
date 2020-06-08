import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// import PubSub from '@aws-amplify/pubsub';
// import API from '@aws-amplify/api';
import Amplify from 'aws-amplify'
import awsmobile from './aws-exports';

Amplify.configure(awsmobile);
// PubSub.configure(awsmobile);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

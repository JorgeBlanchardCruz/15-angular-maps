import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
Mapboxgl.accessToken = 'pk.eyJ1Ijoicm90aGdhcmQiLCJhIjoiY20yOWNseDF4MDR0ajJrcjFvNHdlYjVsNyJ9.sgbbk4QM51uXTItTswO7LA';

if ( !navigator.geolocation ) {
  alert('Navegador no soporta la Geolocation');
  throw new Error('Navegador no soporta la Geolocation');
}



if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

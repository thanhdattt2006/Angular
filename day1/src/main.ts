import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Component1Component } from './app/component1/component1.component';
import { Component2Component } from './app/component2/component2.component';

bootstrapApplication(Component2Component, appConfig)
  .catch((err) => console.error(err));

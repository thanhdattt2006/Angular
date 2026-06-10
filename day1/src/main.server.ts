import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { Component1Component } from './app/component1/component1.component';
import { Component2Component } from './app/component2/component2.component';
import { Component3Component } from './app/component3/component3.component';
import { config } from './app/app.config.server';

const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(Component3Component, config, context);

export default bootstrap;

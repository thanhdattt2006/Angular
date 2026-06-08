import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { Component1Component } from './app/component1/component1.component';
import { config } from './app/app.config.server';

const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(Component1Component, config, context);

export default bootstrap;

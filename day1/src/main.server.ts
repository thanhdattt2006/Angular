import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { Component1Component } from './app/component1/component1.component';
import { Component2Component } from './app/component2/component2.component';
import { Component3Component } from './app/component3/component3.component';
import { config } from './app/app.config.server';
import { Component4Component } from './app/component4/component4.component';

const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(Component4Component, config, context);

export default bootstrap;

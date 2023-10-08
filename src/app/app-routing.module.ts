import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { HomeComponent } from './home/home.component';
import { HookChildComponent } from './hook-child/hook-child.component';
import { LifecycleHookComponent } from './lifecycle-hook/lifecycle-hook.component';
import { ObservableComponent } from './observable/observable.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { TrackbyComponent } from './trackby/trackby.component';
import { AnalogClockComponent } from './analog-clock/analog-clock.component';
import { ProvidersComponent } from './providers/providers.component';
import { DecoratorsComponent } from './decorators/decorators.component';
import { AdminComponent } from './modules/admin/admin.component';
import { Observable1Component } from './observable1/observable1.component';
import { DirectivesComponent } from './directive/directive.component';
import { DependenciyInjectionComponent } from './dependenciy-injection/dependenciy-injection.component';
import { TransclusionComponent } from './transclusion/transclusion.component';
import { TransclusionChildComponent } from './transclusion/transclusion-child/transclusion-child.component';
import { TestingComponent } from './testing/testing.component';
import { CookiesComponent } from './cookies/cookies.component';
import { TickrunchangeComponent } from './tickrunchange/tickrunchange.component';
import { ChangedetectionComponent } from './changedetection/changedetection.component';
import { TemplateReffComponent } from './template-reff/template-reff.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'async-pipe',
    component: AsyncPipeComponent
  },
  {
    path: 'directive',
    component: DirectivesComponent
  },
  {
    path: 'formbuilder',
    component: FormbuilderComponent
  },
  {
    path: 'template',
    component: TemplateReffComponent
  },
  {
    path: 'changeD',
    component: ChangedetectionComponent
  },
  {
    path: 'changedetecion',
    component: TickrunchangeComponent
  },
  {
    path: 'cookies',
    component: CookiesComponent
  },
  {
    path: 'testing',
    component: TestingComponent
  },
  {
    path: 'transclusion-child',
    component: TransclusionChildComponent
  },
  {
    path: 'transclusion',
    component: TransclusionComponent
  },
  {
    path: 'dependencyInj',
    component: DependenciyInjectionComponent
  },
  {
    path: 'child',
    component: ChildComponent
  },
  {
    path: 'parent',
    component: ParentComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'hook-child',
    component: HookChildComponent
  },
  {
    path: 'observable',
    component: ObservableComponent
  },
  {
    path: 'observable1',
    component: Observable1Component
  },
  {
    path: 'lifecycle-Hook',
    component: LifecycleHookComponent
  },
  {
    path: 'trackBy',
    component: TrackbyComponent
  },
  {
    path: 'analogue clock',
    component: AnalogClockComponent
  },
  {
    path: 'providers',
    component: ProvidersComponent
  },
  {
    path: 'decorators',
    component: DecoratorsComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
    component: AdminComponent
  },
  {
    path: 'viewChild',
    component: ViewchildComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { ApplicationRef, DoBootstrap, NgModule, OnDestroy, OnChanges } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildToParentComponent } from './child-to-parent/child-to-parent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { UsersComponent } from './users/users.component';
import { TopComponent } from './top/top.component';
import { MiddleComponent } from './middle/middle.component';
import { BottomComponent } from './bottom/bottom.component';
import { LifecycleHookComponent } from './lifecycle-hook/lifecycle-hook.component';
import { HookChildComponent } from './hook-child/hook-child.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ObservableComponent } from './observable/observable.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { CounterComponent } from './viewchild/counter/counter.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TrackbyComponent } from './trackby/trackby.component';
import { AnalogClockComponent } from './analog-clock/analog-clock.component';
import { Observable1Component } from './observable1/observable1.component';
import { ProvidersComponent } from './providers/providers.component';
import { ProviderService } from './services/provider.service';
import { ProviderService2 } from './services/provider.service2';
import { testservice } from './services/test.servie';
import { counterFactory } from './counterFactory';
import { DecoratorsComponent } from './decorators/decorators.component';
import { MethodDecoratorDirective } from './directives/method-decorator.directive';
import { ChildDecComponent } from './child-dec/child-dec.component';
import { DecoratorService } from './services/decorator.service';
import { Observable2Component } from './observable2/observable2.component';
import { DirectiveDirective } from './directives/directive.directive';
import { DirectivesComponent } from './directive/directive.component';
import { HoverDirective } from './directives/hover.directive';
import { HighlighterDirective } from './directives/highlighter.directive';
import { DependenciyInjectionComponent } from './dependenciy-injection/dependenciy-injection.component';
import { TransclusionComponent } from './transclusion/transclusion.component';
import { TransclusionChildComponent } from './transclusion/transclusion-child/transclusion-child.component';
import { TestingComponent } from './testing/testing.component';
import { CookiesComponent } from './cookies/cookies.component';
import { CookieService } from 'ngx-cookie-service';
import { TickrunchangeComponent } from './tickrunchange/tickrunchange.component';
import { ChangedetectionComponent } from './changedetection/changedetection.component';
import { ChangedetectionChildComponent } from './changedetection-child/changedetection-child.component';
import { TemplateReffComponent } from './template-reff/template-reff.component';
import { TemplateDirective } from './directives/template.directive';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { HttpClientModule } from '@angular/common/http';
import { TestHarnessComponent } from './test-harness/test-harness.component'


@NgModule({
  declarations: [
    AppComponent,
    AnalogClockComponent,
    ChildToParentComponent,
    TodoComponent,
    ChildComponent,
    ParentComponent,
    UsersComponent,
    TopComponent,
    MiddleComponent,
    BottomComponent,
    LifecycleHookComponent,
    HookChildComponent,
    HomeComponent,
    HeaderComponent,
    ObservableComponent,
    ViewchildComponent,
    CounterComponent,
    ReactiveFormsComponent,
    TrackbyComponent,
    Observable1Component,
    ProvidersComponent,
    DecoratorsComponent,
    MethodDecoratorDirective,
    ChildDecComponent,
    Observable2Component,
    DirectiveDirective,
    DirectivesComponent,
    HoverDirective,
    HighlighterDirective,
    DependenciyInjectionComponent,
    TransclusionComponent,
    TransclusionChildComponent,
    TestingComponent,
    CookiesComponent,
    TickrunchangeComponent,
    ChangedetectionComponent,
    ChangedetectionChildComponent,
    TemplateReffComponent,
    TemplateDirective,
    FormbuilderComponent,
    AsyncPipeComponent,
    TestHarnessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CookieService,
    DecoratorService,
    AnalogClockComponent,
    // DependenciyInjectionComponent,
    //useClass
    //{provide: ProviderService, useClass:ProviderService2},testservice,
    //useExisting
    //{provide: ProviderService2, useExisting:ProviderService},ProviderService
    //useFactory
    //{provide:ProviderService, useFactory: ()=> new ProviderService2},//No diff from use class
    {provide:ProviderService, useFactory: (_testService:testservice)=> _testService?.status? new ProviderService2() : new ProviderService(), deps:[testservice]},
    testservice,
    counterFactory
    //useValue
    //{provide:"provider", useValue:{name:"Nageshwar Sharma", about:"My Name is Nageshwar Sharma"}}
  ],
  // bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap{ 
  constructor(private comp:AnalogClockComponent){}
  ngDoBootstrap(appRef: ApplicationRef) {
    let App:any = window.innerWidth>600? AnalogClockComponent:AppComponent
    appRef.bootstrap(App)
  } 
}

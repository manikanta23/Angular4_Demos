import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { EmployeeService} from './employee-count/employee-service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { homePipe } from './home/homePipe';
import { EmployeeCountComponent } from './employee-count/employee-count.component';
import { DepartmentComponent } from './department/department.component';

import { PageNotFoundComponent } from './PageNotFoundComponent';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';


// Routes is an array of Route objects
// Each route maps a URL path to a component
// The 3rd route specifies the route to redirect to if the path
// is empty. In our case we are redirecting to /home
// The 4th route (**) is the wildcard route. This route is used
// if the requested URL doesn't match any other routes already defined
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'employees', component:  HomeComponent},
   { path: 'employees/:code', component:  EmployeeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];


// To let the router know about the routes defined above,
// pass "appRoutes" constant to forRoot(appRoutes) method
@NgModule({
  declarations: [
    AppComponent, HomeComponent, EmployeeCountComponent,
    homePipe, DepartmentComponent,PageNotFoundComponent, EmployeeComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,
     RouterModule.forRoot(appRoutes, { useHash: true })
    //RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

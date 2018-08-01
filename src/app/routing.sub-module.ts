import { Routes, RouterModule } from "@angular/router";

import { NgModule } from "@angular/core";
import { ContentComponent } from "./view/content/content.component";
import { HomeComponent } from "./view/content/home/home.component";
import { ProjectComponent } from "./view/content/project/project.component";
import { ContactComponent } from "./view/content/contact/contact.component";
import { CompanyComponent } from "./view/content/company/company.component";
const appRoutes: Routes = [
    {
        path: '', component: ContentComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'home', component: HomeComponent },
            { path: 'project', component: ProjectComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'company', component: CompanyComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
        // other imports here
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
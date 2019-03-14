import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from '../common/login/login.component'



//common components


//Recipient Components

//Support User Components


const USER_TYPE_PROVIDER: string = 'provider';
const USER_TYPE_RECIPIENT: string = 'recipient';
const USER_TYPE_HELPDESK: string = 'supportuser';


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

export const appRoutesExport: ModuleWithProviders = RouterModule.forRoot(appRoutes);
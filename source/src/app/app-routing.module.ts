import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { IndexComponent } from './components/index/index.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PlayersComponent } from './components/players/players.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentsDetailsComponent } from './components/payments-details/payments-details.component';

const routes: Routes = [
  { path: "", component: IndexComponent, data: { title: "Web Oficial CVOrotava" } },
  { path: "login", component: LoginComponent, data: { title: "CVOrotava - Log In" } },
  { path: "error...", component: NotFoundComponent, data: { title: "Vaya..." } },
  {
    path: "dashboard", component: DashboardComponent, children: [
      { path: "", component: HomeComponent, data: { title: "CVOrotava - Inicio" } },
      { path: "payments", component: PaymentComponent, data: { title: "CVOrotava - Registros" } },
      { path: "payments/:id", component: PaymentsDetailsComponent, data: { title: "CVOrotava - Detalles pago" } },
      { path: "statistics", component: StatisticsComponent, data: { title: "CVOrotava - Estadisticas" } },
      { path: "profile", component: ProfileComponent, data: { title: "CVOrotava - Perfil" } },
      { path: "players", component: PlayersComponent, data: { title: "CVOrotava - Jugadores" } },
    ]
  },
  //{ path: "**", redirectTo: "error..." }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

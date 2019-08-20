import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'page2', loadChildren: './page2/page2.module#Page2PageModule' },
  { path: 'crud-demo', loadChildren: './crud-demo/crud-demo.module#CrudDemoPageModule' },
  { path: 'lose', loadChildren: './lose/lose.module#LosePageModule' },
  { path: 'page3', loadChildren: './page3/page3.module#Page3PageModule' },
  { path: 'win', loadChildren: './win/win.module#WinPageModule' },
  { path: 'page4', loadChildren: './page4/page4.module#Page4PageModule' },
  { path: 'page5', loadChildren: './page5/page5.module#Page5PageModule' },
  { path: 'page6', loadChildren: './page6/page6.module#Page6PageModule' },
  { path: 'page7', loadChildren: './page7/page7.module#Page7PageModule' },
  { path: 'page8', loadChildren: './page8/page8.module#Page8PageModule' },
  { path: 'page9', loadChildren: './page9/page9.module#Page9PageModule' },
  { path: 'page10', loadChildren: './page10/page10.module#Page10PageModule' },
  { path: 'final', loadChildren: './final/final.module#FinalPageModule' },
  { path: 'lose-opt-out', loadChildren: './lose-opt-out/lose-opt-out.module#LoseOptOutPageModule' },
  { path: 'lose-final-stage', loadChildren: './lose-final-stage/lose-final-stage.module#LoseFinalStagePageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

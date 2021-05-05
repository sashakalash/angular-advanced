import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';


const MATERIAL_MODULES = [
	MatButtonModule,
	MatSlideToggleModule,
	MatCardModule
];

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		...MATERIAL_MODULES
	],
	exports: [
		...MATERIAL_MODULES
	]
})

export class MaterialModule {
}

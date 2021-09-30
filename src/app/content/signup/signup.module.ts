import { NgModule } from '@angular/core';
import { SignupRoutingModule } from './signup-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { SignupComponent } from './signup.component';

@NgModule({
	declarations: [SignupComponent],
	imports: [SharedModule, SignupRoutingModule],
})
export class SignupModule {}
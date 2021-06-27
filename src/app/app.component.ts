import { Component } from '@angular/core';
import { SpinnerService } from './services/spinner.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spinnerapp';
 
  showSpinner = false;

  constructor(private spinnerService: SpinnerService) {
    
      this.spinnerService.spinner$.subscribe((data: boolean) => {
        setTimeout(() => {
          this.showSpinner = data ? data : false;
        });
        console.log(this.showSpinner);
      });
  }

  ngOnInit() {
   
  }
}

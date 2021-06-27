import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/services/spinner.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Array<any> = [];
  constructor(private userService: UserService,
    private spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.spinnerService.showSpinner();
    this.userService.getUsers().subscribe(res => {
      this.users = res;
      this.spinnerService.hideSpinner();
    });
  }

}

import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user/user';
import {Router} from '@angular/router';
import {TokeService} from '../../service/toke.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  checkLogin: boolean;
  nameAccount: any;
  currentUser: User;
  accountRole: string;

  constructor(private tokenService: TokeService,
              private router: Router) {
  }

  ngOnInit(): void {
    if (this.tokenService.isLogged()) {
      this.checkLogin = true;

      this.currentUser = JSON.parse(this.tokenService.getUser());
      console.log('hehhe' + this.currentUser);

      this.nameAccount = this.currentUser.lastName;
      console.log('tên' + this.nameAccount);
      const roles = this.tokenService.getRole();

      for (let i = 0; i < roles.length; i++) {
        if (roles[i] === 'ROLE_ADMIN') {
          this.accountRole = 'ROLE_ADMIN';
        }
      }
    }
  }

  logOut() {
    this.tokenService.logOut();
    this.router.navigateByUrl('home').then(() => {
      location.reload();
    });
  }

}

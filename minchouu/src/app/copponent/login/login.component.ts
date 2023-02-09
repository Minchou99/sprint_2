import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';
import {TokeService} from '../../service/toke.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  rflogin: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private tokenService: TokeService) {
    this.getFormLogin();
  }

  ngOnInit(): void {

  }

  getFormLogin() {
    this.rflogin = this.formBuilder.group({
      username: [],
      password: [],
      rememberMe: [false]
    });
  }

  login() {
    this.authService.signIn(this.rflogin.value).subscribe(data => {
      if (data.token != undefined) {
        console.log(data);
        console.log(data.user);
        if (this.rflogin.value.rememberMe) {
          this.tokenService.rememberMe(data.token, data.account, data.roles, data.user);
        } else {
          this.tokenService.setAccountSession(data.account);
          this.tokenService.setTokenSession(data.token);
          this.tokenService.setUserSession(data.user);
          this.tokenService.setRoleSession(data.roles);
        }
        this.router.navigate(['/home']).then(() => {
          location.reload();
        });
      }
    });
  }
}

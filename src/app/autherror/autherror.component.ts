import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autherror',
  templateUrl: './autherror.component.html',
  styleUrls: ['./autherror.component.scss']
})
export class AutherrorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToHome() {
    this.router.navigate(['/home']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfiledataService } from 'src/app/profiledata.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private profiledataService: ProfiledataService, private router: Router) { }

  ngOnInit(): void {
    this.subscription()
  }

  //profil adatainak beállítása
  user: any;
  date: string = '';
  subscription() {
    this.profiledataService.behaveiorSubject$.subscribe((res: any) => {
      console.log(res)
      this.user = res[0].user;
      this.date = res[1]
    })
  }
}

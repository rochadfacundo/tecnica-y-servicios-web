import { HttpClient,  } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Team } from '../../interfaces/team';


@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent implements OnInit {
  team: Team[] = [];

  constructor(){

  }

  ngOnInit(): void {
    //this.team = teamData as Team[];
    console.log(this.team);
  }




}

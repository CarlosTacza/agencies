import { Component, OnInit } from '@angular/core';
import { Agency } from '../model/agency'
import { AgencyService } from '../agency.service';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.css']
})
export class AgenciesComponent implements OnInit {

  agencies: Agency[];

  constructor(private agencyService: AgencyService) { }

  ngOnInit(): void {
    this.getAgencies();
  }

  getAgencies(): void {
    this.agencyService.getAgencies()
      .subscribe(agencies => this.agencies = agencies);
  }

}

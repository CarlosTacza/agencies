import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Agency } from '../model/agency';
import { AgencyService }  from '../agency.service';

@Component({
  selector: 'app-agency-detail',
  templateUrl: './agency-detail.component.html',
  styleUrls: ['./agency-detail.component.css']
})
export class AgencyDetailComponent implements OnInit {

   agency: Agency;

  constructor(
    private route: ActivatedRoute,
    private heroService: AgencyService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getAgency();
  }

  getAgency(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getAgency(id)
      .subscribe(agency => this.agency = agency);
  }

  goBack(): void {
    this.location.back();
  }

  onLoad(): void {
    document.getElementById("loading").classList.add("hide");
  }

}

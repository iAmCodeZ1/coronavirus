import { Component, OnInit, OnDestroy } from "@angular/core";
import { VirusService } from 'src/app/services/virus.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: "app-index",
  templateUrl: "index.component.html",
})
export class IndexComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  focus;
  focus1;
  focus2;
  date = new Date();
  pagination = 3;
  pagination1 = 1;

  public confirmed: any;
  public deaths: any;
  public recovered: any;
  public pums: any;
  public subTitle: any;
  
  public displayedColumns = ['residence', 'confirmedCase'];
  public cases: any;

  constructor( private virusService: VirusService ) {}

  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("index-page");

    this.getCases();
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("index-page");
  }

  getCases() {
    this.virusService.getCases().subscribe((data) => {
      this.subTitle = data.title;
      this.confirmed = data.cases[0].confirmed;
      this.deaths = data.cases[0].deaths;
      this.recovered = data.cases[0].recovered;
      this.pums = data.cases[0].pums;
      this.cases = new MatTableDataSource(data.casesByResidence);
    });
  }

}

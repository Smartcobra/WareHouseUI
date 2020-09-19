import { Component, OnInit } from '@angular/core';
import { Part } from './part';
import { PartDataService } from './part-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-part-data',
  templateUrl: './part-data-view.component.html',
  styleUrls: ['./part-data.component.scss']
})
export class PartDataViewComponent implements OnInit {

  id: number;
  part: Part;

  constructor(private service: PartDataService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.part = new Part();
    this.id = this.route.snapshot.params['id'];
    console.log('from update component');
    this.service.getOnePart(this.id)
      .subscribe(data => {
        console.log(data)
        this.part = data;
      }, error => console.log(error));
  }
}



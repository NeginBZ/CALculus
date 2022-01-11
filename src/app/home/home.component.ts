import { Component, OnInit } from '@angular/core';
import { findIndex } from 'rxjs';
import { DatastoreService } from '../datastore.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pageTitle: string="Meals-List";
  dataSource = DatastoreService
  constructor(public datastore: DatastoreService) { }

  isShow = true;
 
  toggleDisplay()
    {
      this.isShow = false;
    }
    
  ngOnInit(): void {
  }

  clearHistory(){
    this.datastore.clear();
  }
  onbottonClick(index:number){
    this.datastore.removeItem(index);
  }

  url = "https://i.pinimg.com/564x/e7/b1/a9/e7b1a9f93d837091a69b9a586386305a.jpg";
  fileSelected(event: any){
    var reader = new FileReader()
    reader.readAsDataURL(event.target.files[0])
    reader.onload = (event : any) => {
      this.url = event.target.result

    }

  }

}

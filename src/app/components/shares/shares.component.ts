import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { HttpClient, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-shares',
  templateUrl: './shares.component.html',
  styleUrls: ['./shares.component.css']
})
export class SharesComponent implements OnInit {

  public message! : string;
  public title! : string;

  shareForm! : FormGroup;
  @Output() public onuploadFinished= new EventEmitter();

  constructor(private shareService:ShareService,
    private http:HttpClient,
    private router:Router) { }

  ngOnInit(): void {
    this.shareForm=new FormGroup({
      shareName: new FormControl(),
      shareType:new FormControl(),
      sharePrice:new FormControl()
    });
  }
  change()
  {
    this.title="Add Another Property";
  }

}

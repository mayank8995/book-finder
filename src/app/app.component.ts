import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-project';
  profileForm:FormGroup;
  booksInfo:any[]=[];
  showVerticalView:number=-1;
  constructor(private fb:FormBuilder){
    this.profileForm = this.fb.group({
      inputctrl:['']
    });
  }
  ngOnInit(): void {
   
    
  }
  onSubmit(){
    console.log(this.profileForm.get('inputctrl').value);
    let inputValue = this.profileForm.get('inputctrl').value;
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${inputValue}&key=AIzaSyB9RCaEIGG3q_LRAQvQ6lRivCoYLf8WAow`)
    .then((res) => res.json())
    .then((result) => {
      this.booksInfo = result;
      console.log(this.booksInfo);
    });
  }
  trackById(index, item) {
    return index;
  }
  changeView(bookid:any,index){
    this.showVerticalView = bookid;
  }
}

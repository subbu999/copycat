import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  spinModalDisplay = "none";
  thankModalDisplay = "none";
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  onFormSubmit(form: NgForm) {
    this.spinModalDisplay = "block";
    let data = {
      name: form.controls.name.value,
      email: form.controls.email.value,
      message: form.controls.message.value,
      _template: "table",
      _captcha: "false"
    }
    this.http.post("https://formsubmit.co/b.subbu504@gmail.com", data).subscribe(
      (res) => { console.log(res) },
      (err) => {
        this.spinModalDisplay = "none";
        this.thankModalDisplay = "block";
        setTimeout(function () {
          this.thankModalDisplay = "block";
        }, 2000);
      },
      () => { console.log('completed') }
    );
  }
  reload() {
    this.thankModalDisplay = 'none';
    window.location.reload();
  }

}

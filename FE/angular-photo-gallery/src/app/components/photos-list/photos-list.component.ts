import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { PhotoService } from "../../services/photo.service";
import { Photo } from "../../interfaces/Photo";
@Component({
  selector: "app-photos-list",
  templateUrl: "./photos-list.component.html",
  styleUrls: ["./photos-list.component.css"],
})
export class PhotosListComponent implements OnInit {
  photos: Photo[] = [];
  isEnabled: boolean = true;

  constructor(private photoService: PhotoService, private router: Router) { }

  ngOnInit() {
    this.photoService.getPhotos().subscribe(
      (res) => {
        this.photos = res;
      },
      (err) => console.log(err)
    );
  }

  selectedCard(id: string) {
    this.router.navigate(["/photos", id]);
  }

  changeStyle() {
    let setProp = '--td-background-color'
    const tds = document.querySelectorAll('div');
    if (this.isEnabled) {
      tds.forEach((td) => {
        td.style.setProperty(setProp, '#ffff00');
      })
      this.isEnabled = false
    }
    else {
      tds.forEach((td) => {
        td.style.setProperty(setProp, '#333');
        this.isEnabled = true
      })
    }
    console.log(this.isEnabled)
  };
}

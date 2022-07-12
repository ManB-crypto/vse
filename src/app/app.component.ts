import { Component ,OnInit} from '@angular/core';
import { PostService } from './services/post.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts:any;
  searchedKeyword: string = "";
  constructor(private service:PostService) {}
  p:number =1;
  ngOnInit() {
      this.service.getPosts()
        .subscribe(response => {
          this.posts = response;
        });
  }
}
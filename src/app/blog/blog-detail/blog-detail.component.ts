import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  blogId: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.blogId = this.route.snapshot.paramMap.get('id') || '1';
  }
}

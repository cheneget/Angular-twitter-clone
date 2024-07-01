import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Comment } from '../../Models/commnets';
import { TwitterServiceService } from '../../Services/twitter-service.service';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']  // Corrected to styleUrls to include the CSS file
})
export class CommentsComponent implements OnInit {
  @Input() postId!: number;
  comments: Comment[] = [];

  constructor(private twitterService: TwitterServiceService) {}

  ngOnInit(): void {
    if (this.postId) {
      this.twitterService.getComments(this.postId).subscribe(comments => {
        this.comments = comments;
      });
    }
  }
}

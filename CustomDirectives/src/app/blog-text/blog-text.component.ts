import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DirectiveDirective } from '../Directive/directive.directive';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blog-text',
  standalone: true,
  imports: [DirectiveDirective,CommonModule,RouterOutlet],
  templateUrl: './blog-text.component.html',
  styleUrl: './blog-text.component.scss'
})
export class BlogTextComponent {
    public showDetails=false;
    
    show(){
      this.showDetails=true;
    }
}

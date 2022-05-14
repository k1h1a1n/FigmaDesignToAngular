import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

navigateblog(){
  this.router.navigateByUrl('blog');
}


  // col_Selected(){
  //   var collection = document.querySelector<HTMLElement>('.collection')!;
  //   collection.style.opacity = '1'; 
  // }
  // col_Left(){
  //   var collection = document.querySelector<HTMLElement>('.collection')!;
  //     collection.style.opacity = '0.6';
  //     collection.style.textDecoration = '';
  // }        
  
  // about_Selected(){
  //   var about = document.querySelector<HTMLElement>('.about')!;
  //   about.style.opacity = '1';
  // }
  // about_Left(){
  //   var about = document.querySelector<HTMLElement>('.about')!;
  //   about.style.opacity = '0.6';
  // }
  
  // shop_Selected(){
  //   var shop = document.querySelector<HTMLElement>('.shop')!;
  //   shop.style.opacity = '1';
  // }
  // shop_Left(){
  //   var shop = document.querySelector<HTMLElement>('.shop')!;
  //   shop.style.opacity = '0.6';
  // }
  
  // blog_Selected(){
  //   var blog = document.querySelector<HTMLElement>('.blog')!;
  //   blog.style.opacity = '1';
  // }
  // blog_Left(){
  //   var blog = document.querySelector<HTMLElement>('.blog')!;
  //   blog.style.opacity = '0.6';  
  // }
  
  // review_Selected(){
  //   var review = document.querySelector<HTMLElement>('.review')!;
  //   review.style.opacity = '1';
  // }
  // review_Left(){
  //   var review = document.querySelector<HTMLElement>('.review')!;
  //   review.style.opacity = '0.6';  
  // }


}

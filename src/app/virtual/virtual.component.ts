import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  @ViewChild( CdkVirtualScrollViewport ) viewport: CdkVirtualScrollViewport;

  personas = Array(1000).fill(0);

  constructor() { }

  ngOnInit(): void {
  }

  final(){

    this.viewport.scrollToIndex( this.personas.length );
    
  }

  inicio(){

    this.viewport.scrollToIndex( 0 );
    
  }

  mitad(){

    this.viewport.scrollToIndex( this.personas.length/2 );
    
  }


}

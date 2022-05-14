import { Component, OnInit } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users = JSON.parse(localStorage.getItem('user5') || '[]');


  constructor() { }

  ngOnInit(): void {
  }
  delete(i:number): void {
    this.users.splice(i, 1);
    localStorage.setItem
  ('user4', JSON.stringify(this.users))
  }
}

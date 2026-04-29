import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'Food App Menu';
  
  // The list of food items
  menuList: string[] = ['Burger', 'Pizza', 'Pasta'];
  
  // Variable for the input field
  newItem: string = '';

  // Function to add an item
  addItem() {
    if (this.newItem.trim()) {
      this.menuList.push(this.newItem);
      this.newItem = ''; // Clear input after adding
    }
  }

  // Function to delete an item
  deleteMenu(index: number) {
    this.menuList.splice(index, 1);
  }
}

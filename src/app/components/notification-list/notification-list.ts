import { Component } from '@angular/core';

@Component({
  selector: 'app-notification-list',
  imports: [],
  templateUrl: './notification-list.html',
  styleUrl: './notification-list.css',
})
export class NotificationList {
  showNotifications: boolean = false;
  show() {
    this.showNotifications = !this.showNotifications;
  }
}

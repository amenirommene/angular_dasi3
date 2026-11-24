import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FriendsList } from './components/friends-list/friends-list';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { NavBar } from './components/nav-bar/nav-bar';
import { ProfileUser } from './components/profile-user/profile-user';
import { NotificationList } from './components/notification-list/notification-list';
import { ConferenceList } from './components/conference-list/conference-list';
@Component({
  selector: 'app-root',
  imports: [Header,Footer,NavBar,ProfileUser,FriendsList,NotificationList,ConferenceList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularDAS_I3');
}

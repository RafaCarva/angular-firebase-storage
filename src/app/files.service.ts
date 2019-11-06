import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private storage: AngularFireStorage) { }

  uploadFile(f: File) {
    let path = `myfiles/${f.name}`;
    let task = this.storage.upload(path, f);
    task.snapshotChanges()
      .subscribe((s) => console.log(s));
  }
}

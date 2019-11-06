import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.css']
})
export class DropzoneComponent implements OnInit {

  isDragginOver = false;
  @Output() droppedFiles = new EventEmitter<FileList>();

  constructor() { }

  ngOnInit() {
  }

  onDragOverEvent(event: DragEvent) {
    event.preventDefault();
    this.isDragginOver = true;
  }

  onDragLeaveEvent(event: DragEvent) {
    event.preventDefault();
    this.isDragginOver = false;
  }

  onDropEvent(event: DragEvent) {
    event.preventDefault();
    this.droppedFiles.emit(event.dataTransfer.files);
  }
}

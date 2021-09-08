import { Component, Inject, OnInit } from '@angular/core';
import { FooterUtils } from '../utils/footer.utils';
import { FooterLinkColumn } from '../../../../models/interfaces';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerLinkColumns: FooterLinkColumn[];

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.footerLinkColumns = FooterUtils.footerLinkColumns;
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { DropdownModule } from 'primeng/dropdown';
@Component({
  selector: 'app-ring-size',
  templateUrl: './ring-size.component.html',
  styleUrls: ['./ring-size.component.scss'],
  standalone: true,
  imports: [AccordionModule, CommonModule, DropdownModule],
})
export class RingSizeComponent implements OnInit {
  items: any;
  activeIndex: number = 0;
  sizes: any;

  rengions: any[] = [
    { label: 'US', value: 'S' },
    { label: 'EU', value: 'EU_Size' },
  ];
  selectedRengionValue: string = 'S';
  constructor() {}

  ngOnInit(): void {
    this.items = {
      label: 'General',
      icon: 'pi pi-fw pi-info-circle',
      questions: [
        {
          Q: 'HOW DO RING SIZES WORK?',
          A: `Standardized ring sizes allow you to easily shop for rings at any jeweler.
          The most popular woman's ring size is a 6 (16.4 mm diameter) and the most popular men's ring size is a 9 (19 mm diameter).
          Keep in mind, every finger is a different size and your finger sizes will likely vary between your left and right hand!`,
        },
        {
          Q: 'ARE RING SIZES UNIVERSAL?',
          A: `No, ring sizes vary all over the world. Scroll up for our U.S.
          and Canada ring sizing chart plus our easy-to-use conversion chart to find out your perfect ring size all over the world!`,
        },
        {
          Q: 'WHAT DOES A PERFECT RING SIZE FIT FEEL LIKE?',
          A: `A flawlessly fit ring will slide over the knuckle easily, but still fit snugly enough to stay on (and not spin).
          You should have to wiggle the ring slightly to get if off. If it slides off too easily you're at risk of losing your ring!
          Of course, everyone's fingers fluctuate throughout the day (and definitely throughout their lifetime),
          but a well-fit ring should see you through most regular daily (and seasonal) changes.`,
        },
      ],
    };

    this.sizes = [
      {
        S: 3,
        M: 44.9,
        stringSize: 14,
        EU_Size: 44,
      },
      {
        S: 3.5,
        M: 45.5,
        stringSize: 14.4,
        EU_Size: 45.5,
      },
      {
        S: 4,
        M: 46.8,
        stringSize: 14.8,
        EU_Size: 47,
      },
      {
        S: 4.5,
        M: 48,
        stringSize: 15.2,
        EU_Size: 48,
      },
      {
        S: 5,
        M: 49.3,
        stringSize: 15.6,
        EU_Size: 49,
      },
      {
        S: 5.5,
        M: 50.6,
        stringSize: 16,
        EU_Size: 50.5,
      },
      {
        S: 6,
        M: 51.9,
        stringSize: 16.4,
        EU_Size: 52,
      },
      {
        S: 6.5,
        M: 53.1,
        stringSize: 16.8,
        EU_Size: 53,
      },
      {
        S: 7,
        M: 54.4,
        stringSize: 17.2,
        EU_Size: 54,
      },
      {
        S: 7.5,
        M: 55.7,
        stringSize: 17.6,
        EU_Size: 55.5,
      },
      {
        S: 8,
        M: 57.0,
        stringSize: 18,
        EU_Size: 57,
      },
      {
        S: 8.5,
        M: 58.3,
        stringSize: 18.4,
        EU_Size: 58,
      },
      {
        S: 9,
        M: 59.5,
        stringSize: 18.8,
        EU_Size: 59,
      },
      {
        S: 9.5,
        M: 60.8,
        stringSize: 19.2,
        EU_Size: 60.5,
      },
      {
        S: 10,
        M: 62.1,
        stringSize: 19.6,
        EU_Size: 62,
      },
      {
        S: 10.5,
        M: 63.4,
        stringSize: 20,
        EU_Size: 63.5,
      },
      {
        S: 11,
        M: 64.6,
        stringSize: 20.4,
        EU_Size: 65,
      },
      {
        S: 11.5,
        M: 65.9,
        stringSize: 20.8,
        EU_Size: 66,
      },
      {
        S: 12,
        M: 67.2,
        stringSize: 21.2,
        EU_Size: 67.5,
      },
      {
        S: 12.5,
        M: 68.5,
        stringSize: 21.6,
        EU_Size: 69,
      },
      {
        S: 13,
        M: 69.7,
        stringSize: 22,
        EU_Size: 70,
      },
    ];
  }

  changeItem(i: number) {
    this.activeIndex = i;
  }

  onSelectedChange(event: any) {
    this.selectedRengionValue = event.value;
  }
}
